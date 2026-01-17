import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Bold, Italic, Underline } from "lucide-react"
import { Toggle } from "~/components/ui/toggle"

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A two-state button that can be toggled on or off. Useful for toolbar buttons, formatting controls, and toggleable actions.\n\nThis component is built on top of [Radix UI Toggle](https://www.radix-ui.com/primitives/docs/components/toggle).",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the toggle button.",
      table: {
        type: { summary: '"default" | "outline"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "outline"],
    },
    size: {
      description: "The size of the toggle button.",
      table: {
        type: { summary: '"default" | "sm" | "lg"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    pressed: {
      description:
        "The controlled pressed state of the toggle. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultPressed: {
      description:
        "The default pressed state when uncontrolled. Sets the initial state of the toggle.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onPressedChange: {
      description:
        "Event handler called when the pressed state changes. Receives the new pressed state (boolean).",
      table: {
        type: { summary: "(pressed: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onPressedChange",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the toggle.",
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
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
  parameters: {
    docs: {
      description: {
        story: "A basic toggle button with text content.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  ),
  parameters: {
    docs: {
      description: {
        story: "A toggle button with an icon. Use aria-label for accessibility.",
      },
    },
  },
}

export const Pressed: Story = {
  render: (args) => (
    <Toggle {...args} defaultPressed aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  ),
  parameters: {
    docs: {
      description: {
        story: "A toggle button that is pressed by default (uncontrolled).",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [pressed, setPressed] = useState(false)
    return (
      <Toggle
        {...args}
        pressed={pressed}
        onPressedChange={(value) => {
          setPressed(value)
          args.onPressedChange?.(value)
        }}
        aria-label="Toggle bold"
      >
        <Bold className="size-4" />
      </Toggle>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled toggle using React state. The pressed state is managed externally.",
      },
    },
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} variant="default" aria-label="Default variant">
        <Bold className="size-4" />
      </Toggle>
      <Toggle {...args} variant="outline" aria-label="Outline variant">
        <Italic className="size-4" />
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Toggle buttons with different visual variants.",
      },
    },
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} size="sm" aria-label="Small toggle">
        <Bold className="size-4" />
      </Toggle>
      <Toggle {...args} size="default" aria-label="Default toggle">
        <Bold className="size-4" />
      </Toggle>
      <Toggle {...args} size="lg" aria-label="Large toggle">
        <Bold className="size-4" />
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Toggle buttons in different sizes: small, default, and large.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Toggle {...args} disabled aria-label="Disabled unpressed">
          <Bold className="size-4" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Disabled unpressed</span>
      </div>
      <div className="flex items-center gap-2">
        <Toggle
          {...args}
          disabled
          defaultPressed
          aria-label="Disabled pressed"
        >
          <Bold className="size-4" />
        </Toggle>
        <span className="text-sm text-muted-foreground">Disabled pressed</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled toggle buttons in both unpressed and pressed states.",
      },
    },
  },
}

export const TextFormattingToolbar: Story = {
  render: (args) => {
    const [formatting, setFormatting] = useState({
      bold: false,
      italic: false,
      underline: false,
    })

    const handleChange = (key: keyof typeof formatting, pressed: boolean) => {
      setFormatting((prev) => ({ ...prev, [key]: pressed }))
      args.onPressedChange?.(pressed)
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1 border rounded-md p-1">
          <Toggle
            {...args}
            pressed={formatting.bold}
            onPressedChange={(pressed) => handleChange("bold", pressed)}
            aria-label="Bold"
          >
            <Bold className="size-4" />
          </Toggle>
          <Toggle
            {...args}
            pressed={formatting.italic}
            onPressedChange={(pressed) => handleChange("italic", pressed)}
            aria-label="Italic"
          >
            <Italic className="size-4" />
          </Toggle>
          <Toggle
            {...args}
            pressed={formatting.underline}
            onPressedChange={(pressed) => handleChange("underline", pressed)}
            aria-label="Underline"
          >
            <Underline className="size-4" />
          </Toggle>
        </div>
        <div className="p-3 bg-muted rounded-md">
          <p className="text-sm font-medium mb-2">Active Formatting:</p>
          <pre className="text-xs text-muted-foreground">
            {JSON.stringify(formatting, null, 2)}
          </pre>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A text formatting toolbar example showing multiple toggles working together, similar to a rich text editor.",
      },
    },
  },
}

export const WithText: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} variant="default">
        Bold
      </Toggle>
      <Toggle {...args} variant="outline">
        Italic
      </Toggle>
      <Toggle {...args} variant="outline" defaultPressed>
        Underline
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Toggle buttons with text labels instead of icons.",
      },
    },
  },
}

export const WithIconAndText: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} variant="default">
        <Bold className="size-4" />
        Bold
      </Toggle>
      <Toggle {...args} variant="outline">
        <Italic className="size-4" />
        Italic
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Toggle buttons with both icons and text labels.",
      },
    },
  },
}
