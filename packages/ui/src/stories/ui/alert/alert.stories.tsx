import type { Meta, StoryObj } from "@storybook/react-vite"
import { Info, X } from "@phosphor-icons/react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "~/components/ui/alert"
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A component for displaying important messages to users.",
          "",
          "### Component Parts",
          "- [AlertTitle](?path=/story/ui-alert-alerttitle--default): The heading element that labels the alert.",
          "- [AlertDescription](?path=/story/ui-alert-alertdescription--default): The description text providing additional details.",
          "- [AlertAction](?path=/story/ui-alert-alertaction--default): Optional action button positioned in the top-right corner.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the alert.",
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: "default" },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "destructive"],
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
    children: {
      description: "The contents of the alert.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default alert with title and description.",
      },
    },
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Destructive variant for error messages and critical alerts.",
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <Info className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alert with an icon. Icons are automatically positioned and styled.",
      },
    },
  },
}

export const WithAction: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
      <AlertAction>
        <Button variant="ghost" size="sm">
          <X className="size-4" />
        </Button>
      </AlertAction>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alert with an action button in the top-right corner.",
      },
    },
  },
}

export const Complete: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <Info className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
      <AlertAction>
        <Button variant="ghost" size="sm">
          <X className="size-4" />
        </Button>
      </AlertAction>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete alert example with icon, title, description, and action button.",
      },
    },
  },
}
