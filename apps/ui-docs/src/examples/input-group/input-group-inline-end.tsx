import { Field, FieldDescription, FieldLabel } from "@kaotypr/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { EyeSlashIcon } from "@phosphor-icons/react"

export function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-end-input" type="password" placeholder="Enter password" />
        <InputGroupAddon align="inline-end">
          <EyeSlashIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  )
}
