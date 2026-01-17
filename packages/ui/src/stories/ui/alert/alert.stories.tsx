import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertCircle, Info, CheckCircle2, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"

const meta = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component for displaying important messages to users with optional icons and variants.\n\n### Component Parts\n- [AlertTitle](?path=/story/ui-alert-alerttitle--default): The title text of the alert.\n- [AlertDescription](?path=/story/ui-alert-alertdescription--default): The description text of the alert.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the alert.",
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"default"' },
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
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic alert with a title and description.",
      },
    },
  },
}

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "destructive",
  },
  parameters: {
    docs: {
      description: {
        story: "A destructive alert variant for error messages.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational alert with an icon.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "An alert with an icon displayed on the left side.",
      },
    },
  },
}

export const Success: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "An alert with a success icon for positive feedback.",
      },
    },
  },
}

export const AlertError: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <XCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "A destructive alert with an error icon.",
      },
    },
  },
}

export const WithoutTitle: Story = {
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <AlertDescription>
        This alert only has a description without a title.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "An alert with only a description, no title.",
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
          This is a longer alert message that demonstrates how the component
          handles extended content. The description can contain multiple
          paragraphs and structured content.
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
        story: "An alert with longer content including multiple paragraphs.",
      },
    },
  },
}
