import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.\n\nThis component is built on top of [Radix UI Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip).\n\n### Component Parts\n- [TooltipTrigger](?path=/story/ui-tooltip-tooltiptrigger--default): The element that triggers the tooltip when hovered or focused.\n- [TooltipContent](?path=/story/ui-tooltip-tooltipcontent--default): The tooltip panel that appears when triggered.\n- [TooltipProvider](?path=/story/ui-tooltip-tooltipprovider--default): Provides context and configuration for tooltip behavior.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      description:
        "The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    open: {
      description:
        "The controlled open state of the tooltip. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the tooltip changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    delayDuration: {
      description:
        "The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with the same name passed to Provider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    disableHoverableContent: {
      description:
        "When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
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
        story:
          "A basic tooltip that appears when hovering over or focusing the trigger element.",
      },
    },
  },
}

export const WithCustomDelay: Story = {
  render: () => (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        <Button variant="outline">Fast Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip appears quickly with a 100ms delay</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip with a custom delay duration for faster response time.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <Tooltip
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <TooltipTrigger asChild>
            <Button variant="outline">Controlled Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip's open state is controlled externally</p>
          </TooltipContent>
        </Tooltip>
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
          "A tooltip with controlled open state that can be toggled programmatically.",
      },
    },
  },
}

export const WithRichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Tooltip Title</h4>
          <p className="text-sm text-muted-foreground">
            This tooltip contains rich content with a title and description.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "A tooltip with rich content including a title and description.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <InfoIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Information</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "A tooltip attached to an icon button for additional context.",
      },
    },
  },
}
