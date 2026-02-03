"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@kaotypr/ui/avatar"
import { Button } from "@kaotypr/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@kaotypr/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link" />}>
        Hover Here
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="text-muted-foreground mt-1 text-xs">Joined December 2021</div>
      </HoverCardContent>
    </HoverCard>
  )
}
