"use client"

import { DateRangePicker } from "@kaotypr/ui/date-range-picker"

export default function DateRangePickerWithTime() {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Hours and minutes</p>
        <DateRangePicker
          showTime
          showHours
          showMinutes
          placeholder="Select date range with time"
          className="w-[360px]"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With seconds</p>
        <DateRangePicker
          showTime
          showHours
          showMinutes
          showSeconds
          placeholder="Select date range with seconds"
          className="w-[360px]"
        />
      </div>
    </div>
  )
}
