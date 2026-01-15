import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckCircle2, XCircle, AlertCircle, Info } from "lucide-react"
import { Badge } from "~/components/ui/badge"

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small badge component for displaying labels, status indicators, or counts.\n\nThis component uses [Radix UI Slot](https://www.radix-ui.com/primitives/docs/components/slot) for composition support via the `asChild` prop.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The visual style variant of the badge.",
      table: {
        type: {
          summary: '"default" | "secondary" | "destructive" | "outline"',
        },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the component to the HTML tag or custom component of the only child. Uses Radix UI Slot.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the badge.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic badge with default styling.",
      },
    },
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available badge variants displayed together.",
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant with muted styling.",
      },
    },
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
  parameters: {
    docs: {
      description: {
        story: "Destructive variant for error states or warnings.",
      },
    },
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
  parameters: {
    docs: {
      description: {
        story: "Outline variant with border and transparent background.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">
        <CheckCircle2 />
        Success
      </Badge>
      <Badge variant="destructive">
        <XCircle />
        Error
      </Badge>
      <Badge variant="secondary">
        <AlertCircle />
        Warning
      </Badge>
      <Badge variant="outline">
        <Info />
        Info
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badges with icons. Icons are automatically sized and positioned with proper spacing.",
      },
    },
  },
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Active</span>
        <Badge variant="default">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Pending</span>
        <Badge variant="secondary">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Error</span>
        <Badge variant="destructive">Error</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Draft</span>
        <Badge variant="outline">Draft</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Common use case: status indicators for different states.",
      },
    },
  },
}

export const Counts: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">5</Badge>
      <Badge variant="secondary">12</Badge>
      <Badge variant="destructive">99+</Badge>
      <Badge variant="outline">42</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges used to display counts or numbers.",
      },
    },
  },
}

export const Labels: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">New</Badge>
      <Badge variant="secondary">Featured</Badge>
      <Badge variant="destructive">Hot</Badge>
      <Badge variant="outline">Sale</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges used as labels or tags.",
      },
    },
  },
}

export const AsChild: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge asChild>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Badge
        </a>
      </Badge>
      <Badge asChild variant="outline">
        <button type="button">Button Badge</button>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Using the `asChild` prop to render the badge as a different element (e.g., an anchor tag or button). This uses Radix UI Slot for composition.",
      },
    },
  },
}

export const LongText: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">Short</Badge>
      <Badge variant="secondary">Medium Length Text</Badge>
      <Badge variant="destructive">This is a longer badge text</Badge>
      <Badge variant="outline">Very Long Badge Text That Wraps</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badges handle text of varying lengths. The badge uses whitespace-nowrap by default to prevent wrapping.",
      },
    },
  },
}
