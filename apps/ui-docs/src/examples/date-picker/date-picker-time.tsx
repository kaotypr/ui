"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerTime() {
  return (
    <DatePicker
      defaultValue={new Date()}
      showTime
      format="PPP HH:mm"
      placeholder="Pick date and time"
      className="w-[280px]"
    />
  )
}
