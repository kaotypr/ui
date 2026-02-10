import type { Meta, StoryObj } from "@storybook/react-vite"
import { FieldSet, FieldLegend, Field, FieldLabel, FieldContent } from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Field/FieldLegend",
	component: FieldLegend,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A legend element for fieldset groups. Must be used within FieldSet. Supports two variants: 'legend' (default, larger text) and 'label' (smaller text).`,
			},
		},
	},
	argTypes: {
		// Props
		variant: {
			description:
				"The visual variant of the legend. 'legend' uses larger text, 'label' uses smaller text.",
			table: {
				type: { summary: '"legend" | "label"' },
				defaultValue: { summary: '"legend"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["legend", "label"],
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
} satisfies Meta<typeof FieldLegend>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<FieldSet>
			<FieldLegend {...args}>Personal Information</FieldLegend>
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
				story: "Default legend variant with larger text.",
			},
		},
	},
}

export const LabelVariant: Story = {
	render: (args) => (
		<FieldSet>
			<FieldLegend {...args} variant="label">
				Account Settings
			</FieldLegend>
			<Field>
				<FieldLabel htmlFor="username">Username</FieldLabel>
				<FieldContent>
					<Input id="username" placeholder="johndoe" />
				</FieldContent>
			</Field>
			<Field>
				<FieldLabel htmlFor="email">Email</FieldLabel>
				<FieldContent>
					<Input id="email" type="email" placeholder="john@example.com" />
				</FieldContent>
			</Field>
		</FieldSet>
	),
	args: {
		variant: "label",
	},
	parameters: {
		docs: {
			description: {
				story: "Legend with label variant using smaller text.",
			},
		},
	},
}
