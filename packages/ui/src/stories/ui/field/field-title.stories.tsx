import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Field,
	FieldTitle,
	FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field/FieldTitle",
	component: FieldTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A title component for form fields. Provides a non-label title option for fields that don't require label semantics.`,
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
} satisfies Meta<typeof FieldTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Field>
			<FieldTitle {...args}>Email Address</FieldTitle>
			<FieldContent>
				<Input type="email" placeholder="Enter your email" />
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field title used instead of a label.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => (
		<Field>
			<FieldTitle {...args}>
				<span>📧</span> Contact Information
			</FieldTitle>
			<FieldContent>
				<Input type="email" placeholder="Enter your email" />
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field title with icon or additional content.",
			},
		},
	},
}
