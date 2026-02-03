import { Toggle } from "@kaotypr/ui/toggle"
import { BookmarkIcon } from "@phosphor-icons/react"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}
