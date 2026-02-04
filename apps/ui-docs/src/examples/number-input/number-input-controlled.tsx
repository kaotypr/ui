"use client"

import * as React from "react"
import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputControlled() {
	const [value, setValue] = React.useState<number | undefined>(50)

	return (
		<div className="flex flex-col gap-4">
			<NumberInput value={value} onValueChange={setValue} />
			<p className="text-muted-foreground text-sm">Value: {value ?? "undefined"}</p>
		</div>
	)
}
