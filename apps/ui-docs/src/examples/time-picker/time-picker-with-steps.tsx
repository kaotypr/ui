"use client"

import { TimePicker } from "@kaotypr/ui/time-picker"

export default function TimePickerWithSteps() {
	return <TimePicker minuteStep={15} defaultValue="14:30" />
}
