"use client"

import { DataCombobox } from "@kaotypr/ui/data-combobox"

const countries = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Japan", value: "jp" },
  { label: "Brazil", value: "br" },
  { label: "India", value: "in" },
  { label: "Mexico", value: "mx" },
  { label: "Spain", value: "es" },
  { label: "Italy", value: "it" },
]

export default function DataComboboxWithSearch() {
  return (
    <DataCombobox
      data={countries}
      placeholder="Select a country..."
      searchPlaceholder="Search countries..."
      className="w-full max-w-xs"
    />
  )
}
