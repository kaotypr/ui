import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"

const meta = {
	title: "UI/RadioGroup",
	component: RadioGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A group of radio buttons that allows users to select a single option from a set of mutually exclusive choices.

This component is built on top of [Base UI Radio Group](https://base-ui.com/react/components/radio-group).

### Component Parts
- [RadioGroupItem](?path=/story/ui-radiogroup-radiogroupitem--default): Represents a single radio button option within the group.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultValue: {
			description:
				"The uncontrolled value of the radio item that should be initially selected. To render a controlled radio group, use the value prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description:
				"The controlled value of the radio item that should be currently selected. To render an uncontrolled radio group, use the defaultValue prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description: "Function called when the selected value changes.",
			table: {
				type: {
					summary:
						"(value: any, eventDetails: RadioGroup.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		name: {
			description:
				"Identifies the field when a form is submitted. If not provided, the RadioGroup will not be included in form submission.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		required: {
			description:
				"Whether the user must select an option before submitting a form.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("option1")

		return (
			<RadioGroup
				{...args}
				value={value}
				onValueChange={(newValue) => {
					setValue(newValue)
					args.onValueChange?.(newValue, {} as any)
				}}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option1" id="option1" />
					<Label htmlFor="option1">Option 1</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="option2" />
					<Label htmlFor="option2">Option 2</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="option3" />
					<Label htmlFor="option3">Option 3</Label>
				</div>
			</RadioGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default radio group with controlled value.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: () => (
		<RadioGroup defaultValue="option2">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option1" id="uncontrolled-option1" />
				<Label htmlFor="uncontrolled-option1">Option 1</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option2" id="uncontrolled-option2" />
				<Label htmlFor="uncontrolled-option2">Option 2</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option3" id="uncontrolled-option3" />
				<Label htmlFor="uncontrolled-option3">Option 3</Label>
			</div>
		</RadioGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Uncontrolled radio group using defaultValue prop.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<RadioGroup defaultValue="option2" disabled>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option1" id="disabled-option1" />
				<Label htmlFor="disabled-option1">Option 1</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option2" id="disabled-option2" />
				<Label htmlFor="disabled-option2">Option 2</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option3" id="disabled-option3" />
				<Label htmlFor="disabled-option3">Option 3</Label>
			</div>
		</RadioGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Radio group with disabled state.",
			},
		},
	},
}

export const WithForm: Story = {
	render: () => (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				const formData = new FormData(e.currentTarget)
				alert(`Form submitted with: ${formData.get("preference")}`)
			}}
			className="flex flex-col gap-4"
		>
			<RadioGroup name="preference" defaultValue="option2" required>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option1" id="form-option1" />
					<Label htmlFor="form-option1">Option 1</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="form-option2" />
					<Label htmlFor="form-option2">Option 2</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="form-option3" />
					<Label htmlFor="form-option3">Option 3</Label>
				</div>
			</RadioGroup>
			<button
				type="submit"
				className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
			>
				Submit
			</button>
		</form>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Radio group integrated in a form with `name` and `required` props for form submission.",
			},
		},
	},
}

export const Horizontal: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("option1")

		return (
			<RadioGroup
				value={value}
				onValueChange={setValue}
				className="flex flex-row gap-6"
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option1" id="horizontal-option1" />
					<Label htmlFor="horizontal-option1">Option 1</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option2" id="horizontal-option2" />
					<Label htmlFor="horizontal-option2">Option 2</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="option3" id="horizontal-option3" />
					<Label htmlFor="horizontal-option3">Option 3</Label>
				</div>
			</RadioGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Radio group displayed horizontally using flexbox layout.",
			},
		},
	},
}
