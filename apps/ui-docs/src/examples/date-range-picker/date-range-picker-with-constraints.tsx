"use client"

import * as React from "react"
import { DateRangePicker, type DateRangeValue } from "@kaotypr/ui/date-range-picker"
import { addDays, differenceInDays } from "date-fns"

export default function DateRangePickerWithConstraints() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [dateRange, setDateRange] = React.useState<DateRangeValue | undefined>()
  const [error, setError] = React.useState<string | null>(null)

  const maxRangeDays = 14

  const handleValueChange = (value: DateRangeValue | undefined) => {
    if (value?.from && value?.to) {
      const from = value.from instanceof Date ? value.from : new Date(value.from)
      const to = value.to instanceof Date ? value.to : new Date(value.to)
      const daysDiff = differenceInDays(to, from)

      if (daysDiff > maxRangeDays) {
        setError(`Maximum range is ${maxRangeDays} days. Selected: ${daysDiff} days.`)
        return
      }
    }

    setError(null)
    setDateRange(value)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">No past dates</p>
        <p className="text-sm text-muted-foreground">
          Only future dates can be selected
        </p>
        <DateRangePicker
          placeholder="Select future dates only"
          calendarProps={{
            disabled: (date: Date) => date < today,
          }}
          className="w-[320px]"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">
          Max range: {maxRangeDays} days
        </p>
        <p className="text-sm text-muted-foreground">
          Select a range up to {maxRangeDays} days
        </p>
        <DateRangePicker
          value={dateRange}
          onValueChange={handleValueChange}
          placeholder="Select dates (max 14 days)"
          calendarProps={{
            disabled: (date: Date) => date < today,
          }}
          className="w-[320px]"
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Booking window</p>
        <p className="text-sm text-muted-foreground">
          Select dates within the next 90 days
        </p>
        <DateRangePicker
          placeholder="Select within 90 days"
          calendarProps={{
            disabled: (date: Date) => {
              const maxDate = addDays(today, 90)
              return date < today || date > maxDate
            },
          }}
          className="w-[320px]"
        />
      </div>
    </div>
  )
}
