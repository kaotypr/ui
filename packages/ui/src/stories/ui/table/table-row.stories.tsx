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
	title: "UI/Table/TableRow",
	component: TableRow,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A single row within the table. Must be used within TableHeader, TableBody, or TableFooter components.

This component renders as a \`<tr>\` element and provides hover and selected state styling.`,
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
			description: "The cells within the row (TableHead or TableCell elements).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		"data-state": {
			description: "The state of the row. Use 'selected' to highlight the row.",
			table: {
				type: { summary: '"selected" | undefined' },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "select" },
			options: [undefined, "selected"],
		},
	},
} satisfies Meta<typeof TableRow>

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
				<TableRow {...args}>
					<TableCell className="font-medium">INV001</TableCell>
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
				story: "Default table row with hover effect.",
			},
		},
	},
}

export const Selected: Story = {
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
				story: "Table row with selected state highlighting the middle row.",
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
					<TableCell>Paid</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow className="border-l-4 border-l-primary">
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV003</TableCell>
					<TableCell>Unpaid</TableCell>
					<TableCell className="text-right">$350.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table row with custom border styling for visual emphasis.",
			},
		},
	},
}
