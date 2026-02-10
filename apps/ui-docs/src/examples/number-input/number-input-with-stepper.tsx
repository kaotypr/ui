"use client"

import { NumberInput } from "@kaotypr/ui/number-input"

export default function NumberInputWithStepper() {
  return <NumberInput defaultValue={0} stepper={5} placeholder="Step by 5" />
}
