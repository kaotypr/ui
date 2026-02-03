"use client"

import Image from "next/image"
import { AspectRatio } from "@kaotypr/ui/aspect-ratio"

export function AspectRatioSquare() {
  return (
    <AspectRatio ratio={1 / 1} className="bg-muted w-full max-w-[12rem] overflow-hidden rounded-lg">
      <Image
        src="https://avatar.vercel.sh/square"
        alt="Avatar"
        width={400}
        height={400}
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}
