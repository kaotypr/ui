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
        component:
          "The table header section containing column headers. Must be used within a Table component.",
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
        "Data attribute for styling and identification. Automatically set to 'table-header'.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"table-header"' },
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
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell className="text-right">Edit</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell className="text-right">Edit</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table header with column headers. The header contains TableRow and TableHead components.",
      },
    },
  },
}

export const WithMultipleRows: Story = {
  render: (args) => (
    <Table>
      <TableHeader {...args}>
        <TableRow>
          <TableHead rowSpan={2}>Name</TableHead>
          <TableHead colSpan={2}>Contact</TableHead>
          <TableHead rowSpan={2} className="text-right">
            Actions
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>+1 234 567 8900</TableCell>
          <TableCell className="text-right">Edit</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>+1 234 567 8901</TableCell>
          <TableCell className="text-right">Edit</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A table header with multiple rows using rowSpan and colSpan for complex header layouts.",
      },
    },
  },
}
