"use client"

import { DataMultiCombobox } from "@kaotypr/ui/data-multi-combobox"

const technologies = [
  { label: "React", value: "react", group: "Frontend" },
  { label: "Vue", value: "vue", group: "Frontend" },
  { label: "Angular", value: "angular", group: "Frontend" },
  { label: "Svelte", value: "svelte", group: "Frontend" },
  { label: "Node.js", value: "nodejs", group: "Backend" },
  { label: "Python", value: "python", group: "Backend" },
  { label: "Go", value: "go", group: "Backend" },
  { label: "Rust", value: "rust", group: "Backend" },
  { label: "PostgreSQL", value: "postgresql", group: "Database" },
  { label: "MongoDB", value: "mongodb", group: "Database" },
  { label: "Redis", value: "redis", group: "Database" },
]

export default function DataMultiComboboxWithGroups() {
  return (
    <DataMultiCombobox
      data={technologies}
      placeholder="Select technologies..."
      className="w-full max-w-sm"
    />
  )
}
