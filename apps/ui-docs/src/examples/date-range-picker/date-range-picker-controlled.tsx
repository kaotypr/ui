"use client"

import { DateRangePicker, type DateRangeValue } from "@kaotypr/ui/date-range-picker"
import { format } from "date-fns"
import * as React from "react"

export default function DateRangePickerControlled() {
  const [dateRange, setDateRange] = React.useState<DateRangeValue | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  })

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return "Not selected"
    const d = date instanceof Date ? date : new Date(date)
    return format(d, "PPP")
  }

  return (
    <div className="flex flex-col gap-4">
      <DateRangePicker
        value={dateRange}
        onValueChange={setDateRange}
        placeholder="Select your booking dates"
        className="w-[320px]"
      />
      <div className="rounded-md border p-4 text-sm">
        <p className="font-medium">Selected Range:</p>
        <p className="text-muted-foreground">From: {formatDate(dateRange?.from)}</p>
        <p className="text-muted-foreground">To: {formatDate(dateRange?.to)}</p>
      </div>
    </div>
  )
}
