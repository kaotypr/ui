"use client"

import { DataCombobox } from "@kaotypr/ui/data-combobox"

const frameworks = [
  { label: "Next.js", value: "nextjs" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "Gatsby", value: "gatsby" },
]

export default function DataComboboxDemo() {
  return (
    <DataCombobox
      data={frameworks}
      placeholder="Select a framework..."
      className="w-full max-w-xs"
    />
  )
}
