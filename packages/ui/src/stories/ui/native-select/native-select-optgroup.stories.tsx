import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	NativeSelect,
	NativeSelectOption,
	NativeSelectOptGroup,
} from "~/components/ui/native-select"

const meta = {
	title: "UI/NativeSelect/NativeSelectOptGroup",
	component: NativeSelectOptGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Groups related options together within a NativeSelect dropdown. Must be used within a NativeSelect component and contain NativeSelectOption components.",
			},
		},
	},
	argTypes: {
		// Standard HTML OptGroup Props
		label: {
			description: "The label text for the option group.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description:
				"When true, prevents all options within the group from being selected.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof NativeSelectOptGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<NativeSelect className="w-64">
			<NativeSelectOption value="">Select a category</NativeSelectOption>
			<NativeSelectOptGroup label="Fruits">
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="orange">Orange</NativeSelectOption>
			</NativeSelectOptGroup>
			<NativeSelectOptGroup label="Vegetables">
				<NativeSelectOption value="carrot">Carrot</NativeSelectOption>
				<NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
				<NativeSelectOption value="spinach">Spinach</NativeSelectOption>
			</NativeSelectOptGroup>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Option groups used to organize related options within a native select dropdown.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<NativeSelect className="w-64">
			<NativeSelectOption value="">Select a category</NativeSelectOption>
			<NativeSelectOptGroup label="Fruits">
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="orange">Orange</NativeSelectOption>
			</NativeSelectOptGroup>
			<NativeSelectOptGroup label="Vegetables" disabled>
				<NativeSelectOption value="carrot">Carrot</NativeSelectOption>
				<NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
				<NativeSelectOption value="spinach">Spinach</NativeSelectOption>
			</NativeSelectOptGroup>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story:
					"An option group that is disabled, preventing all options within it from being selected.",
			},
		},
	},
}

export const MultipleGroups: Story = {
	render: () => (
		<NativeSelect className="w-64">
			<NativeSelectOption value="">Select a category</NativeSelectOption>
			<NativeSelectOptGroup label="Fruits">
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="orange">Orange</NativeSelectOption>
			</NativeSelectOptGroup>
			<NativeSelectOptGroup label="Vegetables">
				<NativeSelectOption value="carrot">Carrot</NativeSelectOption>
				<NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
				<NativeSelectOption value="spinach">Spinach</NativeSelectOption>
			</NativeSelectOptGroup>
			<NativeSelectOptGroup label="Grains">
				<NativeSelectOption value="rice">Rice</NativeSelectOption>
				<NativeSelectOption value="wheat">Wheat</NativeSelectOption>
				<NativeSelectOption value="oats">Oats</NativeSelectOption>
			</NativeSelectOptGroup>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Multiple option groups organizing options into different categories.",
			},
		},
	},
}
