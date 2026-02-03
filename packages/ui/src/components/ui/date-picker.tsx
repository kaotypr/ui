"use client"

import * as React from "react"
import { CalendarDotIcon, XIcon } from "@phosphor-icons/react"
import { format as formatDate, parseISO } from "date-fns"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import { TimePicker, type TimePickerProps } from "~/components/ui/time-picker"

export type DatePickerTimeProps = Omit<
	TimePickerProps,
	| "value"
	| "defaultValue"
	| "onValueChange"
	| "mode"
	| "showHours"
	| "showMinutes"
	| "showSeconds"
	| "clearable"
	| "disabled"
	| "placeholder"
>

export interface DatePickerProps {
	// Value control
	value?: Date | string
	defaultValue?: Date | string
	onValueChange?: (value: Date | string | undefined) => void

	// Display
	placeholder?: string
	format?: string

	// Time selection
	showTime?: boolean
	showHours?: boolean
	showMinutes?: boolean
	showSeconds?: boolean
	timePickerProps?: DatePickerTimeProps

	// Features
	clearable?: boolean
	disabled?: boolean

	// Calendar customization
	calendarProps?: Omit<React.ComponentProps<typeof Calendar>, "selected" | "onSelect" | "mode">

	// Styling
	className?: string
	contentClassName?: string
}

function normalizeToDate(value: Date | string | undefined): Date | undefined {
	if (!value) return undefined
	if (value instanceof Date) return value
	return parseISO(value)
}

function outputValue(
	date: Date | undefined,
	originalValue: Date | string | undefined,
): Date | string | undefined {
	if (!date) return undefined
	// If original value was a string, return ISO string
	if (typeof originalValue === "string") {
		return date.toISOString()
	}
	// Otherwise return Date object
	return date
}

// Helper to parse time string from TimePicker
function parseTimeValue(value: string): { hours: number; minutes: number; seconds: number } | null {
	const trimmed = value.trim()
	if (!trimmed) return null

	// Check for 12-hour format with AM/PM
	const meridiemMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i)
	if (meridiemMatch?.[1] && meridiemMatch[2] && meridiemMatch[4]) {
		let hours = Number.parseInt(meridiemMatch[1], 10)
		const minutes = Number.parseInt(meridiemMatch[2], 10)
		const seconds = meridiemMatch[3] ? Number.parseInt(meridiemMatch[3], 10) : 0
		const isPM = meridiemMatch[4].toUpperCase() === "PM"

		// Convert to 24-hour
		if (isPM && hours !== 12) {
			hours += 12
		} else if (!isPM && hours === 12) {
			hours = 0
		}

		return { hours, minutes, seconds }
	}

	// Check for 24-hour format
	const match24 = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/)
	if (match24?.[1] && match24[2]) {
		const hours = Number.parseInt(match24[1], 10)
		const minutes = Number.parseInt(match24[2], 10)
		const seconds = match24[3] ? Number.parseInt(match24[3], 10) : 0

		return { hours, minutes, seconds }
	}

	return null
}

export function DatePicker({
	value: controlledValue,
	defaultValue,
	onValueChange,
	placeholder = "Pick a date",
	format = "PPP",
	showTime = false,
	showHours = true,
	showMinutes = true,
	showSeconds = false,
	timePickerProps,
	clearable = true,
	disabled = false,
	calendarProps,
	className,
	contentClassName,
}: DatePickerProps) {
	const [open, setOpen] = React.useState(false)
	const [uncontrolledValue, setUncontrolledValue] = React.useState<Date | undefined>(() =>
		normalizeToDate(defaultValue),
	)

	// Track original value type for output
	const originalValueRef = React.useRef<Date | string | undefined>(controlledValue ?? defaultValue)
	React.useEffect(() => {
		if (controlledValue !== undefined) {
			originalValueRef.current = controlledValue
		}
	}, [controlledValue])

	const isControlled = controlledValue !== undefined
	const dateValue = isControlled ? normalizeToDate(controlledValue) : uncontrolledValue

	const handleDateChange = React.useCallback(
		(newDate: Date | undefined) => {
			if (!isControlled) {
				setUncontrolledValue(newDate)
			}
			const output = outputValue(newDate, originalValueRef.current)
			onValueChange?.(output)
		},
		[isControlled, onValueChange],
	)

	const handleSelect = React.useCallback(
		(selectedDate: Date | undefined) => {
			if (!selectedDate) return

			// Preserve time from current value if exists
			const currentDate = dateValue
			if (currentDate && showTime) {
				selectedDate.setHours(currentDate.getHours())
				selectedDate.setMinutes(currentDate.getMinutes())
				selectedDate.setSeconds(currentDate.getSeconds())
			} else if (!showTime) {
				// Reset time to midnight for date-only mode
				selectedDate.setHours(0, 0, 0, 0)
			}

			handleDateChange(selectedDate)

			// Close popover only if not showing time (to allow time adjustment)
			if (!showTime) {
				setOpen(false)
			}
		},
		[dateValue, showTime, handleDateChange],
	)

	const handleTimeChange = React.useCallback(
		(value: string | undefined) => {
			if (!value) return

			const parsed = parseTimeValue(value)
			if (!parsed) return

			const newDate = dateValue ? new Date(dateValue) : new Date()

			// If no date was selected, set to today
			if (!dateValue) {
				newDate.setHours(0, 0, 0, 0)
			}

			newDate.setHours(parsed.hours)
			newDate.setMinutes(parsed.minutes)
			newDate.setSeconds(parsed.seconds)

			handleDateChange(newDate)
		},
		[dateValue, handleDateChange],
	)

	const handleClear = React.useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			handleDateChange(undefined)
		},
		[handleDateChange],
	)

	const displayValue = React.useMemo(() => {
		if (!dateValue) return placeholder
		try {
			return formatDate(dateValue, format)
		} catch {
			return placeholder
		}
	}, [dateValue, format, placeholder])

	const timeValue = React.useMemo(() => {
		if (!dateValue) return undefined
		const h = dateValue.getHours().toString().padStart(2, "0")
		const m = dateValue.getMinutes().toString().padStart(2, "0")
		const s = dateValue.getSeconds().toString().padStart(2, "0")
		return `${h}:${m}:${s}`
	}, [dateValue])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger disabled={disabled}>
				<Button
					data-slot="date-picker"
					variant="outline"
					disabled={disabled}
					className={cn(
						"w-full justify-start text-left font-normal",
						!dateValue && "text-muted-foreground",
						className,
					)}
				>
					<CalendarDotIcon className="h-4 w-4" />
					<span className="flex-1 truncate">{displayValue}</span>
					{clearable && dateValue && (
						<div
							role="button"
							tabIndex={0}
							onClick={handleClear}
							className="cursor-pointer ml-2 shrink-0 opacity-50 hover:opacity-100"
						>
							<XIcon className="h-4 w-4" />
						</div>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn("w-auto p-0", contentClassName)} align="start">
				<Calendar {...calendarProps} mode="single" selected={dateValue} onSelect={handleSelect} />
				{showTime && (
					<div
						data-slot="date-picker-time"
						className="flex items-center justify-center gap-2 border-t p-3"
					>
						<TimePicker
							value={timeValue}
							onValueChange={handleTimeChange}
							showHours={showHours}
							showMinutes={showMinutes}
							showSeconds={showSeconds}
							disabled={disabled}
							{...timePickerProps}
						/>
					</div>
				)}
			</PopoverContent>
		</Popover>
	)
}
