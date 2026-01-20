"use client"

import * as React from "react"
import { Clock, X } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

// ============================================================================
// Types
// ============================================================================

export interface TimePickerProps {
  // Value control
  value?: string
  defaultValue?: string
  onValueChange?: (value: string | undefined) => void

  // Display mode
  mode?: "inline" | "popover"

  // Time format
  meridiem?: boolean // false = 24-hour, true = 12-hour with AM/PM

  // Time units visibility
  showHours?: boolean // default true
  showMinutes?: boolean // default true
  showSeconds?: boolean // default false

  // Step intervals
  hourStep?: number // default 1
  minuteStep?: number // default 5
  secondStep?: number // default 1

  // Constraints
  minTime?: string
  maxTime?: string

  // Features
  clearable?: boolean
  disabled?: boolean
  placeholder?: string

  // Styling
  className?: string
  contentClassName?: string // for popover content
}

interface ParsedTime {
  hours: number // 0-23 (normalized to 24-hour)
  minutes: number
  seconds: number
}

// ============================================================================
// Time Parsing Utilities
// ============================================================================

/**
 * Parse a time string into normalized 24-hour format
 * Supports: "14:30", "14:30:45", "02:30 PM", "02:30:45 PM"
 */
function parseTimeString(value: string | undefined): ParsedTime | null {
  if (!value || typeof value !== "string") return null

  const trimmed = value.trim()
  if (!trimmed) return null

  // Check for 12-hour format with AM/PM
  const meridiemMatch = trimmed.match(
    /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i
  )
  if (meridiemMatch?.[1] && meridiemMatch[2] && meridiemMatch[4]) {
    let hours = Number.parseInt(meridiemMatch[1], 10)
    const minutes = Number.parseInt(meridiemMatch[2], 10)
    const seconds = meridiemMatch[3]
      ? Number.parseInt(meridiemMatch[3], 10)
      : 0
    const isPM = meridiemMatch[4].toUpperCase() === "PM"

    // Convert to 24-hour
    if (isPM && hours !== 12) {
      hours += 12
    } else if (!isPM && hours === 12) {
      hours = 0
    }

    if (
      hours >= 0 &&
      hours <= 23 &&
      minutes >= 0 &&
      minutes <= 59 &&
      seconds >= 0 &&
      seconds <= 59
    ) {
      return { hours, minutes, seconds }
    }
    return null
  }

  // Check for 24-hour format
  const match24 = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/)
  if (match24?.[1] && match24[2]) {
    const hours = Number.parseInt(match24[1], 10)
    const minutes = Number.parseInt(match24[2], 10)
    const seconds = match24[3] ? Number.parseInt(match24[3], 10) : 0

    if (
      hours >= 0 &&
      hours <= 23 &&
      minutes >= 0 &&
      minutes <= 59 &&
      seconds >= 0 &&
      seconds <= 59
    ) {
      return { hours, minutes, seconds }
    }
  }

  return null
}

// ============================================================================
// Time Formatting Utilities
// ============================================================================

/**
 * Format time to string based on meridiem and visible units
 */
function formatTimeString(
  time: ParsedTime,
  meridiem: boolean,
  showMinutes: boolean,
  showSeconds: boolean
): string {
  let hours = time.hours
  let suffix = ""

  if (meridiem) {
    // Convert to 12-hour format
    suffix = hours >= 12 ? " PM" : " AM"
    hours = hours % 12
    if (hours === 0) hours = 12
  }

  const parts: string[] = [hours.toString().padStart(2, "0")]

  if (showMinutes) {
    parts.push(time.minutes.toString().padStart(2, "0"))
  }

  if (showSeconds) {
    parts.push(time.seconds.toString().padStart(2, "0"))
  }

  return parts.join(":") + suffix
}

/**
 * Convert time to total minutes for comparison
 */
function timeToMinutes(time: ParsedTime): number {
  return time.hours * 60 + time.minutes + time.seconds / 60
}

// ============================================================================
// Option Generation Utilities
// ============================================================================

function generateHourOptions(
  meridiem: boolean,
  step: number
): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = []

  if (meridiem) {
    // 12-hour format: 12, 1, 2, ..., 11
    for (let h = 0; h < 12; h += step) {
      const displayHour = h === 0 ? 12 : h
      const value = displayHour.toString().padStart(2, "0")
      options.push({ value, label: value })
    }
  } else {
    // 24-hour format: 00, 01, ..., 23
    for (let h = 0; h < 24; h += step) {
      const value = h.toString().padStart(2, "0")
      options.push({ value, label: value })
    }
  }

  return options
}

function generateMinuteOptions(step: number): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = []
  for (let m = 0; m < 60; m += step) {
    const value = m.toString().padStart(2, "0")
    options.push({ value, label: value })
  }
  return options
}

function generateSecondOptions(step: number): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = []
  for (let s = 0; s < 60; s += step) {
    const value = s.toString().padStart(2, "0")
    options.push({ value, label: value })
  }
  return options
}

// ============================================================================
// Helper: Check if time is within constraints
// ============================================================================

function isTimeDisabled(
  hours: number,
  minutes: number,
  seconds: number,
  minTime: ParsedTime | null,
  maxTime: ParsedTime | null
): boolean {
  const time: ParsedTime = { hours, minutes, seconds }
  const timeMinutes = timeToMinutes(time)

  if (minTime && timeMinutes < timeToMinutes(minTime)) {
    return true
  }
  if (maxTime && timeMinutes > timeToMinutes(maxTime)) {
    return true
  }

  return false
}

// ============================================================================
// TimePickerContent Component
// ============================================================================

interface TimePickerContentProps {
  time: ParsedTime | null
  onTimeChange: (time: ParsedTime) => void
  meridiem: boolean
  showHours: boolean
  showMinutes: boolean
  showSeconds: boolean
  hourStep: number
  minuteStep: number
  secondStep: number
  minTime: ParsedTime | null
  maxTime: ParsedTime | null
  disabled: boolean
  className?: string
}

function TimePickerContent({
  time,
  onTimeChange,
  meridiem,
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
  // Current values for display
  const currentHours = time?.hours ?? 0
  const currentMinutes = time?.minutes ?? 0
  const currentSeconds = time?.seconds ?? 0

  // Convert 24-hour to display value
  const getDisplayHour = (h: number): string => {
    if (meridiem) {
      const h12 = h % 12
      return (h12 === 0 ? 12 : h12).toString().padStart(2, "0")
    }
    return h.toString().padStart(2, "0")
  }

  // Get current meridiem (AM/PM) from 24-hour value
  const currentMeridiem = currentHours >= 12 ? "PM" : "AM"

  // Handle hour change
  const handleHourChange = (value: string) => {
    let hours = Number.parseInt(value, 10)
    if (meridiem) {
      // Convert 12-hour back to 24-hour
      if (hours === 12) hours = 0
      if (currentMeridiem === "PM") hours += 12
    }
    onTimeChange({
      hours,
      minutes: currentMinutes,
      seconds: currentSeconds,
    })
  }

  // Handle minute change
  const handleMinuteChange = (value: string) => {
    onTimeChange({
      hours: currentHours,
      minutes: Number.parseInt(value, 10),
      seconds: currentSeconds,
    })
  }

  // Handle second change
  const handleSecondChange = (value: string) => {
    onTimeChange({
      hours: currentHours,
      minutes: currentMinutes,
      seconds: Number.parseInt(value, 10),
    })
  }

  // Handle meridiem (AM/PM) change
  const handleMeridiemChange = (value: string) => {
    let hours = currentHours
    const currentIsPM = hours >= 12

    if (value === "AM" && currentIsPM) {
      hours -= 12
    } else if (value === "PM" && !currentIsPM) {
      hours += 12
    }

    onTimeChange({
      hours,
      minutes: currentMinutes,
      seconds: currentSeconds,
    })
  }

  // Generate options
  const hourOptions = generateHourOptions(meridiem, hourStep)
  const minuteOptions = generateMinuteOptions(minuteStep)
  const secondOptions = generateSecondOptions(secondStep)

  return (
    <div
      data-slot="time-picker-content"
      className={cn("flex items-center gap-1", className)}
    >
      {showHours && (
        <Select
          value={getDisplayHour(currentHours)}
          onValueChange={handleHourChange}
          disabled={disabled}
        >
          <SelectTrigger
            data-slot="time-picker-hours"
            aria-label="Hours"
          >
            <SelectValue placeholder="HH" />
          </SelectTrigger>
          <SelectContent className="min-w-[0px] w-fit max-h-[200px]" position="popper">
            {hourOptions.map((opt) => {
              // Check if this hour is disabled due to constraints
              const hourValue = meridiem
                ? (Number.parseInt(opt.value, 10) === 12 ? 0 : Number.parseInt(opt.value, 10)) +
                  (currentMeridiem === "PM" ? 12 : 0)
                : Number.parseInt(opt.value, 10)

              const isDisabled = isTimeDisabled(
                hourValue,
                currentMinutes,
                currentSeconds,
                minTime,
                maxTime
              )

              return (
                <SelectItem key={opt.value} value={opt.value} disabled={isDisabled}>
                  {opt.label}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      )}

      {showHours && showMinutes && (
        <span className="text-muted-foreground">:</span>
      )}

      {showMinutes && (
        <Select
          value={currentMinutes.toString().padStart(2, "0")}
          onValueChange={handleMinuteChange}
          disabled={disabled}
        >
          <SelectTrigger
            data-slot="time-picker-minutes"
            aria-label="Minutes"
          >
            <SelectValue placeholder="mm" />
          </SelectTrigger>
          <SelectContent className="min-w-[0px] w-fit max-h-[200px]" position="popper">
            {minuteOptions.map((opt) => {
              const isDisabled = isTimeDisabled(
                currentHours,
                Number.parseInt(opt.value, 10),
                currentSeconds,
                minTime,
                maxTime
              )

              return (
                <SelectItem key={opt.value} value={opt.value} disabled={isDisabled}>
                  {opt.label}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      )}

      {showMinutes && showSeconds && (
        <span className="text-muted-foreground">:</span>
      )}

      {showSeconds && (
        <Select
          value={currentSeconds.toString().padStart(2, "0")}
          onValueChange={handleSecondChange}
          disabled={disabled}
        >
          <SelectTrigger
            data-slot="time-picker-seconds"
            aria-label="Seconds"
          >
            <SelectValue placeholder="ss" />
          </SelectTrigger>
          <SelectContent className="min-w-[0px] w-fit max-h-[200px]" position="popper">
            {secondOptions.map((opt) => {
              const isDisabled = isTimeDisabled(
                currentHours,
                currentMinutes,
                Number.parseInt(opt.value, 10),
                minTime,
                maxTime
              )

              return (
                <SelectItem key={opt.value} value={opt.value} disabled={isDisabled}>
                  {opt.label}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      )}

      {meridiem && (
        <Select
          value={currentMeridiem}
          onValueChange={handleMeridiemChange}
          disabled={disabled}
        >
          <SelectTrigger
            data-slot="time-picker-meridiem"
            aria-label="AM/PM"
          >
            <SelectValue placeholder="AM/PM" />
          </SelectTrigger>
          <SelectContent className="min-w-[0px] w-fit">
            <SelectItem value="AM">AM</SelectItem>
            <SelectItem value="PM">PM</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  )
}

// ============================================================================
// TimePicker Component
// ============================================================================

export function TimePicker({
  value: controlledValue,
  defaultValue,
  onValueChange,
  mode = "inline",
  meridiem = false,
  showHours = true,
  showMinutes = true,
  showSeconds = false,
  hourStep = 1,
  minuteStep = 5,
  secondStep = 1,
  minTime: minTimeStr,
  maxTime: maxTimeStr,
  clearable = false,
  disabled = false,
  placeholder = "Select time",
  className,
  contentClassName,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string | undefined>(
    () => defaultValue
  )

  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : uncontrolledValue

  // Parse current value
  const parsedTime = React.useMemo(
    () => parseTimeString(currentValue),
    [currentValue]
  )

  // Parse constraints
  const minTime = React.useMemo(() => parseTimeString(minTimeStr), [minTimeStr])
  const maxTime = React.useMemo(() => parseTimeString(maxTimeStr), [maxTimeStr])

  // Handle time change
  const handleTimeChange = React.useCallback(
    (newTime: ParsedTime) => {
      const formatted = formatTimeString(newTime, meridiem, showMinutes, showSeconds)

      if (!isControlled) {
        setUncontrolledValue(formatted)
      }
      onValueChange?.(formatted)
    },
    [isControlled, meridiem, showMinutes, showSeconds, onValueChange]
  )

  // Handle clear
  const handleClear = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!isControlled) {
        setUncontrolledValue(undefined)
      }
      onValueChange?.(undefined)
    },
    [isControlled, onValueChange]
  )

  // Display value for trigger
  const displayValue = React.useMemo(() => {
    if (!parsedTime) return placeholder
    return formatTimeString(parsedTime, meridiem, showMinutes, showSeconds)
  }, [parsedTime, meridiem, showMinutes, showSeconds, placeholder])

  // Inline mode
  if (mode === "inline") {
    return (
      <div data-slot="time-picker" className={cn("inline-flex items-center gap-2", className)}>
        <TimePickerContent
          time={parsedTime}
          onTimeChange={handleTimeChange}
          meridiem={meridiem}
          showHours={showHours}
          showMinutes={showMinutes}
          showSeconds={showSeconds}
          hourStep={hourStep}
          minuteStep={minuteStep}
          secondStep={secondStep}
          minTime={minTime}
          maxTime={maxTime}
          disabled={disabled}
          className={contentClassName}
        />
        {clearable && parsedTime && (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={handleClear}
            disabled={disabled}
            className="shrink-0"
            aria-label="Clear time"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }

  // Popover mode
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="time-picker"
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-fit justify-start text-left font-normal",
            !parsedTime && "text-muted-foreground",
            className
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          <span className="flex-1 truncate">{displayValue}</span>
          {clearable && parsedTime && (
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
              aria-label="Clear time"
            >
              <X className="h-4 w-4" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-auto p-3", contentClassName)}
        align="start"
      >
        <TimePickerContent
          time={parsedTime}
          onTimeChange={handleTimeChange}
          meridiem={meridiem}
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
      </PopoverContent>
    </Popover>
  )
}
