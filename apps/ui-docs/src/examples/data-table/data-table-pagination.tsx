"use client"

import { DataTable, type DataTablePaginationState } from "@kaotypr/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

interface Person {
  id: string
  firstName: string
  lastName: string
  email: string
}

const data: Person[] = Array.from({ length: 25 }, (_, i) => ({
  id: String(i + 1),
  firstName: `First${i + 1}`,
  lastName: `Last${i + 1}`,
  email: `user${i + 1}@example.com`,
}))

const columns: ColumnDef<Person, unknown>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "email", header: "Email" },
]

export function DataTablePagination() {
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: 10,
    pageIndex: 0,
  })

  // Slice data based on pagination state for client-side pagination demo
  const paginatedData = data.slice(
    pagination.pageIndex * pagination.pageSize,
    (pagination.pageIndex + 1) * pagination.pageSize,
  )

  return (
    <DataTable<Person>
      columns={columns}
      data={paginatedData}
      enablePagination
      pagination={pagination}
      onPaginationChange={setPagination}
    />
  )
}
