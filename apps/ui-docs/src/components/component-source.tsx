import fs from "node:fs/promises"
import path from "node:path"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import type * as React from "react"
import { ExamplesIndex } from "@/examples/__index__"

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

interface ComponentSourceResult {
  element: React.ReactNode
  rawSource: string
}

export async function getComponentSource(name: string): Promise<ComponentSourceResult> {
  let entry: any = null
  for (const group in ExamplesIndex) {
    if (ExamplesIndex[group][name]) {
      entry = ExamplesIndex[group][name]
      break
    }
  }

  if (!entry) {
    return {
      element: <div className="text-red-500">Example not found: {name}</div>,
      rawSource: "",
    }
  }

  let content = ""
  try {
    // Try to resolve path relative to process.cwd()
    // entry.filePath is "src/examples/..."
    const filePath = path.join(process.cwd(), entry.filePath)
    content = await fs.readFile(filePath, "utf-8")
  } catch (_err) {
    try {
      // Fallback for monorepo structure if cwd is root
      const workspacePath = path.join(process.cwd(), "apps/ui-docs", entry.filePath)
      content = await fs.readFile(workspacePath, "utf-8")
    } catch (_e) {
      return {
        element: <div className="text-red-500">Source not found for {name}</div>,
        rawSource: "",
      }
    }
  }

  return {
    element: (
      <DynamicCodeBlock
        lang="tsx"
        code={content}
        codeblock={{
          allowCopy: false,
          viewportProps: {
            style: { overflow: "visible", maxHeight: "none" },
          },
        }}
      />
    ),
    rawSource: content,
  }
}

export async function ComponentSource({ name, className, ...props }: ComponentSourceProps) {
  const { element } = await getComponentSource(name)

  return (
    <div className={className} {...props}>
      {element}
    </div>
  )
}
