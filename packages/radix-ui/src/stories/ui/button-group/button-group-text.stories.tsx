import type { Meta, StoryObj } from "@storybook/react-vite"
import { Clock } from "lucide-react"
import { Button } from "~/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "~/components/ui/button-group"

const meta = {
  title: "UI/ButtonGroup/ButtonGroupText",
  component: ButtonGroupText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A text element styled to match the button group appearance. Must be used within a ButtonGroup component to maintain proper styling and spacing.",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Change the component to the HTML tag or custom component of the only child. Uses Radix UI Slot.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
    },
    className: {
      control: "text",
      description: "Additional CSS class names to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
    },
  },
} satisfies Meta<typeof ButtonGroupText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupText {...args}>or</ButtonGroupText>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A text element between two buttons in a button group.",
      },
    },
  },
}

export const WithLongText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Previous</Button>
      <ButtonGroupText>or press ESC to cancel</ButtonGroupText>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A text element with longer content.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Edit</Button>
      <ButtonGroupText>
        <Clock />
        Status: Active
      </ButtonGroupText>
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A text element with an icon inside.",
      },
    },
  },
}

export const AsChild: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupText asChild>
        <span className="font-semibold">or</span>
      </ButtonGroupText>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Using the `asChild` prop to render the text element as a different element (e.g., a span with custom styling). This uses Radix UI Slot for composition.",
      },
    },
  },
}

export const MultipleTextElements: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Action 1</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Button variant="outline">Action 2</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Button variant="outline">Action 3</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple text elements within a single button group.",
      },
    },
  },
}

export const InVerticalGroup: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A text element in a vertical button group.",
      },
    },
  },
}
