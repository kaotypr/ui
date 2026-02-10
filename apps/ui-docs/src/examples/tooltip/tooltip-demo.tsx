"use client"

import { Button } from "@kaotypr/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kaotypr/ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
