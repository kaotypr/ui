import { Badge } from "@kaotypr/ui/badge"
import { Field, FieldLabel } from "@kaotypr/ui/field"
import { Input } from "@kaotypr/ui/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input id="input-badge" type="url" placeholder="https://api.example.com/webhook" />
    </Field>
  )
}
