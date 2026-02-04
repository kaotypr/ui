"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputPercentage() {
	return (
		<NumberInput
			defaultValue={0}
			suffix="%"
			min={0}
			max={100}
			decimalScale={1}
			placeholder="0.0%"
		/>
	)
}
