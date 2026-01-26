import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp"

const meta = {
  title: "UI/InputOTP/InputOTPSlot",
  component: InputOTPSlot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Individual slot for displaying a single OTP character. Must be used within an InputOTP component and InputOTPGroup. The slot automatically receives state from the InputOTP context, including the character value, active state, and caret visibility.",
      },
    },
  },
  argTypes: {
    index: {
      description:
        "The zero-based index of this slot within the OTP input. This is required and must match the slot's position.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    className: {
      description: "Additional CSS class names to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    "aria-invalid": {
      description:
        "Indicates that the input has a validation error. When set, the slot displays destructive styling.",
      table: {
        type: { summary: '"true" | "false" | undefined' },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof InputOTPSlot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} {...args} />
          <InputOTPSlot index={1} {...args} />
          <InputOTPSlot index={2} {...args} />
          <InputOTPSlot index={3} {...args} />
          <InputOTPSlot index={4} {...args} />
          <InputOTPSlot index={5} {...args} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Six OTP slots in their default state.",
      },
    },
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid="true" />
          <InputOTPSlot index={1} aria-invalid="true" />
          <InputOTPSlot index={2} aria-invalid="true" />
          <InputOTPSlot index={3} aria-invalid="true" />
          <InputOTPSlot index={4} aria-invalid="true" />
          <InputOTPSlot index={5} aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "OTP slots in error state, showing destructive styling when aria-invalid is set.",
      },
    },
  },
}

export const CustomSize: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={4} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="h-12 w-12 text-lg" />
          <InputOTPSlot index={1} className="h-12 w-12 text-lg" />
          <InputOTPSlot index={2} className="h-12 w-12 text-lg" />
          <InputOTPSlot index={3} className="h-12 w-12 text-lg" />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Larger OTP slots with custom size and text styling.",
      },
    },
  },
}

export const SingleSlot: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP maxLength={1} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "A single OTP slot for single-character input.",
      },
    },
  },
}
