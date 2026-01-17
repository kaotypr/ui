import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Progress } from "~/components/ui/progress"
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A progress indicator component that displays the completion status of a task or operation.\n\nThis component is built on top of [Radix UI Progress](https://www.radix-ui.com/primitives/docs/components/progress).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The current progress value. Should be a number between 0 and 100 (or 0 and max if max is specified). Setting to null means indeterminate state.",
      table: {
        type: { summary: "number | null" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    max: {
      description:
        "The maximum value, i.e. what value is compared against. Defaults to 100 if not specified.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "Radix UI Props",
      },
      control: { type: "number", min: 1, step: 1 },
    },
    getValueLabel: {
      description:
        "Function that returns accessible label text (e.g., '50%') for assistive technology. Receives value and max as parameters.",
      table: {
        type: { summary: "(value: number, max: number) => string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: false,
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
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <Progress {...args} />
      <p className="text-sm text-muted-foreground">
        Progress at {args.value ?? 0}%
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic progress indicator showing 50% completion.",
      },
    },
  },
}

export const Zero: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress value={0} />
      <p className="text-sm text-muted-foreground">Progress at 0%</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A progress indicator at the starting point (0%).",
      },
    },
  },
}

export const Complete: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress value={100} />
      <p className="text-sm text-muted-foreground">Progress at 100%</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A progress indicator showing 100% completion.",
      },
    },
  },
}

export const Indeterminate: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress value={null} />
      <p className="text-sm text-muted-foreground">
        Indeterminate progress (value is null)
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An indeterminate progress indicator for when the completion status is unknown.",
      },
    },
  },
}

export const WithCustomMax: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress value={75} max={150} />
      <p className="text-sm text-muted-foreground">
        Progress: 75 out of 150 (50%)
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A progress indicator with a custom maximum value. The component automatically calculates the percentage based on value and max.",
      },
    },
  },
}

export const WithValueLabel: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress
        value={65}
        getValueLabel={(value, max) => `${Math.round((value / max) * 100)}% complete`}
      />
      <p className="text-sm text-muted-foreground">
        Progress with custom accessible label
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A progress indicator with a custom getValueLabel function for improved accessibility.",
      },
    },
  },
}

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)

    const handleStart = () => {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }

    return (
      <div className="w-80 space-y-4">
        <Progress value={progress} />
        <div className="flex items-center gap-2">
          <Button onClick={handleStart} size="sm">
            Start Progress
          </Button>
          <p className="text-sm text-muted-foreground">
            {progress}% complete
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "An animated progress indicator that updates over time. Click the button to start the animation.",
      },
    },
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small (h-1)</p>
        <Progress value={60} className="h-1" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Default (h-2)</p>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Large (h-4)</p>
        <Progress value={60} className="h-4" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Extra Large (h-6)</p>
        <Progress value={60} className="h-6" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Progress indicators with different heights using the className prop.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Custom Colors</p>
        <Progress
          value={70}
          className="bg-destructive/20 [&>div]:bg-destructive"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Custom Border Radius</p>
        <Progress value={70} className="rounded-none" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Progress indicators with custom styling using the className prop.",
      },
    },
  },
}
