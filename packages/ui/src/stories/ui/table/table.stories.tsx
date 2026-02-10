import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableRow,
	TableHead,
	TableCell,
	TableCaption,
} from "~/components/ui/table"

const meta = {
	title: "UI/Table",
	component: Table,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A responsive table component for displaying structured data.

### Component Parts
- [TableHeader](?path=/story/ui-table-tableheader--default): The header section of the table containing column headers.
- [TableBody](?path=/story/ui-table-tablebody--default): The body section of the table containing data rows.
- [TableFooter](?path=/story/ui-table-tablefooter--default): The footer section of the table for summary information.
- [TableRow](?path=/story/ui-table-tablerow--default): A single row within the table.
- [TableHead](?path=/story/ui-table-tablehead--default): A header cell within a table row.
- [TableCell](?path=/story/ui-table-tablecell--default): A data cell within a table row.
- [TableCaption](?path=/story/ui-table-tablecaption--default): A caption describing the table's content.`,
			},
		},
	},
	argTypes: {
		// Styling
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		children: {
			description: "The table content including headers, body, and footer sections.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Table {...args}>
			<TableCaption>A list of recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
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
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Default table with header, body, and caption displaying invoice data.",
			},
		},
	},
}

export const WithFooter: Story = {
	render: () => (
		<Table>
			<TableCaption>A list of recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
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
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$750.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table with a footer row displaying total amount.",
			},
		},
	},
}

export const WithSelectedRow: Story = {
	render: () => (
		<Table>
			<TableCaption>A list of recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
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
				<TableRow data-state="selected">
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
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table with a selected row highlighted using the data-state attribute.",
			},
		},
	},
}

export const Responsive: Story = {
	render: () => (
		<div className="w-full max-w-2xl">
			<Table>
				<TableCaption>
					A responsive table that scrolls horizontally on smaller screens.
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead>Date</TableHead>
						<TableHead className="text-right">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell>2024-01-15</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV002</TableCell>
						<TableCell>Pending</TableCell>
						<TableCell>PayPal</TableCell>
						<TableCell>2024-01-16</TableCell>
						<TableCell className="text-right">$150.00</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV003</TableCell>
						<TableCell>Unpaid</TableCell>
						<TableCell>Bank Transfer</TableCell>
						<TableCell>2024-01-17</TableCell>
						<TableCell className="text-right">$350.00</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Table wrapped in a container to demonstrate responsive horizontal scrolling behavior.",
			},
		},
	},
}
