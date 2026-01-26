import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "~/components/ui/spinner"

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A loading indicator component for showing async operations like fetching data, submitting forms, or transitions.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/spinner). It uses [Lucide React](https://lucide.dev/icons/loader-2) Loader2Icon under the hood.",
      },
    },
  },
  argTypes: {
    className: {
      description:
        "Additional CSS class names to apply. Use Tailwind classes to customize size, color, and styling. Default includes 'size-4 animate-spin'.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"size-4 animate-spin"' },
        category: "Styling",
      },
      control: { type: "text" },
    },
    role: {
      description:
        "The ARIA role for the spinner. Defaults to 'status' for accessibility.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"status"' },
        category: "Accessibility",
      },
      control: { type: "text" },
    },
    "aria-label": {
      description:
        "Accessible label for the spinner. Defaults to 'Loading'.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Loading"' },
        category: "Accessibility",
      },
      control: { type: "text" },
    },
    width: {
      description: "SVG width attribute.",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "undefined" },
        category: "SVG Props",
      },
      control: { type: "number" },
    },
    height: {
      description: "SVG height attribute.",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "undefined" },
        category: "SVG Props",
      },
      control: { type: "number" },
    },
    color: {
      description:
        "SVG color attribute. Use className with Tailwind color classes for better styling.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "SVG Props",
      },
      control: { type: "color" },
    },
    style: {
      description: "Inline styles to apply to the SVG element.",
      table: {
        type: { summary: "React.CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "A basic spinner with default styling (size-4, animate-spin). Perfect for inline loading indicators.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Small</p>
        <Spinner className="size-3" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Default</p>
        <Spinner className="size-4" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Medium</p>
        <Spinner className="size-6" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Large</p>
        <Spinner className="size-8" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Extra Large</p>
        <Spinner className="size-12" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spinners with different sizes using Tailwind size utilities (size-3, size-4, size-6, size-8, size-12).",
      },
    },
  },
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Default</p>
        <Spinner className="size-6" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Primary</p>
        <Spinner className="size-6 text-primary" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Muted</p>
        <Spinner className="size-6 text-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Destructive</p>
        <Spinner className="size-6 text-destructive" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Blue</p>
        <Spinner className="size-6 text-blue-500" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Green</p>
        <Spinner className="size-6 text-green-500" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spinners with different colors using Tailwind color classes. Supports theme colors (primary, muted-foreground, destructive) and custom colors.",
      },
    },
  },
}

export const InButton: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        disabled
      >
        <Spinner className="size-4" />
        Loading...
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
        disabled
      >
        <Spinner className="size-4" />
        Processing
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground"
        disabled
      >
        <Spinner className="size-4" />
        Submitting...
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spinner used inside buttons to indicate loading state. The button should be disabled during loading.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-sm">Loading...</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner className="size-4 text-primary" />
        <span className="text-sm">Processing your request</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner className="size-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          Syncing data...
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spinner paired with text for better accessibility and user experience. Always provide context when showing a loading state.",
      },
    },
  },
}

export const Centered: Story = {
  render: () => (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Spinner className="size-8" />
        <p className="text-sm text-muted-foreground">
          Loading content...
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Centered spinner for full-page or section loading states. Often used in modals, cards, or page-level loading indicators.",
      },
    },
  },
}

export const InCard: Story = {
  render: () => (
    <div className="w-80 rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="size-8 text-primary" />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Loading Data</h3>
          <p className="text-sm text-muted-foreground">
            Please wait while we fetch your information
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spinner used within a card component to show loading state for card content.",
      },
    },
  },
}

export const Inline: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Status:</span>
        <Spinner className="size-3" />
        <span className="text-sm text-muted-foreground">
          Syncing...
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Upload:</span>
        <Spinner className="size-3 text-blue-500" />
        <span className="text-sm text-muted-foreground">
          In progress
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Connection:</span>
        <Spinner className="size-3 text-green-500" />
        <span className="text-sm text-muted-foreground">
          Establishing...
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Small inline spinners for status indicators or inline loading states. Use size-3 or size-4 for compact displays.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Custom Border</p>
        <Spinner className="size-8 rounded-full border-4 border-primary border-t-transparent" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Slow Animation</p>
        <Spinner className="size-8 animate-spin [animation-duration:2s]" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium">Fast Animation</p>
        <Spinner className="size-8 animate-spin [animation-duration:0.5s]" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spinners with custom styling including border styles and animation speeds. Use Tailwind utilities or custom CSS for advanced styling.",
      },
    },
  },
}

export const WithCustomProps: Story = {
  args: {
    className: "size-6 text-primary",
    "aria-label": "Custom loading label",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Spinner with custom props. The component accepts all standard SVG props and can be customized with className, aria-label, and other attributes.",
      },
    },
  },
}
