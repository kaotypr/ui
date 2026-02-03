"use client"

import { Button } from "@kaotypr/ui/button"
import { ButtonGroup } from "@kaotypr/ui/button-group"
import { Input } from "@kaotypr/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kaotypr/ui/tooltip"
import { MusicNotesIcon, PlusIcon } from "@phosphor-icons/react"

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <MusicNotesIcon />
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
