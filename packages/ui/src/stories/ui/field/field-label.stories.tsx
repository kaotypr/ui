import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Field,
	FieldLabel,
	FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Checkbox } from "~/components/ui/checkbox"

const meta = {
	title: "UI/Field/FieldLabel",
	component: FieldLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A label component for form fields. Extends the base Label component with field-specific styling and behavior.`,
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
} satisfies Meta<typeof FieldLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Field>
			<FieldLabel {...args} htmlFor="email">
				Email
			</FieldLabel>
			<FieldContent>
				<Input id="email" type="email" placeholder="Enter your email" />
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field label associated with an input.",
			},
		},
	},
}

export const WithCheckbox: Story = {
	render: (args) => (
		<Field>
			<FieldLabel {...args} htmlFor="terms">
				<Checkbox id="terms" />
				I agree to the terms and conditions
			</FieldLabel>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field label containing a checkbox input.",
			},
		},
	},
}

export const Required: Story = {
	render: (args) => (
		<Field>
			<FieldLabel {...args} htmlFor="required-field">
				Email <span className="text-destructive">*</span>
			</FieldLabel>
			<FieldContent>
				<Input
					id="required-field"
					type="email"
					placeholder="Enter your email"
					required
				/>
			</FieldContent>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field label with required indicator.",
			},
		},
	},
}
