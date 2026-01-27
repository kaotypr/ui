import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { addDays, subDays } from "date-fns"
import type { DateRange } from "react-day-picker"

import { Calendar } from "~/components/ui/calendar"

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A calendar component for displaying and selecting dates.",
          "",
          "This component is built on top of [React Day Picker](https://daypicker.dev/).",
          "",
          "### Component Parts",
          "- [CalendarDayButton](?path=/story/ui-calendar-calendardaybutton--default): The button component used for rendering individual day cells.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    // Custom Props
    buttonVariant: {
      description: "The variant of the navigation buttons.",
      table: {
        type: { summary: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"' },
        defaultValue: { summary: '"ghost"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    showOutsideDays: {
      description: "Show the outside days (days falling in the next or the previous month).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    captionLayout: {
      description:
        'Show dropdowns to navigate between months or years. Options: "label" (default), "dropdown", "dropdown-months", or "dropdown-years".',
      table: {
        type: { summary: '"label" | "dropdown" | "dropdown-months" | "dropdown-years"' },
        defaultValue: { summary: '"label"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
    },

    // React Day Picker Props - Selection Mode
    mode: {
      description:
        "Enable the selection of a single day, multiple days, or a range of days.",
      table: {
        type: { summary: '"single" | "multiple" | "range" | undefined' },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "select" },
      options: [undefined, "single", "multiple", "range"],
    },
    selected: {
      description: "The selected date(s) or range.",
      table: {
        type: { summary: "Date | Date[] | DateRange | undefined" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    onSelect: {
      description: "Event handler when a day is selected.",
      table: {
        type: { summary: "(date: Date | Date[] | DateRange | undefined) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onSelect",
    },
    required: {
      description: "Whether the selection is required.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },

    // React Day Picker Props - Navigation
    defaultMonth: {
      description: "The initial month to show in the calendar.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "Current month" },
        category: "React Day Picker Props",
      },
      control: "date",
    },
    month: {
      description:
        "The month displayed in the calendar. Use with onMonthChange for controlled mode.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: "date",
    },
    onMonthChange: {
      description: "Event fired when the user navigates between months.",
      table: {
        type: { summary: "(month: Date) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onMonthChange",
    },
    startMonth: {
      description: "The earliest month to start the month navigation.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: "date",
    },
    endMonth: {
      description: "The latest month to end the month navigation.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: "date",
    },
    disableNavigation: {
      description:
        "Disable the navigation between months. This prop won't hide the navigation.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    hideNavigation: {
      description:
        "Hide the navigation buttons. This prop won't disable the navigation.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    pagedNavigation: {
      description:
        "Paginate the month navigation displaying the numberOfMonths at a time.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    onNextClick: {
      description: "Event handler when the next month button is clicked.",
      table: {
        type: { summary: "(month: Date) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onNextClick",
    },
    onPrevClick: {
      description: "Event handler when the previous month button is clicked.",
      table: {
        type: { summary: "(month: Date) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onPrevClick",
    },
    animate: {
      description: "Animate navigating between months.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    navLayout: {
      description:
        'Adjust the positioning of the navigation buttons. Options: "around" or "after".',
      table: {
        type: { summary: '"around" | "after"' },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "select" },
      options: ["around", "after"],
    },

    // React Day Picker Props - Display
    numberOfMonths: {
      description: "The number of displayed months.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "React Day Picker Props",
      },
      control: { type: "number", min: 1, max: 12 },
    },
    reverseMonths: {
      description:
        "Render the months in reversed order (when numberOfMonths is set).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    fixedWeeks: {
      description:
        "Display always 6 weeks per each month, regardless of the month's number of weeks.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    showWeekNumber: {
      description: "Show the week numbers column.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    hideWeekdays: {
      description: "Hide the row displaying the weekday row header.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },

    // React Day Picker Props - Disabled & Modifiers
    disabled: {
      description:
        "Apply the disabled modifier to the matching days. Can be a function, date, array of dates, or matcher.",
      table: {
        type: { summary: "Matcher | Matcher[]" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    hidden: {
      description: "Apply the hidden modifier to the matching days. Will hide them from the calendar.",
      table: {
        type: { summary: "Matcher | Matcher[]" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    modifiers: {
      description: "Add modifiers to the matching days.",
      table: {
        type: { summary: "Record<string, Matcher | Matcher[] | undefined>" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    modifiersClassNames: {
      description: "Change the class name for the day matching the modifiers.",
      table: {
        type: { summary: "ModifiersClassNames" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    modifiersStyles: {
      description: "Change the inline styles for the day matching the modifiers.",
      table: {
        type: { summary: "ModifiersStyles" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },

    // React Day Picker Props - Localization
    locale: {
      description:
        "The locale object used to localize dates. Pass a locale from react-day-picker/locale.",
      table: {
        type: { summary: "Partial<DayPickerLocale>" },
        defaultValue: { summary: "enUS" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    weekStartsOn: {
      description:
        "The index of the first day of the week (0 - Sunday). Overrides the locale's default.",
      table: {
        type: { summary: "0 | 1 | 2 | 3 | 4 | 5 | 6" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "select" },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    firstWeekContainsDate: {
      description: "The day of January that is always in the first week of the year.",
      table: {
        type: { summary: "1 | 4" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "select" },
      options: [1, 4],
    },
    ISOWeek: {
      description:
        "Use ISO week dates instead of the locale setting. Setting this prop will ignore weekStartsOn and firstWeekContainsDate.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    broadcastCalendar: {
      description:
        "Display the weeks in the month following the broadcast calendar.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    dir: {
      description: 'The text direction of the calendar. Use "ltr" for left-to-right or "rtl" for right-to-left.',
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "select" },
      options: ["ltr", "rtl"],
    },
    lang: {
      description: "Add the language tag to the container element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "text" },
    },
    formatters: {
      description: "Formatters used to format dates to strings. Use this prop to override the default functions.",
      table: {
        type: { summary: "Partial<Formatters>" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    labels: {
      description:
        "Labels creators to override the defaults. Use this prop to customize the aria-label attributes.",
      table: {
        type: { summary: "Partial<Labels>" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    numerals: {
      description: "The numeral system to use when formatting dates.",
      table: {
        type: { summary: "Numerals" },
        defaultValue: { summary: '"latn"' },
        category: "React Day Picker Props",
      },
      control: false,
    },
    reverseYears: {
      description:
        "Reverse the order of years in the dropdown when using captionLayout dropdown.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    timeZone: {
      description:
        "The time zone (IANA or UTC offset) to use in the calendar (experimental).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "text" },
    },
    noonSafe: {
      description:
        "Keep calendar math at noon in the configured timeZone to avoid historical second-level offsets (experimental).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    useAdditionalDayOfYearTokens: {
      description: "Enable YY and YYYY for day of year tokens when formatting or parsing dates.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
    useAdditionalWeekYearTokens: {
      description: "Enable DD and DDDD for week year tokens when formatting or parsing dates.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },

    // React Day Picker Props - Styling
    className: {
      description: "Class name to add to the root element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    classNames: {
      description:
        "Change the class names used by DayPicker. Use this prop when you need to change the default class names.",
      table: {
        type: { summary: "Partial<ClassNames>" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
    style: {
      description: "Style to apply to the root element.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
    styles: {
      description: "Change the inline styles of the HTML elements.",
      table: {
        type: { summary: "Partial<Styles>" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },

    // React Day Picker Props - Components & Customization
    components: {
      description: "Change the components used for rendering the calendar elements.",
      table: {
        type: { summary: "Partial<CustomComponents>" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },
    footer: {
      description:
        "Add a footer to the calendar, acting as a live region. Use this prop to communicate the calendar's status to screen readers.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },

    // React Day Picker Props - Accessibility
    autoFocus: {
      description:
        "When a selection mode is set, DayPicker will focus the first selected day (if set) or today's date (if not disabled).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
    "aria-label": {
      description: "The aria-label attribute to add to the container element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "text" },
    },
    "aria-labelledby": {
      description: "The aria-labelledby attribute to add to the container element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "text" },
    },
    role: {
      description: 'The role attribute to add to the container element. Options: "application" or "dialog".',
      table: {
        type: { summary: '"application" | "dialog"' },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "select" },
      options: ["application", "dialog"],
    },
    id: {
      description: "A unique id to add to the root element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "text" },
    },
    title: {
      description: "Add a title attribute to the container element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "text" },
    },
    nonce: {
      description:
        "A cryptographic nonce which can be used by Content Security Policy for the inline style attributes.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "text" },
    },
    today: {
      description:
        "The today's date. Default is the current date. This date will get the today modifier to style the day.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: "Current date" },
        category: "React Day Picker Props",
      },
      control: "date",
    },
    dateLib: {
      description:
        "Replace the default date library with a custom one (experimental).",
      table: {
        type: { summary: "Partial<DateLib>" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: false,
    },

    // React Day Picker Props - Event Handlers
    onDayClick: {
      description: "Event handler when a day is clicked.",
      table: {
        type: { summary: "(day: Date, modifiers: DayModifiers, e: MouseEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDayClick",
    },
    onDayFocus: {
      description: "Event handler when a day is focused.",
      table: {
        type: { summary: "(day: Date, modifiers: DayModifiers, e: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDayFocus",
    },
    onDayBlur: {
      description: "Event handler when a day is blurred.",
      table: {
        type: { summary: "(day: Date, modifiers: DayModifiers, e: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDayBlur",
    },
    onDayKeyDown: {
      description: "Event handler when a key is pressed on a day.",
      table: {
        type: { summary: "(day: Date, modifiers: DayModifiers, e: KeyboardEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDayKeyDown",
    },
    onDayMouseEnter: {
      description: "Event handler when the mouse enters a day.",
      table: {
        type: { summary: "(day: Date, modifiers: DayModifiers, e: MouseEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDayMouseEnter",
    },
    onDayMouseLeave: {
      description: "Event handler when the mouse leaves a day.",
      table: {
        type: { summary: "(day: Date, modifiers: DayModifiers, e: MouseEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDayMouseLeave",
    },

    // Range-specific props
    min: {
      description: "The minimum number of days to include in the range (range mode only).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "number" },
    },
    max: {
      description: "The maximum number of days to include in the range (range mode only).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "React Day Picker Props",
      },
      control: { type: "number" },
    },
    excludeDisabled: {
      description:
        "When true, the range will reset when including a disabled day (range mode only).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Day Picker Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showOutsideDays: true,
    captionLayout: "label",
    buttonVariant: "ghost",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic calendar with default settings showing a single month.",
      },
    },
  },
}

export const SingleSelection: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
    captionLayout: "label",
  },
  render: (args: any) => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <div className="flex flex-col gap-4">
        <Calendar
          {...args}
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate)
            args.onSelect?.(selectedDate)
          }}
        />
        <div className="text-sm text-muted-foreground">
          Selected: {date ? date.toLocaleDateString() : "None"}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar in single selection mode. Click a day to select it.",
      },
    },
  },
}

export const RangeSelection: Story = {
  args: {
    mode: "range",
    showOutsideDays: true,
    captionLayout: "label",
  },
  render: (args: any) => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    })
    return (
      <div className="flex flex-col gap-4">
        <Calendar
          {...args}
          mode="range"
          selected={range}
          onSelect={(selectedRange) => {
            setRange(selectedRange)
            args.onSelect?.(selectedRange)
          }}
        />
        <div className="text-sm text-muted-foreground">
          From: {range?.from ? range.from.toLocaleDateString() : "None"}
          <br />
          To: {range?.to ? range.to.toLocaleDateString() : "None"}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar in range selection mode. Click to select a start date, then click again to select an end date.",
      },
    },
  },
}

export const MultipleSelection: Story = {
  args: {
    mode: "multiple",
    showOutsideDays: true,
    captionLayout: "label",
  },
  render: (args: any) => {
    const [dates, setDates] = useState<Date[] | undefined>([new Date()])
    return (
      <div className="flex flex-col gap-4">
        <Calendar
          {...args}
          mode="multiple"
          selected={dates}
          onSelect={(selectedDates) => {
            setDates(selectedDates)
            args.onSelect?.(selectedDates)
          }}
        />
        <div className="text-sm text-muted-foreground">
          Selected: {dates?.length ?? 0} day(s)
          <br />
          {dates?.map((d) => d.toLocaleDateString()).join(", ")}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar in multiple selection mode. Click days to select multiple dates.",
      },
    },
  },
}

export const WithDropdownNavigation: Story = {
  args: {
    captionLayout: "dropdown",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with dropdown navigation for month and year selection.",
      },
    },
  },
}

export const WithMonthDropdownOnly: Story = {
  args: {
    captionLayout: "dropdown-months",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with dropdown navigation for month only.",
      },
    },
  },
}

export const WithYearDropdownOnly: Story = {
  args: {
    captionLayout: "dropdown-years",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with dropdown navigation for year only.",
      },
    },
  },
}

export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar displaying multiple months side by side.",
      },
    },
  },
}

export const WithWeekNumbers: Story = {
  args: {
    showWeekNumber: true,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with week numbers displayed in a column.",
      },
    },
  },
}

export const WithoutOutsideDays: Story = {
  args: {
    showOutsideDays: false,
    captionLayout: "label",
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar without showing days from adjacent months.",
      },
    },
  },
}

export const WithDisabledDates: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
    disabled: (date: Date) => {
      const day = date.getDay()
      return day === 0 || day === 6 // Disable weekends
    },
  },
  render: (args: any) => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        {...args}
        mode="single"
        selected={date}
        onSelect={(selectedDate) => {
          setDate(selectedDate)
          args.onSelect?.(selectedDate)
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with disabled dates. Weekends are disabled in this example.",
      },
    },
  },
}

export const WithDateRange: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
    disabled: (date: Date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const minDate = subDays(today, 7)
      const maxDate = addDays(today, 30)
      return date < minDate || date > maxDate
    },
  },
  render: (args: any) => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        {...args}
        mode="single"
        selected={date}
        onSelect={(selectedDate) => {
          setDate(selectedDate)
          args.onSelect?.(selectedDate)
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with a restricted date range. Only dates from 7 days ago to 30 days from now are selectable.",
      },
    },
  },
}

export const WithInitialMonth: Story = {
  args: {
    defaultMonth: new Date(2025, 11, 1), // December 2025
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar starting at a specific month (December 2025 in this example).",
      },
    },
  },
}

export const FixedWeeks: Story = {
  args: {
    fixedWeeks: true,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar displaying always 6 weeks per month, regardless of the month's number of weeks.",
      },
    },
  },
}

export const WithoutNavigation: Story = {
  args: {
    hideNavigation: true,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with navigation buttons hidden.",
      },
    },
  },
}

export const DisabledNavigation: Story = {
  args: {
    disableNavigation: true,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with navigation buttons disabled (but still visible).",
      },
    },
  },
}

export const CustomButtonVariant: Story = {
  args: {
    buttonVariant: "outline",
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with custom button variant for navigation buttons.",
      },
    },
  },
}

export const WeekStartsOnMonday: Story = {
  args: {
    weekStartsOn: 1,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with week starting on Monday instead of Sunday.",
      },
    },
  },
}

export const WithAnimatedNavigation: Story = {
  args: {
    animate: true,
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with animated transitions when navigating between months.",
      },
    },
  },
}

export const RangeWithMinMax: Story = {
  args: {
    mode: "range",
    min: 2,
    max: 7,
    showOutsideDays: true,
  },
  render: (args: any) => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 3),
    })
    return (
      <div className="flex flex-col gap-4">
        <Calendar
          {...args}
          mode="range"
          selected={range}
          onSelect={(selectedRange) => {
            setRange(selectedRange)
            args.onSelect?.(selectedRange)
          }}
        />
        <div className="text-sm text-muted-foreground">
          Range must be between {args.min} and {args.max} days.
          <br />
          From: {range?.from ? range.from.toLocaleDateString() : "None"}
          <br />
          To: {range?.to ? range.to.toLocaleDateString() : "None"}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Range selection with minimum and maximum number of days constraint.",
      },
    },
  },
}
