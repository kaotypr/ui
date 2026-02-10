"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputMinMax() {
  return <NumberInput defaultValue={50} min={0} max={100} placeholder="0-100" />
}
