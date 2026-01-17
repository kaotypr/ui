import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible"
import { Button } from "~/components/ui/button"
import { ChevronDown } from "lucide-react"

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An interactive component that expands or collapses to show or hide content.\n\nThis component is built on top of [Radix UI Collapsible](https://www.radix-ui.com/primitives/docs/components/collapsible).\n\n### Component Parts\n- [CollapsibleTrigger](?path=/story/ui-collapsible-collapsibletrigger--default): The button that toggles the visibility of the content.\n- [CollapsibleContent](?path=/story/ui-collapsible-collapsiblecontent--default): The content area that is shown or hidden when toggled.",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the collapsible. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The default open state when uncontrolled. The collapsible will be open by default if set to true.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state changes. Receives the new open state (boolean).",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the collapsible.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
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
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible {...(args as any)} className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>@peduarte starred 3 repositories</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic collapsible component that expands and collapses to show or hide content.",
      },
    },
  },
}

export const DefaultOpen: Story = {
  render: (args) => (
    <Collapsible {...(args as any)} defaultOpen className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>@peduarte starred 3 repositories</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A collapsible that is open by default (uncontrolled mode with defaultOpen).",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <Collapsible
        {...(args as any)}
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen)
          args.onOpenChange?.(isOpen)
        }}
        className="w-[400px]"
      >
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            <span>@peduarte starred 3 repositories</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled collapsible where the open state is managed by React state.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Collapsible {...(args as any)} disabled className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between" disabled>
          <span>@peduarte starred 3 repositories</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled collapsible that cannot be interacted with.",
      },
    },
  },
}

export const WithLongContent: Story = {
  render: () => (
    <Collapsible className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>Show more information</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <p className="mb-2">
            This is a longer content example that demonstrates how the collapsible
            handles multiple paragraphs and structured content.
          </p>
          <p className="mb-2">
            The content area can contain any HTML elements, including lists,
            images, and other components.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>First item in a list</li>
            <li>Second item in a list</li>
            <li>Third item in a list</li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A collapsible with longer, structured content including multiple paragraphs and lists.",
      },
    },
  },
}
