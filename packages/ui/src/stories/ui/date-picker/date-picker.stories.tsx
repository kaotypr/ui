import type { Meta, StoryObj } from "@storybook/react-vite"
import { addDays, subDays } from "date-fns"
import { useState } from "react"

import { DatePicker } from "~/components/ui/date-picker"

const meta = {
	title: "UI/DatePicker",
	component: DatePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
A date picker component for selecting a single date with optional time selection.

This component is built on top of [React Day Picker](https://daypicker.dev/), and [date-fns](https://date-fns.org/).

### Features
- Single date selection
- Optional time selection with configurable granularity
- Custom display format via date-fns format strings
- Supports both Date objects and ISO strings
- Calendar customization via \`calendarProps\`
- Clearable selection
- Controlled and uncontrolled modes
`,
			},
		},
	},
	argTypes: {
		// Value control
		value: {
			description:
				"The controlled value of the selected date. Can be a Date object or ISO string.",
			table: {
				type: { summary: "Date | string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: "date",
		},
		defaultValue: {
			description:
				"The default value of the selected date (uncontrolled). Can be a Date object or ISO string.",
			table: {
				type: { summary: "Date | string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: "date",
		},

		// Display
		placeholder: {
			description: "Placeholder text shown when no date is selected.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Pick a date"' },
				category: "Props",
			},
			control: "text",
		},
		format: {
			description:
				'Display format using date-fns format patterns. Examples: "PPP" (January 19, 2026), "MM/dd/yyyy" (01/19/2026), "yyyy-MM-dd" (2026-01-19).',
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"PPP"' },
				category: "Props",
			},
			control: "text",
		},

		// Time selection
		showTime: {
			description: "Whether to show time selection inputs below the calendar.",
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
			description: "Props passed to the embedded TimePicker component.",
			table: {
				type: { summary: "DatePickerTimeProps" },
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
			description: "Whether the date picker is disabled.",
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
				'Props to pass to the underlying Calendar component. Excludes "selected", "onSelect", and "mode" which are managed internally.',
			table: {
				type: {
					summary:
						'Omit<CalendarProps, "selected" | "onSelect" | "mode">',
				},
				category: "Props",
			},
		},

		// Event Handlers
		onValueChange: {
			description:
				"Event handler called when the value changes. Returns Date object if value was Date, ISO string if value was string.",
			table: {
				type: { summary: "(value: Date | string | undefined) => void" },
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
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: "Pick a date",
	},
	parameters: {
		docs: {
			description: {
				story: "Basic date picker with default settings.",
			},
		},
	},
}

export const WithDefaultValue: Story = {
	args: {
		defaultValue: new Date(),
		placeholder: "Pick a date",
	},
	parameters: {
		docs: {
			description: {
				story: "Date picker with a default value set to today.",
			},
		},
	},
}

export const CustomFormat: Story = {
	args: {
		defaultValue: new Date(),
		format: "MM/dd/yyyy",
		placeholder: "MM/DD/YYYY",
	},
	parameters: {
		docs: {
			description: {
				story:
					'Use the `format` prop with date-fns format patterns to customize how the date is displayed. Common formats: "PPP" (default), "MM/dd/yyyy", "yyyy-MM-dd", "dd MMM yyyy".',
			},
		},
	},
}

export const Clearable: Story = {
	args: {
		defaultValue: new Date(),
		clearable: true,
		placeholder: "Pick a date",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set `clearable` to true to show a clear button when a date is selected.",
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

export const WithMonthYearDropdown: Story = {
	args: {
		calendarProps: {
			captionLayout: "dropdown",
		},
	},
}

export const WithTime: Story = {
	args: {
		defaultValue: new Date(),
		showTime: true,
		format: "PPP HH:mm",
		placeholder: "Pick date and time",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Enable time selection with `showTime`. By default, shows hours and minutes inputs.",
			},
		},
	},
}

export const WithTimeAndSeconds: Story = {
	args: {
		defaultValue: new Date(),
		showTime: true,
		showSeconds: true,
		format: "PPP HH:mm:ss",
		placeholder: "Pick date and time",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Add seconds input with `showSeconds` when `showTime` is enabled.",
			},
		},
	},
}

export const HoursOnly: Story = {
	args: {
		defaultValue: new Date(),
		showTime: true,
		showMinutes: false,
		format: "PPP HH'h'",
		placeholder: "Pick date and hour",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Show only hours by setting `showMinutes` to false when `showTime` is enabled.",
			},
		},
	},
}

const ControlledWrapper = () => {
	const [date, setDate] = useState<Date | string | undefined>(new Date())

	return (
		<div className="flex flex-col gap-4">
			<DatePicker
				value={date}
				onValueChange={setDate}
				placeholder="Controlled date picker"
			/>
			<div className="text-sm text-muted-foreground">
				Selected: {date instanceof Date ? date.toISOString() : date ?? "None"}
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

const ISOStringWrapper = () => {
	const [date, setDate] = useState<Date | string | undefined>(
		new Date().toISOString()
	)

	return (
		<div className="flex flex-col gap-4">
			<DatePicker
				value={date}
				onValueChange={setDate}
				placeholder="ISO string value"
			/>
			<div className="text-sm text-muted-foreground">
				Value type: {typeof date}
				<br />
				Value: {date?.toString() ?? "None"}
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
					"When the initial value is an ISO string, `onValueChange` returns an ISO string. When it's a Date object, it returns a Date object.",
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

export const WithDateRange: Story = {
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

export const MultipleMonths: Story = {
	args: {
		placeholder: "Pick a date",
		calendarProps: {
			numberOfMonths: 2,
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Display multiple months with `calendarProps.numberOfMonths`.",
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
				story:
					"Show week numbers with `calendarProps.showWeekNumber`.",
			},
		},
	},
}

export const CustomWidth: Story = {
	args: {
		placeholder: "Custom width",
		className: "w-[300px]",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `className` to customize the trigger button width and styling.",
			},
		},
	},
}

export const With12HourFormat: Story = {
	args: {
		defaultValue: new Date(),
		showTime: true,
		format: "PPP hh:mm aa",
		placeholder: "Pick date and time (12h)",
		timePickerProps: {
			meridiem: true,
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Enable 12-hour format with AM/PM selection using `timePickerProps.meridiem`.",
			},
		},
	},
}

export const WithStepIntervals: Story = {
	args: {
		defaultValue: new Date(),
		showTime: true,
		showSeconds: true,
		format: "PPP HH:mm:ss",
		placeholder: "Pick date and time",
		timePickerProps: {
			hourStep: 2,
			minuteStep: 15,
			secondStep: 30,
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Customize step intervals for hours, minutes, and seconds using `timePickerProps`.",
			},
		},
	},
}

export const WithTimeConstraints: Story = {
	args: {
		defaultValue: new Date(),
		showTime: true,
		format: "PPP HH:mm",
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
