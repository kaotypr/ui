"use client"

import { DataTable } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"

interface Person {
  firstName: string
  lastName: string
  age: number
  email: string
}

const data: Person[] = [
  { firstName: "John", lastName: "Doe", age: 30, email: "john.doe@example.com" },
  { firstName: "Jane", lastName: "Smith", age: 25, email: "jane.smith@example.com" },
  { firstName: "Bob", lastName: "Johnson", age: 35, email: "bob.johnson@example.com" },
]

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "email", header: "Email" },
]

export function DataTableBordered() {
  return <DataTable<Person> columns={columns} data={data} bordered />
}
