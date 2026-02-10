import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "~/components/ui/input-otp"

const meta = {
	title: "UI/InputOTP",
	component: InputOTP,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A one-time password input component for React. Accessible, unstyled, and customizable.

This component is built on top of [input-otp](https://input-otp.rodz.dev/).

### Component Parts
- [InputOTPGroup](?path=/story/ui-inputotp-inputotpgroup--default): A container for grouping OTP input slots together.
- [InputOTPSlot](?path=/story/ui-inputotp-inputotpslot--default): An individual slot that displays a single character of the OTP code.
- [InputOTPSeparator](?path=/story/ui-inputotp-inputotpseparator--default): A visual separator between groups of OTP slots.`,
			},
		},
	},
	argTypes: {
		// Props
		maxLength: {
			description: "The number of slots/digits in the OTP input.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		containerClassName: {
			description: "CSS class names to apply to the root container element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		// input-otp Props
		value: {
			description: "The controlled value of the OTP input. Use with onChange handler.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "input-otp Props",
			},
			control: { type: "text" },
		},
		onChange: {
			description:
				"Event handler called when the OTP value changes. Receives the new value string.",
			table: {
				type: { summary: "(newValue: string) => unknown" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onChange",
		},
		onComplete: {
			description: "Callback function called when the OTP input is complete (all slots filled).",
			table: {
				type: { summary: "(...args: any[]) => unknown" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onComplete",
		},
		textAlign: {
			description:
				"Where the text is located within the input. Affects click-holding or long-press behavior.",
			table: {
				type: { summary: '"left" | "center" | "right"' },
				defaultValue: { summary: '"left"' },
				category: "input-otp Props",
			},
			control: { type: "radio" },
			options: ["left", "center", "right"],
		},
		inputMode: {
			description:
				"Virtual keyboard appearance on mobile devices. Controls which keyboard type is shown.",
			table: {
				type: {
					summary: '"numeric" | "text" | "decimal" | "tel" | "search" | "email" | "url"',
				},
				defaultValue: { summary: '"numeric"' },
				category: "input-otp Props",
			},
			control: { type: "select" },
			options: ["numeric", "text", "decimal", "tel", "search", "email", "url"],
		},
		pattern: {
			description:
				"Regular expression pattern to validate input. For example, use REGEXP_ONLY_DIGITS from input-otp for digits only.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "input-otp Props",
			},
			control: { type: "text" },
		},
		placeholder: {
			description: "Placeholder character displayed in empty slots when active.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "input-otp Props",
			},
			control: { type: "text" },
		},
		pasteTransformer: {
			description:
				"Transformer function that processes pasted text. Allows pasting formats like 'XXX-XXX' even if the pattern doesn't allow hyphens.",
			table: {
				type: { summary: "(pastedText: string) => string" },
				defaultValue: { summary: "undefined" },
				category: "input-otp Props",
			},
		},
		pushPasswordManagerStrategy: {
			description:
				"Strategy for detecting password managers and shifting their badges outside the input. Enabled by default.",
			table: {
				type: { summary: '"increase-width" | "none"' },
				defaultValue: { summary: '"increase-width"' },
				category: "input-otp Props",
			},
			control: { type: "radio" },
			options: ["increase-width", "none"],
		},
		noScriptCSSFallback: {
			description:
				"CSS string applied when JavaScript is disabled. Use null to disable the fallback.",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "input-otp Props",
			},
			control: { type: "text" },
		},
		autoFocus: {
			description: "Automatically focus the input when the component mounts.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "input-otp Props",
			},
			control: { type: "boolean" },
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply to the input element.",
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
	render: ({ children, ...args }: any) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				{...args}
				maxLength={6}
				value={value}
				onChange={(newValue) => {
					setValue(newValue)
					args.onChange?.(newValue)
				}}
				onComplete={args.onComplete}
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
	args: {
		maxLength: 6,
		children: undefined,
	},
	parameters: {
		docs: {
			description: {
				story: "Default OTP input with 6 slots grouped into two groups of 3, separated by a dash.",
			},
		},
	},
}

export const Simple: Story = {
	render: ({ children, ...args }: any) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				{...args}
				maxLength={6}
				value={value}
				onChange={(newValue) => {
					setValue(newValue)
					args.onChange?.(newValue)
				}}
				onComplete={args.onComplete}
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
	args: {
		maxLength: 6,
		children: undefined,
	},
	parameters: {
		docs: {
			description: {
				story: "Simple OTP input with 6 slots in a single group without separator.",
			},
		},
	},
}

export const FourDigits: Story = {
	render: ({ children, ...args }: any) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				{...args}
				maxLength={4}
				value={value}
				onChange={(newValue) => {
					setValue(newValue)
					args.onChange?.(newValue)
				}}
				onComplete={args.onComplete}
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
	args: {
		maxLength: 4,
		children: undefined,
	},
	parameters: {
		docs: {
			description: {
				story: "OTP input with 4 slots, commonly used for PIN codes.",
			},
		},
	},
}

export const WithCompletion: Story = {
	render: ({ children, ...args }: any) => {
		const [value, setValue] = useState("")

		return (
			<div className="space-y-4">
				<InputOTP
					{...args}
					maxLength={6}
					value={value}
					onChange={(newValue) => {
						setValue(newValue)
						args.onChange?.(newValue)
					}}
					onComplete={(completedValue) => {
						alert(`OTP completed: ${completedValue}`)
						args.onComplete?.(completedValue)
					}}
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
				{value && <p className="text-sm text-muted-foreground">Current value: {value}</p>}
			</div>
		)
	},
	args: {
		maxLength: 6,
		children: undefined,
	},
	parameters: {
		docs: {
			description: {
				story:
					"OTP input that shows an alert when all slots are filled. Demonstrates the onComplete callback.",
			},
		},
	},
}

export const Controlled: Story = {
	render: ({ children, ...args }: any) => {
		const [value, setValue] = useState("123")

		return (
			<div className="space-y-4">
				<InputOTP
					{...args}
					maxLength={6}
					value={value}
					onChange={(newValue) => {
						setValue(newValue)
						args.onChange?.(newValue)
					}}
					onComplete={args.onComplete}
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
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => setValue("")}
						className="rounded-md border px-3 py-1 text-sm"
					>
						Clear
					</button>
					<button
						type="button"
						onClick={() => setValue("123456")}
						className="rounded-md border px-3 py-1 text-sm"
					>
						Fill All
					</button>
				</div>
			</div>
		)
	},
	args: {
		maxLength: 6,
		value: "123",
		children: undefined,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled OTP input where the value is managed externally. Includes buttons to clear or fill the input.",
			},
		},
	},
}

export const Disabled: Story = {
	render: ({ children, ...args }: any) => {
		return (
			<InputOTP {...args} maxLength={6} disabled>
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
	args: {
		maxLength: 6,
		disabled: true,
		children: undefined,
		value: undefined,
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled OTP input that cannot be interacted with.",
			},
		},
	},
}
