import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea } from "~/components/ui/scroll-area"

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Augments native scroll functionality for custom, stylable scrollbars.\n\nThis component is built on top of [Radix UI ScrollArea](https://www.radix-ui.com/primitives/docs/components/scroll-area).\n\n### Component Parts\n- [ScrollBar](?path=/story/ui-scroll-area-scrollbar--default): The scrollbar component that can be customized with orientation and styling.",
      },
    },
  },
  argTypes: {
    type: {
      description:
        "Controls scrollbar visibility behavior. 'auto' shows scrollbars when content overflows, 'always' always shows scrollbars, 'scroll' shows scrollbars while scrolling, 'hover' shows scrollbars on hover.",
      table: {
        type: { summary: '"auto" | "always" | "scroll" | "hover"' },
        defaultValue: { summary: '"hover"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["auto", "always", "scroll", "hover"],
    },
    scrollHideDelay: {
      description:
        "Time in milliseconds to wait after user stops interacting before hiding scrollbars (for 'hover' or 'scroll' types).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "600" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    dir: {
      description:
        "The reading direction. If omitted, inherits globally from DirectionProvider or assumes LTR.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
    nonce: {
      description:
        "For Content Security Policy usage; attaches nonce to inline styles.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
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
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-72 w-80 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Scrollable Content</h4>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - This is some content that will overflow and require
            scrolling.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic scroll area with vertical scrolling. The scrollbar appears on hover by default.",
      },
    },
  },
}

export const WithLongContent: Story = {
  render: () => (
    <ScrollArea className="h-64 w-96 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Long Article</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i} className="text-sm leading-relaxed">
            Paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area containing a long article with many paragraphs. Scroll to see all content.",
      },
    },
  },
}

export const AlwaysVisible: Story = {
  render: () => (
    <ScrollArea type="always" className="h-72 w-80 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Always Visible Scrollbar</h4>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - Scrollbar is always visible regardless of hover
            state.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with always visible scrollbars using the 'always' type.",
      },
    },
  },
}

export const AutoType: Story = {
  render: () => (
    <ScrollArea type="auto" className="h-72 w-80 rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Auto Scrollbar</h4>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - Scrollbar appears automatically when content
            overflows.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with auto scrollbar visibility. Scrollbars appear when content overflows.",
      },
    },
  },
}

export const CustomScrollHideDelay: Story = {
  render: () => (
    <ScrollArea
      type="hover"
      scrollHideDelay={1000}
      className="h-72 w-80 rounded-md border p-4"
    >
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Custom Hide Delay</h4>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - Scrollbar hides after 1 second of inactivity.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with a custom scrollHideDelay of 1000ms. The scrollbar stays visible longer after interaction.",
      },
    },
  },
}

export const WithCustomStyling: Story = {
  render: () => (
    <ScrollArea className="h-72 w-80 rounded-lg border-2 border-primary/20 bg-muted/50 p-6">
      <div className="space-y-4">
        <h4 className="text-base font-semibold text-primary">
          Custom Styled Scroll Area
        </h4>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="rounded-md bg-background p-3 text-sm shadow-sm"
          >
            Card {i + 1} - Custom styling with background and padding.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with custom styling including background color, border, and padding.",
      },
    },
  },
}

export const RTL: Story = {
  render: () => (
    <div dir="rtl">
      <ScrollArea className="h-72 w-80 rounded-md border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">RTL Scroll Area</h4>
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="text-sm">
              פריט {i + 1} - זהו תוכן בעברית עם כיוון קריאה מימין לשמאל.
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A scroll area with right-to-left (RTL) direction. The scrollbar appears on the left side.",
      },
    },
  },
}
