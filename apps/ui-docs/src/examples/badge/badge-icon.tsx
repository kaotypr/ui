"use client"

import { Badge } from "@kaotypr/ui/badge"
import { BookmarkIcon, CheckCircleIcon } from "@phosphor-icons/react"

export function BadgeWithIconLeft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <CheckCircleIcon data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}
