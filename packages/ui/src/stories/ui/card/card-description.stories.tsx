import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardTitle, CardDescription } from "~/components/ui/card"

const meta = {
  title: "UI/Card/CardDescription",
  component: CardDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Secondary descriptive text displayed below the card title. Must be used within a CardHeader component.",
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
} satisfies Meta<typeof CardDescription>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription {...args}>Card description goes here.</CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic card description displayed below the title.",
      },
    },
  },
}

export const LongDescription: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a longer description that demonstrates how the component handles extended text content. It can span multiple lines and provides additional context about the card.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card description with longer text content.",
      },
    },
  },
}

export const MultipleParagraphs: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          <p>First paragraph of the description.</p>
          <p className="mt-2">Second paragraph with additional information.</p>
        </CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card description with multiple paragraphs.",
      },
    },
  },
}
