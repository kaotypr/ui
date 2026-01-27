import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	NativeSelect,
	NativeSelectOption,
} from "~/components/ui/native-select"

const meta = {
	title: "UI/NativeSelect/NativeSelectOption",
	component: NativeSelectOption,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Represents a single option within a NativeSelect dropdown. Must be used within a NativeSelect component.",
			},
		},
	},
	argTypes: {
		// Standard HTML Option Props
		value: {
			description: "The value of the option.",
			table: {
				type: { summary: "string | number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description: "When true, prevents the option from being selected.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		label: {
			description:
				"The label text for the option. If not provided, the option's children are used.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof NativeSelectOption>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NativeSelect>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption {...args}>Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	args: {
		value: "option1",
	},
	parameters: {
		docs: {
			description: {
				story: "Default option within a native select dropdown.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<NativeSelect>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2" disabled>
				Option 2 (Disabled)
			</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story: "An option that is disabled and cannot be selected.",
			},
		},
	},
}

export const WithLabel: Story = {
	render: () => (
		<NativeSelect>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1" label="First Option">
				Option 1
			</NativeSelectOption>
			<NativeSelectOption value="option2" label="Second Option">
				Option 2
			</NativeSelectOption>
			<NativeSelectOption value="option3" label="Third Option">
				Option 3
			</NativeSelectOption>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Options with explicit label attributes. The label is used when the option is selected.",
			},
		},
	},
}

export const Selected: Story = {
	render: () => (
		<NativeSelect defaultValue="option2">
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2 (Selected)</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story: "An option that is pre-selected by default.",
			},
		},
	},
}
