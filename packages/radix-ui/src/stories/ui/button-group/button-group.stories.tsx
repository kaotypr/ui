import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "~/components/ui/button-group"

const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component that groups buttons together, removing borders between adjacent buttons to create a cohesive button group.\n\nThis component uses [Radix UI Slot](https://www.radix-ui.com/primitives/docs/components/slot) for composition support via the `asChild` prop in ButtonGroupText.\n\n### Component Parts\n- [ButtonGroupText](?path=/story/ui-buttongroup-buttongrouptext--default): A text element styled to match the button group appearance.\n- [ButtonGroupSeparator](?path=/story/ui-buttongroup-buttongroupseparator--default): A separator element for dividing button groups.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the button group.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
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
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic horizontal button group with three buttons.",
      },
    },
  },
}

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline">Previous</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A horizontal button group (default orientation).",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A vertical button group.",
      },
    },
  },
}

export const WithVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="default">Default</Button>
        <Button variant="default">Default</Button>
        <Button variant="default">Default</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive">Delete</Button>
        <Button variant="destructive">Remove</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button groups with different button variants.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A button group with a text element in between buttons.",
      },
    },
  },
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Action 1</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Action 2</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Action 3</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A button group with separators between buttons.",
      },
    },
  },
}

export const MixedContent: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Edit</Button>
      <ButtonGroupSeparator />
      <ButtonGroupText>Status: Active</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A button group with mixed content: buttons, separators, and text elements.",
      },
    },
  },
}

export const VerticalWithSeparator: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Option 1</Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="outline">Option 2</Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="outline">Option 3</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A vertical button group with horizontal separators.",
      },
    },
  },
}
