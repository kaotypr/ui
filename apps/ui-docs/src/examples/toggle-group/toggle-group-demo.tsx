import { ToggleGroup, ToggleGroupItem } from "@kaotypr/ui/toggle-group"
import { TextBolderIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" multiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <TextBolderIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <TextItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <TextUnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
