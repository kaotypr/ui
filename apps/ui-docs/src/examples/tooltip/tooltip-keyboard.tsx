"use client"

import { Button } from "@kaotypr/ui/button"
import { Kbd } from "@kaotypr/ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kaotypr/ui/tooltip"
import { FloppyDiskIcon } from "@phosphor-icons/react"

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
        <FloppyDiskIcon />
      </TooltipTrigger>
      <TooltipContent className="pr-1.5">
        <div className="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
