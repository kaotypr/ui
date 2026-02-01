#!/usr/bin/env node

/**
 * llms.txt Generator
 *
 * Generates a static llms.txt file listing documentation URLs for LLM consumption
 * Scans public/docs/ for generated .md files
 * Output: public/llms.txt
 */

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, "..")
const DOCS_DIR = path.join(ROOT_DIR, "public/docs")
const OUTPUT_FILE = path.join(ROOT_DIR, "public/llms.txt")
const BASE_URL = "https://ui.kaotypr.site"

/**
 * Recursively scan directory for .md files
 */
async function scanForMarkdown(dir, basePath = "") {
  const files = []

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relativePath = path.join(basePath, entry.name)

      if (entry.isDirectory()) {
        files.push(...(await scanForMarkdown(fullPath, relativePath)))
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(relativePath)
      }
    }
  } catch (_err) {
    console.error("Error scanning for markdown files:", _err.message)
    // Directory doesn't exist or can't be read
  }

  return files
}

async function main() {
  console.log("Generating llms.txt...")

  // Scan for markdown files
  const mdFiles = await scanForMarkdown(DOCS_DIR)

  if (mdFiles.length === 0) {
    console.log("No .md files found in", DOCS_DIR)
    console.log("Run generate:md first to create markdown files")
    // Still create an empty llms.txt with header
  }

  // Generate URLs
  const urls = mdFiles.sort().map((file) => `${BASE_URL}/docs/${file}`)

  // Build llms.txt content
  const content = [
    "# @kaotypr/ui Documentation",
    "",
    "This file lists all available documentation for @kaotypr/ui components.",
    "These URLs point to plain markdown files suitable for LLM consumption.",
    "",
    ...urls,
    "",
  ].join("\n")

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE)
  await fs.mkdir(outputDir, { recursive: true })

  // Write llms.txt
  await fs.writeFile(OUTPUT_FILE, content, "utf-8")

  console.log(`Generated ${OUTPUT_FILE}`)
  console.log(`Listed ${urls.length} documentation URLs`)
}

main().catch((_err) => {
  console.error("Error generating llms.txt:", _err.message)
  process.exit(1)
})
