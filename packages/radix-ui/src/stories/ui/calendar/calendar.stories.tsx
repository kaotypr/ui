import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { addDays, addMonths, startOfMonth, subDays } from "date-fns"
import { Calendar } from "~/components/ui/calendar"

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A date picker component for selecting dates with support for single, multiple, and range selection modes.\n\nThis component is built on top of [React Day Picker](https://daypicker.dev/) and uses [date-fns](https://date-fns.org/) for date manipulation.\n\n### Component Parts\n- [CalendarDayButton](?path=/story/ui-calendar-calendardaybutton--default): The button component for individual day cells in the calendar.",
      },
    },
  },
  argTypes: {
    buttonVariant: {
      description:
        "The variant of the navigation buttons (previous/next month).",
      table: {
        type: {
          summary:
            '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"ghost"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    mode: {
      description:
        "Controls how dates are selected: single date, multiple dates, or a date range.",
      table: {
        type: { summary: '"single" | "multiple" | "range" | "default"' },
        defaultValue: { summary: '"default"' },
        category: "DayPicker Props",
      },
      control: { type: "select" },
      options: ["single", "multiple", "range", "default"],
    },
    selected: {
      description:
        "The selected date(s). For single mode: Date. For multiple mode: Date[]. For range mode: { from: Date; to?: Date }.",
      table: {
        type: {
          summary: "Date | Date[] | { from: Date; to?: Date } | undefined",
        },
        defaultValue: { summary: "undefined" },
        category: "DayPicker Props",
      },
      control: { type: "date" },
    },
    onSelect: {
      description:
        "Event handler called when a date is selected. The value depends on the mode.",
      table: {
        type: {
          summary:
            "(date: Date | Date[] | { from: Date; to?: Date } | undefined) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onSelect",
    },
    defaultMonth: {
      description: "The month initially displayed (uncontrolled).",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "undefined" },
        category: "DayPicker Props",
      },
      control: { type: "date" },
    },
    month: {
      description: "The month to display (controlled). Use with onMonthChange.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "undefined" },
        category: "DayPicker Props",
      },
      control: { type: "date" },
    },
    onMonthChange: {
      description:
        "Event handler called when the displayed month changes via navigation.",
      table: {
        type: { summary: "(month: Date) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onMonthChange",
    },
    numberOfMonths: {
      description: "The number of months to display at once.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "DayPicker Props",
      },
      control: { type: "number", min: 1, max: 12, step: 1 },
    },
    showOutsideDays: {
      description:
        "Show days from previous/next month in the calendar grid.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "DayPicker Props",
      },
      control: { type: "boolean" },
    },
    captionLayout: {
      description:
        "Layout of the month caption: label, dropdown, dropdown-months, dropdown-years, or buttons.",
      table: {
        type: {
          summary:
            '"label" | "dropdown" | "dropdown-months" | "dropdown-years" | "buttons"',
        },
        defaultValue: { summary: '"label"' },
        category: "DayPicker Props",
      },
      control: { type: "select" },
      options: [
        "label",
        "dropdown",
        "dropdown-months",
        "dropdown-years",
        "buttons",
      ],
    },
    disabled: {
      description:
        "Days that should be disabled (non-selectable). Can be a Date, Date[], or Matcher function.",
      table: {
        type: { summary: "Date | Date[] | Matcher | Matcher[]" },
        defaultValue: { summary: "undefined" },
        category: "DayPicker Props",
      },
    },
    showWeekNumber: {
      description: "Show week numbers in the calendar.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "DayPicker Props",
      },
      control: { type: "boolean" },
    },
    weekStartsOn: {
      description:
        "Override the first day of the week. 0 = Sunday, 1 = Monday, etc.",
      table: {
        type: { summary: "0 | 1 | 2 | 3 | 4 | 5 | 6" },
        defaultValue: { summary: "0" },
        category: "DayPicker Props",
      },
      control: { type: "select" },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    dir: {
      description:
        "The reading direction. If omitted, inherits globally or assumes LTR.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "DayPicker Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
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
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        {...args}
        mode="single"
        selected={date}
        onSelect={(d) => {
          setDate(d as Date | undefined)
          args.onSelect?.(d)
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A basic calendar in single selection mode. Click a date to select it.",
      },
    },
  },
}

export const SingleSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar in single selection mode with a selected date. Click a different date to change the selection.",
      },
    },
  },
}

export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([])
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar in multiple selection mode. Click multiple dates to select them. Click a selected date again to deselect it.",
      },
    },
  },
}

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<
      { from: Date; to?: Date } | undefined
    >()
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
        numberOfMonths={2}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar in range selection mode showing two months. Click a date to set the start, then click another date to set the end of the range.",
      },
    },
  },
}

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const today = new Date()
    const disabledDates = [
      addDays(today, 1),
      addDays(today, 2),
      addDays(today, 3),
    ]
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDates}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with specific dates disabled. Disabled dates cannot be selected.",
      },
    },
  },
}

export const DisablePastDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < new Date()}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with all past dates disabled. Only today and future dates can be selected.",
      },
    },
  },
}

export const MultipleMonths: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={3}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar displaying three months at once. Useful for selecting dates across multiple months.",
      },
    },
  },
}

export const WithoutOutsideDays: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays={false}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar without showing days from previous/next months in the grid.",
      },
    },
  },
}

export const WithWeekNumbers: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showWeekNumber
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with week numbers displayed in the first column.",
      },
    },
  },
}

export const DropdownLayout: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with dropdown selectors for month and year navigation.",
      },
    },
  },
}

export const ButtonsLayout: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="buttons"
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with button-based month and year navigation in the caption.",
      },
    },
  },
}

export const CustomButtonVariant: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        buttonVariant="outline"
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with navigation buttons using the outline variant instead of the default ghost variant.",
      },
    },
  },
}

export const WeekStartsMonday: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        weekStartsOn={1}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar where the week starts on Monday instead of Sunday.",
      },
    },
  },
}

export const PreselectedDate: Story = {
  render: () => {
    const preselectedDate = addDays(new Date(), 7)
    const [date, setDate] = useState<Date | undefined>(preselectedDate)
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={preselectedDate}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with a preselected date (7 days from today) and the month set to display that date.",
      },
    },
  },
}
