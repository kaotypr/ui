import type { Meta, StoryObj } from "@storybook/react-vite"
import { Inbox, Package, Search } from "lucide-react"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "~/components/ui/empty"

const meta = {
  title: "UI/Empty/EmptyMedia",
  component: EmptyMedia,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container for displaying icons or media in the empty state. Must be used within an EmptyHeader component.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the media container",
      table: {
        type: { summary: '"default" | "icon"' },
        defaultValue: { summary: "default" },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "icon"],
    },
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
} satisfies Meta<typeof EmptyMedia>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args}>
          <Inbox className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty media with the default variant (no background).",
      },
    },
  },
}

export const IconVariant: Story = {
  render: (args) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...args} variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty media with the icon variant (with background and rounded corners).",
      },
    },
  },
}

export const DifferentIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>Your inbox is empty.</EmptyDescription>
        </EmptyHeader>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Package className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No packages</EmptyTitle>
          <EmptyDescription>No packages found in your account.</EmptyDescription>
        </EmptyHeader>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Search className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No results</EmptyTitle>
          <EmptyDescription>Try adjusting your search query.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of empty media with different icons.",
      },
    },
  },
}
