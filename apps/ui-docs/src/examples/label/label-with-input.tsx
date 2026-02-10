"use client"

import { Input } from "@kaotypr/ui/input"
import { Label } from "@kaotypr/ui/label"

export default function LabelWithInput() {
  return (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email-input">Email</Label>
      <Input id="email-input" type="email" placeholder="Enter your email" />
    </div>
  )
}
