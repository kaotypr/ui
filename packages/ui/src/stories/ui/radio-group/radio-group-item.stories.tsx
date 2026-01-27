import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"

const meta = {
	title: "UI/RadioGroup/RadioGroupItem",
	component: RadioGroupItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A single radio button option within a radio group. Must be used within RadioGroup.

This component is built on top of [Base UI Radio](https://base-ui.com/react/components/radio).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		value: {
			description:
				"Value of the radio item. This is the value that will be set in the RadioGroup when the item is selected.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description:
				"Whether the component should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description:
				"Whether the user must select this option before submitting a form.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
} satisfies Meta<typeof RadioGroupItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		value: "option1",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string>("option1")

		return (
			<RadioGroup value={value} onValueChange={setValue}>
				<div className="flex items-center space-x-2">
					<RadioGroupItem {...args} id="default-item" />
					<Label htmlFor="default-item">Option 1</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="default-item-2" />
					<Label htmlFor="default-item-2">Option 2</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="default-item-3" />
					<Label htmlFor="default-item-3">Option 3</Label>
				</div>
			</RadioGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default radio item within a radio group.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		value: "option1",
		disabled: true,
	},
	render: () => {
		const [value, setValue] = React.useState<string>("option2")

		return (
			<RadioGroup value={value} onValueChange={setValue}>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option1" id="disabled-item" disabled />
					<Label htmlFor="disabled-item">Option 1 (disabled)</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="disabled-item-2" />
					<Label htmlFor="disabled-item-2">Option 2</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="disabled-item-3" />
					<Label htmlFor="disabled-item-3">Option 3</Label>
				</div>
			</RadioGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio item with disabled state.",
			},
		},
	},
}

export const Selected: Story = {
	args: {
		value: "option2",
	},
	render: () => {
		const [value, setValue] = React.useState<string>("option2")

		return (
			<RadioGroup value={value} onValueChange={setValue}>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option1" id="selected-item" />
					<Label htmlFor="selected-item">Option 1</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="selected-item-2" />
					<Label htmlFor="selected-item-2">Option 2 (selected)</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="selected-item-3" />
					<Label htmlFor="selected-item-3">Option 3</Label>
				</div>
			</RadioGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio item in selected state.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	args: {
		value: "option1",
		className: "border-2 border-primary",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string>("option1")

		return (
			<RadioGroup value={value} onValueChange={setValue}>
				<div className="flex items-center space-x-2">
					<RadioGroupItem {...args} id="custom-item" />
					<Label htmlFor="custom-item">Option 1 (custom styling)</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="custom-item-2" />
					<Label htmlFor="custom-item-2">Option 2</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="custom-item-3" />
					<Label htmlFor="custom-item-3">Option 3</Label>
				</div>
			</RadioGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio item with custom className for styling.",
			},
		},
	},
}
