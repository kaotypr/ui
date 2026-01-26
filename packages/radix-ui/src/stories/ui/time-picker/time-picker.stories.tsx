import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { TimePicker } from "~/components/ui/time-picker"

const meta = {
  title: "UI/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A time picker component for selecting time values without date. Uses scroll-based Select components for each time unit.

### Features
- Scroll/Select-based UI for hours, minutes, seconds, and AM/PM
- 24-hour (default) and 12-hour (meridiem) formats
- Configurable time unit visibility (\`showHours\`, \`showMinutes\`, \`showSeconds\`)
- Inline and popover display modes
- Min/max time constraints
- Configurable step intervals
- Clearable selection
- Controlled and uncontrolled modes
- String value format for easy form integration

### Value Format
- 24-hour: \`"14:30"\` or \`"14:30:45"\`
- 12-hour: \`"02:30 PM"\` or \`"02:30:45 PM"\`
`,
      },
    },
  },
  argTypes: {
    // Value control
    value: {
      description:
        "The controlled value of the selected time as a string (e.g., '14:30' or '02:30 PM').",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "text",
    },
    defaultValue: {
      description:
        "The default value of the selected time (uncontrolled). String format.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "text",
    },

    // Display mode
    mode: {
      description:
        'Display mode: "inline" shows Select components directly, "popover" shows a trigger button that opens a popover.',
      table: {
        type: { summary: '"inline" | "popover"' },
        defaultValue: { summary: '"inline"' },
        category: "Props",
      },
      control: "select",
      options: ["inline", "popover"],
    },

    // Time format
    meridiem: {
      description:
        "Time format: false for 24-hour (00-23), true for 12-hour (01-12) with AM/PM selector.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },

    // Time units visibility
    showHours: {
      description: "Whether to show the hours Select.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Time Units",
      },
      control: "boolean",
    },
    showMinutes: {
      description: "Whether to show the minutes Select.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Time Units",
      },
      control: "boolean",
    },
    showSeconds: {
      description: "Whether to show the seconds Select.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Time Units",
      },
      control: "boolean",
    },

    // Step intervals
    hourStep: {
      description: "Step interval for hours options.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Step Intervals",
      },
      control: { type: "number", min: 1, max: 12 },
    },
    minuteStep: {
      description: "Step interval for minutes options.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
        category: "Step Intervals",
      },
      control: { type: "number", min: 1, max: 30 },
    },
    secondStep: {
      description: "Step interval for seconds options.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Step Intervals",
      },
      control: { type: "number", min: 1, max: 30 },
    },

    // Constraints
    minTime: {
      description:
        "Minimum selectable time. Times before this are disabled. Format matches value format.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Constraints",
      },
      control: "text",
    },
    maxTime: {
      description:
        "Maximum selectable time. Times after this are disabled. Format matches value format.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Constraints",
      },
      control: "text",
    },

    // Features
    clearable: {
      description: "Whether the selection can be cleared with a clear button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    disabled: {
      description: "Whether the time picker is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    placeholder: {
      description: "Placeholder text shown in popover mode when no time is selected.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Select time"' },
        category: "Props",
      },
      control: "text",
    },

    // Event Handlers
    onValueChange: {
      description:
        "Event handler called when the value changes. Returns string or undefined when cleared.",
      table: {
        type: { summary: "(value: string | undefined) => void" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },

    // Styling
    className: {
      description:
        "Additional CSS class names for the root element (inline mode) or trigger button (popover mode).",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: "text",
    },
    contentClassName: {
      description:
        "Additional CSS class names for the content area (popover mode) or Select container (inline mode).",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: "text",
    },
  },
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Basic time picker in inline mode with 24-hour format. Shows hours and minutes by default.",
      },
    },
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "14:30",
  },
  parameters: {
    docs: {
      description: {
        story: "Time picker with a default value set.",
      },
    },
  },
}

export const Meridiem: Story = {
  args: {
    meridiem: true,
    defaultValue: "02:30 PM",
  },
  parameters: {
    docs: {
      description: {
        story:
          "12-hour format with AM/PM selector. Set `meridiem={true}` to enable.",
      },
    },
  },
}

export const WithSeconds: Story = {
  args: {
    showSeconds: true,
    defaultValue: "14:30:45",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Include seconds in the time picker by setting `showSeconds={true}`.",
      },
    },
  },
}

export const MeridiemWithSeconds: Story = {
  args: {
    meridiem: true,
    showSeconds: true,
    defaultValue: "02:30:45 PM",
  },
  parameters: {
    docs: {
      description: {
        story: "12-hour format with seconds and AM/PM selector.",
      },
    },
  },
}

export const PopoverMode: Story = {
  args: {
    mode: "popover",
    defaultValue: "14:30",
    placeholder: "Select time",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Popover mode shows a trigger button. Click to open the time picker. Set `mode="popover"` to enable.',
      },
    },
  },
}

export const PopoverWithMeridiem: Story = {
  args: {
    mode: "popover",
    meridiem: true,
    defaultValue: "02:30 PM",
    placeholder: "Select time",
  },
  parameters: {
    docs: {
      description: {
        story: "Popover mode with 12-hour format and AM/PM.",
      },
    },
  },
}

export const WithMinMax: Story = {
  args: {
    defaultValue: "12:00",
    minTime: "09:00",
    maxTime: "17:00",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Restrict selectable times using `minTime` and `maxTime`. This example limits selection to business hours (9:00 AM - 5:00 PM).",
      },
    },
  },
}

export const WithMinMaxMeridiem: Story = {
  args: {
    meridiem: true,
    defaultValue: "12:00 PM",
    minTime: "09:00 AM",
    maxTime: "05:00 PM",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Min/max constraints work with 12-hour format as well.",
      },
    },
  },
}

export const WithSteps: Story = {
  args: {
    minuteStep: 15,
    defaultValue: "14:30",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `minuteStep` to show only specific intervals. This example shows 15-minute intervals (00, 15, 30, 45).",
      },
    },
  },
}

export const WithAllSteps: Story = {
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 15,
    showSeconds: true,
    defaultValue: "14:30:00",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Configure step intervals for all time units. This example shows 2-hour intervals, 15-minute intervals, and 15-second intervals.",
      },
    },
  },
}

export const Clearable: Story = {
  args: {
    clearable: true,
    defaultValue: "14:30",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set `clearable={true}` to show a clear button when a time is selected (inline mode).",
      },
    },
  },
}

export const ClearablePopover: Story = {
  args: {
    mode: "popover",
    clearable: true,
    defaultValue: "14:30",
    placeholder: "Select time",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Clear button in the trigger button for popover mode.",
      },
    },
  },
}

const ControlledWrapper = () => {
  const [time, setTime] = useState<string | undefined>("14:30")

  return (
    <div className="flex flex-col gap-4">
      <TimePicker
        value={time}
        onValueChange={setTime}
      />
      <div className="text-sm text-muted-foreground">
        Selected: {time ?? "None"}
      </div>
    </div>
  )
}

export const Controlled: Story = {
  args: {},
  render: () => <ControlledWrapper />,
  parameters: {
    docs: {
      description: {
        story:
          "Example of controlled state using `value` and `onValueChange`.",
      },
    },
  },
}

const ControlledMeridiemWrapper = () => {
  const [time, setTime] = useState<string | undefined>("02:30 PM")

  return (
    <div className="flex flex-col gap-4">
      <TimePicker
        value={time}
        onValueChange={setTime}
        meridiem
      />
      <div className="text-sm text-muted-foreground">
        Selected: {time ?? "None"}
      </div>
    </div>
  )
}

export const ControlledMeridiem: Story = {
  args: {},
  render: () => <ControlledMeridiemWrapper />,
  parameters: {
    docs: {
      description: {
        story:
          "Controlled state with 12-hour format.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "14:30",
  },
  parameters: {
    docs: {
      description: {
        story: "Set `disabled={true}` to prevent user interaction.",
      },
    },
  },
}

export const DisabledPopover: Story = {
  args: {
    mode: "popover",
    disabled: true,
    defaultValue: "14:30",
    placeholder: "Select time",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state in popover mode.",
      },
    },
  },
}

export const HoursOnly: Story = {
  args: {
    showMinutes: false,
    defaultValue: "14:00",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Show only hours by setting `showMinutes={false}`.",
      },
    },
  },
}

export const CustomPlaceholder: Story = {
  args: {
    mode: "popover",
    placeholder: "Choose appointment time...",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Customize the placeholder text shown in the trigger button when no time is selected.",
      },
    },
  },
}

export const AllFeatures: Story = {
  args: {
    mode: "popover",
    meridiem: true,
    showSeconds: true,
    minuteStep: 5,
    clearable: true,
    defaultValue: "02:30:00 PM",
    placeholder: "Select time",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example combining multiple features: popover mode, 12-hour format, seconds, 5-minute intervals, and clearable.",
      },
    },
  },
}
