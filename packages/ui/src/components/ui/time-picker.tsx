"use client"

import * as React from "react"
import { CaretDownIcon, ClockIcon, XIcon } from "@phosphor-icons/react"
import { CheckIcon } from "@phosphor-icons/react"

import { cn } from "~/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { ScrollArea } from "./scroll-area"

// ============================================================================
// Types
// ============================================================================

interface TimeValue {
  hours?: number
  minutes?: number
  seconds?: number
  meridiem?: "AM" | "PM"
}

interface TimePickerProps {
  /** The controlled value of the selected time as a string */
  value?: string
  /** The default value of the selected time (uncontrolled) */
  defaultValue?: string
  /** Event handler called when the value changes */
  onValueChange?: (value: string | undefined) => void
  /** Time format: false for 24-hour, true for 12-hour with AM/PM */
  meridiem?: boolean
  /** Whether to show the hours column */
  showHours?: boolean
  /** Whether to show the minutes column */
  showMinutes?: boolean
  /** Whether to show the seconds column */
  showSeconds?: boolean
  /** Step interval for hours options */
  hourStep?: number
  /** Step interval for minutes options */
  minuteStep?: number
  /** Step interval for seconds options */
  secondStep?: number
  /** Minimum selectable time */
  minTime?: string
  /** Maximum selectable time */
  maxTime?: string
  /** Whether the selection can be cleared */
  clearable?: boolean
  /** Whether the time picker is disabled */
  disabled?: boolean
  /** Placeholder text shown when no time is selected */
  placeholder?: string
  /** Additional CSS class names for the trigger button */
  className?: string
  /** Additional CSS class names for the popover content */
  contentClassName?: string
}

// ============================================================================
// Time Parsing and Formatting Utilities
// ============================================================================

function parseTimeString(
  timeStr: string | undefined,
  useMeridiem: boolean
): TimeValue {
  if (!timeStr) return {}

  const meridiemMatch = timeStr.match(/\s*(AM|PM)$/i)
  const meridiem = meridiemMatch
    ? (meridiemMatch[1]?.toUpperCase() as "AM" | "PM")
    : undefined

  const timePart = timeStr.replace(/\s*(AM|PM)$/i, "").trim()
  const parts = timePart.split(":").map(Number)

  let hours = parts[0]
  const minutes = parts[1]
  const seconds = parts[2]

  // If we're using 12-hour format but the input has no meridiem,
  // treat it as 24-hour and convert
  if (useMeridiem && !meridiem && hours !== undefined) {
    const convertedMeridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    return {
      hours,
      minutes,
      seconds,
      meridiem: convertedMeridiem,
    }
  }

  return {
    hours: hours,
    minutes,
    seconds,
    meridiem,
  }
}

function formatTimeValue(
  value: TimeValue,
  useMeridiem: boolean,
  showMinutes: boolean,
  showSeconds: boolean
): string | undefined {
  if (value.hours === undefined) return undefined

  let hours = value.hours
  let meridiem = value.meridiem

  if (useMeridiem) {
    // For 12-hour format, use the meridiem value or default to AM
    meridiem = meridiem || "AM"
    // Ensure hours are in 1-12 range
    if (hours === 0) hours = 12
    else if (hours > 12) hours = hours - 12
  } else {
    // For 24-hour format, convert from 12-hour if meridiem is present
    if (meridiem) {
      if (meridiem === "PM" && hours !== 12) hours = hours + 12
      else if (meridiem === "AM" && hours === 12) hours = 0
    }
  }

  const parts = [hours.toString().padStart(2, "0")]

  if (showMinutes) {
    parts.push((value.minutes ?? 0).toString().padStart(2, "0"))
  }

  if (showSeconds) {
    parts.push((value.seconds ?? 0).toString().padStart(2, "0"))
  }

  let result = parts.join(":")

  if (useMeridiem && meridiem) {
    result += ` ${meridiem}`
  }

  return result
}

function timeToMinutes(
  value: TimeValue,
  useMeridiem: boolean
): number | undefined {
  if (value.hours === undefined) return undefined

  let hours = value.hours

  // Convert to 24-hour for comparison
  if (useMeridiem && value.meridiem) {
    if (value.meridiem === "PM" && hours !== 12) hours += 12
    else if (value.meridiem === "AM" && hours === 12) hours = 0
  }

  return hours * 3600 + (value.minutes ?? 0) * 60 + (value.seconds ?? 0)
}

function isTimeDisabled(
  hours: number,
  minutes: number | undefined,
  seconds: number | undefined,
  meridiem: "AM" | "PM" | undefined,
  minTime: string | undefined,
  maxTime: string | undefined,
  useMeridiem: boolean
): boolean {
  const current = timeToMinutes(
    { hours, minutes: minutes ?? 0, seconds: seconds ?? 0, meridiem },
    useMeridiem
  )

  if (current === undefined) return false

  if (minTime) {
    const min = timeToMinutes(parseTimeString(minTime, useMeridiem), useMeridiem)
    if (min !== undefined && current < min) return true
  }

  if (maxTime) {
    const max = timeToMinutes(parseTimeString(maxTime, useMeridiem), useMeridiem)
    if (max !== undefined && current > max) return true
  }

  return false
}

// ============================================================================
// Generate Options
// ============================================================================

function generateHourOptions(useMeridiem: boolean, step: number = 1) {
  const options: { value: string; label: string }[] = []
  const max = useMeridiem ? 12 : 23
  const min = useMeridiem ? 1 : 0

  for (let i = min; i <= max; i += step) {
    options.push({
      value: i.toString(),
      label: i.toString().padStart(2, "0"),
    })
  }

  return options
}

function generateMinuteOptions(step: number = 1) {
  const options: { value: string; label: string }[] = []

  for (let i = 0; i < 60; i += step) {
    options.push({
      value: i.toString(),
      label: i.toString().padStart(2, "0"),
    })
  }

  return options
}

function generateSecondOptions(step: number = 1) {
  return generateMinuteOptions(step)
}

function generateMeridiemOptions() {
  return [
    { value: "AM", label: "AM" },
    { value: "PM", label: "PM" },
  ]
}

// ============================================================================
// TimePickerColumn Component
// ============================================================================

interface TimePickerColumnProps {
  options: { value: string; label: string }[]
  value?: string
  onValueChange: (value: string) => void
  isDisabled?: (value: string) => boolean
  disabled?: boolean
  className?: string
  "aria-label"?: string
}

function TimePickerColumn({
  options,
  value,
  onValueChange,
  isDisabled,
  disabled,
  className,
  "aria-label": ariaLabel,
}: TimePickerColumnProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const selectedRef = React.useRef<HTMLButtonElement>(null)

  // Auto-scroll to selected value on mount and value change
  React.useEffect(() => {
    // Skip if no value is selected
    if (value === undefined) return

    if (selectedRef.current && containerRef.current) {
      const container = containerRef.current
      const selected = selectedRef.current
      const containerHeight = container.clientHeight
      const selectedTop = selected.offsetTop
      const selectedHeight = selected.clientHeight

      // Center the selected item
      container.scrollTo({
        top: selectedTop - containerHeight / 2 + selectedHeight / 2,
        behavior: "smooth",
      })
    }
  }, [value])

  return (
    <ScrollArea
      className={cn(
        "h-[200px] w-16",
        // Hide scrollbar by default, show thin one on hover
        "[&_[data-slot=scroll-area-scrollbar]]:w-1 [&_[data-slot=scroll-area-scrollbar]]:opacity-0 [&:hover_[data-slot=scroll-area-scrollbar]]:opacity-100",
        className
      )}
      aria-label={ariaLabel}
    >
      <div
        ref={containerRef}
        className="flex flex-col py-2"
        role="listbox"
        aria-label={ariaLabel}
      >
        {options.map((option) => {
          const isSelected = value === option.value
          const optionDisabled = disabled || isDisabled?.(option.value)

          return (
            <button
              key={option.value}
              ref={isSelected ? selectedRef : undefined}
              type="button"
              role="option"
              aria-selected={isSelected}
              disabled={optionDisabled}
              onClick={() => !optionDisabled && onValueChange(option.value)}
              className={cn(
                "relative flex h-8 items-center justify-center px-2 text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                isSelected && "font-medium",
                optionDisabled && "pointer-events-none opacity-50"
              )}
            >
              <span className="flex-1 text-center">{option.label}</span>
              {isSelected && (
                <CheckIcon className="absolute right-1 size-3.5 shrink-0" />
              )}
            </button>
          )
        })}
      </div>
    </ScrollArea>
  )
}

// ============================================================================
// TimePickerContent Component
// ============================================================================

interface TimePickerContentProps {
  value: TimeValue
  onValueChange: (value: TimeValue) => void
  useMeridiem: boolean
  showHours: boolean
  showMinutes: boolean
  showSeconds: boolean
  hourStep: number
  minuteStep: number
  secondStep: number
  minTime?: string
  maxTime?: string
  disabled?: boolean
  className?: string
}

function TimePickerContent({
  value,
  onValueChange,
  useMeridiem,
  showHours,
  showMinutes,
  showSeconds,
  hourStep,
  minuteStep,
  secondStep,
  minTime,
  maxTime,
  disabled,
  className,
}: TimePickerContentProps) {
  const hourOptions = React.useMemo(
    () => generateHourOptions(useMeridiem, hourStep),
    [useMeridiem, hourStep]
  )

  const minuteOptions = React.useMemo(
    () => generateMinuteOptions(minuteStep),
    [minuteStep]
  )

  const secondOptions = React.useMemo(
    () => generateSecondOptions(secondStep),
    [secondStep]
  )

  const meridiemOptions = React.useMemo(() => generateMeridiemOptions(), [])

  const isHourDisabled = React.useCallback(
    (hourValue: string) => {
      const hours = parseInt(hourValue, 10)
      return isTimeDisabled(
        hours,
        value.minutes,
        value.seconds,
        useMeridiem ? value.meridiem : undefined,
        minTime,
        maxTime,
        useMeridiem
      )
    },
    [value.minutes, value.seconds, value.meridiem, minTime, maxTime, useMeridiem]
  )

  const isMinuteDisabled = React.useCallback(
    (minuteValue: string) => {
      if (value.hours === undefined) return false
      const minutes = parseInt(minuteValue, 10)
      return isTimeDisabled(
        value.hours,
        minutes,
        value.seconds,
        useMeridiem ? value.meridiem : undefined,
        minTime,
        maxTime,
        useMeridiem
      )
    },
    [value.hours, value.seconds, value.meridiem, minTime, maxTime, useMeridiem]
  )

  const isSecondDisabled = React.useCallback(
    (secondValue: string) => {
      if (value.hours === undefined) return false
      const seconds = parseInt(secondValue, 10)
      return isTimeDisabled(
        value.hours,
        value.minutes,
        seconds,
        useMeridiem ? value.meridiem : undefined,
        minTime,
        maxTime,
        useMeridiem
      )
    },
    [value.hours, value.minutes, value.meridiem, minTime, maxTime, useMeridiem]
  )

  const isMeridiemDisabled = React.useCallback(
    (meridiemValue: string) => {
      if (value.hours === undefined) return false
      return isTimeDisabled(
        value.hours,
        value.minutes,
        value.seconds,
        meridiemValue as "AM" | "PM",
        minTime,
        maxTime,
        useMeridiem
      )
    },
    [value.hours, value.minutes, value.seconds, minTime, maxTime, useMeridiem]
  )

  // Count visible columns for separator logic
  const visibleColumns: React.ReactNode[] = []

  if (showHours) {
    visibleColumns.push(
      <TimePickerColumn
        key="hours"
        options={hourOptions}
        value={value.hours?.toString()}
        onValueChange={(v) =>
          onValueChange({ ...value, hours: parseInt(v, 10) })
        }
        isDisabled={isHourDisabled}
        disabled={disabled}
        aria-label="Hours"
      />
    )
  }

  if (showMinutes) {
    visibleColumns.push(
      <TimePickerColumn
        key="minutes"
        options={minuteOptions}
        value={value.minutes?.toString()}
        onValueChange={(v) =>
          onValueChange({ ...value, minutes: parseInt(v, 10) })
        }
        isDisabled={isMinuteDisabled}
        disabled={disabled}
        aria-label="Minutes"
      />
    )
  }

  if (showSeconds) {
    visibleColumns.push(
      <TimePickerColumn
        key="seconds"
        options={secondOptions}
        value={value.seconds?.toString()}
        onValueChange={(v) =>
          onValueChange({ ...value, seconds: parseInt(v, 10) })
        }
        isDisabled={isSecondDisabled}
        disabled={disabled}
        aria-label="Seconds"
      />
    )
  }

  if (useMeridiem) {
    visibleColumns.push(
      <TimePickerColumn
        key="meridiem"
        options={meridiemOptions}
        value={value.meridiem}
        onValueChange={(v) =>
          onValueChange({ ...value, meridiem: v as "AM" | "PM" })
        }
        isDisabled={isMeridiemDisabled}
        disabled={disabled}
        aria-label="AM/PM"
      />
    )
  }

  return (
    <div
      className={cn("flex", className)}
      role="group"
      aria-label="Time picker"
    >
      {visibleColumns.map((column, index) => (
        <React.Fragment key={index}>
          {column}
          {index < visibleColumns.length - 1 && (
            <div className="mx-0.5 w-px self-stretch bg-border" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// ============================================================================
// TimePickerSummary Component
// ============================================================================

interface TimePickerSummaryProps {
  formattedValue?: string
  className?: string
}

function TimePickerSummary({ formattedValue, className }: TimePickerSummaryProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 border-t pt-2 text-sm text-muted-foreground",
        className
      )}
    >
      <ClockIcon className="size-4" />
      <span>{formattedValue || "--:--"}</span>
    </div>
  )
}

// ============================================================================
// TimePicker Component
// ============================================================================

function TimePicker({
  value: controlledValue,
  defaultValue,
  onValueChange,
  meridiem: useMeridiem = false,
  showHours = true,
  showMinutes = true,
  showSeconds = false,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  minTime,
  maxTime,
  clearable = false,
  disabled = false,
  placeholder = "Select time",
  className,
  contentClassName,
}: TimePickerProps) {
  const isControlled = controlledValue !== undefined

  const [internalValue, setInternalValue] = React.useState<TimeValue>(() =>
    parseTimeString(defaultValue, useMeridiem)
  )

  const [open, setOpen] = React.useState(false)

  // Handle controlled vs uncontrolled
  const currentValue = React.useMemo(() => {
    if (isControlled) {
      return parseTimeString(controlledValue, useMeridiem)
    }
    return internalValue
  }, [isControlled, controlledValue, useMeridiem, internalValue])

  const formattedValue = React.useMemo(
    () =>
      formatTimeValue(currentValue, useMeridiem, showMinutes, showSeconds),
    [currentValue, useMeridiem, showMinutes, showSeconds]
  )

  const handleValueChange = React.useCallback(
    (newValue: TimeValue) => {
      if (disabled) return

      if (!isControlled) {
        setInternalValue(newValue)
      }

      const formatted = formatTimeValue(
        newValue,
        useMeridiem,
        showMinutes,
        showSeconds
      )
      onValueChange?.(formatted)
    },
    [disabled, isControlled, useMeridiem, showMinutes, showSeconds, onValueChange]
  )

  const handleClear = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (disabled) return

      if (!isControlled) {
        setInternalValue({})
      }
      onValueChange?.(undefined)
    },
    [disabled, isControlled, onValueChange]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            data-slot="time-picker"
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-fit min-w-[140px] justify-start gap-2 font-normal",
              !formattedValue && "text-muted-foreground",
              className
            )}
          />
        }
      >
        <ClockIcon className="size-4" />
        <span className="flex-1 text-left">
          {formattedValue || placeholder}
        </span>
        {clearable && formattedValue && (
          <span
            role="button"
            tabIndex={0}
            onClick={handleClear}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClear(e as unknown as React.MouseEvent)
              }
            }}
            className="rounded-sm p-0.5 hover:bg-muted focus:outline-none focus:ring-1 focus:ring-ring"
            aria-label="Clear time"
          >
            <XIcon className="size-3.5" />
          </span>
        )}
        <CaretDownIcon className="size-4 text-muted-foreground" />
      </PopoverTrigger>

      <PopoverContent
        className={cn("w-auto p-3", contentClassName)}
        align="start"
      >
        <TimePickerContent
          value={currentValue}
          onValueChange={handleValueChange}
          useMeridiem={useMeridiem}
          showHours={showHours}
          showMinutes={showMinutes}
          showSeconds={showSeconds}
          hourStep={hourStep}
          minuteStep={minuteStep}
          secondStep={secondStep}
          minTime={minTime}
          maxTime={maxTime}
          disabled={disabled}
        />

        <TimePickerSummary formattedValue={formattedValue} />
      </PopoverContent>
    </Popover>
  )
}

export { TimePicker, TimePickerContent, TimePickerColumn, TimePickerSummary }
export type { TimePickerProps, TimeValue }
