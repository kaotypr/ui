"use client"

import { DataMultiCombobox, type DataMultiComboboxOption } from "@kaotypr/ui/data-multi-combobox"
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

export default function DataMultiComboboxAsyncSearch() {
  const [searchValue, setSearchValue] = React.useState("")
  const [filteredUsers, setFilteredUsers] = React.useState<DataMultiComboboxOption[]>(allUsers)
  const [loading, setLoading] = React.useState(false)

  const handleSearch = React.useCallback((search: string) => {
    setSearchValue(search)
    setLoading(true)

    // Simulate async API call
    setTimeout(() => {
      const filtered = allUsers.filter((user) =>
        user.label.toLowerCase().includes(search.toLowerCase()),
      )
      setFilteredUsers(filtered)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <DataMultiCombobox
      data={filteredUsers}
      searchValue={searchValue}
      onSearch={handleSearch}
      loading={loading}
      placeholder="Search users..."
      searchPlaceholder="Type to search..."
      emptyMessage="No users found."
      debounceTime={300}
      className="w-full max-w-sm"
    />
  )
}
