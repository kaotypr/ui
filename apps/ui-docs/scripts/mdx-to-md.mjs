#!/usr/bin/env node

/**
 * MDX to Markdown Converter
 *
 * Converts MDX files from content/docs/components/ to plain markdown
 * Strips JSX components like <ComponentPreview> while preserving standard markdown
 * Output: public/docs/components/*.md
 */

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, "..")
const INPUT_DIR = path.join(ROOT_DIR, "content/docs/components")
const OUTPUT_DIR = path.join(ROOT_DIR, "public/docs/components")

/**
 * Strip JSX components from MDX content
 * Preserves frontmatter, standard markdown, and code blocks
 */
function stripJsx(content) {
  // Split frontmatter from content
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/)
  let frontmatter = ""
  let body = content

  if (frontmatterMatch) {
    frontmatter = frontmatterMatch[0]
    body = content.slice(frontmatterMatch[0].length)
  }

  // Protect code blocks by replacing them with placeholders
  const codeBlocks = []
  body = body.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match)
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`
  })

  // Remove self-closing JSX tags: <ComponentPreview name="..." />
  body = body.replace(
    /<[A-Z][a-zA-Z]*(?:\s+[a-zA-Z]+(?:=(?:"[^"]*"|'[^']*'|\{[^}]*\}))?)*\s*\/>/g,
    "",
  )

  // Remove JSX tags with content: <Component>...</Component>
  // Handle nested tags by repeatedly removing innermost tags
  let prevBody = ""
  while (prevBody !== body) {
    prevBody = body
    body = body.replace(/<([A-Z][a-zA-Z]*)[^>]*>[\s\S]*?<\/\1>/g, "")
  }

  // Remove import statements (only top-level, not inside code blocks)
  body = body.replace(/^import\s+[\s\S]*?from\s+["'][^"']+["']\s*$/gm, "")
  body = body.replace(/^import\s+["'][^"']+["']\s*$/gm, "")

  // Remove export statements (but not export default)
  body = body.replace(/^export\s+(?!default).*$/gm, "")

  // Restore code blocks
  body = body.replace(/__CODE_BLOCK_(\d+)__/g, (_, index) => codeBlocks[Number.parseInt(index, 10)])

  // Clean up multiple consecutive blank lines
  body = body.replace(/\n{3,}/g, "\n\n")

  // Trim leading whitespace from body
  body = body.trimStart()

  return frontmatter + body
}

async function main() {
  console.log("Converting MDX to Markdown...")

  // Check if input directory exists
  try {
    await fs.access(INPUT_DIR)
  } catch {
    console.error(`Input directory not found: ${INPUT_DIR}`)
    process.exit(1)
  }

  // Create output directory if it doesn't exist
  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  // Get all MDX files
  const entries = await fs.readdir(INPUT_DIR, { withFileTypes: true })
  const mdxFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".mdx"))

  if (mdxFiles.length === 0) {
    console.log("No MDX files found in", INPUT_DIR)
    return
  }

  let converted = 0

  for (const file of mdxFiles) {
    const inputPath = path.join(INPUT_DIR, file.name)
    const outputName = file.name.replace(/\.mdx$/, ".md")
    const outputPath = path.join(OUTPUT_DIR, outputName)

    try {
      const content = await fs.readFile(inputPath, "utf-8")
      const markdown = stripJsx(content)
      await fs.writeFile(outputPath, markdown, "utf-8")
      console.log(`  ${file.name} -> ${outputName}`)
      converted++
    } catch (_err) {
      console.error(`  Error converting ${file.name}:`, _err.message)
    }
  }

  console.log(`Converted ${converted} files to ${OUTPUT_DIR}`)
}

main().catch((_err) => {
  console.error("Error converting MDX to MD:", _err.message)
  process.exit(1)
})
