import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible"
import { Button } from "~/components/ui/button"
import { ChevronDown } from "lucide-react"

const meta = {
  title: "UI/Collapsible/CollapsibleTrigger",
  component: CollapsibleTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The button that toggles the visibility of the content. Must be used within a Collapsible component.\n\nThis component is built on top of [Radix UI Collapsible Trigger](https://www.radix-ui.com/primitives/docs/components/collapsible#trigger).",
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
} satisfies Meta<typeof CollapsibleTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible className="w-[400px]">
      <CollapsibleTrigger {...args} asChild>
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
          "A basic collapsible trigger that toggles the content visibility.",
      },
    },
  },
}

export const WithLongText: Story = {
  render: () => (
    <Collapsible className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>
            This is a longer trigger text that demonstrates how the collapsible
            trigger handles multiple lines of content
          </span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          The trigger text wraps to multiple lines when needed, and the chevron
          icon remains aligned properly.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A collapsible trigger with longer text that wraps to multiple lines.",
      },
    },
  },
}

export const CustomButton: Story = {
  render: () => (
    <Collapsible className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>Click to expand</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          This trigger uses a different button variant to demonstrate
          customization options.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A collapsible trigger using a custom button variant (outline instead of ghost).",
      },
    },
  },
}

export const WithoutIcon: Story = {
  render: () => (
    <Collapsible className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full">
          Toggle content visibility
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          This trigger doesn't include a chevron icon, demonstrating that icons
          are optional.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A collapsible trigger without an icon, showing that icons are optional.",
      },
    },
  },
}
