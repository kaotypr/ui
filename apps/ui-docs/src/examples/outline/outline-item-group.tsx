"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@kaotypr/ui/item"
import { TrayIcon } from "@phosphor-icons/react"

export function OutlineItemGroup() {
  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <TrayIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 1</ItemTitle>
          <ItemDescription>First item with icon.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <TrayIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 2</ItemTitle>
          <ItemDescription>Second item with icon.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <TrayIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 3</ItemTitle>
          <ItemDescription>Third item with icon.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  )
}
