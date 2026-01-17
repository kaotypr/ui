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
  title: "UI/Item/ItemDescription",
  component: ItemDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The description text component for items. Displays secondary information with muted foreground color. Text is clamped to two lines with an ellipsis. Must be used within an ItemContent component.",
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
} satisfies Meta<typeof ItemDescription>

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
        <ItemDescription {...args}>Software Engineer</ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic description text below the title.",
      },
    },
  },
}

export const LongDescription: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>
          This is a longer description that demonstrates how the description component handles
          multiple lines of text. When the text exceeds two lines, it will be truncated with an
          ellipsis to maintain consistent item heights.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Long descriptions are clamped to two lines with an ellipsis.",
      },
    },
  },
}

export const WithLinks: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>
          Software Engineer at{" "}
          <a href="#" className="underline">
            Acme Corp
          </a>
          . Visit our{" "}
          <a href="#" className="underline">
            website
          </a>{" "}
          for more information.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Description supports inline links with hover effects.",
      },
    },
  },
}

export const MultipleLines: Story = {
  render: () => (
    <Item className="w-80">
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>
          First line of description text. This is the second line that will be visible before
          truncation occurs if the text is too long.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
  parameters: {
    docs: {
      description: {
        story: "Description can span up to two lines before truncation.",
      },
    },
  },
}
