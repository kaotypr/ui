import { Toggle } from "@kaotypr/ui/toggle"
import { TextItalicIcon } from "@phosphor-icons/react"

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <TextItalicIcon />
      Italic
    </Toggle>
  )
}
