"use client"

import { DataTable } from "@kaotypr/ui/data-table"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import type { ColumnDef } from "@tanstack/react-table"

interface Person {
  firstName: string
  lastName: string
  email: string
}

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "email", header: "Email" },
]

function CustomEmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <MagnifyingGlassIcon className="h-10 w-10 text-muted-foreground" />
      <p className="text-sm font-medium">No results found</p>
      <p className="text-xs text-muted-foreground">Try adjusting your search or filter criteria</p>
    </div>
  )
}

export function DataTableEmpty() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm font-medium">Default Empty State</p>
        <DataTable<Person> columns={columns} data={[]} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Custom Empty Message</p>
        <DataTable<Person>
          columns={columns}
          data={[]}
          emptyMessage="No users found. Try a different search."
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Custom Empty Component</p>
        <DataTable<Person> columns={columns} data={[]} emptyMessage={<CustomEmptyState />} />
      </div>
    </div>
  )
}
