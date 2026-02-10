"use client"

import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@kaotypr/ui/item"
import { ArrowSquareOutIcon, CaretRightIcon } from "@phosphor-icons/react"

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item render={<a href="#" />}>
        <ItemContent>
          <ItemTitle>Visit our documentation</ItemTitle>
          <ItemDescription>Learn how to get started with our components.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <CaretRightIcon className="size-4" />
        </ItemActions>
      </Item>
      <Item variant="outline" render={<a href="#" target="_blank" rel="noopener noreferrer" />}>
        <ItemContent>
          <ItemTitle>External resource</ItemTitle>
          <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ArrowSquareOutIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}
