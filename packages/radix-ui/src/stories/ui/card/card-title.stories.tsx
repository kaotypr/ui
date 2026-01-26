import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardTitle, CardDescription } from "~/components/ui/card"

const meta = {
  title: "UI/Card/CardTitle",
  component: CardTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The main title text of the card. Must be used within a CardHeader component.",
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
} satisfies Meta<typeof CardTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle {...args}>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic card title displayed in the header.",
      },
    },
  },
}

export const LongTitle: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>This is a longer card title that demonstrates how the component handles extended text</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card title with longer text content.",
      },
    },
  },
}

export const WithoutDescription: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title Only</CardTitle>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card title without a description.",
      },
    },
  },
}
