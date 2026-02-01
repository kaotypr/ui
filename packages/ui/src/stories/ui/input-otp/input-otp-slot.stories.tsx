import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "~/components/ui/input-otp"

const meta = {
	title: "UI/InputOTP/InputOTPSlot",
	component: InputOTPSlot,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual slot that displays a single character of the OTP code. Must be used within an InputOTP component.

Each slot corresponds to one character position in the OTP input. The slot automatically displays the character value, active state, and caret animation based on the InputOTP context.`,
			},
		},
	},
	argTypes: {
		// Props
		index: {
			description:
				"The zero-based index of this slot in the OTP input. Must match the position in the slots array.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
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
					<InputOTPSlot {...args} index={0} />
					<InputOTPSlot {...args} index={1} />
					<InputOTPSlot {...args} index={2} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					<InputOTPSlot {...args} index={3} />
					<InputOTPSlot {...args} index={4} />
					<InputOTPSlot {...args} index={5} />
				</InputOTPGroup>
			</InputOTP>
		)
	},
	args: {
		index: 0,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default InputOTPSlot displaying a single character position. Click or type to see the active state and caret animation.",
			},
		},
	},
}

export const WithValue: Story = {
	render: (args) => {
		const [value, setValue] = useState("123456")

		return (
			<InputOTP maxLength={6} value={value} onChange={setValue}>
				<InputOTPGroup>
					<InputOTPSlot {...args} index={0} />
					<InputOTPSlot {...args} index={1} />
					<InputOTPSlot {...args} index={2} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					<InputOTPSlot {...args} index={3} />
					<InputOTPSlot {...args} index={4} />
					<InputOTPSlot {...args} index={5} />
				</InputOTPGroup>
			</InputOTP>
		)
	},
	args: {
		index: 0,
	},
	parameters: {
		docs: {
			description: {
				story:
					"InputOTPSlot with a pre-filled value. Each slot displays its corresponding character.",
			},
		},
	},
}

export const InvalidState: Story = {
	render: (args) => {
		const [value, setValue] = useState("123")

		return (
			<InputOTP maxLength={6} value={value} onChange={setValue}>
				<InputOTPGroup>
					<InputOTPSlot {...args} index={0} aria-invalid="true" />
					<InputOTPSlot {...args} index={1} aria-invalid="true" />
					<InputOTPSlot {...args} index={2} aria-invalid="true" />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					<InputOTPSlot {...args} index={3} aria-invalid="true" />
					<InputOTPSlot {...args} index={4} aria-invalid="true" />
					<InputOTPSlot {...args} index={5} aria-invalid="true" />
				</InputOTPGroup>
			</InputOTP>
		)
	},
	args: {
		index: 0,
	},
	parameters: {
		docs: {
			description: {
				story:
					"InputOTPSlot with invalid state styling. The slot shows error styling when aria-invalid is set.",
			},
		},
	},
}

export const ActiveState: Story = {
	render: (args) => {
		const [value, setValue] = useState("")

		return (
			<div className="space-y-4">
				<p className="text-sm text-muted-foreground">
					Click on any slot to see the active state with ring styling and caret animation.
				</p>
				<InputOTP maxLength={6} value={value} onChange={setValue} autoFocus>
					<InputOTPGroup>
						<InputOTPSlot {...args} index={0} />
						<InputOTPSlot {...args} index={1} />
						<InputOTPSlot {...args} index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot {...args} index={3} />
						<InputOTPSlot {...args} index={4} />
						<InputOTPSlot {...args} index={5} />
					</InputOTPGroup>
				</InputOTP>
			</div>
		)
	},
	args: {
		index: 0,
	},
	parameters: {
		docs: {
			description: {
				story:
					"InputOTPSlot with autoFocus enabled. The first slot is automatically focused, showing the active state with ring styling and blinking caret.",
			},
		},
	},
}
