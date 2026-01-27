import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
	InputOTPSeparator,
} from "~/components/ui/input-otp"

const meta = {
	title: "UI/InputOTP/InputOTPSeparator",
	component: InputOTPSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A visual separator between groups of OTP slots. Must be used within an InputOTP component.

The separator displays a dash icon to visually separate groups of OTP slots, commonly used to format codes like "123-456".`,
			},
		},
	},
	argTypes: {
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
} satisfies Meta<typeof InputOTPSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				maxLength={6}
				value={value}
				onChange={setValue}
			>
				<InputOTPGroup>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
				</InputOTPGroup>
				<InputOTPSeparator {...args} />
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
					"Default InputOTPSeparator displaying a dash icon between two groups of OTP slots.",
			},
		},
	},
}

export const MultipleSeparators: Story = {
	render: (args) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				maxLength={9}
				value={value}
				onChange={setValue}
			>
				<InputOTPGroup>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
				</InputOTPGroup>
				<InputOTPSeparator {...args} />
				<InputOTPGroup>
					<InputOTPSlot index={3} />
					<InputOTPSlot index={4} />
					<InputOTPSlot index={5} />
				</InputOTPGroup>
				<InputOTPSeparator {...args} />
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
				story:
					"Multiple InputOTPSeparator components separating three groups of OTP slots.",
			},
		},
	},
}

export const WithoutSeparator: Story = {
	render: () => {
		const [value, setValue] = useState("")

		return (
			<div className="space-y-4">
				<p className="text-sm text-muted-foreground">
					For comparison, here's an OTP input without separators:
				</p>
				<InputOTP
					maxLength={6}
					value={value}
					onChange={setValue}
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
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"OTP input without separators for comparison. Separators are optional and used only when you want to visually group slots.",
			},
		},
	},
}
