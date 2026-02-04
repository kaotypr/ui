"use client"

import { AspectRatio } from "@kaotypr/ui/aspect-ratio"
import Image from "next/image"

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
