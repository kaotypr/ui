#!/usr/bin/env node

/**
 * MDX to Markdown Converter
 *
 * Converts MDX files from content/docs/components/ to plain markdown
 * Replaces <ComponentPreview> with actual component source code
 * Output: public/docs/components/*.md
 */

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, "..")
const INPUT_DIR = path.join(ROOT_DIR, "content/docs/components")
const OUTPUT_DIR = path.join(ROOT_DIR, "public/docs/components")
const EXAMPLES_INDEX_PATH = path.join(ROOT_DIR, "src/examples/_examplesIndex.json")

/**
 * Load examples index and create a name -> filePath map
 */
async function loadExamplesIndex() {
  try {
    const content = await fs.readFile(EXAMPLES_INDEX_PATH, "utf-8")
    const index = JSON.parse(content)
    const nameToPath = new Map()

    for (const examples of Object.values(index)) {
      for (const example of examples) {
        nameToPath.set(example.name, path.join(ROOT_DIR, example.filePath))
      }
    }

    return nameToPath
  } catch {
    console.warn("Could not load examples index, ComponentPreview tags will be removed without replacement")
    return new Map()
  }
}

/**
 * Read example source code by name
 */
async function getExampleSource(name, examplesMap) {
  const filePath = examplesMap.get(name)
  if (!filePath) {
    return null
  }

  try {
    const content = await fs.readFile(filePath, "utf-8")
    return content.trim()
  } catch {
    return null
  }
}

/**
 * Convert MDX content to plain markdown
 * Replaces <ComponentPreview> with actual source code
 * Preserves frontmatter, standard markdown, and code blocks
 */
async function convertMdx(content, examplesMap) {
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

  // Replace <ComponentPreview name="..." /> with actual source code
  const componentPreviewRegex = /<ComponentPreview\s+name=["']([^"']+)["']\s*\/>/g
  const matches = [...body.matchAll(componentPreviewRegex)]

  for (const match of matches) {
    const [fullMatch, name] = match
    const source = await getExampleSource(name, examplesMap)

    if (source) {
      // Replace with a tsx code block containing the source
      body = body.replace(fullMatch, `\`\`\`tsx\n${source}\n\`\`\``)
    } else {
      // If no source found, just remove the tag
      body = body.replace(fullMatch, "")
    }
  }

  // Re-protect code blocks (including newly inserted ones) before JSX removal
  body = body.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match)
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`
  })

  // Remove other self-closing JSX tags (not ComponentPreview)
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

  // Load examples index for ComponentPreview replacement
  const examplesMap = await loadExamplesIndex()
  console.log(`Loaded ${examplesMap.size} example mappings`)

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
      const markdown = await convertMdx(content, examplesMap)
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
