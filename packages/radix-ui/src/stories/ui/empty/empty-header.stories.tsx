import type { Meta, StoryObj } from "@storybook/react-vite"
import { Inbox } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "~/components/ui/empty"

const meta = {
  title: "UI/Empty/EmptyHeader",
  component: EmptyHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container for the empty state title and description. Typically contains EmptyMedia, EmptyTitle, and EmptyDescription components.",
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
} satisfies Meta<typeof EmptyHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader {...args}>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Item</Button>
      </EmptyContent>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic empty header with icon, title, and description.",
      },
    },
  },
}

export const WithoutIcon: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader {...args}>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          There are no items to display at this time.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "An empty header without an icon.",
      },
    },
  },
}

export const WithCustomContent: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader {...args}>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item. You can add multiple items at once
          or import them from a file.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Item</Button>
        <Button variant="outline">Import Items</Button>
      </EmptyContent>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "An empty header with custom content and multiple action buttons.",
      },
    },
  },
}
