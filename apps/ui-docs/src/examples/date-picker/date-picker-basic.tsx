"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerBasic() {
  return <DatePicker defaultValue={new Date()} placeholder="Pick a date" className="w-[240px]" />
}
