import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldLabel, FieldDescription, FieldContent } from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field/FieldDescription",
	component: FieldDescription,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A description component that provides additional context or help text for form fields.`,
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
} satisfies Meta<typeof FieldDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Field>
			<FieldLabel htmlFor="email">Email</FieldLabel>
			<FieldContent>
				<Input id="email" type="email" placeholder="Enter your email" />
			</FieldContent>
			<FieldDescription {...args}>We'll never share your email with anyone else.</FieldDescription>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field description providing additional context.",
			},
		},
	},
}

export const WithLink: Story = {
	render: (args) => (
		<Field>
			<FieldLabel htmlFor="password">Password</FieldLabel>
			<FieldContent>
				<Input id="password" type="password" placeholder="Enter password" />
			</FieldContent>
			<FieldDescription {...args}>
				Must be at least 8 characters. <a href="#password-requirements">View requirements</a>
			</FieldDescription>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field description with a link for additional information.",
			},
		},
	},
}

export const MultipleDescriptions: Story = {
	render: (args) => (
		<Field>
			<FieldLabel htmlFor="username">Username</FieldLabel>
			<FieldContent>
				<Input id="username" placeholder="johndoe" />
			</FieldContent>
			<FieldDescription {...args}>Choose a unique username for your account.</FieldDescription>
			<FieldDescription {...args}>This will be visible to other users.</FieldDescription>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple description components showing spacing behavior.",
			},
		},
	},
}
