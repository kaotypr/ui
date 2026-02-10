"use client"

import { DataMultiCombobox } from "@kaotypr/ui/data-multi-combobox"

const frameworks = [
  { label: "Next.js", value: "nextjs" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "Gatsby", value: "gatsby" },
]

export default function DataMultiComboboxDemo() {
  return (
    <DataMultiCombobox
      data={frameworks}
      placeholder="Select frameworks..."
      className="w-full max-w-sm"
    />
  )
}
