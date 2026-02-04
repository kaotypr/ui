"use client"

import { AspectRatio } from "@kaotypr/ui/aspect-ratio"
import Image from "next/image"

export function AspectRatioWidescreen() {
  return (
    <AspectRatio ratio={21 / 9} className="bg-muted w-full max-w-md overflow-hidden rounded-lg">
      <Image
        src="https://avatar.vercel.sh/widescreen"
        alt="Widescreen"
        width={800}
        height={343}
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}
