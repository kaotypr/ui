"use client"

import { Badge } from "@kaotypr/ui/badge"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

export function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
