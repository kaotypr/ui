import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "~/components/ui/item"
import { User } from "lucide-react"

const meta = {
  title: "UI/Item/ItemContent",
  component: ItemContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The main content area of an item. Contains the title, description, and other text content. Must be used within an Item component.",
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
} satisfies Meta<typeof ItemContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent {...args}>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic content area with title and description.",
      },
    },
  },
}

export const TitleOnly: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Title Only</ItemTitle>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Content area with only a title, no description.",
      },
    },
  },
}

export const WithLongDescription: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Long Description Example</ItemTitle>
        <ItemDescription>
          This is a longer description that demonstrates how the content area handles multiple lines
          of text. The description will be clamped to two lines with an ellipsis if it exceeds the
          available space.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Content area with a longer description that gets truncated.",
      },
    },
  },
}

export const MultipleContent: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Primary Content</ItemTitle>
        <ItemDescription>Primary description</ItemDescription>
      </ItemContent>
      <ItemContent>
        <ItemTitle>Secondary Content</ItemTitle>
        <ItemDescription>Secondary description</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple content blocks can be used for complex layouts.",
      },
    },
  },
}
