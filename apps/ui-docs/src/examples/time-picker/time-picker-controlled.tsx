"use client"

import * as React from "react"
import { TimePicker } from "@kaotypr/ui/time-picker"

export default function TimePickerControlled() {
	const [time, setTime] = React.useState<string | undefined>("14:30")

	return (
		<div className="flex flex-col gap-4">
			<TimePicker value={time} onValueChange={setTime} />
			<p className="text-muted-foreground text-sm">Selected: {time ?? "None"}</p>
		</div>
	)
}
