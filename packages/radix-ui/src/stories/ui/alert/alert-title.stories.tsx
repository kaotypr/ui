import type { Meta, StoryObj } from "@storybook/react-vite"
import { Info, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"

const meta = {
  title: "UI/Alert/AlertTitle",
  component: AlertTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The title text of the alert. Must be used within an Alert component.",
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
} satisfies Meta<typeof AlertTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert className="w-[400px]">
      <AlertTitle {...args}>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic alert title with default styling.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This alert has an icon and a title.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "An alert title displayed alongside an icon.",
      },
    },
  },
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "An alert title in a destructive variant alert.",
      },
    },
  },
}

export const LongTitle: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>
        This is a longer alert title that demonstrates how the component handles
        extended text content
      </AlertTitle>
      <AlertDescription>
        The title will be truncated with an ellipsis if it's too long.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An alert title with longer text that demonstrates line clamping behavior.",
      },
    },
  },
}
