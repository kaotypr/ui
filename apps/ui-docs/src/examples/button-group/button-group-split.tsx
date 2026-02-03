"use client"

import { Button } from "@kaotypr/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@kaotypr/ui/button-group"
import { PlusIcon } from "@phosphor-icons/react"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  )
}
