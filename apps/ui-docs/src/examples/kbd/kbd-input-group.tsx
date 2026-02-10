"use client"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { Kbd } from "@kaotypr/ui/kbd"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

export default function KbdInputGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <MagnifyingGlassIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
