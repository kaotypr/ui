"use client"

import { DataTable } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"

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

export function DataTableBasic() {
  return <DataTable<Person> columns={columns} data={data} />
}
