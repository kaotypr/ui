"use client"

import * as React from "react"
import { Button } from "@kaotypr/ui/button"
import { Calendar } from "@kaotypr/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@kaotypr/ui/popover"
import { format } from "date-fns"
import { CaretDownIcon } from "@phosphor-icons/react"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant={"outline"}
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
          />
        }
      >
        {date ? format(date, "PPP") : <span>Pick a date</span>}
        <CaretDownIcon data-icon="inline-end" />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
      </PopoverContent>
    </Popover>
  )
}
