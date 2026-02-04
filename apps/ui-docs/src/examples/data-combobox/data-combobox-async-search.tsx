"use client"

import { DataCombobox, type DataComboboxOption } from "@kaotypr/ui/data-combobox"
import * as React from "react"

const allUsers = [
  { label: "Alice Johnson", value: "alice" },
  { label: "Bob Smith", value: "bob" },
  { label: "Charlie Brown", value: "charlie" },
  { label: "Diana Prince", value: "diana" },
  { label: "Edward Norton", value: "edward" },
  { label: "Fiona Apple", value: "fiona" },
  { label: "George Lucas", value: "george" },
  { label: "Hannah Montana", value: "hannah" },
]

export default function DataComboboxAsyncSearch() {
  const [searchValue, setSearchValue] = React.useState("")
  const [filteredUsers, setFilteredUsers] = React.useState<DataComboboxOption[]>(allUsers)
  const [loading, setLoading] = React.useState(false)

  const handleSearch = React.useCallback((search: string) => {
    setSearchValue(search)
    setLoading(true)

    // Simulate API call with 500ms delay
    setTimeout(() => {
      const filtered = allUsers.filter((user) =>
        user.label.toLowerCase().includes(search.toLowerCase()),
      )
      setFilteredUsers(filtered)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <DataCombobox
        data={filteredUsers}
        searchValue={searchValue}
        onSearch={handleSearch}
        loading={loading}
        debounceTime={300}
        placeholder="Search for a user..."
        searchPlaceholder="Type to search..."
        className="w-full max-w-xs"
      />
      <p className="text-sm text-muted-foreground">
        Simulates API search with 300ms debounce and 500ms delay
      </p>
    </div>
  )
}
