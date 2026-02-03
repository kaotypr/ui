"use client"

import { AspectRatio } from "@kaotypr/ui/aspect-ratio"

export function AspectRatioPlaceholder() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted flex w-full max-w-sm items-center justify-center rounded-lg text-muted-foreground"
    >
      16:9 Placeholder
    </AspectRatio>
  )
}
