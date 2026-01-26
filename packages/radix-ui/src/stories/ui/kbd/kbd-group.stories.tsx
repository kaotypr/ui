import type { Meta, StoryObj } from "@storybook/react-vite"
import { Kbd, KbdGroup } from "~/components/ui/kbd"

const meta = {
  title: "UI/Kbd/KbdGroup",
  component: KbdGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for grouping multiple keyboard keys together to represent keyboard shortcuts or key combinations. Use this to display multi-key shortcuts like `Ctrl + S` or `⌘ + K` with proper spacing and alignment.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/kbd).",
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
      description:
        "The keyboard keys and separators to display inside the group (typically Kbd components and separator elements like `+` or `/`)",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
    },
  },
} satisfies Meta<typeof KbdGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <KbdGroup {...args}>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>S</Kbd>
    </KbdGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic keyboard shortcut group showing a two-key combination with a plus separator.",
      },
    },
  },
}

export const TwoKeyCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>S</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>Tab</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Alt</Kbd>
        <span>+</span>
        <Kbd>F4</Kbd>
      </KbdGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Common two-key keyboard shortcuts using different modifier keys.",
      },
    },
  },
}

export const ThreeKeyCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>S</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Alt</Kbd>
        <span>+</span>
        <Kbd>Delete</Kbd>
      </KbdGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Three-key keyboard shortcuts combining multiple modifier keys.",
      },
    },
  },
}

export const WithDifferentSeparators: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span className="mx-1">+</span>
        <Kbd>S</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span className="mx-1">/</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span className="mx-1">then</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <span className="mx-1">→</span>
        <Kbd>Tab</Kbd>
      </KbdGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard shortcuts with different separator styles (plus, slash, text, arrow).",
      },
    },
  },
}

export const InText: Story = {
  render: () => (
    <div className="space-y-3 text-sm max-w-md">
      <p>
        Press <KbdGroup><Kbd>Ctrl</Kbd><span>+</span><Kbd>S</Kbd></KbdGroup> to
        save your document.
      </p>
      <p>
        Use <KbdGroup><Kbd>⌘</Kbd><span>+</span><Kbd>K</Kbd></KbdGroup> to open
        the command palette.
      </p>
      <p>
        Press <KbdGroup><Kbd>Ctrl</Kbd><span>+</span><Kbd>Shift</Kbd><span>+</span><Kbd>N</Kbd></KbdGroup> to
        create a new window.
      </p>
      <p>
        Navigate with <KbdGroup><Kbd>Ctrl</Kbd><span>+</span><Kbd>Tab</Kbd></KbdGroup> to
        switch between tabs.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard shortcut groups displayed inline within text to show keyboard shortcuts in documentation or help text.",
      },
    },
  },
}

export const InTooltip: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm">
        Print document
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>P</Kbd>
        </KbdGroup>
      </div>
      <div className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm">
        Save file
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm">
        Search
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard shortcut groups displayed alongside action labels, commonly used in tooltips or button labels.",
      },
    },
  },
}

export const ComplexShortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>Esc</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>Option</Kbd>
        <span>+</span>
        <Kbd>Space</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Alt</Kbd>
        <span>+</span>
        <Kbd>F1</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>F10</Kbd>
      </KbdGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complex keyboard shortcuts including function keys and multiple modifier combinations.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup className="gap-2">
        <Kbd>Ctrl</Kbd>
        <span className="text-muted-foreground">+</span>
        <Kbd>S</Kbd>
      </KbdGroup>
      <KbdGroup className="gap-3">
        <Kbd>⌘</Kbd>
        <span className="text-lg">+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup className="gap-1">
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>Tab</Kbd>
      </KbdGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Keyboard shortcut groups with custom spacing and separator styling applied via className.",
      },
    },
  },
}
