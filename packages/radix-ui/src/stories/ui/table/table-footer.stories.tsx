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
        component:
          "The table footer section for summary information. Must be used within a Table component.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Additional CSS class names to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
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
          <TableHead>Item</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell>2</TableCell>
          <TableCell className="text-right">$10.00</TableCell>
          <TableCell className="text-right">$20.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">$15.00</TableCell>
          <TableCell className="text-right">$45.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter {...args}>
        <TableRow>
          <TableCell colSpan={3} className="font-medium">
            Total
          </TableCell>
          <TableCell className="text-right font-medium">$65.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table footer showing summary information like totals. The footer typically contains aggregated data.",
      },
    },
  },
}

export const WithMultipleRows: Story = {
  render: (args) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell>2</TableCell>
          <TableCell className="text-right">$10.00</TableCell>
          <TableCell className="text-right">$20.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">$15.00</TableCell>
          <TableCell className="text-right">$45.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter {...args}>
        <TableRow>
          <TableCell colSpan={3}>Subtotal</TableCell>
          <TableCell className="text-right">$65.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3}>Tax (10%)</TableCell>
          <TableCell className="text-right">$6.50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3} className="font-medium">
            Grand Total
          </TableCell>
          <TableCell className="text-right font-medium">$71.50</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table footer with multiple rows showing subtotals, taxes, and grand total.",
      },
    },
  },
}
