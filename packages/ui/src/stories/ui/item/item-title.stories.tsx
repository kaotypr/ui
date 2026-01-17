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
  title: "UI/Item/ItemTitle",
  component: ItemTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The title text component for items. Displays the main heading text with medium font weight. Must be used within an ItemContent component.",
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
} satisfies Meta<typeof ItemTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle {...args}>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic title text within an item.",
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
        <ItemTitle>Title Without Description</ItemTitle>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Title can be used without a description.",
      },
    },
  },
}

export const LongTitle: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>This is a Very Long Title That May Wrap to Multiple Lines</ItemTitle>
        <ItemDescription>Description below long title</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Title handles long text and wraps appropriately.",
      },
    },
  },
}

export const WithInlineElements: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>
          <span>John Doe</span>
          <span className="ml-2 text-xs text-muted-foreground">(Active)</span>
        </ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Title can contain inline elements and additional content.",
      },
    },
  },
}
