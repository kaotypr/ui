import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Calendar, CalendarDayButton } from "~/components/ui/calendar"

const meta = {
  title: "UI/Calendar/CalendarDayButton",
  component: CalendarDayButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The button component for individual day cells in the calendar. This component is used internally by Calendar but can be customized via the `components` prop.\n\nThis component must be used within a Calendar component context as it receives props from React Day Picker's DayPicker component.",
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
  },
} satisfies Meta<typeof CalendarDayButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
          "A calendar using the default CalendarDayButton component. The day buttons are styled with ghost variant and show selected, range, and today states.",
      },
    },
  },
}

export const Customized: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const CustomDayButton = (props: any) => {
      return (
        <CalendarDayButton
          {...props}
          className="hover:scale-110 transition-transform"
        />
      )
    }
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        components={{
          DayButton: CustomDayButton,
        }}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A calendar with a customized CalendarDayButton that includes a scale animation on hover. This demonstrates how to customize the day button via the Calendar's components prop.",
      },
    },
  },
}

export const WithRange: Story = {
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
          "A calendar in range mode showing how CalendarDayButton displays range start, middle, and end states with different styling.",
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
          "A calendar in multiple selection mode showing how CalendarDayButton displays multiple selected dates.",
      },
    },
  },
}
