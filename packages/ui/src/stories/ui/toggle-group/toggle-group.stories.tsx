import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Bold, Italic, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"

const meta = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of two-state buttons that can be toggled on or off. Supports both single and multiple selection modes.\n\nThis component is built on top of [Radix UI ToggleGroup](https://www.radix-ui.com/primitives/docs/components/toggle-group).\n\n### Component Parts\n- [ToggleGroupItem](?path=/story/ui-togglegroup-togglegroupitem--default): Represents a single toggleable item within the toggle group.",
      },
    },
  },
  argTypes: {
    // Custom Props
    variant: {
      description: "The visual variant of the toggle group items.",
      table: {
        type: { summary: '"default" | "outline"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "outline"],
    },
    size: {
      description: "The size of the toggle group items.",
      table: {
        type: { summary: '"default" | "sm" | "lg"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    spacing: {
      description:
        "The spacing between toggle group items. When set to 0, items are connected without gaps.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Props",
      },
      control: { type: "number" },
    },
    // Radix UI Props
    type: {
      description:
        "Determines whether one or multiple items can be active at the same time.",
      table: {
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
    value: {
      description:
        "The controlled value(s) of the active item(s). Use with onValueChange. For single type, use a string. For multiple type, use a string array.",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description:
        "The value(s) of the active item(s) when initially rendered (uncontrolled).",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Event handler called when the active value(s) change.",
      table: {
        type: { summary: "(value: string | string[]) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the toggle group and all its items.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    rovingFocus: {
      description:
        "When true, enables keyboard navigation focus to move among items (like a 'roving' tabindex).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    orientation: {
      description: "The layout direction of items.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
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
    loop: {
      description:
        "When true, keyboard focus loops from last item to first, and vice versa.",
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
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="single" defaultValue="bold">
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
          "A basic toggle group with three formatting options. Only one item can be active at a time (single mode). The first item is selected by default.",
      },
    },
  },
}

export const Multiple: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="multiple" defaultValue={["bold", "italic"]}>
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
          "A toggle group in multiple selection mode, allowing multiple items to be active simultaneously. Bold and italic are selected by default.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("bold")

    return (
      <ToggleGroup
        {...args}
        type="single"
        value={value}
        onValueChange={(v) => {
          setValue(v)
          args.onValueChange?.(v)
        }}
      >
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
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled toggle group where the selected value is managed by React state.",
      },
    },
  },
}

export const ControlledMultiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["bold"])

    return (
      <ToggleGroup
        {...args}
        type="multiple"
        value={value}
        onValueChange={(v) => {
          setValue(v)
          args.onValueChange?.(v)
        }}
      >
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
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled toggle group in multiple mode where the selected values are managed by React state.",
      },
    },
  },
}

export const WithText: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="single" defaultValue="left">
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
          "A toggle group with text labels instead of icons. Useful for alignment or other text-based options.",
      },
    },
  },
}

export const WithSpacing: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="single" defaultValue="bold" spacing={8}>
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
          "A toggle group with spacing between items. When spacing is 0, items are connected without gaps.",
      },
    },
  },
}

export const OutlineVariant: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="single" defaultValue="bold" variant="outline">
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
          "A toggle group with the outline variant, which adds borders around each item.",
      },
    },
  },
}

export const Sizes: Story = {
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
          "Toggle groups in different sizes: small, default, and large.",
      },
    },
  },
}

export const Vertical: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="single" defaultValue="bold" orientation="vertical">
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
        story: "A toggle group with vertical orientation.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <ToggleGroup {...args} type="single" defaultValue="bold" disabled>
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
          "A disabled toggle group that cannot be interacted with. All items are disabled.",
      },
    },
  },
}
