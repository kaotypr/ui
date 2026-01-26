import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "~/components/ui/input-otp"

const meta = {
  title: "UI/InputOTP/InputOTPGroup",
  component: InputOTPGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Container for grouping OTP slots together. Must be used within an InputOTP component.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Additional CSS class names to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof InputOTPGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup {...args}>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "A single group containing all OTP slots.",
      },
    },
  },
}

export const MultipleGroups: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple groups separated by a separator, creating visual separation between groups of slots.",
      },
    },
  },
}

export const ThreeGroups: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={9} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
          <InputOTPSlot index={8} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Three groups of slots, each separated by a separator.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup className="gap-4">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className="gap-4">
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Groups with custom gap spacing between slots.",
      },
    },
  },
}
