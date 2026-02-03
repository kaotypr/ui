"use client"

import { ButtonGroup, ButtonGroupText } from "@kaotypr/ui/button-group"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@kaotypr/ui/input-group"
import { Label } from "@kaotypr/ui/label"
import { LinkIcon } from "@phosphor-icons/react"

export default function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText render={<Label htmlFor="url" />}>https://</ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <LinkIcon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
