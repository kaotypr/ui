import type { Meta, StoryObj } from "@storybook/react-vite"

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
          "The heading element that labels the alert. Must be used inside Alert component.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Text content of the alert title.",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
      control: { type: "text" },
    },
    className: {
      description: "Additional class names to apply to the title element.",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof AlertTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Heads up!",
  },
  render: (args) => (
    <Alert>
      <AlertTitle {...args} />
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Title used to clearly label the purpose of the alert.",
      },
    },
  },
}

export const WithLink: Story = {
  args: {
    children: (
      <>
        Heads up!{" "}
        <a href="#" className="underline underline-offset-3">
          Learn more
        </a>
      </>
    ),
  },
  render: (args) => (
    <Alert>
      <AlertTitle {...args} />
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Title with an embedded link. Links are automatically styled.",
      },
    },
  },
}
