import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "~/components/ui/table"

const meta = {
	title: "UI/Table/TableCell",
	component: TableCell,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A data cell within a table row. Must be used within a TableRow component inside TableBody or TableFooter.

This component renders as a \`<td>\` element and provides styling for data cells with proper alignment.`,
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
			description: "The cell content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		colSpan: {
			description: "Number of columns the cell should span.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		rowSpan: {
			description: "Number of rows the cell should span.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
	},
} satisfies Meta<typeof TableCell>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Table>
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
					<TableCell {...args} className="font-medium">
						INV001
					</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Default table cell with left-aligned text.",
			},
		},
	},
}

export const WithRightAlignment: Story = {
	render: () => (
		<Table>
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
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table cells with right-aligned numeric data.",
			},
		},
	},
}

export const WithColSpan: Story = {
	render: () => (
		<Table>
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
					<TableCell colSpan={3} className="text-center text-muted-foreground">
						No additional invoices
					</TableCell>
					<TableCell className="text-right">$0.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table cell spanning multiple columns for messages or merged content.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>
						<span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
							Paid
						</span>
					</TableCell>
					<TableCell className="text-right font-semibold">$250.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>
						<span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
							Pending
						</span>
					</TableCell>
					<TableCell className="text-right font-semibold">$150.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table cells with custom styling including badges and font weights.",
			},
		},
	},
}
