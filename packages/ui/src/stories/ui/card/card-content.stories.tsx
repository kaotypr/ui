import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card"

const meta = {
  title: "UI/Card/CardContent",
  component: CardContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The main content area of the card. Must be used within a Card component.",
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
} satisfies Meta<typeof CardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent {...args}>
        <p>This is the main content of the card.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic card content section with simple text.",
      },
    },
  },
}

export const WithMultipleParagraphs: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the first paragraph of content.</p>
        <p className="mt-2">This is the second paragraph with additional information.</p>
        <p className="mt-2">You can add as much content as needed in the card content area.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card content with multiple paragraphs.",
      },
    },
  },
}

export const WithList: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>First item in the list</li>
          <li>Second item in the list</li>
          <li>Third item in the list</li>
        </ul>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card content with a list of items.",
      },
    },
  },
}

export const Minimal: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <p>This is a minimal card with only content, no header.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card content without a header section.",
      },
    },
  },
}
