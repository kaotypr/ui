import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { MoreVertical } from "lucide-react"

const meta = {
  title: "UI/Card/CardHeader",
  component: CardHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Container for the card's header section. Supports title, description, and optional action elements. The header automatically adjusts its layout when a CardAction is present.",
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
} satisfies Meta<typeof CardHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card className="w-[400px]">
      <CardHeader {...args}>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card header with title and description.",
      },
    },
  },
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This header includes an action button.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card header with an action button positioned on the right.",
      },
    },
  },
}

export const WithBorder: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader className="border-b">
        <CardTitle>Header with Border</CardTitle>
        <CardDescription>This header has a bottom border.</CardDescription>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card header with a bottom border using the border-b class.",
      },
    },
  },
}
