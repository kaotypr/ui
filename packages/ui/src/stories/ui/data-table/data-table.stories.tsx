import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import type { ColumnDef, Row } from "@tanstack/react-table"
import { useEffect, useState } from "react"
import {
	DataTable,
	type DataTableClassNames,
	type DataTablePaginationState,
} from "~/components/ui/data-table"
import { type Person as SWAPIPerson, fetchPeople } from "./swapi-service"

// Example data type for basic stories
interface Person {
	id: string
	firstName: string
	lastName: string
	age: number
	email: string
}

// Example data
const data: Person[] = [
	{
		id: "1",
		firstName: "John",
		lastName: "Doe",
		age: 30,
		email: "john.doe@example.com",
	},
	{
		id: "2",
		firstName: "Jane",
		lastName: "Smith",
		age: 25,
		email: "jane.smith@example.com",
	},
	{
		id: "3",
		firstName: "Bob",
		lastName: "Johnson",
		age: 35,
		email: "bob.johnson@example.com",
	},
]

// Example data with more columns for horizontal scroll
const wideData: Person[] = [
	{
		id: "1",
		firstName: "John",
		lastName: "Doe",
		age: 30,
		email: "john.doe@example.com",
	},
	{
		id: "2",
		firstName: "Jane",
		lastName: "Smith",
		age: 25,
		email: "jane.smith@example.com",
	},
	{
		id: "3",
		firstName: "Bob",
		lastName: "Johnson",
		age: 35,
		email: "bob.johnson@example.com",
	},
]

// Example columns
const columns: ColumnDef<Person, unknown>[] = [
	{
		accessorKey: "firstName",
		header: "First Name",
	},
	{
		accessorKey: "lastName",
		header: "Last Name",
	},
	{
		accessorKey: "age",
		header: "Age",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
]

// Wide columns configuration for pinning examples
const wideColumns: ColumnDef<Person, unknown>[] = [
	{
		accessorKey: "id",
		header: "ID",
		size: 50,
	},
	{
		accessorKey: "firstName",
		header: "First Name",
		size: 150,
	},
	{
		accessorKey: "lastName",
		header: "Last Name",
		size: 150,
	},
	{
		accessorKey: "age",
		header: "Age",
		size: 100,
	},
	{
		accessorKey: "email",
		header: "Email",
		size: 250,
	},
	{
		accessorKey: "status",
		header: "Status",
		size: 150,
		cell: () => "Active",
	},
	{
		accessorKey: "role",
		header: "Role",
		size: 150,
		cell: () => "User",
	},
	{
		accessorKey: "department",
		header: "Department",
		size: 200,
		cell: () => "Engineering",
	},
	{
		accessorKey: "location",
		header: "Location",
		size: 200,
		cell: () => "New York",
	},
]

// Example custom class names
const exampleClassNames: DataTableClassNames = {
	root: "custom-root-class",
	tableWrapper: "custom-wrapper-class",
	table: "custom-table-class",
	header: "custom-header-class",
	headerRow: "custom-header-row-class",
	headerCell: "custom-header-cell-class",
	body: "custom-body-class",
	row: "custom-row-class",
	cell: "custom-cell-class",
	pagination: "custom-pagination-class",
	paginationButton: "custom-pagination-button-class",
	rowsPerPageSelect: "custom-rows-per-page-select-class",
	pageInfo: "custom-page-info-class",
	noResults: "custom-no-results-class",
}

const meta = {
	title: "UI/DataTable",
	component: DataTable<Person>,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A flexible and feature-rich data table component built on top of [TanStack Table v8](https://tanstack.com/table/v8).

### Features
- Server-side pagination support
- Row selection with checkbox
- Column resizing
- Column pinning (via props)
- Row click and double-click events
- Customizable border styles
- Customizable column definitions
- Loading state with overlay
- Custom empty state message
- Extensive class name customization`,
			},
		},
	},
	argTypes: {
		columns: {
			description: "Array of column definitions using TanStack Table ColumnDef",
			control: "object",
		},
		data: {
			description: "Array of data objects to display in the table",
			control: "object",
		},
		enablePagination: {
			description: "Enable server-side pagination controls",
			control: "boolean",
			defaultValue: false,
		},
		pagination: {
			description: "Current pagination state (pageSize and pageIndex)",
			control: "object",
		},
		onPaginationChange: {
			description: "Callback fired when pagination state changes",
			control: false,
		},
		enableRowSelection: {
			description: "Enable row selection with checkboxes",
			control: "boolean",
			defaultValue: false,
		},
		onRowSelectionChange: {
			description: "Callback fired when row selection changes",
			control: false,
		},
		enableColumnResizing: {
			description: "Enable column resizing",
			control: "boolean",
			defaultValue: false,
		},
		columnResizeMode: {
			description: 'Column resize mode ("onChange" or "onEnd")',
			control: "radio",
			options: ["onChange", "onEnd"],
			defaultValue: "onChange",
		},
		columnPinning: {
			description: "Column pinning state for pinning columns to left or right",
			control: "object",
		},
		onRowClick: {
			description: "Callback fired when a row is clicked",
			control: false,
		},
		onRowDoubleClick: {
			description: "Callback fired when a row is double-clicked",
			control: false,
		},
		bordered: {
			description: "Enable borders between columns",
			control: "boolean",
			defaultValue: false,
		},
		classNames: {
			description: `Custom class names for different table parts. Available keys:
- root: Class for the root container div
- tableWrapper: Class for the table wrapper div
- table: Class for the table element
- header: Class for the table header
- headerRow: Class for the table header row
- headerCell: Class for the table header cell
- body: Class for the table body
- row: Class for the table row
- cell: Class for the table cell
- pagination: Class for the pagination wrapper
- paginationButton: Class for the pagination buttons
- rowsPerPageSelect: Class for the rows per page select
- pageInfo: Class for the page info text
- noResults: Class for the no results message`,
			control: "object",
		},
		pageSizeLabel: {
			description: "Custom text for page size label",
			control: "text",
			defaultValue: "Rows per page",
		},
		showPage: {
			description: "Show current page number",
			control: "boolean",
			defaultValue: true,
		},
		stickyHeader: {
			description: "Show header as sticky on top of the table",
			control: "boolean",
			defaultValue: true,
		},
		loading: {
			description: "Show loading overlay on top of the table",
			control: "boolean",
			defaultValue: false,
		},
		emptyMessage: {
			description: "Custom message or component to show when data is empty",
			control: "text",
		},
	},
} satisfies Meta<typeof DataTable<Person>>

export default meta
type Story = StoryObj<typeof DataTable<Person>>

// Default story with basic configuration
export const Default: Story = {
	args: {
		columns,
		data,
	},
	parameters: {
		docs: {
			description: {
				story: "Basic table configuration without any advanced features enabled.",
			},
		},
	},
}

// Story with all features enabled
export const WithAllFeatures: Story = {
	args: {
		columns,
		data,
		enablePagination: true,
		enableRowSelection: true,
		enableColumnResizing: true,
		columnResizeMode: "onChange",
		onRowSelectionChange: fn(),
		pagination: {
			pageSize: 10,
			pageIndex: 0,
		},
		columnPinning: {
			left: ["select", "firstName", "lastName"],
		},
		bordered: true,
		pageSizeLabel: "Display rows",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Table with all features enabled: pagination with custom label, row selection, column resizing, column pinning, and borders.",
			},
		},
	},
}

// Story with controlled pagination
export const ControlledPagination: Story = {
	render: (args) => {
		const [pagination, setPagination] = useState({
			pageSize: 10,
			pageIndex: 0,
		})

		return (
			<DataTable<Person>
				{...args}
				enablePagination
				pagination={pagination}
				onPaginationChange={setPagination}
			/>
		)
	},
	args: {
		columns,
		data,
	},
	parameters: {
		docs: {
			description: {
				story: "Example of controlled pagination with 2 items per page.",
			},
		},
	},
}

// Story with row selection
export const WithRowSelection: Story = {
	render: (args) => {
		const [selectedRows, setSelectedRows] = useState<Person[]>([])

		return (
			<div className="space-y-4">
				<DataTable<Person> {...args} enableRowSelection onRowSelectionChange={setSelectedRows} />
				<div>
					<h3 className="font-medium">Selected Rows:</h3>
					<pre className="mt-2 rounded bg-secondary text-secondary-foreground p-4">
						{JSON.stringify(selectedRows, null, 2)}
					</pre>
				</div>
			</div>
		)
	},
	args: {
		columns,
		data,
	},
	parameters: {
		docs: {
			description: {
				story: "Example of row selection with checkbox support and selection state display.",
			},
		},
	},
}

// Story with column pinning
export const WithColumnPinning: Story = {
	args: {
		columns,
		data,
		columnPinning: {
			left: ["firstName", "lastName"],
		},
	},
	parameters: {
		docs: {
			description: {
				story: "Example of column pinning with firstName and lastName pinned to left.",
			},
		},
	},
}

// Story with row click events
export const WithRowClickEvents: Story = {
	render: (args) => {
		const [lastClickedRow, setLastClickedRow] = useState<Row<Person> | null>(null)
		const [lastDoubleClickedRow, setLastDoubleClickedRow] = useState<Row<Person> | null>(null)

		return (
			<div className="space-y-4">
				<DataTable<Person>
					{...args}
					onRowClick={setLastClickedRow}
					onRowDoubleClick={setLastDoubleClickedRow}
				/>
				<div className="space-y-4">
					<div>
						<h3 className="font-medium">Last Clicked Row:</h3>
						<pre className="mt-2 rounded bg-secondary text-secondary-foreground p-4">
							{lastClickedRow ? JSON.stringify(lastClickedRow.original, null, 2) : "None"}
						</pre>
					</div>
					<div>
						<h3 className="font-medium">Last Double-Clicked Row:</h3>
						<pre className="mt-2 rounded bg-secondary text-secondary-foreground p-4">
							{lastDoubleClickedRow
								? JSON.stringify(lastDoubleClickedRow.original, null, 2)
								: "None"}
						</pre>
					</div>
				</div>
			</div>
		)
	},
	args: {
		columns,
		data,
	},
	parameters: {
		docs: {
			description: {
				story: "Example of row click and double-click events with display of the clicked row data.",
			},
		},
	},
}

// Story with borders
export const WithBorders: Story = {
	args: {
		columns,
		data,
		bordered: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Table with borders between columns for better visual separation.",
			},
		},
	},
}

// Story with custom class names
export const WithCustomClassNames: Story = {
	args: {
		columns,
		data,
		enablePagination: true,
		classNames: {
			root: "custom-root-class",
			tableWrapper: "custom-table-wrapper shadow-lg",
			table: "custom-table",
			header: "custom-header",
			headerRow: "custom-header-row",
			headerCell: "custom-header-cell",
			body: "custom-body",
			row: "custom-row hover:bg-slate-50",
			cell: "custom-cell",
			pagination: "custom-pagination mt-4",
			paginationButton: "custom-pagination-button",
			rowsPerPageSelect: "custom-rows-per-page-select",
			pageInfo: "custom-page-info font-semibold",
			noResults: "custom-no-results italic",
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Example of customizing the appearance of different table parts using custom class names. Note that header cells have a primary background color by default.",
			},
		},
	},
}

// Story with custom header colors
export const WithCustomHeaderColors: Story = {
	args: {
		columns,
		data,
		enablePagination: true,
		classNames: {
			headerCell: "bg-secondary text-secondary-foreground",
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Example of overriding the default primary header color with a secondary color scheme.",
			},
		},
	},
}

// Story with custom page size label
export const WithCustomPageSizeLabel: Story = {
	args: {
		columns,
		data,
		enablePagination: true,
		pageSizeLabel: "Items per page",
	},
	parameters: {
		docs: {
			description: {
				story: "Example of customizing the page size label text.",
			},
		},
	},
}

// Story without page number display
export const WithoutPageNumber: Story = {
	args: {
		columns,
		data,
		enablePagination: true,
		showPage: false,
	},
	parameters: {
		docs: {
			description: {
				story: "Example of pagination without the page number display.",
			},
		},
	},
}

// Star Wars DataTable Story
export const StarWarsDataTable: StoryObj<typeof DataTable<SWAPIPerson>> = {
	render: (args) => {
		const [data, setData] = useState<SWAPIPerson[]>([])
		const [loading, setLoading] = useState(true)
		const [pagination, setPagination] = useState<DataTablePaginationState>({
			pageSize: 10,
			pageIndex: 0,
		})
		const [totalRecords, setTotalRecords] = useState(0)

		const columns: ColumnDef<SWAPIPerson>[] = [
			{
				accessorKey: "name",
				header: "Name",
			},
			{
				accessorKey: "height",
				header: "Height (cm)",
			},
			{
				accessorKey: "mass",
				header: "Mass (kg)",
			},
			{
				accessorKey: "birthYear",
				header: "Birth Year",
			},
			{
				accessorKey: "gender",
				header: "Gender",
			},
		]

		useEffect(() => {
			const loadData = async () => {
				setLoading(true)
				try {
					const result = await fetchPeople(pagination.pageIndex + 1, pagination.pageSize)
					setData(result.data)
					setTotalRecords(result.totalRecords)
				} catch (error) {
					console.error("Error loading Star Wars data:", error)
				} finally {
					setLoading(false)
				}
			}

			loadData()
		}, [pagination.pageIndex, pagination.pageSize])

		return (
			<div className="space-y-4">
				<div className="rounded-lg border p-4">
					<h2 className="mb-4 text-xl font-bold">Star Wars Characters</h2>
					<DataTable<SWAPIPerson>
						{...args}
						columns={columns}
						data={data}
						enablePagination
						pagination={pagination}
						onPaginationChange={setPagination}
						pageSizeLabel="Characters per page"
						bordered
						loading={loading}
					/>
				</div>
				<div className="rounded-lg border bg-card p-4">
					<h3 className="font-medium">Total Records: {totalRecords}</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Data provided by{" "}
						<a
							href="https://swapi.tech"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-primary hover:underline"
						>
							SWAPI.tech
						</a>
					</p>
				</div>
			</div>
		)
	},
	args: {
		showPage: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"A fully functional example using the Star Wars API (SWAPI) with server-side pagination and loading states.",
			},
		},
	},
}

// Add a new story to demonstrate the loading state
export const WithLoadingState: Story = {
	args: {
		columns,
		data: [],
		loading: true,
		enablePagination: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Example showing the loading state overlay on the table.",
			},
		},
	},
}

// Story with custom empty message
export const WithEmptyMessage: Story = {
	render: (args) => {
		// Custom component for empty state
		const CustomEmptyMessage = () => (
			<div className="flex flex-col items-center gap-2 py-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="text-muted-foreground"
				>
					<title>Upload Icon</title>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="17 8 12 3 7 8" />
					<line x1="12" y1="3" x2="12" y2="15" />
				</svg>
				<p className="text-sm text-muted-foreground">No data available</p>
				<p className="text-xs text-muted-foreground/80">
					Try adjusting your filters or search terms
				</p>
			</div>
		)

		return (
			<div className="space-y-8">
				<div>
					<h3 className="mb-4 text-sm font-medium">With Text Message</h3>
					<DataTable<Person> {...args} data={[]} emptyMessage="No data found. Please try again." />
				</div>
				<div>
					<h3 className="mb-4 text-sm font-medium">With Custom Component</h3>
					<DataTable<Person> {...args} data={[]} emptyMessage={<CustomEmptyMessage />} />
				</div>
				<div>
					<h3 className="mb-4 text-sm font-medium">Default Empty Message</h3>
					<DataTable<Person> {...args} data={[]} />
				</div>
			</div>
		)
	},
	args: {
		columns,
		enablePagination: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Examples of customizing the empty state message with both text and a custom component.",
			},
		},
	},
}

// Story demonstrating loading state
export const WithLoading: Story = {
	args: {
		columns,
		data,
		loading: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Table showing loading state with overlay.",
			},
		},
	},
}

// Story demonstrating empty state with custom message
export const WithEmptyState: Story = {
	args: {
		columns,
		data: [],
		emptyMessage: "No data available. Try adjusting your filters.",
	},
	parameters: {
		docs: {
			description: {
				story: "Table showing custom empty state message when no data is available.",
			},
		},
	},
}

// Story demonstrating custom styling
export const WithCustomStyling: Story = {
	args: {
		columns,
		data,
		classNames: exampleClassNames,
		bordered: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Table with custom class names applied to different parts of the table structure.",
			},
		},
	},
}

// Story demonstrating server-side pagination
export const WithServerPagination: Story = {
	render: function Render() {
		const [loading, setLoading] = useState(false)
		const [data, setData] = useState<SWAPIPerson[]>([])
		const [pagination, setPagination] = useState<DataTablePaginationState>({
			pageSize: 10,
			pageIndex: 0,
		})

		const columns: ColumnDef<SWAPIPerson>[] = [
			{
				accessorKey: "name",
				header: "Name",
			},
			{
				accessorKey: "height",
				header: "Height",
			},
			{
				accessorKey: "mass",
				header: "Mass",
			},
			{
				accessorKey: "birthYear",
				header: "Birth Year",
			},
			{
				accessorKey: "gender",
				header: "Gender",
			},
		]

		useEffect(() => {
			const loadData = async () => {
				setLoading(true)
				try {
					const response = await fetchPeople(pagination.pageIndex + 1, pagination.pageSize)
					setData(response.data)
				} catch (error) {
					console.error("Failed to fetch data:", error)
				} finally {
					setLoading(false)
				}
			}

			loadData()
		}, [pagination.pageIndex, pagination.pageSize])

		return (
			<DataTable
				columns={columns}
				data={data}
				enablePagination
				pagination={pagination}
				onPaginationChange={setPagination}
				loading={loading}
			/>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Table demonstrating server-side pagination with loading states, fetching Star Wars character data from SWAPI.",
			},
		},
	},
}

export const WithLeftPinnedColumns: Story = {
	name: "With Left Pinned Columns",
	args: {
		columns: wideColumns,
		data: wideData,
		// bordered: true,
		columnPinning: {
			left: ["id", "firstName", "lastName"],
			right: [],
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Example of a table with two columns pinned to the left side. The table container has a fixed width to demonstrate horizontal scrolling behavior.",
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: "500px", overflow: "auto" }}>
				<Story />
			</div>
		),
	],
}

export const WithRightPinnedColumns: Story = {
	name: "With Right Pinned Columns",
	args: {
		columns: wideColumns,
		data: wideData,
		columnPinning: {
			left: [],
			right: ["department", "location"],
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Example of a table with two columns pinned to the right side. The table container has a fixed width to demonstrate horizontal scrolling behavior.",
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: "500px", overflow: "auto" }}>
				<Story />
			</div>
		),
	],
}

export const WithBothSidesPinnedColumns: Story = {
	name: "With Both Sides Pinned Columns",
	args: {
		columns: wideColumns,
		data: wideData,
		columnPinning: {
			left: ["id", "firstName"],
			right: ["location"],
		},
		bordered: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Example of a table with columns pinned to both left and right sides. The table container has a fixed width to demonstrate horizontal scrolling behavior.",
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: "500px", overflow: "auto" }}>
				<Story />
			</div>
		),
	],
}

// Example data type for alignment story
interface AlignmentData {
	id: string
	name: string
	amount: number
	status: string
	date: string
}

// Example data for alignment story
const alignmentData: AlignmentData[] = [
	{
		id: "1",
		name: "John Doe",
		amount: 1234.56,
		status: "Active",
		date: "2024-03-20",
	},
	{
		id: "2",
		name: "Jane Smith",
		amount: 2345.67,
		status: "Inactive",
		date: "2024-03-21",
	},
	{
		id: "3",
		name: "Bob Johnson",
		amount: 3456.78,
		status: "Pending",
		date: "2024-03-22",
	},
]

export const WithColumnAlignment: StoryObj<typeof DataTable<AlignmentData>> = {
	name: "With Column Alignment",
	args: {
		data: alignmentData,
		columns: [
			{
				accessorKey: "id",
				header: () => <div className="w-full text-left">ID</div>,
				cell: ({ cell }) => <div className="text-left">{cell.getValue() as string}</div>,
			},
			{
				accessorKey: "name",
				header: () => <div className="w-full text-left">Name</div>,
				cell: ({ cell }) => (
					<div className="text-left font-medium">{cell.getValue() as string}</div>
				),
			},
			{
				accessorKey: "amount",
				header: () => <div className="w-full text-right">Amount</div>,
				cell: ({ cell }) => (
					<div className="text-right font-mono">${(cell.getValue() as number).toFixed(2)}</div>
				),
			},
			{
				accessorKey: "status",
				header: () => <div className="w-full text-center">Status</div>,
				cell: ({ cell }) => (
					<div className="text-center">
						<span
							className={`inline-block px-2 py-1 rounded-full text-xs font-medium
              ${cell.getValue() === "Active" ? "bg-green-100 text-green-800" : ""}
              ${cell.getValue() === "Inactive" ? "bg-red-100 text-red-800" : ""}
              ${cell.getValue() === "Pending" ? "bg-yellow-100 text-yellow-800" : ""}
            `}
						>
							{cell.getValue() as string}
						</span>
					</div>
				),
			},
			{
				accessorKey: "date",
				header: () => <div className="w-full text-center">Date</div>,
				cell: ({ cell }) => (
					<div className="text-center font-mono">
						{new Date(cell.getValue() as string).toLocaleDateString()}
					</div>
				),
			},
		],
		bordered: true,
	},
	parameters: {
		docs: {
			description: {
				story: `Example demonstrating different text alignments for both headers and cells:
- ID: Left-aligned header and content (default for text)
- Name: Left-aligned header and content with medium font weight
- Amount: Right-aligned header and content with monospace font (common for numbers)
- Status: Center-aligned header and content with colored badges
- Date: Center-aligned header and content with monospace font

The header alignment matches the cell alignment for visual consistency. Each header div uses w-full to ensure proper alignment across the entire cell width.`,
			},
		},
	},
}

// Sample data with more than 15 rows for fixed height example
const largeDataSet: Person[] = [
	{
		id: "1",
		firstName: "John",
		lastName: "Doe",
		age: 30,
		email: "john.doe@example.com",
	},
	{
		id: "2",
		firstName: "Jane",
		lastName: "Smith",
		age: 25,
		email: "jane.smith@example.com",
	},
	{
		id: "3",
		firstName: "Bob",
		lastName: "Johnson",
		age: 35,
		email: "bob.johnson@example.com",
	},
	{
		id: "4",
		firstName: "Alice",
		lastName: "Williams",
		age: 28,
		email: "alice.williams@example.com",
	},
	{
		id: "5",
		firstName: "Charlie",
		lastName: "Brown",
		age: 42,
		email: "charlie.brown@example.com",
	},
	{
		id: "6",
		firstName: "Eva",
		lastName: "Davis",
		age: 31,
		email: "eva.davis@example.com",
	},
	{
		id: "7",
		firstName: "Frank",
		lastName: "Miller",
		age: 29,
		email: "frank.miller@example.com",
	},
	{
		id: "8",
		firstName: "Grace",
		lastName: "Wilson",
		age: 36,
		email: "grace.wilson@example.com",
	},
	{
		id: "9",
		firstName: "Henry",
		lastName: "Taylor",
		age: 33,
		email: "henry.taylor@example.com",
	},
	{
		id: "10",
		firstName: "Ivy",
		lastName: "Anderson",
		age: 27,
		email: "ivy.anderson@example.com",
	},
	{
		id: "11",
		firstName: "Jack",
		lastName: "Thomas",
		age: 38,
		email: "jack.thomas@example.com",
	},
	{
		id: "12",
		firstName: "Kelly",
		lastName: "Roberts",
		age: 34,
		email: "kelly.roberts@example.com",
	},
	{
		id: "13",
		firstName: "Liam",
		lastName: "Clark",
		age: 32,
		email: "liam.clark@example.com",
	},
	{
		id: "14",
		firstName: "Mia",
		lastName: "Lewis",
		age: 29,
		email: "mia.lewis@example.com",
	},
	{
		id: "15",
		firstName: "Noah",
		lastName: "Walker",
		age: 41,
		email: "noah.walker@example.com",
	},
	{
		id: "16",
		firstName: "Olivia",
		lastName: "Hall",
		age: 26,
		email: "olivia.hall@example.com",
	},
	{
		id: "17",
		firstName: "Peter",
		lastName: "Young",
		age: 37,
		email: "peter.young@example.com",
	},
	{
		id: "18",
		firstName: "Quinn",
		lastName: "King",
		age: 31,
		email: "quinn.king@example.com",
	},
	{
		id: "19",
		firstName: "Rachel",
		lastName: "Scott",
		age: 28,
		email: "rachel.scott@example.com",
	},
	{
		id: "20",
		firstName: "Samuel",
		lastName: "Green",
		age: 39,
		email: "samuel.green@example.com",
	},
]

// Story with fixed height and scrollable content
export const FixedHeightTable: Story = {
	args: {
		columns: wideColumns,
		data: largeDataSet,
		bordered: true,
		enableRowSelection: true,
		enableColumnResizing: true,
		classNames: {
			tableWrapper: "h-[400px] w-[600px]",
			headerCell: "bg-secondary text-secondary-foreground",
			row: "hover:bg-muted/50",
			body: "bg-background",
		},
		columnPinning: {
			left: ["select", "id"],
		},
		onRowSelectionChange: (selectedRows) => {
			console.log("Selected rows:", selectedRows)
		},
		onRowClick: (row) => {
			console.log("Row clicked:", row)
		},
		onRowDoubleClick: (row) => {
			console.log("Row double clicked:", row)
		},
	},
	parameters: {
		docs: {
			description: {
				story: `Table with fixed height (400px) and scrollable content. Features:
- Fixed header that stays visible while scrolling
- Horizontal and vertical scrolling
- Row selection with checkbox column
- Column resizing
- Custom styling
- Row hover effect`,
			},
		},
	},
}
