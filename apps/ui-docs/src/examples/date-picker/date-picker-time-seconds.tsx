"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerTimeSeconds() {
  return (
    <DatePicker
      defaultValue={new Date()}
      showTime
      showSeconds
      format="PPP HH:mm:ss"
      placeholder="Pick date and time"
      className="w-[280px]"
    />
  )
}
