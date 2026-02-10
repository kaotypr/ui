import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Field,
	FieldLabel,
	FieldDescription,
	FieldError,
	FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field",
	component: Field,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A flexible form field component that provides structure for labels, descriptions, inputs, and error messages.

### Component Parts
- [FieldSet](?path=/story/ui-field-fieldset--default): A fieldset element for grouping related form fields.
- [FieldLegend](?path=/story/ui-field-fieldlegend--default): A legend element for fieldset groups.
- [FieldGroup](?path=/story/ui-field-fieldgroup--default): A container for grouping multiple fields together.
- [FieldLabel](?path=/story/ui-field-fieldlabel--default): A label component for form fields.
- [FieldTitle](?path=/story/ui-field-fieldtitle--default): A title component for form fields.
- [FieldDescription](?path=/story/ui-field-fielddescription--default): A description component that provides additional context for form fields.
- [FieldError](?path=/story/ui-field-fielderror--default): An error message component for displaying validation errors.
- [FieldSeparator](?path=/story/ui-field-fieldseparator--default): A visual separator between field groups.
- [FieldContent](?path=/story/ui-field-fieldcontent--default): A container for field input content.`,
			},
		},
	},
	argTypes: {
		// Props
		orientation: {
			description:
				"The orientation of the field layout. 'vertical' stacks label and content vertically, 'horizontal' places them side by side, and 'responsive' adapts based on screen size.",
			table: {
				type: { summary: '"vertical" | "horizontal" | "responsive"' },
				defaultValue: { summary: '"vertical"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["vertical", "horizontal", "responsive"],
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
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Field {...args}>
			<FieldLabel htmlFor="email">Email</FieldLabel>
			<FieldContent>
				<Input id="email" type="email" placeholder="Enter your email" />
			</FieldContent>
			<FieldDescription>We'll never share your email with anyone else.</FieldDescription>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Default field with label, input, and description.",
			},
		},
	},
}

export const WithError: Story = {
	render: (args) => (
		<Field {...args} data-invalid="true">
			<FieldLabel htmlFor="email-error">Email</FieldLabel>
			<FieldContent>
				<Input id="email-error" type="email" placeholder="Enter your email" aria-invalid="true" />
			</FieldContent>
			<FieldDescription>We'll never share your email with anyone else.</FieldDescription>
			<FieldError>Please enter a valid email address.</FieldError>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field with error message displayed.",
			},
		},
	},
}

export const Horizontal: Story = {
	render: (args) => (
		<Field {...args} orientation="horizontal">
			<FieldLabel htmlFor="email-horizontal">Email</FieldLabel>
			<FieldContent>
				<Input id="email-horizontal" type="email" placeholder="Enter your email" />
			</FieldContent>
			<FieldDescription>We'll never share your email with anyone else.</FieldDescription>
		</Field>
	),
	args: {
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				story: "Field with horizontal layout (label and input side by side).",
			},
		},
	},
}

export const Responsive: Story = {
	render: (args) => (
		<Field {...args} orientation="responsive">
			<FieldLabel htmlFor="email-responsive">Email</FieldLabel>
			<FieldContent>
				<Input id="email-responsive" type="email" placeholder="Enter your email" />
			</FieldContent>
			<FieldDescription>We'll never share your email with anyone else.</FieldDescription>
		</Field>
	),
	args: {
		orientation: "responsive",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Field with responsive layout that adapts to screen size (vertical on mobile, horizontal on desktop).",
			},
		},
	},
}

export const MultipleErrors: Story = {
	render: (args) => (
		<Field {...args} data-invalid="true">
			<FieldLabel htmlFor="password">Password</FieldLabel>
			<FieldContent>
				<Input
					id="password"
					type="password"
					placeholder="Enter your password"
					aria-invalid="true"
				/>
			</FieldContent>
			<FieldError
				errors={[
					{ message: "Password must be at least 8 characters" },
					{ message: "Password must contain at least one number" },
					{ message: "Password must contain at least one uppercase letter" },
				]}
			/>
		</Field>
	),
	parameters: {
		docs: {
			description: {
				story: "Field displaying multiple validation errors as a list.",
			},
		},
	},
}
