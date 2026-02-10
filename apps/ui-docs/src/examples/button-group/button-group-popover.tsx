"use client"

import { Button } from "@kaotypr/ui/button"
import { ButtonGroup } from "@kaotypr/ui/button-group"
import { Field, FieldDescription, FieldLabel } from "@kaotypr/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@kaotypr/ui/popover"
import { Textarea } from "@kaotypr/ui/textarea"
import { CaretDownIcon, RobotIcon } from "@phosphor-icons/react"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <RobotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="icon" aria-label="Open Popover" />}>
          <CaretDownIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl text-sm">
          <PopoverHeader>
            <PopoverTitle>Start a new task with Copilot</PopoverTitle>
            <PopoverDescription>Describe your task in natural language.</PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="task" className="sr-only">
              Task Description
            </FieldLabel>
            <Textarea id="task" placeholder="I need to..." className="resize-none" />
            <FieldDescription>Copilot will open a pull request for review.</FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
