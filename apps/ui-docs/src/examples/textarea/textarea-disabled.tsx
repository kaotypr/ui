"use client"

import { Field, FieldLabel } from "@kaotypr/ui/field"
import { Textarea } from "@kaotypr/ui/textarea"

export function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea id="textarea-disabled" placeholder="Type your message here." disabled />
    </Field>
  )
}
