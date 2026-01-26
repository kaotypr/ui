import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { MoreVertical, Settings, X } from "lucide-react"

const meta = {
  title: "UI/Card/CardAction",
  component: CardAction,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Optional action element positioned in the card header. Must be used within a CardHeader component. The action is automatically positioned on the right side of the header.",
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
} satisfies Meta<typeof CardAction>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button.</CardDescription>
        <CardAction {...args}>
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
        story: "A card action with an icon button.",
      },
    },
  },
}

export const WithSettingsIcon: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Settings</CardTitle>
        <CardDescription>Click the settings icon to configure.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card action with a settings icon button.",
      },
    },
  },
}

export const WithCloseButton: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Dismissible Card</CardTitle>
        <CardDescription>This card can be closed.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card action with a close button.",
      },
    },
  },
}

export const WithTextButton: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Text Action</CardTitle>
        <CardDescription>This card has a text button action.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card action with a text button instead of an icon.",
      },
    },
  },
}
