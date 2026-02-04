"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputThousandSeparator() {
  return <NumberInput defaultValue={1234567} thousandSeparator="," placeholder="Enter amount" />
}
