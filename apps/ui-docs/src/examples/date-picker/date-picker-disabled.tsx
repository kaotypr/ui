"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerDisabled() {
  return (
    <DatePicker
      defaultValue={new Date()}
      disabled
      placeholder="Disabled"
      className="w-[240px]"
    />
  )
}
