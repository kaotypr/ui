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
	title: "UI/Table/TableBody",
	component: TableBody,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The body section of the table containing data rows. Must be used within a Table component.

This component renders as a \`<tbody>\` element and provides styling for data rows.`,
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
			description: "The data rows containing TableCell elements.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof TableBody>

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
			<TableBody {...args}>
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
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Default table body with multiple data rows.",
			},
		},
	},
}

export const WithEmptyState: Story = {
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
					<TableCell colSpan={4} className="text-center text-muted-foreground">
						No invoices found.
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table body with an empty state message spanning all columns.",
			},
		},
	},
}

export const WithSelectedRows: Story = {
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
				<TableRow data-state="selected">
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
				story: "Table body with multiple selected rows highlighted.",
			},
		},
	},
}
