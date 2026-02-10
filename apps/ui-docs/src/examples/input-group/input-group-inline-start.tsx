"use client"

import { Field, FieldDescription, FieldLabel } from "@kaotypr/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

export function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <MagnifyingGlassIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  )
}
