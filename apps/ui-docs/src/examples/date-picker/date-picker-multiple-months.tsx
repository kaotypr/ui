"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerMultipleMonths() {
  return (
    <DatePicker
      placeholder="Pick a date"
      calendarProps={{
        numberOfMonths: 2,
      }}
      className="w-[240px]"
    />
  )
}
