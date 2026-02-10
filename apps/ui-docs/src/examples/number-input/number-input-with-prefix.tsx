"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputWithPrefix() {
  return (
    <NumberInput
      defaultValue={0}
      prefix="$"
      decimalScale={2}
      fixedDecimalScale
      thousandSeparator=","
      placeholder="$0.00"
    />
  )
}
