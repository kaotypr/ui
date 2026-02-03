"use client"

import { AspectRatio } from "@kaotypr/ui/aspect-ratio"

export function AspectRatioVideoEmbed() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-lg overflow-hidden rounded-lg bg-black">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video embed example"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="size-full rounded-lg"
      />
    </AspectRatio>
  )
}
