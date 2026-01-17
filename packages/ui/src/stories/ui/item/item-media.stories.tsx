import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "~/components/ui/item"
import { User, Mail } from "lucide-react"

const meta = {
  title: "UI/Item/ItemMedia",
  component: ItemMedia,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for media content (icons, images) within an item. Supports different variants for icon containers and image displays. Must be used within an Item component.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the media container.",
      table: {
        type: { summary: '"default" | "icon" | "image"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "icon", "image"],
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
} satisfies Meta<typeof ItemMedia>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-80">
      <ItemMedia {...args}>
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
        story: "Default media variant with a simple icon.",
      },
    },
  },
}

export const IconVariant: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia variant="icon">
        <User className="size-4" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Icon Variant</ItemTitle>
        <ItemDescription>Media with icon variant - includes border and background</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icon variant with border and background styling.",
      },
    },
  },
}

export const ImageVariant: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia variant="image">
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="size-full object-cover"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Image Variant</ItemTitle>
        <ItemDescription>Media with image variant - rounded container for images</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Image variant with rounded container for displaying images.",
      },
    },
  },
}

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Item>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>With Description</ItemTitle>
          <ItemDescription>
            When an item has a description, the media icon is automatically aligned to the top.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia variant="icon">
          <Mail className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Icon Variant with Description</ItemTitle>
          <ItemDescription>
            Icon variant also aligns to the top when description is present.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Media automatically aligns to the top when an item has a description.",
      },
    },
  },
}

export const MultipleIcons: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
        <Mail className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Multiple Icons</ItemTitle>
        <ItemDescription>Media container can hold multiple icons or elements</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Media container can display multiple icons or elements together.",
      },
    },
  },
}
