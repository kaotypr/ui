import type { Meta, StoryObj } from "@storybook/react-vite"
import { Inbox } from "lucide-react"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "~/components/ui/empty"

const meta = {
  title: "UI/Empty/EmptyTitle",
  component: EmptyTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The title text of the empty state. Must be used within an EmptyHeader component.",
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
} satisfies Meta<typeof EmptyTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle {...args}>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic empty title within an empty state.",
      },
    },
  },
}

export const LongTitle: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle {...args}>
          No items found in your collection
        </EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "An empty title with longer text.",
      },
    },
  },
}

export const WithoutDescription: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle {...args}>No items found</EmptyTitle>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "An empty title without a description.",
      },
    },
  },
}
