/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite';
import { glob } from 'glob'
import dts from 'vite-plugin-dts'
import { defineConfig } from "vite";

// https://vite.dev/config/
import path, { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { copyFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Custom plugin to copy assets
const copyAssetsPlugin = () => {
  return {
    name: 'copy-assets',
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

      const srcAssets = resolve(__dirname, 'src/assets')
      const distAssets = resolve(__dirname, 'dist/assets')

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
      tsconfigPath: 'tsconfig.build.json',
    }),
    copyAssetsPlugin(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src/'),
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@gezit/ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'date-fns',
        'lucide-react',
        'react-day-picker',
        'react-hook-form',
        'sonner',
      ],
      input: Object.fromEntries(
        glob
          .sync(['src/**/*.{ts,tsx}'], {
            ignore: [
              'src/**/*.d.ts',
              'src/**/*.test.{ts,tsx}',
              'src/stories/**/*',
              'src/**/*.stories.{ts,tsx}',
            ],
          })
          .map((file) => {
            return [
              // The name of the entry point
              // lib/nested/foo.ts becomes nested/foo
              relative('src', file.slice(0, file.length - extname(file).length)),
              // The absolute path to the entry file
              // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]
          }),
      ),
      output: {
        // This is path for CSS assets
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/css/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});