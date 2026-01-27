import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	FieldGroup,
	Field,
	FieldLabel,
	FieldContent,
	FieldSeparator,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field/FieldSeparator",
	component: FieldSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A visual separator between field groups. Can optionally display text content in the center of the separator line.`,
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
} satisfies Meta<typeof FieldSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<FieldGroup>
			<Field>
				<FieldLabel htmlFor="username">Username</FieldLabel>
				<FieldContent>
					<Input id="username" placeholder="johndoe" />
				</FieldContent>
			</Field>
			<FieldSeparator {...args} />
			<Field>
				<FieldLabel htmlFor="email">Email</FieldLabel>
				<FieldContent>
					<Input id="email" type="email" placeholder="john@example.com" />
				</FieldContent>
			</Field>
		</FieldGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default separator without text content.",
			},
		},
	},
}

export const WithText: Story = {
	render: (args) => (
		<FieldGroup>
			<Field>
				<FieldLabel htmlFor="username-sep">Username</FieldLabel>
				<FieldContent>
					<Input id="username-sep" placeholder="johndoe" />
				</FieldContent>
			</Field>
			<FieldSeparator {...args}>or</FieldSeparator>
			<Field>
				<FieldLabel htmlFor="email-sep">Email</FieldLabel>
				<FieldContent>
					<Input id="email-sep" type="email" placeholder="john@example.com" />
				</FieldContent>
			</Field>
		</FieldGroup>
	),
	args: {
		children: "or",
	},
	parameters: {
		docs: {
			description: {
				story: "Separator with text content displayed in the center.",
			},
		},
	},
}

export const MultipleSeparators: Story = {
	render: (args) => (
		<FieldGroup>
			<Field>
				<FieldLabel htmlFor="personal-info">Personal Information</FieldLabel>
				<FieldContent>
					<Input id="personal-info" placeholder="Name" />
				</FieldContent>
			</Field>
			<FieldSeparator {...args}>Section 1</FieldSeparator>
			<Field>
				<FieldLabel htmlFor="contact-info">Contact Information</FieldLabel>
				<FieldContent>
					<Input id="contact-info" type="email" placeholder="Email" />
				</FieldContent>
			</Field>
			<FieldSeparator {...args}>Section 2</FieldSeparator>
			<Field>
				<FieldLabel htmlFor="address-info">Address</FieldLabel>
				<FieldContent>
					<Input id="address-info" placeholder="Street address" />
				</FieldContent>
			</Field>
		</FieldGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple separators dividing different sections.",
			},
		},
	},
}
