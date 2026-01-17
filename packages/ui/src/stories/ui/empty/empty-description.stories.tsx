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
  title: "UI/Empty/EmptyDescription",
  component: EmptyDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The description text of the empty state. Must be used within an EmptyHeader component. Supports links and other inline elements.",
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
} satisfies Meta<typeof EmptyDescription>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription {...args}>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic empty description within an empty state.",
      },
    },
  },
}

export const WithLink: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription {...args}>
          Get started by{" "}
          {/** biome-ignore lint/a11y/useValidAnchor: "This is a storybook story" */}
          <a href="#" onClick={(e) => e.preventDefault()}>
            creating a new item
          </a>
          .
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "An empty description with a link.",
      },
    },
  },
}

export const LongDescription: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription {...args}>
          Get started by creating a new item. You can add multiple items at once
          or import them from a file. Items can be organized into collections
          for better management.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "An empty description with longer text.",
      },
    },
  },
}
