"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerTime12h() {
  return (
    <DatePicker
      defaultValue={new Date()}
      showTime
      format="PPP hh:mm aa"
      placeholder="Pick date and time (12h)"
      timePickerProps={{
        meridiem: true,
      }}
      className="w-[280px]"
    />
  )
}
