import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"
import { User, Mail, Phone, MoreVertical } from "lucide-react"

const meta = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible item component for displaying structured content with media, title, description, and actions. Supports multiple variants and sizes for different use cases.\n\nThis component uses [Radix UI Slot](https://www.radix-ui.com/primitives/docs/components/slot) for composition support via the `asChild` prop.\n\n### Component Parts\n- [ItemGroup](?path=/story/ui-item-itemgroup--default): Container for grouping multiple items together.\n- [ItemSeparator](?path=/story/ui-item-itemseparator--default): Separator component for visually dividing items.\n- [ItemMedia](?path=/story/ui-item-itemmedia--default): Container for media content (icons, images) within an item.\n- [ItemContent](?path=/story/ui-item-itemcontent--default): Main content area of an item.\n- [ItemTitle](?path=/story/ui-item-itemtitle--default): Title text component for items.\n- [ItemDescription](?path=/story/ui-item-itemdescription--default): Description text component for items.\n- [ItemActions](?path=/story/ui-item-itemactions--default): Container for action buttons or controls.\n- [ItemHeader](?path=/story/ui-item-itemheader--default): Header section for organizing item content.\n- [ItemFooter](?path=/story/ui-item-itemfooter--default): Footer section for additional information or actions.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the item.",
      table: {
        type: { summary: '"default" | "outline" | "muted"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "outline", "muted"],
    },
    size: {
      description: "The size of the item.",
      table: {
        type: { summary: '"default" | "sm"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "sm"],
    },
    asChild: {
      description:
        "Change the component to the HTML tag or custom component of the only child. Uses Radix UI Slot.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
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
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item {...args} className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Engineer</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic item with media, title, and description.",
      },
    },
  },
}

export const WithActions: Story = {
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
          <MoreVertical className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "An item with action buttons on the right side.",
      },
    },
  },
}

export const Variants: Story = {
  render: () => (
    <ItemGroup className="w-80 space-y-2">
      <Item variant="default">
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background with hover effects</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>Visible border around the item</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia>
          <Phone className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>Muted background color</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different visual variants of the item component.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <ItemGroup className="w-80 space-y-2">
      <Item size="default">
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>Standard padding and spacing</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>Compact padding and spacing</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different size variants of the item component.",
      },
    },
  },
}

export const WithHeaderAndFooter: Story = {
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
      </ItemFooter>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "An item with header and footer sections for more complex layouts.",
      },
    },
  },
}

export const Complete: Story = {
  render: () => (
    <ItemGroup className="w-80 space-y-0">
      <Item>
        <ItemHeader>
          <ItemMedia variant="icon">
            <User className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>John Doe</ItemTitle>
            <ItemDescription>Software Engineer at Acme Corp</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon">
              <MoreVertical className="size-4" />
            </Button>
          </ItemActions>
        </ItemHeader>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemHeader>
          <ItemMedia variant="icon">
            <Mail className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Jane Smith</ItemTitle>
            <ItemDescription>Product Designer at Tech Inc</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon">
              <MoreVertical className="size-4" />
            </Button>
          </ItemActions>
        </ItemHeader>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemHeader>
          <ItemMedia variant="icon">
            <Phone className="size-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Bob Johnson</ItemTitle>
            <ItemDescription>Marketing Manager at Startup Co</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon">
              <MoreVertical className="size-4" />
            </Button>
          </ItemActions>
        </ItemHeader>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A complete example showing multiple items in a group with separators.",
      },
    },
  },
}
