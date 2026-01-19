"use client"

import * as React from "react"
import { CalendarIcon, X } from "lucide-react"
import { format as formatDate, parseISO } from "date-fns"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import { Input } from "~/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"

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
	originalValue: Date | string | undefined
): Date | string | undefined {
	if (!date) return undefined
	// If original value was a string, return ISO string
	if (typeof originalValue === "string") {
		return date.toISOString()
	}
	// Otherwise return Date object
	return date
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
	clearable = false,
	disabled = false,
	calendarProps,
	className,
	contentClassName,
}: DatePickerProps) {
	const [open, setOpen] = React.useState(false)
	const [uncontrolledValue, setUncontrolledValue] = React.useState<Date | undefined>(() =>
		normalizeToDate(defaultValue)
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
		[isControlled, onValueChange]
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
		[dateValue, showTime, handleDateChange]
	)

	const handleTimeChange = React.useCallback(
		(field: "hours" | "minutes" | "seconds", value: string) => {
			const numValue = Number.parseInt(value, 10)
			if (Number.isNaN(numValue)) return

			const newDate = dateValue ? new Date(dateValue) : new Date()

			// If no date was selected, set to today
			if (!dateValue) {
				newDate.setHours(0, 0, 0, 0)
			}

			switch (field) {
				case "hours":
					newDate.setHours(numValue)
					break
				case "minutes":
					newDate.setMinutes(numValue)
					break
				case "seconds":
					newDate.setSeconds(numValue)
					break
			}

			handleDateChange(newDate)
		},
		[dateValue, handleDateChange]
	)

	const handleClear = React.useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			handleDateChange(undefined)
		},
		[handleDateChange]
	)

	const displayValue = React.useMemo(() => {
		if (!dateValue) return placeholder
		try {
			return formatDate(dateValue, format)
		} catch {
			return placeholder
		}
	}, [dateValue, format, placeholder])

	const hours = dateValue?.getHours().toString().padStart(2, "0") ?? "00"
	const minutes = dateValue?.getMinutes().toString().padStart(2, "0") ?? "00"
	const seconds = dateValue?.getSeconds().toString().padStart(2, "0") ?? "00"

	// Determine which time fields to show
	const timeFieldsToShow = showTime
		? {
				hours: showHours,
				minutes: showMinutes,
				seconds: showSeconds,
			}
		: { hours: false, minutes: false, seconds: false }

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					data-slot="date-picker"
					variant="outline"
					disabled={disabled}
					className={cn(
						"w-full justify-start text-left font-normal",
						!dateValue && "text-muted-foreground",
						className
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					<span className="flex-1 truncate">{displayValue}</span>
					{clearable && dateValue && (
						// biome-ignore lint/a11y/useKeyWithClickEvents: click handler sufficient for clear action
						// biome-ignore lint/a11y/useSemanticElements: false positive
                        <div
							role="button"
							tabIndex={0}
							onClick={handleClear}
							className="ml-2 shrink-0 opacity-50 hover:opacity-100"
						>
							<X className="h-4 w-4" />
						</div>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn("w-auto p-0", contentClassName)} align="start">
				<Calendar
					{...calendarProps}
					mode="single"
					selected={dateValue}
					onSelect={handleSelect}
				/>
				{showTime && (
					<div
						data-slot="date-picker-time"
						className="flex items-center justify-center gap-2 border-t p-3"
					>
						{timeFieldsToShow.hours && (
							<div className="flex items-center gap-1">
								<Input
									type="number"
									min={0}
									max={23}
									value={hours}
									onChange={(e) => handleTimeChange("hours", e.target.value)}
									className="w-14 text-center"
									aria-label="Hours"
								/>
								{(timeFieldsToShow.minutes || timeFieldsToShow.seconds) && (
									<span className="text-muted-foreground">:</span>
								)}
							</div>
						)}
						{timeFieldsToShow.minutes && (
							<div className="flex items-center gap-1">
								<Input
									type="number"
									min={0}
									max={59}
									value={minutes}
									onChange={(e) => handleTimeChange("minutes", e.target.value)}
									className="w-14 text-center"
									aria-label="Minutes"
								/>
								{timeFieldsToShow.seconds && (
									<span className="text-muted-foreground">:</span>
								)}
							</div>
						)}
						{timeFieldsToShow.seconds && (
							<Input
								type="number"
								min={0}
								max={59}
								value={seconds}
								onChange={(e) => handleTimeChange("seconds", e.target.value)}
								className="w-14 text-center"
								aria-label="Seconds"
							/>
						)}
					</div>
				)}
			</PopoverContent>
		</Popover>
	)
}
