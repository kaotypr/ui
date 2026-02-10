"use client"

import { DataMultiCombobox } from "@kaotypr/ui/data-multi-combobox"

const colors = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
]

export default function DataMultiComboboxClearable() {
  return (
    <DataMultiCombobox
      data={colors}
      placeholder="Select colors..."
      defaultValue={["red", "blue", "green"]}
      clearable
      className="w-full max-w-sm"
    />
  )
}
