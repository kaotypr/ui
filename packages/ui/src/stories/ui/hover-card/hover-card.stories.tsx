import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "~/components/ui/hover-card"

const meta = {
  title: "UI/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card that appears when hovering over a trigger element, providing additional context or information.\n\nThis component is built on top of [Radix UI Hover Card](https://www.radix-ui.com/primitives/docs/components/hover-card).\n\n### Component Parts\n- [HoverCardTrigger](?path=/story/ui-hovercard-hovercardtrigger--default): The element that triggers the hover card when hovered.\n- [HoverCardContent](?path=/story/ui-hovercard-hovercardcontent--default): The content that appears when hovering over the trigger.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      description:
        "The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    open: {
      description:
        "The controlled open state of the hover card. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the hover card changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    openDelay: {
      description:
        "The duration in milliseconds from when the mouse enters the trigger until the hover card opens.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    closeDelay: {
      description:
        "The duration in milliseconds from when the mouse leaves the trigger or content until the hover card closes.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic hover card that appears when hovering over a trigger element.",
      },
    },
  },
}

export const WithCustomDelays: Story = {
  render: () => (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link">Fast Response</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Quick Info</h4>
          <p className="text-sm">
            This hover card opens and closes quickly with custom delays.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card with custom open and close delays for faster response times.",
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="flex flex-col gap-4">
        <HoverCard open={open} onOpenChange={setOpen}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Controlled Hover Card</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Controlled State</h4>
              <p className="text-sm">
                This hover card's open state is controlled externally.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setOpen(!open)}
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
          "A hover card with controlled open state that can be toggled programmatically.",
      },
    },
  },
}
