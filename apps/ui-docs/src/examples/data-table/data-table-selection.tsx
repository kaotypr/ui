"use client"

import { DataTable } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

interface Person {
  id: string
  firstName: string
  lastName: string
  email: string
}

const data: Person[] = [
  { id: "1", firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { id: "2", firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
  { id: "3", firstName: "Bob", lastName: "Johnson", email: "bob.johnson@example.com" },
  { id: "4", firstName: "Alice", lastName: "Williams", email: "alice.williams@example.com" },
]

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "email", header: "Email" },
]

export function DataTableSelection() {
  const [selectedRows, setSelectedRows] = useState<Person[]>([])

  return (
    <div className="space-y-4">
      <DataTable<Person>
        columns={columns}
        data={data}
        enableRowSelection
        onRowSelectionChange={setSelectedRows}
      />
      <div className="rounded-md border p-4">
        <p className="text-sm font-medium">Selected Rows:</p>
        <pre className="mt-2 text-xs text-muted-foreground">
          {JSON.stringify(selectedRows, null, 2)}
        </pre>
      </div>
    </div>
  )
}
