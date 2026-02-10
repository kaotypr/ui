"use client"

import { DataTable } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"

interface Person {
  id: string
  firstName: string
  lastName: string
  email: string
  department: string
  location: string
  role: string
}

const data: Person[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    department: "Engineering",
    location: "New York",
    role: "Developer",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    department: "Design",
    location: "San Francisco",
    role: "Designer",
  },
  {
    id: "3",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    department: "Marketing",
    location: "Chicago",
    role: "Manager",
  },
]

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "id", header: "ID", size: 50 },
  { accessorKey: "firstName", header: "First Name", size: 120 },
  { accessorKey: "lastName", header: "Last Name", size: 120 },
  { accessorKey: "email", header: "Email", size: 200 },
  { accessorKey: "department", header: "Department", size: 150 },
  { accessorKey: "location", header: "Location", size: 150 },
  { accessorKey: "role", header: "Role", size: 120 },
]

export function DataTableColumnPinning() {
  return (
    <div className="w-[500px]">
      <DataTable<Person>
        columns={columns}
        data={data}
        columnPinning={{
          left: ["id", "firstName"],
          right: ["role"],
        }}
        enableRowSelection
        bordered
      />
    </div>
  )
}
