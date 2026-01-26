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
  title: "UI/Item/ItemSeparator",
  component: ItemSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A separator component for visually dividing items within an ItemGroup. Uses the Separator component internally with horizontal orientation.",
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
} satisfies Meta<typeof ItemSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
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
      <ItemSeparator {...args} />
      <Item>
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Smith</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator {...args} />
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
        story: "Separators between items in a group for visual division.",
      },
    },
  },
}

export const MultipleSeparators: Story = {
  render: () => (
    <ItemGroup className="w-80">
      <Item>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>First Item</ItemTitle>
          <ItemDescription>Above first separator</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Second Item</ItemTitle>
          <ItemDescription>Between separators</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Phone className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Third Item</ItemTitle>
          <ItemDescription>Below second separator</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple separators used to divide groups of items.",
      },
    },
  },
}
