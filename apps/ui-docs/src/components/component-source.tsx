import { ExamplesIndex } from "@/examples/__index__"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import fs from "fs/promises"
import path from "path"
import * as React from "react"

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

export async function ComponentSource({ name, className, ...props }: ComponentSourceProps) {
  let entry: any = null
  for (const group in ExamplesIndex) {
    if (ExamplesIndex[group][name]) {
      entry = ExamplesIndex[group][name]
      break
    }
  }

  if (!entry) {
    return <div className="text-red-500">Example not found: {name}</div>
  }

  let content = ""
  try {
    // Try to resolve path relative to process.cwd()
    // entry.filePath is "src/examples/..."
    const filePath = path.join(process.cwd(), entry.filePath)
    content = await fs.readFile(filePath, "utf-8")
  } catch (err) {
    try {
      // Fallback for monorepo structure if cwd is root
      const workspacePath = path.join(process.cwd(), "apps/ui-docs", entry.filePath)
      content = await fs.readFile(workspacePath, "utf-8")
    } catch (e) {
      return <div className="text-red-500">Source not found for {name}</div>
    }
  }

  return (
    <div className={className} {...props}>
      <DynamicCodeBlock lang="tsx" code={content} />
    </div>
  )
}
