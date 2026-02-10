"use client"

import { DataTable } from "@kaotypr/ui/data-table"
import type { ColumnDef, Row } from "@tanstack/react-table"
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
]

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "email", header: "Email" },
]

export function DataTableRowClick() {
  const [clicked, setClicked] = useState<Person | null>(null)
  const [doubleClicked, setDoubleClicked] = useState<Person | null>(null)

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Click or double-click on a row to see the event
      </p>
      <DataTable<Person>
        columns={columns}
        data={data}
        onRowClick={(row: Row<Person>) => setClicked(row.original)}
        onRowDoubleClick={(row: Row<Person>) => setDoubleClicked(row.original)}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-md border p-4">
          <p className="text-sm font-medium">Last Clicked:</p>
          <pre className="mt-2 text-xs text-muted-foreground">
            {clicked ? JSON.stringify(clicked, null, 2) : "None"}
          </pre>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm font-medium">Last Double-Clicked:</p>
          <pre className="mt-2 text-xs text-muted-foreground">
            {doubleClicked ? JSON.stringify(doubleClicked, null, 2) : "None"}
          </pre>
        </div>
      </div>
    </div>
  )
}
