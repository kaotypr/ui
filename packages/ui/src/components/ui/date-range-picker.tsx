"use client"

import * as React from "react"
import { CalendarIcon, Clock, X } from "lucide-react"
import { format as formatDate, parseISO } from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import { TimePicker, type TimePickerProps } from "~/components/ui/time-picker"

// ============================================================================
// Types
// ============================================================================

export type DateRangePickerTimeProps = Omit<
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

export interface DateRangeValue {
	from?: Date | string
	to?: Date | string
}

export interface DateRangePickerProps {
	// Value control
	value?: DateRangeValue
	defaultValue?: DateRangeValue
	onValueChange?: (value: DateRangeValue | undefined) => void

	// Display
	placeholder?: string
	placeholderFrom?: string
	placeholderTo?: string

	// Time selection
	showTime?: boolean
	showHours?: boolean
	showMinutes?: boolean
	showSeconds?: boolean
	timePickerProps?: DateRangePickerTimeProps

	// Features
	clearable?: boolean
	disabled?: boolean

	// Calendar customization
	calendarProps?: Omit<React.ComponentProps<typeof Calendar>, "selected" | "onSelect" | "mode">

	// Styling
	className?: string
	contentClassName?: string
}

// ============================================================================
// Utility Functions
// ============================================================================

function normalizeToDate(value: Date | string | undefined): Date | undefined {
	if (!value) return undefined
	if (value instanceof Date) return value
	return parseISO(value)
}

function normalizeRangeToDate(value: DateRangeValue | undefined): DateRange | undefined {
	if (!value) return undefined
	return {
		from: normalizeToDate(value.from),
		to: normalizeToDate(value.to),
	}
}

function outputValue(
	range: DateRange | undefined,
	originalValue: DateRangeValue | undefined
): DateRangeValue | undefined {
	if (!range) return undefined
	if (!range.from && !range.to) return undefined

	// Determine if we should output strings based on original value types
	const fromWasString = typeof originalValue?.from === "string"
	const toWasString = typeof originalValue?.to === "string"

	return {
		from: range.from
			? fromWasString
				? range.from.toISOString()
				: range.from
			: undefined,
		to: range.to
			? toWasString
				? range.to.toISOString()
				: range.to
			: undefined,
	}
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

function formatDateForDisplay(date: Date | undefined, showTime: boolean): string {
	if (!date) return ""
	if (showTime) {
		return formatDate(date, "dd/MM/yy HH:mm")
	}
	return formatDate(date, "dd/MM/yy")
}

// ============================================================================
// DateRangePicker Component
// ============================================================================

export function DateRangePicker({
	value: controlledValue,
	defaultValue,
	onValueChange,
	placeholder = "Pick a date range",
	placeholderFrom = "Start",
	placeholderTo = "End",
	showTime = false,
	showHours = true,
	showMinutes = true,
	showSeconds = false,
	timePickerProps,
	clearable = false,
	disabled = false,
	calendarProps,
	className,
	contentClassName,
}: DateRangePickerProps) {
	const [open, setOpen] = React.useState(false)
	const [uncontrolledValue, setUncontrolledValue] = React.useState<DateRange | undefined>(() =>
		normalizeRangeToDate(defaultValue)
	)

	// Track original value type for output
	const originalValueRef = React.useRef<DateRangeValue | undefined>(controlledValue ?? defaultValue)
	React.useEffect(() => {
		if (controlledValue !== undefined) {
			originalValueRef.current = controlledValue
		}
	}, [controlledValue])

	const isControlled = controlledValue !== undefined
	const rangeValue = isControlled ? normalizeRangeToDate(controlledValue) : uncontrolledValue

	const handleRangeChange = React.useCallback(
		(newRange: DateRange | undefined) => {
			if (!isControlled) {
				setUncontrolledValue(newRange)
			}
			const output = outputValue(newRange, originalValueRef.current)
			onValueChange?.(output)
		},
		[isControlled, onValueChange]
	)

	const handleSelect = React.useCallback(
		(selectedRange: DateRange | undefined) => {
			if (!selectedRange) return

			// Preserve time from current values if exists
			const currentRange = rangeValue
			const newRange: DateRange = { ...selectedRange }

			if (currentRange?.from && newRange.from && showTime) {
				newRange.from.setHours(currentRange.from.getHours())
				newRange.from.setMinutes(currentRange.from.getMinutes())
				newRange.from.setSeconds(currentRange.from.getSeconds())
			} else if (newRange.from && !showTime) {
				newRange.from.setHours(0, 0, 0, 0)
			}

			if (currentRange?.to && newRange.to && showTime) {
				newRange.to.setHours(currentRange.to.getHours())
				newRange.to.setMinutes(currentRange.to.getMinutes())
				newRange.to.setSeconds(currentRange.to.getSeconds())
			} else if (newRange.to && !showTime) {
				newRange.to.setHours(23, 59, 59, 999)
			}

			handleRangeChange(newRange)

			// Close popover only if not showing time and both dates are selected
			if (!showTime && newRange.from && newRange.to) {
				setOpen(false)
			}
		},
		[rangeValue, showTime, handleRangeChange]
	)

	const handleFromTimeChange = React.useCallback(
		(value: string | undefined) => {
			if (!value) return

			const parsed = parseTimeValue(value)
			if (!parsed) return

			const newFrom = rangeValue?.from ? new Date(rangeValue.from) : new Date()

			if (!rangeValue?.from) {
				newFrom.setHours(0, 0, 0, 0)
			}

			newFrom.setHours(parsed.hours)
			newFrom.setMinutes(parsed.minutes)
			newFrom.setSeconds(parsed.seconds)

			handleRangeChange({
				from: newFrom,
				to: rangeValue?.to,
			})
		},
		[rangeValue, handleRangeChange]
	)

	const handleToTimeChange = React.useCallback(
		(value: string | undefined) => {
			if (!value) return

			const parsed = parseTimeValue(value)
			if (!parsed) return

			const newTo = rangeValue?.to ? new Date(rangeValue.to) : new Date()

			if (!rangeValue?.to) {
				newTo.setHours(23, 59, 59, 999)
			}

			newTo.setHours(parsed.hours)
			newTo.setMinutes(parsed.minutes)
			newTo.setSeconds(parsed.seconds)

			handleRangeChange({
				from: rangeValue?.from,
				to: newTo,
			})
		},
		[rangeValue, handleRangeChange]
	)

	const handleClear = React.useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			handleRangeChange(undefined)
		},
		[handleRangeChange]
	)

	const displayValue = React.useMemo(() => {
		if (!rangeValue?.from && !rangeValue?.to) return placeholder

		const fromStr = rangeValue.from
			? formatDateForDisplay(rangeValue.from, showTime)
			: placeholderFrom
		const toStr = rangeValue.to
			? formatDateForDisplay(rangeValue.to, showTime)
			: placeholderTo

		return `${fromStr} - ${toStr}`
	}, [rangeValue, showTime, placeholder, placeholderFrom, placeholderTo])

	const fromTimeValue = React.useMemo(() => {
		if (!rangeValue?.from) return undefined
		const h = rangeValue.from.getHours().toString().padStart(2, "0")
		const m = rangeValue.from.getMinutes().toString().padStart(2, "0")
		const s = rangeValue.from.getSeconds().toString().padStart(2, "0")
		return `${h}:${m}:${s}`
	}, [rangeValue?.from])

	const toTimeValue = React.useMemo(() => {
		if (!rangeValue?.to) return undefined
		const h = rangeValue.to.getHours().toString().padStart(2, "0")
		const m = rangeValue.to.getMinutes().toString().padStart(2, "0")
		const s = rangeValue.to.getSeconds().toString().padStart(2, "0")
		return `${h}:${m}:${s}`
	}, [rangeValue?.to])

	const hasValue = rangeValue?.from || rangeValue?.to

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					data-slot="date-range-picker"
					variant="outline"
					disabled={disabled}
					className={cn(
						"w-full justify-start text-left font-normal",
						!hasValue && "text-muted-foreground",
						className
					)}
				>
					<CalendarIcon className="h-4 w-4" />
					<span className="flex-1 truncate">{displayValue}</span>
					{clearable && hasValue && (
						<div
							role="button"
							tabIndex={0}
							onClick={handleClear}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleClear(e as unknown as React.MouseEvent)
								}
							}}
							className="ml-2 shrink-0 opacity-50 hover:opacity-100"
							aria-label="Clear date range"
						>
							<X className="h-4 w-4" />
						</div>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn("w-auto p-0", contentClassName)} align="start">
				<Calendar
					{...calendarProps}
					mode="range"
					numberOfMonths={2}
					selected={rangeValue}
					onSelect={handleSelect}
				/>
				{showTime && (
					<div
						data-slot="date-range-picker-time"
						className="flex flex-col gap-3 border-t p-3"
					>
						<div className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground min-w-[40px]">From:</span>
								<Clock className="h-4 w-4 text-muted-foreground" />
								<TimePicker
									mode="inline"
									value={fromTimeValue}
									onValueChange={handleFromTimeChange}
									showHours={showHours}
									showMinutes={showMinutes}
									showSeconds={showSeconds}
									disabled={disabled || !rangeValue?.from}
									{...timePickerProps}
								/>
							</div>
						</div>
						<div className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground min-w-[40px]">To:</span>
								<Clock className="h-4 w-4 text-muted-foreground" />
								<TimePicker
									mode="inline"
									value={toTimeValue}
									onValueChange={handleToTimeChange}
									showHours={showHours}
									showMinutes={showMinutes}
									showSeconds={showSeconds}
									disabled={disabled || !rangeValue?.to}
									{...timePickerProps}
								/>
							</div>
						</div>
					</div>
				)}
			</PopoverContent>
		</Popover>
	)
}
