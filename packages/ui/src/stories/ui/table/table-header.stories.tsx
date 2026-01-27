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
	title: "UI/Table/TableHeader",
	component: TableHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The header section of the table containing column headers. Must be used within a Table component.

This component renders as a \`<thead>\` element and provides styling for header rows.`,
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
			description: "The header rows containing TableHead elements.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof TableHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Table>
			<TableHeader {...args}>
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
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Default table header with column names.",
			},
		},
	},
}

export const WithMultipleRows: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead rowSpan={2}>Invoice</TableHead>
					<TableHead colSpan={2}>Payment</TableHead>
					<TableHead rowSpan={2} className="text-right">
						Amount
					</TableHead>
				</TableRow>
				<TableRow>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
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
				story: "Table header with multiple rows demonstrating rowSpan and colSpan usage.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	render: () => (
		<Table>
			<TableHeader className="bg-muted">
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
				story: "Table header with custom background styling.",
			},
		},
	},
}
