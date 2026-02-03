"use client"

import { DataTable, type DataTablePaginationState } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

interface Person {
  id: string
  firstName: string
  lastName: string
  email: string
  status: "active" | "inactive" | "pending"
}

const data: Person[] = [
  { id: "1", firstName: "John", lastName: "Doe", email: "john.doe@example.com", status: "active" },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    status: "active",
  },
  {
    id: "3",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    status: "inactive",
  },
  {
    id: "4",
    firstName: "Alice",
    lastName: "Williams",
    email: "alice.williams@example.com",
    status: "pending",
  },
  {
    id: "5",
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    status: "active",
  },
]

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "firstName", header: "First Name", size: 120 },
  { accessorKey: "lastName", header: "Last Name", size: 120 },
  { accessorKey: "email", header: "Email", size: 200 },
  {
    accessorKey: "status",
    header: "Status",
    size: 100,
    cell: ({ row }) => (
      <span
        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
          row.original.status === "active"
            ? "bg-green-100 text-green-700"
            : row.original.status === "inactive"
              ? "bg-gray-100 text-gray-700"
              : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
]

export function DataTableDemo() {
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: 10,
    pageIndex: 0,
  })
  const [selectedRows, setSelectedRows] = useState<Person[]>([])

  return (
    <div className="w-full space-y-4">
      <DataTable<Person>
        columns={columns}
        data={data}
        enablePagination
        pagination={pagination}
        onPaginationChange={setPagination}
        enableRowSelection
        onRowSelectionChange={setSelectedRows}
        bordered
      />
      {selectedRows.length > 0 && (
        <p className="text-sm text-muted-foreground">{selectedRows.length} row(s) selected</p>
      )}
    </div>
  )
}
