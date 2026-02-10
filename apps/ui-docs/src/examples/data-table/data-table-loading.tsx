"use client"

import { Button } from "@kaotypr/ui/button"
import { DataTable } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

interface Person {
  firstName: string
  lastName: string
  email: string
}

const data: Person[] = [
  { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
  { firstName: "Bob", lastName: "Johnson", email: "bob.johnson@example.com" },
]

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "email", header: "Email" },
]

export function DataTableLoading() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="space-y-4">
      <Button variant="outline" onClick={() => setLoading(!loading)}>
        Toggle Loading: {loading ? "ON" : "OFF"}
      </Button>
      <DataTable<Person> columns={columns} data={data} loading={loading} />
    </div>
  )
}
