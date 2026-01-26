import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "~/components/ui/separator"

const meta = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A visual separator component used to divide content sections. Can be displayed horizontally or vertically.\n\nThis component is built on top of [Radix UI Separator](https://www.radix-ui.com/primitives/docs/components/separator).",
      },
    },
  },
  argTypes: {
    orientation: {
      description:
        "The orientation of the separator. Horizontal separators span the full width, vertical separators span the full height.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    decorative: {
      description:
        "When true, indicates that the separator is purely decorative and does not divide content semantically. When false, the separator will have role='separator' for assistive technologies.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          Content above the separator
        </p>
      </div>
      <Separator {...args} />
      <div>
        <h3 className="text-sm font-medium mb-2">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          Content below the separator
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic horizontal separator dividing two content sections.",
      },
    },
  },
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Top Section</h3>
        <p className="text-sm text-muted-foreground">
          This is the top section of content.
        </p>
      </div>
      <Separator orientation="horizontal" />
      <div>
        <h3 className="text-sm font-medium mb-2">Middle Section</h3>
        <p className="text-sm text-muted-foreground">
          This is the middle section of content.
        </p>
      </div>
      <Separator orientation="horizontal" />
      <div>
        <h3 className="text-sm font-medium mb-2">Bottom Section</h3>
        <p className="text-sm text-muted-foreground">
          This is the bottom section of content.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal separators spanning the full width, dividing vertical content sections.",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-32">
      <div>
        <h3 className="text-sm font-medium">Left</h3>
        <p className="text-sm text-muted-foreground">Content</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <h3 className="text-sm font-medium">Middle</h3>
        <p className="text-sm text-muted-foreground">Content</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <h3 className="text-sm font-medium">Right</h3>
        <p className="text-sm text-muted-foreground">Content</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical separators spanning the full height, dividing horizontal content sections.",
      },
    },
  },
}

export const InCard: Story = {
  render: () => (
    <div className="w-80 border rounded-lg p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">
          Card description text goes here.
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Details</h4>
        <p className="text-sm text-muted-foreground">
          Additional information in the card.
        </p>
      </div>
      <Separator />
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Footer content</span>
        <span className="text-sm font-medium">Action</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Separators used within a card component to divide sections.",
      },
    },
  },
}

export const InList: Story = {
  render: () => (
    <div className="w-80 border rounded-lg">
      <div className="p-4">
        <h3 className="text-sm font-medium mb-1">List Item 1</h3>
        <p className="text-xs text-muted-foreground">Description for item 1</p>
      </div>
      <Separator />
      <div className="p-4">
        <h3 className="text-sm font-medium mb-1">List Item 2</h3>
        <p className="text-xs text-muted-foreground">Description for item 2</p>
      </div>
      <Separator />
      <div className="p-4">
        <h3 className="text-sm font-medium mb-1">List Item 3</h3>
        <p className="text-xs text-muted-foreground">Description for item 3</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Separators dividing items in a list or menu.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A separator with centered text, commonly used for 'or' dividers in forms.",
      },
    },
  },
}

export const Semantic: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          Content above the semantic separator
        </p>
      </div>
      <Separator decorative={false} />
      <div>
        <h3 className="text-sm font-medium mb-2">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          Content below the semantic separator. This separator has role='separator' for assistive technologies.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A semantic separator (decorative=false) that is recognized by assistive technologies as a content divider.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <Separator />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Thicker (h-0.5)</p>
        <Separator className="h-0.5" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Custom Color</p>
        <Separator className="bg-primary" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">With Margin</p>
        <Separator className="my-4" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Vertical - Thicker</p>
        <div className="flex items-center gap-4 h-20">
          <span className="text-sm">Left</span>
          <Separator orientation="vertical" className="w-0.5" />
          <span className="text-sm">Right</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Separators with custom styling using the className prop for different thicknesses, colors, and spacing.",
      },
    },
  },
}

export const InForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <Separator />
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Separators used to divide form sections.",
      },
    },
  },
}
