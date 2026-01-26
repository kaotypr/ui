import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"

const meta = {
  title: "UI/Popover/PopoverTrigger",
  component: PopoverTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The element that toggles the popover open/closed. Must be used within a Popover component.\n\nThis component is built on top of [Radix UI Popover Trigger](https://www.radix-ui.com/primitives/docs/components/popover#trigger).",
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
  },
} satisfies Meta<typeof PopoverTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger {...args} asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Popover Content</h4>
          <p className="text-sm text-muted-foreground">
            This is the content that appears when the trigger is clicked.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic popover trigger using a button element.",
      },
    },
  },
}

export const WithCustomElement: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <span className="cursor-pointer rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
          Custom Trigger Element
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Custom Trigger</h4>
          <p className="text-sm text-muted-foreground">
            The trigger can be any element when using asChild.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover trigger using a custom element instead of the default button.",
      },
    },
  },
}

export const WithLink: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <a
          href="#"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Click me
        </a>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Link Trigger</h4>
          <p className="text-sm text-muted-foreground">
            The trigger can also be a link element.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A popover trigger using a link element.",
      },
    },
  },
}
