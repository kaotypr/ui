"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"
import { addDays, subDays } from "date-fns"

export function DatePickerDisabledDates() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">No weekends</p>
        <DatePicker
          placeholder="No weekends"
          calendarProps={{
            disabled: (date: Date) => {
              const day = date.getDay()
              return day === 0 || day === 6
            },
          }}
          className="w-[240px]"
        />
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Date range (7 days ago to 30 days ahead)</p>
        <DatePicker
          placeholder="Select within range"
          calendarProps={{
            disabled: (date: Date) => {
              const minDate = subDays(today, 7)
              const maxDate = addDays(today, 30)
              return date < minDate || date > maxDate
            },
          }}
          className="w-[240px]"
        />
      </div>
    </div>
  )
}
