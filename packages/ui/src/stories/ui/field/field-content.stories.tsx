import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldLabel, FieldContent } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

const meta = {
	title: "UI/Field/FieldContent",
	component: FieldContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for field input content. Provides consistent spacing and layout for form inputs within fields.`,
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
} satisfies Meta<typeof FieldContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Field>
			<FieldLabel htmlFor="email">Email</FieldLabel>
			<FieldContent {...args}>
				<Input id="email" type="email" placeholder="Enter your email" />
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field content with a single input.",
			},
		},
	},
}

export const WithTextarea: Story = {
	render: (args) => (
		<Field>
			<FieldLabel htmlFor="message">Message</FieldLabel>
			<FieldContent {...args}>
				<Textarea id="message" placeholder="Enter your message" rows={4} />
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field content containing a textarea input.",
			},
		},
	},
}

export const MultipleInputs: Story = {
	render: (args) => (
		<Field>
			<FieldLabel>Full Name</FieldLabel>
			<FieldContent {...args}>
				<Input placeholder="First name" />
				<Input placeholder="Last name" />
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field content with multiple input elements.",
			},
		},
	},
}
