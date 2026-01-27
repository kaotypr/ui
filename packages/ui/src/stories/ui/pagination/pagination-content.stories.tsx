import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"

const meta = {
  title: "UI/Pagination/PaginationContent",
  component: PaginationContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "The container for pagination items. Must be used within a Pagination component.",
          "",
          "This component renders as a `<ul>` element and provides the flex layout for pagination items.",
        ].join("\n"),
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
    children: {
      description: "The pagination items to display.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof PaginationContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Pagination>
      <PaginationContent {...args}>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default pagination content container with page links and navigation buttons.",
      },
    },
  },
}

export const WithCustomSpacing: Story = {
  render: (args) => (
    <Pagination>
      <PaginationContent {...args} className="gap-2">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: "Pagination content with custom gap spacing between items.",
      },
    },
  },
}
