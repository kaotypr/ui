import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemSeparator,
} from "~/components/ui/item"
import { User, Mail, Phone } from "lucide-react"

const meta = {
  title: "UI/Item/ItemGroup",
  component: ItemGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for grouping multiple items together. Provides consistent spacing and layout for a collection of items.",
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
} satisfies Meta<typeof ItemGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ItemGroup {...args} className="w-80">
      <Item>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Smith</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia>
          <Phone className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Bob Johnson</ItemTitle>
          <ItemDescription>Marketing Manager</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A group of items displayed vertically with consistent spacing.",
      },
    },
  },
}

export const WithSeparators: Story = {
  render: () => (
    <ItemGroup className="w-80">
      <Item>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Smith</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Phone className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Bob Johnson</ItemTitle>
          <ItemDescription>Marketing Manager</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A group of items with separators between them for visual division.",
      },
    },
  },
}

export const WithVariants: Story = {
  render: () => (
    <ItemGroup className="w-80 space-y-2">
      <Item variant="default">
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>Visible border</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia>
          <Phone className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>Muted background</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A group of items with different variants mixed together.",
      },
    },
  },
}
