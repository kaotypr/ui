import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Field,
	FieldLabel,
	FieldError,
	FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field/FieldError",
	component: FieldError,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An error message component for displaying validation errors. Can display a single error message or multiple errors as a list.`,
			},
		},
	},
	argTypes: {
		// Props
		errors: {
			description:
				"An array of error objects with optional message properties. If multiple errors are provided, they will be displayed as a bulleted list.",
			table: {
				type: { summary: "Array<{ message?: string } | undefined>" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "object" },
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
} satisfies Meta<typeof FieldError>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Field data-invalid="true">
			<FieldLabel htmlFor="email-error">Email</FieldLabel>
			<FieldContent>
				<Input
					id="email-error"
					type="email"
					placeholder="Enter your email"
					aria-invalid="true"
				/>
			</FieldContent>
			<FieldError {...args}>Please enter a valid email address.</FieldError>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field error with a single error message.",
			},
		},
	},
}

export const WithErrorsArray: Story = {
	render: (args) => (
		<Field data-invalid="true">
			<FieldLabel htmlFor="password-error">Password</FieldLabel>
			<FieldContent>
				<Input
					id="password-error"
					type="password"
					placeholder="Enter password"
					aria-invalid="true"
				/>
			</FieldContent>
			<FieldError
				{...args}
				errors={[
					{ message: "Password must be at least 8 characters" },
					{ message: "Password must contain at least one number" },
					{ message: "Password must contain at least one uppercase letter" },
				]}
			/>
		</Field>
	),
	args: {
		errors: [
			{ message: "Password must be at least 8 characters" },
			{ message: "Password must contain at least one number" },
			{ message: "Password must contain at least one uppercase letter" },
		],
	},
	parameters: {
		docs: {
			description: {
				story: "Field error displaying multiple validation errors as a list.",
			},
		},
	},
}

export const WithDuplicateErrors: Story = {
	render: (args) => (
		<Field data-invalid="true">
			<FieldLabel htmlFor="username-error">Username</FieldLabel>
			<FieldContent>
				<Input
					id="username-error"
					placeholder="johndoe"
					aria-invalid="true"
				/>
			</FieldContent>
			<FieldError
				{...args}
				errors={[
					{ message: "Username is required" },
					{ message: "Username is required" },
					{ message: "Username must be unique" },
				]}
			/>
		</Field>
	),
	args: {
		errors: [
			{ message: "Username is required" },
			{ message: "Username is required" },
			{ message: "Username must be unique" },
		],
	},
	parameters: {
		docs: {
			description: {
				story:
					"Field error with duplicate error messages showing deduplication behavior.",
			},
		},
	},
}

export const EmptyErrors: Story = {
	render: (args) => (
		<Field>
			<FieldLabel htmlFor="email-empty">Email</FieldLabel>
			<FieldContent>
				<Input id="email-empty" type="email" placeholder="Enter your email" />
			</FieldContent>
			<FieldError {...args} errors={[]} />
		</Field>
	),
	args: {
		errors: [],
	},
	parameters: {
		docs: {
			description: {
				story:
					"Field error with empty errors array - component should not render.",
			},
		},
	},
}
