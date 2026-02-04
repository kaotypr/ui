"use client"

import { DataMultiCombobox } from "@kaotypr/ui/data-multi-combobox"

const countries = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Japan", value: "jp" },
  { label: "South Korea", value: "kr" },
  { label: "Brazil", value: "br" },
  { label: "India", value: "in" },
]

export default function DataMultiComboboxCollapsibleBadges() {
  return (
    <DataMultiCombobox
      data={countries}
      placeholder="Select countries..."
      defaultValue={["us", "uk", "ca", "au", "de", "fr"]}
      maxDisplayedItems={2}
      clearable
      className="w-full max-w-sm"
    />
  )
}
