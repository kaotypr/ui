import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "~/components/ui/input-otp"

const meta = {
  title: "UI/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A one-time password input component for entering verification codes. Provides accessible, keyboard-friendly OTP input with customizable slots and separators.\n\nThis component is built on top of [input-otp](https://www.npmjs.com/package/input-otp).\n\n### Component Parts\n- [InputOTPGroup](?path=/story/ui-inputotp-inputotpgroup--default): Container for grouping OTP slots together.\n- [InputOTPSlot](?path=/story/ui-inputotp-inputotslot--default): Individual slot for displaying a single OTP character. Must be used within an InputOTP component.\n- [InputOTPSeparator](?path=/story/ui-inputotp-inputotpseparator--default): Visual separator between groups of OTP slots.",
      },
    },
  },
  argTypes: {
    maxLength: {
      description:
        "Number of OTP slots (digits/characters). This is a required prop.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "input-otp Props",
      },
      control: { type: "number" },
    },
    value: {
      description: "Controlled value of the OTP input.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "input-otp Props",
      },
      control: { type: "text" },
    },
    onChange: {
      description:
        "Callback that fires whenever the value changes (typing, deletion, etc.).",
      table: {
        type: { summary: "(newValue: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onChange",
    },
    onComplete: {
      description:
        "Callback when all slots are filled. Receives the complete OTP value.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onComplete",
    },
    textAlign: {
      description:
        "Alignment for the text in each slot. Impacts caret and focus behavior.",
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: '"left"' },
        category: "input-otp Props",
      },
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
    inputMode: {
      description: "Specifies virtual keyboard on mobile devices.",
      table: {
        type: {
          summary:
            '"numeric" | "text" | "decimal" | "tel" | "search" | "email" | "url"',
        },
        defaultValue: { summary: '"numeric"' },
        category: "input-otp Props",
      },
      control: { type: "select" },
      options: ["numeric", "text", "decimal", "tel", "search", "email", "url"],
    },
    pattern: {
      description:
        "Regex pattern to restrict allowed input characters (e.g. only digits).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "input-otp Props",
      },
      control: { type: "text" },
    },
    placeholder: {
      description: "Placeholder shown in empty slots.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "input-otp Props",
      },
      control: { type: "text" },
    },
    autoFocus: {
      description: "When true, focuses the first input on mount.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "input-otp Props",
      },
      control: { type: "boolean" },
    },
    containerClassName: {
      description: "Additional CSS class names to apply to the container.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
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
  },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputOTP maxLength={6} {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic 6-digit OTP input.",
      },
    },
  },
}

export const WithSeparator: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(val) => setValue(val)}
      >
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
        story: "An OTP input with a separator between groups of slots.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <div className="space-y-4">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(val) => {
            setValue(val)
            args.onChange?.(val)
          }}
          onComplete={(val) => {
            args.onComplete?.(val)
          }}
          {...args}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          Current value: {value || "(empty)"}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled OTP input with value state management and completion callback.",
      },
    },
  },
}

export const TextInput: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP
        maxLength={4}
        value={value}
        onChange={setValue}
        inputMode="text"
        pattern="[A-Za-z0-9]"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "An OTP input configured for text input with alphanumeric pattern.",
      },
    },
  },
}

export const CenterAligned: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        textAlign="center"
      >
        <InputOTPGroup>
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
        story: "An OTP input with center-aligned text in each slot.",
      },
    },
  },
}

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        placeholder="0"
      >
        <InputOTPGroup>
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
        story: "An OTP input with a custom placeholder character.",
      },
    },
  },
}

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        aria-invalid="true"
      >
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
          "An OTP input in error state, showing destructive styling when aria-invalid is set.",
      },
    },
  },
}
