import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"

const meta = {
  title: "UI/ScrollArea/ScrollBar",
  component: ScrollBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The scrollbar component for ScrollArea. Can be configured with vertical or horizontal orientation. Must be used within a ScrollArea component.\n\nThis component is built on top of [Radix UI ScrollArea Scrollbar](https://www.radix-ui.com/primitives/docs/components/scroll-area#scrollbar).",
      },
    },
  },
  argTypes: {
    orientation: {
      description:
        "Which direction the scrollbar is for. 'vertical' for vertical scrolling, 'horizontal' for horizontal scrolling.",
      table: {
        type: { summary: '"vertical" | "horizontal"' },
        defaultValue: { summary: '"vertical"' },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
    forceMount: {
      description:
        "Mount the scrollbar even if it's not currently visible; useful for animation control.",
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
} satisfies Meta<typeof ScrollBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-80 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Vertical Scrollbar</h4>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - This content requires vertical scrolling.
          </div>
        ))}
      </div>
      <ScrollBar {...args} />
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with a default vertical scrollbar. The scrollbar appears on the right side.",
      },
    },
  },
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border p-4">
      <div className="flex gap-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex min-w-[200px] flex-shrink-0 items-center justify-center rounded-md border bg-muted p-4 text-sm"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with a horizontal scrollbar. Useful for horizontal content like image galleries or card carousels.",
      },
    },
  },
}

export const BothOrientations: Story = {
  render: () => (
    <ScrollArea className="h-64 w-80 rounded-md border p-4">
      <div className="flex gap-4">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="flex min-w-[300px] flex-shrink-0 flex-col gap-2">
            <h5 className="text-sm font-medium">Column {i + 1}</h5>
            {Array.from({ length: 10 }, (_, j) => (
              <div
                key={j}
                className="rounded-md border bg-muted p-2 text-xs"
              >
                Item {j + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with both vertical and horizontal scrollbars. Useful for content that overflows in both directions.",
      },
    },
  },
}

export const ForceMount: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Force Mounted Scrollbar</h4>
        <p className="text-xs text-muted-foreground">
          This scrollbar is force mounted, meaning it's always in the DOM even
          when not visible. Useful for animations.
        </p>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar forceMount />
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with a force mounted scrollbar. The scrollbar remains in the DOM even when not visible, which is useful for CSS animations.",
      },
    },
  },
}

export const CustomStyled: Story = {
  render: () => (
    <ScrollArea className="h-72 w-80 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Custom Styled Scrollbar</h4>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - Scrollbar has custom styling applied.
          </div>
        ))}
      </div>
      <ScrollBar className="w-4 border-l-2 border-primary/20" />
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with a custom styled scrollbar. The scrollbar has increased width and a colored border.",
      },
    },
  },
}

export const HorizontalWithCustomStyling: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border p-4">
      <div className="flex gap-4">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="flex min-w-[180px] flex-shrink-0 items-center justify-center rounded-md border-2 border-primary/20 bg-primary/5 p-4 text-sm font-medium"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar
        orientation="horizontal"
        className="h-3 border-t-2 border-primary/20"
      />
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A horizontal scrollbar with custom styling including increased height and a colored border.",
      },
    },
  },
}
