import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "~/components/ui/table"

const meta = {
  title: "UI/Table/TableCaption",
  component: TableCaption,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A caption for the table providing context or description. Must be used within a Table component.",
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
} satisfies Meta<typeof TableCaption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Table>
      <TableCaption {...args}>A list of recent payments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic table caption providing context about the table data. The caption appears below the table by default.",
      },
    },
  },
}

export const WithDescription: Story = {
  render: (args) => (
    <Table>
      <TableCaption {...args}>
        Monthly sales report for Q1 2024. All amounts are in USD.
      </TableCaption>
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
          "A table caption with a more detailed description providing additional context about the data.",
      },
    },
  },
}
