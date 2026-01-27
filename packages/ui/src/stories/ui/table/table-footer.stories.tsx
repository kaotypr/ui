import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableRow,
	TableHead,
	TableCell,
} from "~/components/ui/table"

const meta = {
	title: "UI/Table/TableFooter",
	component: TableFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The footer section of the table for summary information. Must be used within a Table component.

This component renders as a \`<tfoot>\` element and provides styling for footer rows with a muted background.`,
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
			description: "The footer rows containing summary information.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof TableFooter>

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
			<TableFooter {...args}>
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
				story: "Default table footer with a total row spanning multiple columns.",
			},
		},
	},
}

export const WithMultipleRows: Story = {
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
				<TableRow>
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={2}>Subtotal</TableCell>
					<TableCell className="text-right">$400.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell colSpan={2}>Tax (10%)</TableCell>
					<TableCell className="text-right">$40.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell colSpan={2} className="font-medium">
						Total
					</TableCell>
					<TableCell className="text-right font-medium">$440.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table footer with multiple rows showing subtotal, tax, and total calculations.",
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
				<TableRow>
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter className="border-t-2 border-primary">
				<TableRow>
					<TableCell colSpan={2} className="font-bold">
						Total
					</TableCell>
					<TableCell className="text-right font-bold">$400.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Table footer with custom border styling for emphasis.",
			},
		},
	},
}
