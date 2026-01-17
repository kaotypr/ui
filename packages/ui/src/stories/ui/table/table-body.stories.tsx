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
        component:
          "The table body section containing data rows. Must be used within a Table component.",
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
    "data-slot": {
      description:
        "Data attribute for styling and identification. Automatically set to 'table-body'.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"table-body"' },
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
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody {...args}>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>$10.00</TableCell>
          <TableCell>150</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>$15.00</TableCell>
          <TableCell>200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>$20.00</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table body with data rows. The body contains TableRow and TableCell components.",
      },
    },
  },
}

export const WithEmptyState: Story = {
  render: (args) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody {...args}>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            No products found.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table body showing an empty state when no data is available. Use colspan to span across all columns.",
      },
    },
  },
}
