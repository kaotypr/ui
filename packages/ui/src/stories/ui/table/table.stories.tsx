import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"

// Sample data types
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A responsive table component for displaying structured data.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/table). It provides styled HTML table elements that work seamlessly with [TanStack Table](https://tanstack.com/table/latest) for advanced table features like sorting, filtering, and pagination.\n\n### Component Parts\n- [TableHeader](?path=/story/ui-table-tableheader--default): The table header section containing column headers.\n- [TableBody](?path=/story/ui-table-tablebody--default): The table body section containing data rows.\n- [TableFooter](?path=/story/ui-table-tablefooter--default): The table footer section for summary information.\n- [TableRow](?path=/story/ui-table-tablerow--default): A single row in the table.\n- [TableHead](?path=/story/ui-table-tablehead--default): A header cell in the table.\n- [TableCell](?path=/story/ui-table-tablecell--default): A data cell in the table.\n- [TableCaption](?path=/story/ui-table-tablecaption--default): A caption for the table.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Additional CSS class names to apply to the table element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// Sample data
const payments: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]

const people: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 30,
    visits: 60,
    status: "Married",
    progress: 90,
  },
  {
    firstName: "jane",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "Single",
    progress: 70,
  },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent payments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV004</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,200.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic table with header, body, and footer sections. The table displays structured data in a clean, organized format.",
      },
    },
  },
}

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>Monthly sales report for Q1 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Growth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>January</TableCell>
          <TableCell>$12,000</TableCell>
          <TableCell>+5%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>February</TableCell>
          <TableCell>$15,000</TableCell>
          <TableCell>+25%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>March</TableCell>
          <TableCell>$18,000</TableCell>
          <TableCell>+20%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table with a caption providing context about the data being displayed.",
      },
    },
  },
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Widget A</TableCell>
          <TableCell>2</TableCell>
          <TableCell className="text-right">$10.00</TableCell>
          <TableCell className="text-right">$20.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Widget B</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">$15.00</TableCell>
          <TableCell className="text-right">$45.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Widget C</TableCell>
          <TableCell>1</TableCell>
          <TableCell className="text-right">$25.00</TableCell>
          <TableCell className="text-right">$25.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="font-medium">
            Grand Total
          </TableCell>
          <TableCell className="text-right font-medium">$90.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table with a footer row showing summary information like totals or averages.",
      },
    },
  },
}

export const WithTanStackTable: Story = {
  render: () => {
    const columns: ColumnDef<Payment>[] = [
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("status")}</div>
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)

          return <div className="text-right font-medium">{formatted}</div>
        },
      },
    ]

    const table = useReactTable({
      data: payments,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <div className="w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A table integrated with TanStack Table for advanced data management. This example shows basic table rendering with TanStack Table.",
      },
    },
  },
}

export const WithSorting: Story = {
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([])

    const columns: ColumnDef<Person>[] = [
      {
        accessorKey: "firstName",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              First Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "lastName",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Last Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "age",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Age
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "visits",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Visits
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "progress",
        header: () => <div className="text-right">Progress</div>,
        cell: ({ row }) => {
          return (
            <div className="text-right font-medium">
              {row.getValue("progress")}%
            </div>
          )
        },
      },
    ]

    const table = useReactTable({
      data: people,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: setSorting,
      state: {
        sorting,
      },
    })

    return (
      <div className="w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A table with sortable columns using TanStack Table. Click the column headers to sort ascending or descending.",
      },
    },
  },
}

export const WithFiltering: Story = {
  render: () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState("")

    const columns: ColumnDef<Person>[] = [
      {
        accessorKey: "firstName",
        header: "First Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("firstName")}</div>
        ),
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("lastName")}</div>
        ),
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "visits",
        header: "Visits",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "progress",
        header: () => <div className="text-right">Progress</div>,
        cell: ({ row }) => {
          return (
            <div className="text-right font-medium">
              {row.getValue("progress")}%
            </div>
          )
        },
      },
    ]

    const table = useReactTable({
      data: people,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      state: {
        columnFilters,
        globalFilter,
      },
    })

    return (
      <div className="w-full space-y-4">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by name, status, or any field..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A table with global filtering using TanStack Table. Type in the search box to filter across all columns.",
      },
    },
  },
}

export const WithPagination: Story = {
  render: () => {
    const columns: ColumnDef<Person>[] = [
      {
        accessorKey: "firstName",
        header: "First Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("firstName")}</div>
        ),
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("lastName")}</div>
        ),
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "visits",
        header: "Visits",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "progress",
        header: () => <div className="text-right">Progress</div>,
        cell: ({ row }) => {
          return (
            <div className="text-right font-medium">
              {row.getValue("progress")}%
            </div>
          )
        },
      },
    ]

    const table = useReactTable({
      data: people,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
          pageSize: 2,
        },
      },
    })

    return (
      <div className="w-full space-y-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-muted-foreground text-center">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A table with pagination using TanStack Table. Navigate through pages using the Previous and Next buttons.",
      },
    },
  },
}

export const WithAllFeatures: Story = {
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState("")

    const columns: ColumnDef<Person>[] = [
      {
        accessorKey: "firstName",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              First Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("firstName")}</div>
        ),
      },
      {
        accessorKey: "lastName",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Last Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("lastName")}</div>
        ),
      },
      {
        accessorKey: "age",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Age
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "visits",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Visits
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "progress",
        header: () => <div className="text-right">Progress</div>,
        cell: ({ row }) => {
          return (
            <div className="text-right font-medium">
              {row.getValue("progress")}%
            </div>
          )
        },
      },
    ]

    const table = useReactTable({
      data: people,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      state: {
        sorting,
        columnFilters,
        globalFilter,
      },
      initialState: {
        pagination: {
          pageSize: 3,
        },
      },
    })

    return (
      <div className="w-full space-y-4">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by name, status, or any field..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-muted-foreground text-center">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()} ({table.getFilteredRowModel().rows.length}{" "}
          total rows)
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A comprehensive table example combining sorting, filtering, and pagination features using TanStack Table. This demonstrates the full power of the table component when integrated with TanStack Table.",
      },
    },
  },
}

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            No users found.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table showing an empty state when no data is available. Use colspan to span across all columns.",
      },
    },
  },
}

export const Responsive: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table>
        <TableCaption>Responsive table that scrolls horizontally on small screens</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">001</TableCell>
            <TableCell>Wireless Mouse</TableCell>
            <TableCell>Electronics</TableCell>
            <TableCell>$29.99</TableCell>
            <TableCell>150</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">002</TableCell>
            <TableCell>Mechanical Keyboard</TableCell>
            <TableCell>Electronics</TableCell>
            <TableCell>$89.99</TableCell>
            <TableCell>75</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">003</TableCell>
            <TableCell>USB-C Cable</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$12.99</TableCell>
            <TableCell>200</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A responsive table that automatically scrolls horizontally on smaller screens. The table container handles overflow with the overflow-x-auto class.",
      },
    },
  },
}
