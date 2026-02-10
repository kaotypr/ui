"use client"

import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerClearable() {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Clearable (default)</p>
        <DatePicker
          defaultValue={new Date()}
          clearable
          placeholder="Pick a date"
          className="w-[240px]"
        />
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Not clearable</p>
        <DatePicker
          defaultValue={new Date()}
          clearable={false}
          placeholder="Pick a date"
          className="w-[240px]"
        />
      </div>
    </div>
  )
}
