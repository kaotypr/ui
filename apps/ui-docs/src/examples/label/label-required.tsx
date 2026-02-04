"use client"

import { Input } from "@kaotypr/ui/input"
import { Label } from "@kaotypr/ui/label"

export default function LabelRequired() {
  return (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="required-input">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input id="required-input" type="email" placeholder="Enter your email" required />
    </div>
  )
}
