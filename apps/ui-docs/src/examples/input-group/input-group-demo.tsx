import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

export function InputGroupDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <MagnifyingGlassIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  )
}
