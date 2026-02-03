"use client"

import { Field, FieldLabel } from "@kaotypr/ui/field"
import { Switch } from "@kaotypr/ui/switch"

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
