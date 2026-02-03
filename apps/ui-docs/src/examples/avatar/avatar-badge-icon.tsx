"use client"

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@kaotypr/ui/avatar"
import { PlusIcon } from "@phosphor-icons/react"

export function AvatarBadgeIconExample() {
  return (
    <Avatar className="grayscale">
      <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  )
}
