import type { Meta, StoryObj } from "@storybook/react-vite"
import { FieldGroup, Field, FieldLabel, FieldContent, FieldSeparator } from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field/FieldGroup",
	component: FieldGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for grouping multiple fields together. Provides consistent spacing and layout for form sections.`,
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
} satisfies Meta<typeof FieldGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<FieldGroup {...args}>
			<Field>
				<FieldLabel htmlFor="name">Name</FieldLabel>
				<FieldContent>
					<Input id="name" placeholder="Enter your name" />
				</FieldContent>
			</Field>
			<Field>
				<FieldLabel htmlFor="email">Email</FieldLabel>
				<FieldContent>
					<Input id="email" type="email" placeholder="Enter your email" />
				</FieldContent>
			</Field>
			<Field>
				<FieldLabel htmlFor="phone">Phone</FieldLabel>
				<FieldContent>
					<Input id="phone" type="tel" placeholder="Enter your phone" />
				</FieldContent>
			</Field>
		</FieldGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field group with multiple fields.",
			},
		},
	},
}

export const WithSeparator: Story = {
	render: (args) => (
		<FieldGroup {...args}>
			<Field>
				<FieldLabel htmlFor="username">Username</FieldLabel>
				<FieldContent>
					<Input id="username" placeholder="johndoe" />
				</FieldContent>
			</Field>
			<Field>
				<FieldLabel htmlFor="password">Password</FieldLabel>
				<FieldContent>
					<Input id="password" type="password" placeholder="••••••••" />
				</FieldContent>
			</Field>
			<FieldSeparator>or</FieldSeparator>
			<Field>
				<FieldLabel htmlFor="email-alt">Email</FieldLabel>
				<FieldContent>
					<Input id="email-alt" type="email" placeholder="john@example.com" />
				</FieldContent>
			</Field>
		</FieldGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Field group with separator between sections.",
			},
		},
	},
}

export const NestedGroups: Story = {
	render: (args) => (
		<FieldGroup {...args}>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="first-name">First Name</FieldLabel>
					<FieldContent>
						<Input id="first-name" placeholder="John" />
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel htmlFor="last-name">Last Name</FieldLabel>
					<FieldContent>
						<Input id="last-name" placeholder="Doe" />
					</FieldContent>
				</Field>
			</FieldGroup>
			<FieldSeparator />
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="street">Street</FieldLabel>
					<FieldContent>
						<Input id="street" placeholder="123 Main St" />
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel htmlFor="city">City</FieldLabel>
					<FieldContent>
						<Input id="city" placeholder="New York" />
					</FieldContent>
				</Field>
			</FieldGroup>
		</FieldGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Nested field groups showing hierarchical structure.",
			},
		},
	},
}
