import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"

const meta = {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A non-modal dialog that floats around a trigger element, typically used for displaying additional content or actions.\n\nThis component is built on top of [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover).\n\n### Component Parts\n- [PopoverTrigger](?path=/story/ui-popover-popovertrigger--default): The element that toggles the popover open/closed.\n- [PopoverContent](?path=/story/ui-popover-popovercontent--default): The popover panel that appears when opened.\n- [PopoverAnchor](?path=/story/ui-popover-popoveranchor--default): Optional anchor element for aligning PopoverContent.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      description:
        "The open state of the popover when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    open: {
      description:
        "The controlled open state of the popover. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the popover changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    modal: {
      description:
        "If true, the popover will behave like a modal, preventing interaction with elements outside of it.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic popover that opens when clicking the trigger button.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <Popover open={open} onOpenChange={(isOpen) => {
          setOpen(isOpen)
          args.onOpenChange?.(isOpen)
        }}>
          <PopoverTrigger asChild>
            <Button variant="outline">Controlled Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Controlled State</h4>
              <p className="text-sm text-muted-foreground">
                This popover's open state is controlled externally.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            const newOpen = !open
            setOpen(newOpen)
            args.onOpenChange?.(newOpen)
          }}
        >
          Toggle: {open ? "Open" : "Closed"}
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A popover with controlled open state that can be toggled programmatically.",
      },
    },
  },
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width" className="text-sm">
                Width
              </label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxWidth" className="text-sm">
                Max. width
              </label>
              <input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8 rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height" className="text-sm">
                Height
              </label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxHeight" className="text-sm">
                Max. height
              </label>
              <input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8 rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A popover containing a form with multiple input fields.",
      },
    },
  },
}

export const Modal: Story = {
  render: () => (
    <Popover modal>
      <PopoverTrigger asChild>
        <Button variant="outline">Modal Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Modal Popover</h4>
          <p className="text-sm text-muted-foreground">
            This popover behaves like a modal, preventing interaction with elements outside of it.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover with modal behavior that prevents interaction with elements outside of it.",
      },
    },
  },
}
