"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputDecimal() {
	return (
		<NumberInput
			defaultValue={0}
			decimalScale={2}
			fixedDecimalScale
			placeholder="0.00"
		/>
	)
}
