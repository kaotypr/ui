import type { Meta, StoryObj } from "@storybook/react-vite"
import { addDays, subDays } from "date-fns"
import { useState } from "react"

import { DateRangePicker, type DateRangeValue } from "~/components/ui/date-range-picker"

const meta = {
	title: "UI/DateRangePicker",
	component: DateRangePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
A date range picker component for selecting start and end dates with a dual-month calendar interface.

This component is built on top of [React Day Picker](https://daypicker.dev/), and [date-fns](https://date-fns.org/).

### Features
- Dual-month calendar display (2 months side-by-side)
- Date range selection (start and end dates)
- Default display format: \`dd/MM/yy - dd/MM/yy\` (date only)
- With time: \`dd/MM/yy HH:mm - dd/MM/yy HH:mm\` format
- Optional time picker integration using existing TimePicker component
- Controlled and uncontrolled value modes
- Supports both Date objects and ISO strings
- Clearable option
- Disabled state support
- Customizable calendar props
`,
			},
		},
	},
	argTypes: {
		// Value control
		value: {
			description:
				"The controlled value of the selected date range. Can contain Date objects or ISO strings.",
			table: {
				type: { summary: "DateRangeValue" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: "object",
		},
		defaultValue: {
			description:
				"The default value of the selected date range (uncontrolled). Can contain Date objects or ISO strings.",
			table: {
				type: { summary: "DateRangeValue" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: "object",
		},

		// Display
		placeholder: {
			description: "Placeholder text shown when no date range is selected.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Pick a date range"' },
				category: "Props",
			},
			control: "text",
		},
		placeholderFrom: {
			description: "Placeholder text for the start date when only partial selection.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Start"' },
				category: "Props",
			},
			control: "text",
		},
		placeholderTo: {
			description: "Placeholder text for the end date when only partial selection.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"End"' },
				category: "Props",
			},
			control: "text",
		},

		// Time selection
		showTime: {
			description: "Whether to show time selection inputs below the calendars.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Time Selection",
			},
			control: "boolean",
		},
		showHours: {
			description: "Whether to show hours input when showTime is true.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Time Selection",
			},
			control: "boolean",
		},
		showMinutes: {
			description: "Whether to show minutes input when showTime is true.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Time Selection",
			},
			control: "boolean",
		},
		showSeconds: {
			description: "Whether to show seconds input when showTime is true.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Time Selection",
			},
			control: "boolean",
		},

		timePickerProps: {
			description: "Props passed to the embedded TimePicker components (both from and to).",
			table: {
				type: { summary: "DateRangePickerTimeProps" },
				category: "Time Selection",
			},
			control: "object",
		},

		// Features
		clearable: {
			description: "Whether the selection can be cleared with a clear button.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Props",
			},
			control: "boolean",
		},
		disabled: {
			description: "Whether the date range picker is disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: "boolean",
		},

		// Calendar customization
		calendarProps: {
			description:
				'Props to pass to the underlying Calendar component. Excludes "selected", "onSelect", and "mode" which are managed internally. The "numberOfMonths" defaults to 2.',
			table: {
				type: {
					summary: 'Omit<CalendarProps, "selected" | "onSelect" | "mode">',
				},
				category: "Props",
			},
		},

		// Event Handlers
		onValueChange: {
			description:
				"Event handler called when the value changes. Returns DateRangeValue with Date objects if original values were Date, ISO strings if they were strings.",
			table: {
				type: { summary: "(value: DateRangeValue | undefined) => void" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},

		// Styling
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
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: "Pick a date range",
	},
	parameters: {
		docs: {
			description: {
				story: "Basic date range picker with dual-month calendar and default settings.",
			},
		},
	},
}

export const WithDefaultValue: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 7),
		},
		placeholder: "Pick a date range",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Date range picker with a default value set to a week-long range starting from today.",
			},
		},
	},
}

export const Clearable: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 7),
		},
		clearable: true,
		placeholder: "Pick a date range",
	},
	parameters: {
		docs: {
			description: {
				story: "Set `clearable` to true to show a clear button when a date range is selected.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: "Disabled",
	},
	parameters: {
		docs: {
			description: {
				story: "Set `disabled` to true to prevent user interaction.",
			},
		},
	},
}

export const WithTime: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 3),
		},
		showTime: true,
		placeholder: "Pick date range and times",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Enable time selection with `showTime`. Shows hours and minutes inputs for both start and end dates. The display format changes to `dd/MM/yy HH:mm - dd/MM/yy HH:mm`.",
			},
		},
	},
}

export const WithTimeAndSeconds: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 3),
		},
		showTime: true,
		showSeconds: true,
		placeholder: "Pick date range with time",
	},
	parameters: {
		docs: {
			description: {
				story: "Add seconds input with `showSeconds` when `showTime` is enabled.",
			},
		},
	},
}

export const HoursOnly: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 1),
		},
		showTime: true,
		showMinutes: false,
		placeholder: "Pick date range with hours",
	},
	parameters: {
		docs: {
			description: {
				story: "Show only hours by setting `showMinutes` to false when `showTime` is enabled.",
			},
		},
	},
}

const ControlledWrapper = () => {
	const [range, setRange] = useState<DateRangeValue | undefined>({
		from: new Date(),
		to: addDays(new Date(), 5),
	})

	return (
		<div className="flex flex-col gap-4">
			<DateRangePicker
				value={range}
				onValueChange={setRange}
				placeholder="Controlled date range picker"
			/>
			<div className="text-sm text-muted-foreground">
				<div>
					From: {range?.from instanceof Date ? range.from.toISOString() : (range?.from ?? "None")}
				</div>
				<div>To: {range?.to instanceof Date ? range.to.toISOString() : (range?.to ?? "None")}</div>
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
				story: "Example of controlled state using `value` and `onValueChange`.",
			},
		},
	},
}

const ISOStringWrapper = () => {
	const [range, setRange] = useState<DateRangeValue | undefined>({
		from: new Date().toISOString(),
		to: addDays(new Date(), 7).toISOString(),
	})

	return (
		<div className="flex flex-col gap-4">
			<DateRangePicker value={range} onValueChange={setRange} placeholder="ISO string values" />
			<div className="text-sm text-muted-foreground">
				<div>From type: {typeof range?.from}</div>
				<div>From: {range?.from?.toString() ?? "None"}</div>
				<div>To type: {typeof range?.to}</div>
				<div>To: {range?.to?.toString() ?? "None"}</div>
			</div>
		</div>
	)
}

export const WithISOString: Story = {
	args: {},
	render: () => <ISOStringWrapper />,
	parameters: {
		docs: {
			description: {
				story:
					"When the initial values are ISO strings, `onValueChange` returns ISO strings. When they are Date objects, it returns Date objects.",
			},
		},
	},
}

export const WithDisabledDates: Story = {
	args: {
		placeholder: "No weekends",
		calendarProps: {
			disabled: (date: Date) => {
				const day = date.getDay()
				return day === 0 || day === 6 // Disable weekends
			},
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `calendarProps.disabled` to disable specific dates. This example disables weekends.",
			},
		},
	},
}

export const WithDateConstraints: Story = {
	args: {
		placeholder: "Select within range",
		calendarProps: {
			disabled: (date: Date) => {
				const today = new Date()
				today.setHours(0, 0, 0, 0)
				const minDate = subDays(today, 7)
				const maxDate = addDays(today, 30)
				return date < minDate || date > maxDate
			},
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Restrict selectable dates to a range using `calendarProps.disabled`. This example allows dates from 7 days ago to 30 days from now.",
			},
		},
	},
}

export const WithInitialMonth: Story = {
	args: {
		placeholder: "Starting December 2025",
		calendarProps: {
			defaultMonth: new Date(2025, 11, 1), // December 2025
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `calendarProps.defaultMonth` to set which month the calendar initially displays.",
			},
		},
	},
}

export const ThreeMonths: Story = {
	args: {
		placeholder: "Pick a date range",
		calendarProps: {
			numberOfMonths: 3,
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Display more months with `calendarProps.numberOfMonths`. This example shows 3 months.",
			},
		},
	},
}

export const SingleMonth: Story = {
	args: {
		placeholder: "Pick a date range",
		calendarProps: {
			numberOfMonths: 1,
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Override the default dual-month display to show a single month with `calendarProps.numberOfMonths: 1`.",
			},
		},
	},
}

export const WithWeekNumbers: Story = {
	args: {
		placeholder: "With week numbers",
		calendarProps: {
			showWeekNumber: true,
		},
	},
	parameters: {
		docs: {
			description: {
				story: "Show week numbers with `calendarProps.showWeekNumber`.",
			},
		},
	},
}

export const CustomWidth: Story = {
	args: {
		placeholder: "Custom width",
		className: "w-[350px]",
	},
	parameters: {
		docs: {
			description: {
				story: "Use `className` to customize the trigger button width and styling.",
			},
		},
	},
}

export const With12HourFormat: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 2),
		},
		showTime: true,
		placeholder: "Pick date range (12h format)",
		timePickerProps: {
			meridiem: true,
		},
	},
	parameters: {
		docs: {
			description: {
				story: "Enable 12-hour format with AM/PM selection using `timePickerProps.meridiem`.",
			},
		},
	},
}

export const WithStepIntervals: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 1),
		},
		showTime: true,
		showSeconds: true,
		placeholder: "Pick date range",
		timePickerProps: {
			hourStep: 2,
			minuteStep: 15,
			secondStep: 30,
		},
	},
	parameters: {
		docs: {
			description: {
				story: "Customize step intervals for hours, minutes, and seconds using `timePickerProps`.",
			},
		},
	},
}

export const WithTimeConstraints: Story = {
	args: {
		defaultValue: {
			from: new Date(),
			to: addDays(new Date(), 1),
		},
		showTime: true,
		placeholder: "Business hours only",
		timePickerProps: {
			minTime: "09:00",
			maxTime: "17:00",
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Restrict time selection range using `timePickerProps.minTime` and `timePickerProps.maxTime`.",
			},
		},
	},
}

export const BookingExample: Story = {
	args: {
		placeholder: "Check-in → Check-out",
		placeholderFrom: "Check-in",
		placeholderTo: "Check-out",
		clearable: true,
		calendarProps: {
			disabled: (date: Date) => {
				const today = new Date()
				today.setHours(0, 0, 0, 0)
				return date < today // Disable past dates
			},
		},
	},
	parameters: {
		docs: {
			description: {
				story: "A booking example with custom placeholders and past dates disabled.",
			},
		},
	},
}

export const ReportFilterExample: Story = {
	args: {
		defaultValue: {
			from: subDays(new Date(), 30),
			to: new Date(),
		},
		placeholder: "Select report period",
		clearable: true,
	},
	parameters: {
		docs: {
			description: {
				story: "A report filter example pre-filled with the last 30 days.",
			},
		},
	},
}

const PartialSelectionWrapper = () => {
	const [range, setRange] = useState<DateRangeValue | undefined>({
		from: new Date(),
		to: undefined,
	})

	return (
		<div className="flex flex-col gap-4">
			<DateRangePicker
				value={range}
				onValueChange={setRange}
				placeholder="Select date range"
				placeholderFrom="Start date"
				placeholderTo="End date"
			/>
			<div className="text-sm text-muted-foreground">
				Partial selection: Only start date is selected initially. Select an end date in the
				calendar.
			</div>
		</div>
	)
}

export const PartialSelection: Story = {
	args: {},
	render: () => <PartialSelectionWrapper />,
	parameters: {
		docs: {
			description: {
				story:
					"Shows how the component handles partial selection when only the start date is selected. The display shows the start date with the end placeholder.",
			},
		},
	},
}
