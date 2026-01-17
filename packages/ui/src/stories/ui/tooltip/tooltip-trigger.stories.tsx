import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip"

const meta = {
  title: "UI/Tooltip/TooltipTrigger",
  component: TooltipTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The element that triggers the tooltip when hovered or focused. Must be used within a Tooltip component.\n\nThis component is built on top of [Radix UI Tooltip Trigger](https://www.radix-ui.com/primitives/docs/components/tooltip#trigger).",
      },
    },
  },
  argTypes: {
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the trigger.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof TooltipTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger {...args} asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic tooltip trigger using a button element.",
      },
    },
  },
}

export const WithCustomElement: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="cursor-pointer rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
          Custom Trigger Element
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>The trigger can be any element when using asChild.</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip trigger using a custom element instead of the default button.",
      },
    },
  },
}

export const WithLink: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="#"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Click me
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>The trigger can also be a link element.</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "A tooltip trigger using a link element.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild disabled>
        <Button variant="outline" disabled>
          Disabled Trigger
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip won't appear because the trigger is disabled.</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A disabled tooltip trigger that prevents the tooltip from appearing.",
      },
    },
  },
}
