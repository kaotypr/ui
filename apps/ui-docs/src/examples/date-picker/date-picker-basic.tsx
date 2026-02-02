"use client"

import * as React from "react"
import { Button } from "@kaotypr/ui/button"
import { Calendar } from "@kaotypr/ui/calendar"
import { Field, FieldLabel } from "@kaotypr/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from "@kaotypr/ui/popover"
import { format } from "date-fns"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-simple"
              className="justify-start font-normal"
            />
          }
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
