import { Button } from "@kaotypr/ui/button"
import { Field } from "@kaotypr/ui/field"
import { Input } from "@kaotypr/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
