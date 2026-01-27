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
				component: `A container for grouping OTP input slots together. Must be used within an InputOTP component.

This component provides styling and structure for grouping related OTP slots, such as separating a 6-digit code into groups of 3.`,
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
} satisfies Meta<typeof InputOTPGroup>

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
				<InputOTPGroup {...args}>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup {...args}>
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
					"Default InputOTPGroup containing 3 slots. Two groups are shown separated by a dash.",
			},
		},
	},
}

export const SingleGroup: Story = {
	render: (args) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				maxLength={6}
				value={value}
				onChange={setValue}
			>
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
				story:
					"Single InputOTPGroup containing all 6 slots without any separator.",
			},
		},
	},
}

export const ThreeGroups: Story = {
	render: (args) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				maxLength={9}
				value={value}
				onChange={setValue}
			>
				<InputOTPGroup {...args}>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup {...args}>
					<InputOTPSlot index={3} />
					<InputOTPSlot index={4} />
					<InputOTPSlot index={5} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup {...args}>
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
					"Three InputOTPGroup components, each containing 3 slots, separated by dashes.",
			},
		},
	},
}

export const WithInvalidState: Story = {
	render: (args) => {
		const [value, setValue] = useState("")

		return (
			<InputOTP
				maxLength={6}
				value={value}
				onChange={setValue}
			>
				<InputOTPGroup {...args} aria-invalid="true">
					<InputOTPSlot index={0} aria-invalid="true" />
					<InputOTPSlot index={1} aria-invalid="true" />
					<InputOTPSlot index={2} aria-invalid="true" />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup {...args} aria-invalid="true">
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
					"InputOTPGroup with invalid state styling. The group shows error styling when aria-invalid is set.",
			},
		},
	},
}
