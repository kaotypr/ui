"use client"

import * as React from "react"
import { DatePicker } from "@kaotypr/ui/date-picker"

export function DatePickerControlled() {
  const [date, setDate] = React.useState<Date | string | undefined>(new Date())

  return (
    <div className="flex flex-col gap-4">
      <DatePicker
        value={date}
        onValueChange={setDate}
        placeholder="Controlled date picker"
        className="w-[240px]"
      />
      <p className="text-muted-foreground text-sm">
        Selected: {date instanceof Date ? date.toLocaleDateString() : (date ?? "None")}
      </p>
    </div>
  )
}
