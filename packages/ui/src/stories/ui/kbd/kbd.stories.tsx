import type { Meta, StoryObj } from "@storybook/react-vite"
import { Kbd } from "~/components/ui/kbd"

const meta = {
  title: "UI/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled component for displaying keyboard keys and shortcuts. Used to show textual user input from the keyboard (e.g., keys like `Ctrl`, `⌘`, `Shift`) in a visually distinct way.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/kbd).\n\n### Component Parts\n- [KbdGroup](?path=/story/ui-kbd-kbdgroup--default): A container component for grouping multiple keyboard keys together to represent shortcuts or key combinations.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Additional CSS class names to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    children: {
      description: "The content to display inside the keyboard key (text or elements)",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Ctrl",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic keyboard key displaying a single key name.",
      },
    },
  },
}

export const SingleKeys: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Kbd>Ctrl</Kbd>
      <Kbd>⌘</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Space</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various single keyboard keys showing different key names and symbols.",
      },
    },
  },
}

export const LetterKeys: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Kbd>A</Kbd>
      <Kbd>B</Kbd>
      <Kbd>C</Kbd>
      <Kbd>S</Kbd>
      <Kbd>P</Kbd>
      <Kbd>Q</Kbd>
      <Kbd>W</Kbd>
      <Kbd>E</Kbd>
      <Kbd>R</Kbd>
      <Kbd>T</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Single letter keys commonly used in keyboard shortcuts.",
      },
    },
  },
}

export const NumberKeys: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Kbd>1</Kbd>
      <Kbd>2</Kbd>
      <Kbd>3</Kbd>
      <Kbd>4</Kbd>
      <Kbd>5</Kbd>
      <Kbd>6</Kbd>
      <Kbd>7</Kbd>
      <Kbd>8</Kbd>
      <Kbd>9</Kbd>
      <Kbd>0</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Number keys that can be used in keyboard shortcuts.",
      },
    },
  },
}

export const FunctionKeys: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Kbd>F1</Kbd>
      <Kbd>F2</Kbd>
      <Kbd>F3</Kbd>
      <Kbd>F4</Kbd>
      <Kbd>F5</Kbd>
      <Kbd>F6</Kbd>
      <Kbd>F7</Kbd>
      <Kbd>F8</Kbd>
      <Kbd>F9</Kbd>
      <Kbd>F10</Kbd>
      <Kbd>F11</Kbd>
      <Kbd>F12</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Function keys (F1-F12) commonly used in applications.",
      },
    },
  },
}

export const InText: Story = {
  render: () => (
    <div className="space-y-2 text-sm">
      <p>
        Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save your work.
      </p>
      <p>
        Use <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
      </p>
      <p>
        Press <Kbd>Esc</Kbd> to close the dialog.
      </p>
      <p>
        Navigate with <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd> arrow
        keys.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard keys displayed inline within text to show keyboard shortcuts and instructions.",
      },
    },
  },
}

export const InButton: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90"
      >
        Save <Kbd>S</Kbd>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        Print <Kbd>⌘</Kbd> <Kbd>P</Kbd>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        Search <Kbd>Ctrl</Kbd> <Kbd>K</Kbd>
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard keys displayed inside buttons to show available keyboard shortcuts for actions.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Kbd className="bg-blue-500 text-white">Custom Blue</Kbd>
      <Kbd className="bg-green-500 text-white">Custom Green</Kbd>
      <Kbd className="bg-red-500 text-white">Custom Red</Kbd>
      <Kbd className="text-lg px-2 py-1">Larger</Kbd>
      <Kbd className="text-xs px-0.5">Smaller</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard keys with custom styling applied via className prop.",
      },
    },
  },
}
