"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputWithSuffix() {
	return (
		<NumberInput
			defaultValue={0}
			suffix=" kg"
			decimalScale={1}
			placeholder="0.0 kg"
		/>
	)
}
