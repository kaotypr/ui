"use client"

import { Button } from "@kaotypr/ui/button"
import { ButtonGroup } from "@kaotypr/ui/button-group"
import { MinusIcon, PlusIcon } from "@phosphor-icons/react"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
