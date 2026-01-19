import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { NumberInput } from "~/components/ui/number-input"

const meta = {
  title: "UI/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A numeric input component with increment/decrement steppers and keyboard navigation. Supports formatting, decimal precision, and min/max constraints.\n\nThis component is built on top of [react-number-format](https://s-yadav.github.io/react-number-format/).",
      },
    },
  },
  argTypes: {
    // Custom Props
    stepper: {
      description:
        "The amount to increment or decrement when using the stepper buttons or arrow keys.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    placeholder: {
      description: "Placeholder text displayed when the input is empty.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "The default value of the input (uncontrolled).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    value: {
      description:
        "The controlled value of the input. Use with onValueChange handler.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    min: {
      description: "The minimum value allowed.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "-Infinity" },
        category: "Props",
      },
      control: { type: "number" },
    },
    max: {
      description: "The maximum value allowed.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "Infinity" },
        category: "Props",
      },
      control: { type: "number" },
    },
    suffix: {
      description: "String to append to the formatted output (e.g., 'kg', '%').",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    prefix: {
      description: "String to prepend to the formatted output (e.g., '$', '€').",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    fixedDecimalScale: {
      description:
        "If true, enforces trailing zeros so that number of decimal places exactly equals decimalScale.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    decimalScale: {
      description: "Maximum number of digits allowed after decimal point.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Props",
      },
      control: { type: "number" },
    },
    thousandSeparator: {
      description:
        "If true, uses default separator (','). If string, uses that string as separator.",
      table: {
        type: { summary: "boolean | string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Callback invoked when value changes. Receives the numeric value.",
      table: {
        type: { summary: "(value: number | undefined) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    // react-number-format Props
    allowNegative: {
      description: "Whether negative numbers are allowed.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "react-number-format Props",
      },
      control: { type: "boolean" },
    },
    allowLeadingZeros: {
      description: "Whether input allows leading zeros.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "react-number-format Props",
      },
      control: { type: "boolean" },
    },
    decimalSeparator: {
      description: "Character used as decimal point.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'.'" },
        category: "react-number-format Props",
      },
      control: { type: "text" },
    },
    thousandsGroupStyle: {
      description:
        "Determines grouping style of the thousands separator: 'thousand', 'lakh', 'wan', or 'none'.",
      table: {
        type: { summary: "'thousand' | 'lakh' | 'wan' | 'none'" },
        defaultValue: { summary: "'thousand'" },
        category: "react-number-format Props",
      },
      control: { type: "select" },
      options: ["thousand", "lakh", "wan", "none"],
    },
    isAllowed: {
      description:
        "Validator function. If it returns false, changes are rejected.",
      table: {
        type: { summary: "(values: any) => boolean" },
        defaultValue: { summary: "undefined" },
        category: "react-number-format Props",
      },
    },
    // Standard HTML Input Props
    disabled: {
      description: "When true, prevents user interaction with the input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "HTML Input Props",
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "When true, prevents the user from modifying the value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "HTML Input Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description: "When true, indicates that the user must fill in a value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "HTML Input Props",
      },
      control: { type: "boolean" },
    },
    autoFocus: {
      description: "When true, the input will be focused when the page loads.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "HTML Input Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description: "The name of the input, used when submitting a form.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "HTML Input Props",
      },
      control: { type: "text" },
    },
    id: {
      description: "The unique identifier for the input element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "HTML Input Props",
      },
      control: { type: "text" },
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
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter a number",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic number input with default settings.",
      },
    },
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 100,
    placeholder: "Enter a number",
  },
  parameters: {
    docs: {
      description: {
        story: "A number input with a default value set.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | undefined>(50)
    return (
      <NumberInput
        {...args}
        value={value}
        onValueChange={(v) => {
          setValue(v)
          args.onValueChange?.(v)
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled number input using React state. The value is managed externally.",
      },
    },
  },
}

export const WithStepper: Story = {
  args: {
    defaultValue: 0,
    stepper: 5,
    placeholder: "Step by 5",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A number input with custom stepper increment/decrement of 5.",
      },
    },
  },
}

export const WithMinMax: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    placeholder: "0-100",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A number input constrained between 0 and 100. Values outside this range are clamped on blur.",
      },
    },
  },
}

export const WithDecimalPlaces: Story = {
  args: {
    defaultValue: 0,
    decimalScale: 2,
    fixedDecimalScale: true,
    placeholder: "0.00",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A number input with exactly 2 decimal places, showing trailing zeros.",
      },
    },
  },
}

export const WithThousandSeparator: Story = {
  args: {
    defaultValue: 1000,
    thousandSeparator: ",",
    placeholder: "Enter amount",
  },
  parameters: {
    docs: {
      description: {
        story: "A number input with thousand separators for better readability.",
      },
    },
  },
}

export const WithPrefix: Story = {
  args: {
    defaultValue: 0,
    prefix: "$",
    decimalScale: 2,
    fixedDecimalScale: true,
    thousandSeparator: ",",
    placeholder: "$0.00",
  },
  parameters: {
    docs: {
      description: {
        story: "A currency input with dollar prefix and formatting.",
      },
    },
  },
}

export const WithSuffix: Story = {
  args: {
    defaultValue: 0,
    suffix: " kg",
    decimalScale: 1,
    placeholder: "0.0 kg",
  },
  parameters: {
    docs: {
      description: {
        story: "A weight input with kilogram suffix.",
      },
    },
  },
}

export const Percentage: Story = {
  args: {
    defaultValue: 0,
    suffix: "%",
    min: 0,
    max: 100,
    decimalScale: 1,
    placeholder: "0.0%",
  },
  parameters: {
    docs: {
      description: {
        story: "A percentage input constrained between 0 and 100.",
      },
    },
  },
}

export const NegativeAllowed: Story = {
  args: {
    defaultValue: 0,
    min: -100,
    max: 100,
    allowNegative: true,
    placeholder: "-100 to 100",
  },
  parameters: {
    docs: {
      description: {
        story: "A number input that allows negative values.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 42,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled number input that cannot be interacted with.",
      },
    },
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 99,
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A read-only number input that displays a value but cannot be edited.",
      },
    },
  },
}

export const LargeValue: Story = {
  args: {
    defaultValue: 1234567,
    thousandSeparator: ",",
    placeholder: "Enter large number",
  },
  parameters: {
    docs: {
      description: {
        story: "A number input displaying a large value with thousand separators.",
      },
    },
  },
}

export const WithClassName: Story = {
  args: {
    defaultValue: 0,
    className: "w-[56px]",
  },
  parameters: {
    docs: {
      description: {
        story: "A number input with a custom class name.",
      },
    },
  },
}