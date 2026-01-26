import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "~/components/ui/button-group"

const meta = {
  title: "UI/ButtonGroup/ButtonGroupSeparator",
  component: ButtonGroupSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A separator element for dividing button groups. Must be used within a ButtonGroup component to maintain proper styling and spacing. This component is built on top of [Radix UI Separator](https://www.radix-ui.com/primitives/docs/components/separator).",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"vertical"' },
        category: "Props",
      },
    },
    decorative: {
      control: "boolean",
      description:
        "When true, indicates that the separator is purely decorative and does not divide content semantically.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
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
} satisfies Meta<typeof ButtonGroupSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup>
      <Button variant="outline">Action 1</Button>
      <ButtonGroupSeparator {...args} />
      <Button variant="outline">Action 2</Button>
      <ButtonGroupSeparator {...args} />
      <Button variant="outline">Action 3</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Vertical separators (default) in a horizontal button group.",
      },
    },
  },
}

export const HorizontalSeparators: Story = {
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
        story: "Horizontal separators in a vertical button group.",
      },
    },
  },
}

export const MultipleSeparators: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">First</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Second</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Third</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Fourth</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple separators dividing several buttons.",
      },
    },
  },
}

export const WithTextAndSeparators: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Edit</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">View</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Separators used with buttons in a button group.",
      },
    },
  },
}

export const InVerticalGroup: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="outline">Middle</Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Horizontal separators in a vertical button group.",
      },
    },
  },
}

export const WithDifferentVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="default">Default</Button>
        <ButtonGroupSeparator />
        <Button variant="default">Default</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Secondary</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary">Secondary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive">Delete</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Remove</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Separators with different button variants.",
      },
    },
  },
}
