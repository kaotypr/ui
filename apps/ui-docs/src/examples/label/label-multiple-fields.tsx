"use client"

import { Input } from "@kaotypr/ui/input"
import { Label } from "@kaotypr/ui/label"

export default function LabelMultipleFields() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name-input">Name</Label>
        <Input id="name-input" type="text" placeholder="Enter your name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-input">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input id="email-input" type="email" placeholder="Enter your email" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password-input">Password</Label>
        <Input id="password-input" type="password" placeholder="Enter your password" />
      </div>
    </div>
  )
}
