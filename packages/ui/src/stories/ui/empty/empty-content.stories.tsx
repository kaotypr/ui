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
  title: "UI/Empty/EmptyContent",
  component: EmptyContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container for additional content or action buttons in the empty state. Typically used to display action buttons or other interactive elements.",
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
} satisfies Meta<typeof EmptyContent>

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
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent {...args}>
        <Button>Create Item</Button>
      </EmptyContent>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty content with a single action button.",
      },
    },
  },
}

export const MultipleButtons: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item or importing existing items.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent {...args}>
        <Button>Create Item</Button>
        <Button variant="outline">Import Items</Button>
      </EmptyContent>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty content with multiple action buttons.",
      },
    },
  },
}

export const WithCustomContent: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent {...args}>
        <div className="flex flex-col gap-2">
          <Button>Create Item</Button>
          <p className="text-xs text-muted-foreground text-center">
            Or drag and drop files here
          </p>
        </div>
      </EmptyContent>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty content with custom content including additional text.",
      },
    },
  },
}
