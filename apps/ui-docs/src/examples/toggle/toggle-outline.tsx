"use client"

import { Toggle } from "@kaotypr/ui/toggle"
import { TextBolderIcon, TextItalicIcon } from "@phosphor-icons/react"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <TextItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <TextBolderIcon />
        Bold
      </Toggle>
    </div>
  )
}
