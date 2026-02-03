import { ToggleGroup, ToggleGroupItem } from "@kaotypr/ui/toggle-group"
import { TextBolderIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react"

export function ToggleGroupVertical() {
  return (
    <ToggleGroup multiple orientation="vertical" spacing={1} defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <TextBolderIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <TextItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <TextUnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
