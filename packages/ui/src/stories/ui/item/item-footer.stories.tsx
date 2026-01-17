import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Item,
  ItemHeader,
  ItemFooter,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"
import { User, MoreVertical } from "lucide-react"

const meta = {
  title: "UI/Item/ItemFooter",
  component: ItemFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A footer section component for additional information or actions at the bottom of an item. Provides a full-width container that spans the entire item width. Must be used within an Item component.",
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
} satisfies Meta<typeof ItemFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-80">
      <ItemHeader>
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
      <ItemFooter {...args}>
        <ItemDescription>Last active: 2 hours ago</ItemDescription>
      </ItemFooter>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Footer section with additional description text.",
      },
    },
  },
}

export const WithActions: Story = {
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
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreVertical className="size-4" />
          </Button>
        </ItemActions>
      </ItemHeader>
      <ItemFooter>
        <ItemDescription>Last active: 2 hours ago</ItemDescription>
        <ItemActions>
          <Button variant="outline" size="sm">
            Contact
          </Button>
        </ItemActions>
      </ItemFooter>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Footer section with description and action buttons.",
      },
    },
  },
}

export const MultipleFooterItems: Story = {
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
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreVertical className="size-4" />
          </Button>
        </ItemActions>
      </ItemHeader>
      <ItemFooter>
        <ItemDescription>Last active: 2 hours ago</ItemDescription>
        <ItemDescription>Member since: January 2024</ItemDescription>
        <ItemActions>
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        </ItemActions>
      </ItemFooter>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Footer with multiple description items and actions.",
      },
    },
  },
}

export const FooterOnly: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
      <ItemFooter>
        <ItemDescription>Additional footer information</ItemDescription>
      </ItemFooter>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Item with footer but without header section.",
      },
    },
  },
}
