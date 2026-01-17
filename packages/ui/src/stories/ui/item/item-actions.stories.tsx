import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"
import { User, MoreVertical, Edit, Trash2 } from "lucide-react"

const meta = {
  title: "UI/Item/ItemActions",
  component: ItemActions,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for action buttons or controls within an item. Typically positioned on the right side of the item. Must be used within an Item component.",
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
} satisfies Meta<typeof ItemActions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
      <ItemActions {...args}>
        <Button variant="ghost" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Actions container with a single icon button.",
      },
    },
  },
}

export const MultipleActions: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <Edit className="size-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="size-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple action buttons in the actions container.",
      },
    },
  },
}

export const WithTextButtons: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
        <Button variant="ghost" size="sm">
          Delete
        </Button>
      </ItemActions>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Actions container with text buttons instead of icons.",
      },
    },
  },
}

export const MixedActions: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Mixed action buttons with different variants and types.",
      },
    },
  },
}
