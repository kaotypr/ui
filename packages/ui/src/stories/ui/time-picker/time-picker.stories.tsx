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
A time picker component for selecting time values using scroll-area based columns in a popover.

### Features
- Scroll-area based UI with checkmark indicators
- 24-hour (default) and 12-hour (meridiem) formats
- Configurable time unit visibility (\`showHours\`, \`showMinutes\`, \`showSeconds\`)
- Popover display with summary bar
- Min/max time constraints
- Configurable step intervals
- Clearable selection
- Controlled and uncontrolled modes

### Value Format
- 24-hour: \`"14:30"\` or \`"14:30:45"\`
- 12-hour: \`"02:30 PM"\` or \`"02:30:45 PM"\`
`,
      },
    },
  },
  argTypes: {
    value: {
      description: "The controlled value of the selected time as a string.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "text",
    },
    defaultValue: {
      description: "The default value of the selected time (uncontrolled).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "text",
    },
    meridiem: {
      description: "Time format: false for 24-hour, true for 12-hour with AM/PM.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    showHours: {
      description: "Whether to show the hours column.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Time Units",
      },
      control: "boolean",
    },
    showMinutes: {
      description: "Whether to show the minutes column.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Time Units",
      },
      control: "boolean",
    },
    showSeconds: {
      description: "Whether to show the seconds column.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Time Units",
      },
      control: "boolean",
    },
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
        defaultValue: { summary: "1" },
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
    minTime: {
      description: "Minimum selectable time.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Constraints",
      },
      control: "text",
    },
    maxTime: {
      description: "Maximum selectable time.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Constraints",
      },
      control: "text",
    },
    clearable: {
      description: "Whether the selection can be cleared.",
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
      description: "Placeholder text shown when no time is selected.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Select time"' },
        category: "Props",
      },
      control: "text",
    },
    onValueChange: {
      description: "Event handler called when the value changes.",
      table: {
        type: { summary: "(value: string | undefined) => void" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    className: {
      description: "Additional CSS class names for the trigger button.",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: "text",
    },
    contentClassName: {
      description: "Additional CSS class names for the popover content.",
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
        story: "Basic time picker with 24-hour format. Click the trigger to open the popover.",
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
        story: "Time picker with a default value. Columns auto-scroll to the selected value.",
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
        story: "12-hour format with AM/PM selector column.",
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
        story: "Include seconds column by setting `showSeconds={true}`.",
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
        story: "12-hour format with seconds and AM/PM columns.",
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
        story: "Restrict selectable times with `minTime` and `maxTime`. Out-of-range options are disabled.",
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
        story: "Min/max constraints with 12-hour format.",
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
        story: "Use `minuteStep` to show only specific intervals (00, 15, 30, 45).",
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
        story: "Configure step intervals for all time units.",
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
        story: "Set `clearable={true}` to show a clear button in the trigger.",
      },
    },
  },
}

const ControlledWrapper = () => {
  const [time, setTime] = useState<string | undefined>("14:30")

  return (
    <div className="flex flex-col gap-4">
      <TimePicker value={time} onValueChange={setTime} />
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
        story: "Controlled state using `value` and `onValueChange`.",
      },
    },
  },
}

const ControlledMeridiemWrapper = () => {
  const [time, setTime] = useState<string | undefined>("02:30 PM")

  return (
    <div className="flex flex-col gap-4">
      <TimePicker value={time} onValueChange={setTime} meridiem />
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
        story: "Controlled state with 12-hour format.",
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

export const HoursOnly: Story = {
  args: {
    showMinutes: false,
    defaultValue: "14:00",
  },
  parameters: {
    docs: {
      description: {
        story: "Show only hours by setting `showMinutes={false}`.",
      },
    },
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Choose appointment time...",
  },
  parameters: {
    docs: {
      description: {
        story: "Customize the placeholder text shown when no time is selected.",
      },
    },
  },
}

export const AllFeatures: Story = {
  args: {
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
        story: "Combining multiple features: 12-hour format, seconds, 5-minute intervals, and clearable.",
      },
    },
  },
}
