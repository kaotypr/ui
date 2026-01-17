import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible"
import { Button } from "~/components/ui/button"
import { ChevronDown } from "lucide-react"

const meta = {
  title: "UI/Collapsible/CollapsibleContent",
  component: CollapsibleContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The content area that is shown or hidden when the collapsible is toggled. Must be used within a Collapsible component.\n\nThis component is built on top of [Radix UI Collapsible Content](https://www.radix-ui.com/primitives/docs/components/collapsible#content).",
      },
    },
  },
  argTypes: {
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. When true, the content is mounted even when closed.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof CollapsibleContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible defaultOpen className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>@peduarte starred 3 repositories</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent {...args} className="space-y-2">
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
          "A basic collapsible content area that expands and collapses.",
      },
    },
  },
}

export const LongContent: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>Long Content Example</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <p className="mb-2">
            This is a longer content example that demonstrates how the collapsible
            content handles multiple paragraphs and longer text.
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
          "Collapsible content with multiple paragraphs and structured content.",
      },
    },
  },
}

export const WithNestedComponents: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>Nested Components Example</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <h4 className="font-semibold mb-2">Section Title</h4>
          <p className="text-sm text-muted-foreground mb-2">
            This content area demonstrates that you can include nested components
            and structured content.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Action 1
            </Button>
            <Button size="sm" variant="outline">
              Action 2
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Collapsible content with nested components, headings, and interactive elements.",
      },
    },
  },
}

export const ForceMount: Story = {
  render: () => (
    <Collapsible className="w-[400px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          <span>Force Mount Example</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent forceMount className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This content is force-mounted, meaning it remains in the DOM even when
          closed. This is useful for animation libraries that need the element
          to be present.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Collapsible content with forceMount enabled, keeping the content in the DOM even when closed.",
      },
    },
  },
}
