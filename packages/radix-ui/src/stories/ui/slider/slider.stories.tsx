import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Slider } from "~/components/ui/slider"

const meta = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An input where the user selects a value from within a given range.\n\nThis component is built on top of [Radix UI Slider](https://www.radix-ui.com/primitives/docs/components/slider).",
      },
    },
  },
  argTypes: {
    // Radix UI Props
    defaultValue: {
      description:
        "The uncontrolled default value(s) of the slider. Must be an array of numbers.",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "object" },
    },
    value: {
      description:
        "The controlled value(s) of the slider. Must be an array of numbers. Use with onValueChange.",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "object" },
    },
    onValueChange: {
      description:
        "Event handler called when the value changes during user interaction.",
      table: {
        type: { summary: "(value: number[]) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    onValueCommit: {
      description:
        "Event handler called when the user finishes changing the value (e.g., when they release the thumb).",
      table: {
        type: { summary: "(value: number[]) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueCommit",
    },
    min: {
      description: "The minimum value for the slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    max: {
      description: "The maximum value for the slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    step: {
      description: "The step increments for the slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    minStepsBetweenThumbs: {
      description:
        "The minimum number of steps required between thumbs. Useful for range sliders to prevent overlapping values.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    disabled: {
      description: "When true, prevents the user from interacting with the slider.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    orientation: {
      description: "The orientation of the slider.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
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
    inverted: {
      description:
        "Inverts the visual representation of the slider. Useful in RTL contexts or custom cases.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description:
        "The name of the slider. Used when rendering hidden inputs for form submission.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    form: {
      description:
        "Associates the hidden input(s) with a form via its name attribute.",
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
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
  },
  render: (args) => (
    <div className="w-[500px]">
      <Slider {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic slider with default styling. The slider allows selecting a single value within a range.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([50])
    return (
      <div className="space-y-4 w-[500px]">
        <Slider
          {...args}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            args.onValueChange?.(v)
          }}
          min={0}
          max={100}
        />
        <p className="text-sm text-muted-foreground">
          Current value: {value[0]}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled slider using React state. The value is managed by the component.",
      },
    },
  },
}

export const Range: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([20, 80])
    return (
      <div className="space-y-4 w-[500px]">
        <Slider
          {...args}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            args.onValueChange?.(v)
          }}
          min={0}
          max={100}
          minStepsBetweenThumbs={1}
        />
        <p className="text-sm text-muted-foreground">
          Range: {value[0]} - {value[1]}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A range slider with two thumbs for selecting a range of values. Use minStepsBetweenThumbs to prevent overlapping.",
      },
    },
  },
}

export const WithSteps: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 10,
  },
  render: (args) => (
    <div className="w-[500px]">
      <Slider {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A slider with step increments. The value will snap to multiples of the step value.",
      },
    },
  },
}

export const CustomRange: Story = {
  args: {
    defaultValue: [25],
    min: 0,
    max: 200,
    step: 5,
  },
  render: (args) => (
    <div className="w-[500px]">
      <Slider {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A slider with a custom range and step value. Useful for specific use cases like price ranges or percentages.",
      },
    },
  },
}

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([50])
    return (
      <div className="flex items-center space-x-4 h-64">
        <div className="space-y-2">
          <p className="text-sm font-medium">Volume</p>
          <Slider
            {...args}
            value={value}
            onValueChange={(v) => {
              setValue(v)
              args.onValueChange?.(v)
            }}
            orientation="vertical"
            min={0}
            max={100}
            className="h-48"
          />
          <p className="text-xs text-muted-foreground text-center">
            {value[0]}%
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A vertical slider. Useful for volume controls, brightness adjustments, or other vertical value selection.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    disabled: true,
  },
  render: (args) => (
    <div className="w-[500px]">
      <Slider {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled slider that cannot be interacted with.",
      },
    },
  },
}

export const WithLabels: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([50])
    return (
      <div className="space-y-2 w-[500px]">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Min: {args.min ?? 0}</span>
          <span>Max: {args.max ?? 100}</span>
        </div>
        <Slider
          {...args}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            args.onValueChange?.(v)
          }}
          min={0}
          max={100}
        />
        <div className="flex justify-center">
          <span className="text-sm font-medium">Value: {value[0]}</span>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A slider with labels showing min, max, and current values for better user feedback.",
      },
    },
  },
}

export const TemperatureControl: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([22])
    return (
      <div className="space-y-4 w-[500px]">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Temperature</span>
            <span className="text-sm text-muted-foreground">{value[0]}°C</span>
          </div>
          <Slider
            {...args}
            value={value}
            onValueChange={(v) => {
              setValue(v)
              args.onValueChange?.(v)
            }}
            min={16}
            max={30}
            step={1}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>16°C</span>
            <span>30°C</span>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A real-world example of a temperature control slider with labeled min/max values.",
      },
    },
  },
}

export const PriceRange: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([25, 75])
    const formatPrice = (val: number) => `$${val}`
    return (
      <div className="space-y-4 w-[500px]">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Price Range</span>
            <span className="text-sm text-muted-foreground">
              {formatPrice(value[0])} - {formatPrice(value[1])}
            </span>
          </div>
          <Slider
            {...args}
            value={value}
            onValueChange={(v) => {
              setValue(v)
              args.onValueChange?.(v)
            }}
            min={0}
            max={100}
            step={5}
            minStepsBetweenThumbs={5}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatPrice(0)}</span>
            <span>{formatPrice(100)}</span>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A price range selector using a range slider with formatted currency values.",
      },
    },
  },
}

export const WithCommitHandler: Story = {
  render: (args) => {
    const [value, setValue] = useState<number[]>([50])
    const [committedValue, setCommittedValue] = useState<number[]>([50])
    return (
      <div className="space-y-4 w-[500px]">
        <Slider
          {...args}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            args.onValueChange?.(v)
          }}
          onValueCommit={(v) => {
            setCommittedValue(v)
            args.onValueCommit?.(v)
          }}
          min={0}
          max={100}
        />
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Current value: {value[0]}
          </p>
          <p className="text-sm font-medium">
            Committed value: {committedValue[0]}
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A slider demonstrating the difference between onValueChange (fires during dragging) and onValueCommit (fires when released).",
      },
    },
  },
}
