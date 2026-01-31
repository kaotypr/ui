import * as React from "react"
import { ExamplesIndex } from "@/examples/__index__"
import { ComponentPreviewClient } from "./component-preview-client"
import { ComponentSource } from "./component-source"

interface ComponentPreviewProps {
  name: string
  className?: string
  align?: "center" | "start" | "end"
  [key: string]: any
}

export function ComponentPreview({ name, className, align, ...props }: ComponentPreviewProps) {
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

  const PreviewComponent = entry.component

  return (
    <ComponentPreviewClient source={<ComponentSource name={name} />} className={className} align={align}>
      <React.Suspense fallback={<div className="flex items-center justify-center text-sm text-muted-foreground">Loading preview...</div>}>
        <PreviewComponent {...props} />
      </React.Suspense>
    </ComponentPreviewClient>
  )
}
