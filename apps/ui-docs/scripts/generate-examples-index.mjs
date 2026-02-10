#!/usr/bin/env node

/**
 * Examples Index Generator
 *
 * Scans src/examples/ directories and generates a JSON metadata index
 * Output: content/docs/_examplesIndex.json
 */

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, "..")
const EXAMPLES_DIR = path.join(ROOT_DIR, "src/examples")
const OUTPUT_FILE = path.join(ROOT_DIR, "src/examples/_examplesIndex.json")

/**
 * Extract @tags from JSDoc comments in a file
 * Looks for patterns like: /** @tags basic, interactive */
async function extractTags(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8")
    const tagMatch = content.match(/\/\*\*[\s\S]*?@tags\s+([^\n*]+)[\s\S]*?\*\//)
    // biome-ignore lint/complexity/useOptionalChain: suppress optional chain warning
    if (tagMatch && tagMatch[1]) {
      return tagMatch[1]
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    }
  } catch (_err) {
    console.error("Error reading file:", _err.message)
    // File read error, return empty tags
  }
  return []
}

/**
 * Recursively scan directory for .tsx files
 */
async function scanDirectory(dir, basePath = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.join(basePath, entry.name)

    if (entry.isDirectory()) {
      // Skip __index__ and other special directories
      if (!entry.name.startsWith("_")) {
        files.push(...(await scanDirectory(fullPath, relativePath)))
      }
    } else if (entry.isFile() && entry.name.endsWith(".tsx") && !entry.name.startsWith("_")) {
      files.push({
        fullPath,
        relativePath,
        name: path.basename(entry.name, ".tsx"),
        group: basePath || "base",
      })
    }
  }

  return files
}

async function main() {
  console.log("Generating examples index...")

  // Check if examples directory exists
  try {
    await fs.access(EXAMPLES_DIR)
  } catch {
    console.error(`Examples directory not found: ${EXAMPLES_DIR}`)
    process.exit(1)
  }

  // Scan for example files
  const files = await scanDirectory(EXAMPLES_DIR)

  // Group examples by component
  const index = {}

  for (const file of files) {
    const tags = await extractTags(file.fullPath)
    const entry = {
      name: file.name,
      filePath: `src/examples/${file.relativePath}`,
      tags,
    }

    const group = file.group
    if (!index[group]) {
      index[group] = []
    }
    index[group].push(entry)
  }

  // Sort examples within each group
  for (const group in index) {
    index[group].sort((a, b) => a.name.localeCompare(b.name))
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE)
  await fs.mkdir(outputDir, { recursive: true })

  // Write index file
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(index, null, 2), "utf-8")

  console.log(`Generated ${OUTPUT_FILE}`)
  console.log(`Found ${files.length} examples in ${Object.keys(index).length} groups`)
}

main().catch((err) => {
  console.error("Error generating examples index:", err)
  process.exit(1)
})
