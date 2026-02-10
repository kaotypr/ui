"use client"

import { AspectRatio } from "@kaotypr/ui/aspect-ratio"
import Image from "next/image"

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted w-full max-w-sm overflow-hidden rounded-lg">
      <Image
        src="https://avatar.vercel.sh/aspectratio"
        alt="Avatar"
        width={800}
        height={450}
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}
