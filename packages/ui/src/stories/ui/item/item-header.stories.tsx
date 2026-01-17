import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Item,
  ItemHeader,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"
import { User, MoreVertical } from "lucide-react"

const meta = {
  title: "UI/Item/ItemHeader",
  component: ItemHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A header section component for organizing item content. Provides a full-width container that spans the entire item width, useful for complex layouts with media, content, and actions. Must be used within an Item component.",
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
} satisfies Meta<typeof ItemHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-80">
      <ItemHeader {...args}>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreVertical className="size-4" />
          </Button>
        </ItemActions>
      </ItemHeader>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Header section with media, content, and actions.",
      },
    },
  },
}

export const WithoutActions: Story = {
  render: () => (
    <Item className="w-80">
      <ItemHeader>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
      </ItemHeader>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Header section without actions.",
      },
    },
  },
}

export const WithMultipleContent: Story = {
  render: () => (
    <Item className="w-80">
      <ItemHeader>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemContent>
          <ItemTitle>Status</ItemTitle>
          <ItemDescription>Active</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreVertical className="size-4" />
          </Button>
        </ItemActions>
      </ItemHeader>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Header with multiple content blocks for complex layouts.",
      },
    },
  },
}

export const FullWidthLayout: Story = {
  render: () => (
    <Item className="w-80">
      <ItemHeader>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Full Width Header</ItemTitle>
          <ItemDescription>
            The header spans the full width of the item, allowing for flexible layouts with media,
            content, and actions all aligned properly.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreVertical className="size-4" />
          </Button>
        </ItemActions>
      </ItemHeader>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Header provides full-width layout for organizing item elements.",
      },
    },
  },
}
