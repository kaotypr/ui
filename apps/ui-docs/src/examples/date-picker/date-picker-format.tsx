"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerFormat() {
  return (
    <div className="flex flex-col gap-4">
      <DatePicker
        defaultValue={new Date()}
        format="MM/dd/yyyy"
        placeholder="MM/DD/YYYY"
        className="w-[240px]"
      />
      <DatePicker
        defaultValue={new Date()}
        format="yyyy-MM-dd"
        placeholder="YYYY-MM-DD"
        className="w-[240px]"
      />
      <DatePicker
        defaultValue={new Date()}
        format="dd MMM yyyy"
        placeholder="DD MMM YYYY"
        className="w-[240px]"
      />
    </div>
  )
}
