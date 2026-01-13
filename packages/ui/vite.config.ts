/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { glob } from "glob"
import { defineConfig, type Plugin } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import { playwright } from "@vitest/browser-playwright"
import { copyFileSync, mkdirSync, readdirSync, statSync } from "node:fs"
import path, { extname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const dirname =
	typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url))

/**
 * External dependencies that should not be bundled.
 * Using patterns to catch all sub-paths (e.g., @radix-ui/react-slot/internal)
 */
const EXTERNAL_DEPS = [
	// React ecosystem
	/^react$/,
	/^react-dom$/,
	/^react\/.*$/,
	/^react-dom\/.*$/,
	// Radix UI - all packages
	/^@radix-ui\/.*/,
	// Utility libraries that consumers likely already have
	/^class-variance-authority$/,
	/^clsx$/,
	/^tailwind-merge$/,
	// Optional peer dependencies
	/^date-fns/,
	/^lucide-react$/,
	/^react-day-picker$/,
	/^react-hook-form$/,
	/^sonner$/,
]

/**
 * Custom plugin to copy static assets from src/assets to dist/assets
 */
const copyAssetsPlugin = (): Plugin => {
	return {
		name: "copy-assets",
		closeBundle: () => {
			const copyDir = (src: string, dest: string) => {
				mkdirSync(dest, { recursive: true })
				const entries = readdirSync(src, { withFileTypes: true })

				for (const entry of entries) {
					const srcPath = resolve(src, entry.name)
					const destPath = resolve(dest, entry.name)

					if (entry.isDirectory()) {
						copyDir(srcPath, destPath)
					} else {
						copyFileSync(srcPath, destPath)
					}
				}
			}

			const srcAssets = resolve(dirname, "src/assets")
			const distAssets = resolve(dirname, "dist/assets")

			if (statSync(srcAssets, { throwIfNoEntry: false })) {
				copyDir(srcAssets, distAssets)
			}
		},
	}
}

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			insertTypesEntry: true,
			tsconfigPath: "tsconfig.build.json",
			beforeWriteFile: (filePath, content) => {
				const { dir, base } = path.parse(filePath)

				// Handle .d.ts files
				if (filePath.endsWith(".d.ts")) {
					const fileNameWithoutExt = base.replace(/\.d\.ts$/, "")

					if (
						fileNameWithoutExt === "index" ||
						fileNameWithoutExt === "vite-env" ||
						filePath.includes("node_modules")
					) {
						return { filePath, content }
					}

					const newFilePath = path.join(dir, fileNameWithoutExt, "index.d.ts")

					let newContent = content
					// Update imports/exports to account for the new directory depth
					newContent = newContent.replace(
						/((?:import|export)\s+(?:[\s\S]*?from\s+)?['"])([^'"]+)(['"])/g,
						(match, prefix, modulePath, suffix) => {
							if (modulePath.startsWith(".")) {
								return `${prefix}../${modulePath}${suffix}`
							}
							return match
						},
					)

					// Update import types: import("...")
					newContent = newContent.replace(
						/(import\(['"])([^'"]+)(['"]\))/g,
						(match, prefix, modulePath, suffix) => {
							if (modulePath.startsWith(".")) {
								return `${prefix}../${modulePath}${suffix}`
							}
							return match
						},
					)

					// Update source map URL
					newContent = newContent.replace(
						/\/\/# sourceMappingURL=.+\.map$/,
						`//# sourceMappingURL=index.d.ts.map`,
					)

					return { filePath: newFilePath, content: newContent }
				}

				// Handle .d.ts.map files
				if (filePath.endsWith(".d.ts.map")) {
					const fileNameWithoutExt = base.replace(/\.d\.ts\.map$/, "")

					if (
						fileNameWithoutExt === "index" ||
						fileNameWithoutExt === "vite-env" ||
						filePath.includes("node_modules")
					) {
						return { filePath, content }
					}

					const newFilePath = path.join(dir, fileNameWithoutExt, "index.d.ts.map")

					let newContent = content
					try {
						const json = JSON.parse(content)
						if (json.file) {
							json.file = "index.d.ts"
						}
						if (json.sources && Array.isArray(json.sources)) {
							// Fix source paths - they need one more ../
							json.sources = json.sources.map((src: string) => {
								if (src.startsWith(".")) {
									return `../${src}`
								}
								return src
							})
						}
						newContent = JSON.stringify(json)
					} catch {
						console.warn("Failed to parse map file", filePath)
					}

					return { filePath: newFilePath, content: newContent }
				}

				return { filePath, content }
			},
		}),
		copyAssetsPlugin(),
	],
	resolve: {
		alias: {
			"~": resolve(dirname, "src/"),
		},
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: "chromium",
							},
						],
					},
					setupFiles: [".storybook/vitest.setup.ts"],
				},
			},
		],
	},
	build: {
		sourcemap: true,
		emptyOutDir: true,
		target: "esnext",
		lib: {
			// Note: This is overridden by rollupOptions.input below,
			// but kept for Vite's library mode detection
			entry: resolve(dirname, "src/lib/utils.ts"),
			name: "@gezit/ui",
			formats: ["es"],
		},
		rollupOptions: {
			// Use pattern matching for external dependencies
			external: (id) => EXTERNAL_DEPS.some((pattern) => pattern.test(id)),
			input: Object.fromEntries(
				glob
					.sync(["src/**/*.{ts,tsx}"], {
						ignore: [
							"src/**/*.d.ts",
							"src/**/*.test.{ts,tsx}",
							"src/stories/**/*",
							"src/**/*.stories.{ts,tsx}",
						],
					})
					.map((file) => [
						// The name of the entry point
						// src/components/ui/button.tsx becomes components/ui/button
						relative("src", file.slice(0, file.length - extname(file).length)),
						// The absolute path to the entry file
						fileURLToPath(new URL(file, import.meta.url)),
					]),
			),
			output: {
				// Shared chunks for common utilities
				chunkFileNames: "chunks/[name]-[hash].js",
				// CSS assets path
				assetFileNames: "assets/css/[name][extname]",
				// Each entry becomes a directory with index.js
				entryFileNames: "[name]/index.js",
				// Preserve export names for better debugging
				exports: "named",
				// Globals for UMD builds (if ever needed)
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
})
