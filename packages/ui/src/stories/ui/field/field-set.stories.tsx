import type { Meta, StoryObj } from "@storybook/react-vite"
import { FieldSet, FieldLegend, Field, FieldLabel, FieldContent } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Checkbox } from "~/components/ui/checkbox"

const meta = {
	title: "UI/Field/FieldSet",
	component: FieldSet,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A fieldset element for grouping related form fields together. Provides semantic structure and spacing for form sections.`,
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
} satisfies Meta<typeof FieldSet>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<FieldSet {...args}>
			<FieldLegend>Personal Information</FieldLegend>
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
		</FieldSet>
	),
	parameters: {
		docs: {
			description: {
				story: "Default fieldset grouping related form fields.",
			},
		},
	},
}

export const WithCheckboxGroup: Story = {
	render: (args) => (
		<FieldSet {...args}>
			<FieldLegend>Preferences</FieldLegend>
			<Field>
				<FieldLabel htmlFor="newsletter">
					<Checkbox id="newsletter" />
					Subscribe to newsletter
				</FieldLabel>
			</Field>
			<Field>
				<FieldLabel htmlFor="updates">
					<Checkbox id="updates" />
					Receive product updates
				</FieldLabel>
			</Field>
			<Field>
				<FieldLabel htmlFor="marketing">
					<Checkbox id="marketing" />
					Allow marketing emails
				</FieldLabel>
			</Field>
		</FieldSet>
	),
	parameters: {
		docs: {
			description: {
				story: "Fieldset with checkbox group showing automatic gap spacing adjustment.",
			},
		},
	},
}
