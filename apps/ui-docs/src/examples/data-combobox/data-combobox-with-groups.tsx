"use client"

import { DataCombobox } from "@kaotypr/ui/data-combobox"

const frameworks = [
  { label: "Next.js", value: "nextjs", group: "React" },
  { label: "Gatsby", value: "gatsby", group: "React" },
  { label: "Remix", value: "remix", group: "React" },
  { label: "Nuxt.js", value: "nuxtjs", group: "Vue" },
  { label: "Quasar", value: "quasar", group: "Vue" },
  { label: "SvelteKit", value: "sveltekit", group: "Svelte" },
  { label: "Elder.js", value: "elderjs", group: "Svelte" },
  { label: "Astro", value: "astro" },
  { label: "Eleventy", value: "eleventy" },
]

export default function DataComboboxWithGroups() {
  return (
    <DataCombobox
      data={frameworks}
      placeholder="Select a framework..."
      searchPlaceholder="Search frameworks..."
      className="w-full max-w-xs"
    />
  )
}
