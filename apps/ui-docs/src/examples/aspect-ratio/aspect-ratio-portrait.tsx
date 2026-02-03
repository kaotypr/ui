"use client"

import Image from "next/image"
import { AspectRatio } from "@kaotypr/ui/aspect-ratio"

export function AspectRatioPortrait() {
  return (
    <AspectRatio ratio={9 / 16} className="bg-muted w-full max-w-[10rem] overflow-hidden rounded-lg">
      <Image
        src="https://avatar.vercel.sh/portrait"
        alt="Avatar"
        width={400}
        height={711}
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}
