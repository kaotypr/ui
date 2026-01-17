import type { Meta, StoryObj } from "@storybook/react-vite"
import { Info, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"

const meta = {
  title: "UI/Alert/AlertDescription",
  component: AlertDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The description text of the alert. Must be used within an Alert component.",
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
} satisfies Meta<typeof AlertDescription>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription {...args}>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic alert description with default styling.",
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
        This alert has an icon, title, and description.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "An alert description displayed alongside an icon and title.",
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
        story: "An alert description in a destructive variant alert.",
      },
    },
  },
}

export const WithoutTitle: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertDescription>
        This alert only has a description without a title.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "An alert description used without a title.",
      },
    },
  },
}

export const LongContent: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Info className="h-4 w-4" />
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        <p className="mb-2">
          This is a longer alert description that demonstrates how the
          component handles extended content. The description can contain
          multiple paragraphs and structured content.
        </p>
        <p>
          You can use this component to display important information, warnings,
          or notifications to users in a clear and accessible way.
        </p>
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An alert description with longer content including multiple paragraphs.",
      },
    },
  },
}

export const WithStructuredContent: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Info className="h-4 w-4" />
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>
        <p className="mb-2">A new version of the application is available.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Improved performance</li>
          <li>Bug fixes</li>
          <li>New features</li>
        </ul>
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An alert description with structured content including lists.",
      },
    },
  },
}
