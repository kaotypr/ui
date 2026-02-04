"use client"

import { TimePicker } from "@kaotypr/ui/time-picker"

export default function TimePickerMinMax() {
	return <TimePicker defaultValue="12:00" minTime="09:00" maxTime="17:00" />
}
