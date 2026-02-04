"use client"

import { TimePicker } from "@kaotypr/ui/time-picker"

export default function TimePickerHoursOnly() {
	return <TimePicker showMinutes={false} defaultValue="14:00" />
}
