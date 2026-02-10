"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerDob() {
  return (
    <DatePicker
      placeholder="Date of birth"
      format="MMMM d, yyyy"
      calendarProps={{
        captionLayout: "dropdown",
        fromYear: 1900,
        toYear: new Date().getFullYear(),
      }}
      className="w-[240px]"
    />
  )
}
