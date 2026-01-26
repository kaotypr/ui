import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bold, Italic, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"

const meta = {
  title: "UI/ToggleGroup/ToggleGroupItem",
  component: ToggleGroupItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Represents a single toggleable item within the toggle group. Must be used within a ToggleGroup component.\n\nThis component is built on top of [Radix UI ToggleGroup Item](https://www.radix-ui.com/primitives/docs/components/toggle-group#item).",
      },
    },
  },
  argTypes: {
    // Custom Props
    variant: {
      description: "The visual variant of the toggle item.",
      table: {
        type: { summary: '"default" | "outline"' },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "outline"],
    },
    size: {
      description: "The size of the toggle item.",
      table: {
        type: { summary: '"default" | "sm" | "lg"' },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    // Radix UI Props
    value: {
      description:
        "The unique value for this item. This value is used to determine which item(s) are active. Required.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with this specific item.",
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
    // Styling
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
} satisfies Meta<typeof ToggleGroupItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ToggleGroup type="single" defaultValue="bold">
      <ToggleGroupItem {...args} value="bold" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A toggle group item within a toggle group. The first item is selected by default.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toggle group items with text labels instead of icons. Useful for alignment or other text-based options.",
      },
    },
  },
}

export const DisabledItem: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic" disabled>
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A toggle group with one disabled item. The disabled item cannot be selected.",
      },
    },
  },
}

export const MultipleSelection: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toggle group items in multiple selection mode, allowing multiple items to be active simultaneously.",
      },
    },
  },
}

export const WithVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="single" defaultValue="bold" variant="default">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="bold" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toggle group items with different variants: default and outline.",
      },
    },
  },
}

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="single" defaultValue="bold" size="sm">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-3 w-3" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-3 w-3" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-3 w-3" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="bold" size="default">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="bold" size="lg">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-5 w-5" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-5 w-5" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-5 w-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toggle group items in different sizes: small, default, and large.",
      },
    },
  },
}
