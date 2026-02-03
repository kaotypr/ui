"use client"

import { Button } from "@kaotypr/ui/button"
import { ButtonGroup } from "@kaotypr/ui/button-group"
import { Input } from "@kaotypr/ui/input"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <MagnifyingGlassIcon />
      </Button>
    </ButtonGroup>
  )
}
