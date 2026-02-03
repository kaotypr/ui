import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { Kbd } from "@kaotypr/ui/kbd"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

export function InputGroupKbd() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <MagnifyingGlassIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
