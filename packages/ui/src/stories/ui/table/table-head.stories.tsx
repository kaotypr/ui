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
	title: "UI/Table/TableHead",
	component: TableHead,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A header cell within a table row. Must be used within a TableRow component inside TableHeader.

This component renders as a \`<th>\` element and provides styling for column headers with proper alignment and font weight.`,
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
			description: "The header cell content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		colSpan: {
			description: "Number of columns the header cell should span.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		rowSpan: {
			description: "Number of rows the header cell should span.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
	},
} satisfies Meta<typeof TableHead>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead {...args}>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>INV001</TableCell>
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
				story: "Default table header cells with left-aligned text.",
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
					<TableCell>INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>INV002</TableCell>
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
				story: "Table header with right-aligned amount column for numeric data.",
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
					<TableHead colSpan={2}>Payment</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
				<TableRow>
					<TableHead></TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>INV001</TableCell>
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
				story: "Table header with a column spanning multiple cells for grouped headers.",
			},
		},
	},
}

export const WithRowSpan: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead rowSpan={2}>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
				<TableRow>
					<TableHead>Date</TableHead>
					<TableHead>Due Date</TableHead>
					<TableHead className="text-right"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>INV001</TableCell>
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
				story: "Table header with a row spanning multiple rows for grouped headers.",
			},
		},
	},
}
