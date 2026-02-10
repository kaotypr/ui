"use client"

import { DataCombobox } from "@kaotypr/ui/data-combobox"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
]

export default function DataComboboxClearable() {
  return (
    <DataCombobox
      data={fruits}
      defaultValue="apple"
      clearable
      placeholder="Select a fruit..."
      className="w-full max-w-xs"
    />
  )
}
