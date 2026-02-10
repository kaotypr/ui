import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
	NativeSelect,
	NativeSelectOption,
	NativeSelectOptGroup,
} from "~/components/ui/native-select"

const meta = {
	title: "UI/NativeSelect",
	component: NativeSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A styled native HTML select element with customizable size variants.

This component wraps the native HTML \`<select>\` element with custom styling and provides a consistent design system appearance.

### Component Parts
- [NativeSelectOption](?path=/story/ui-nativeselect-nativeselectoption--default): Represents a single option within the select dropdown.
- [NativeSelectOptGroup](?path=/story/ui-nativeselect-nativeselectoptgroup--default): Groups related options together within the select dropdown.`,
			},
		},
	},
	argTypes: {
		// Custom Props
		size: {
			description: "The size variant of the select element.",
			table: {
				type: { summary: '"sm" | "default"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["sm", "default"],
		},

		// Standard HTML Select Props
		value: {
			description: "The controlled value of the select element.",
			table: {
				type: { summary: "string | number | string[]" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		defaultValue: {
			description: "The default value of the select element (uncontrolled).",
			table: {
				type: { summary: "string | number | string[]" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		multiple: {
			description: "When true, allows multiple options to be selected.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description: "When true, prevents user interaction with the select element.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "When true, the select element is required.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		name: {
			description: "The name attribute of the select element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		id: {
			description: "The id attribute of the select element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		autoComplete: {
			description: "The autocomplete attribute of the select element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		autoFocus: {
			description: "When true, the select element receives focus when the page loads.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		form: {
			description: "The form element that the select element belongs to.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},

		// Event Handlers
		onChange: {
			description: "Event handler called when the select value changes.",
			table: {
				type: {
					summary: "(event: React.ChangeEvent<HTMLSelectElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onChange",
		},
		onFocus: {
			description: "Event handler called when the select receives focus.",
			table: {
				type: {
					summary: "(event: React.FocusEvent<HTMLSelectElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onFocus",
		},
		onBlur: {
			description: "Event handler called when the select loses focus.",
			table: {
				type: {
					summary: "(event: React.FocusEvent<HTMLSelectElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onBlur",
		},

		// Styling
		className: {
			description: "Additional CSS class names to apply to the wrapper element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},

		// Accessibility
		"aria-label": {
			description: "An accessible label for the select element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
		"aria-describedby": {
			description: "Identifies the element(s) that describe the select element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
		"aria-invalid": {
			description: "Indicates that the select value is invalid.",
			table: {
				type: { summary: "boolean | 'true' | 'false'" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "boolean" },
		},
		"aria-required": {
			description: "Indicates that the select element is required.",
			table: {
				type: { summary: "boolean | 'true' | 'false'" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof NativeSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NativeSelect {...args}>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story: "Default native select with basic options.",
			},
		},
	},
}

export const WithDefaultValue: Story = {
	render: (args) => (
		<NativeSelect {...args}>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	args: {
		defaultValue: "option2",
	},
	parameters: {
		docs: {
			description: {
				story: "Native select with a pre-selected default value.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState("")
		return (
			<NativeSelect
				{...args}
				value={value}
				onChange={(e) => {
					setValue(e.target.value)
					args.onChange?.(e)
				}}
			>
				<NativeSelectOption value="">Select an option</NativeSelectOption>
				<NativeSelectOption value="option1">Option 1</NativeSelectOption>
				<NativeSelectOption value="option2">Option 2</NativeSelectOption>
				<NativeSelectOption value="option3">Option 3</NativeSelectOption>
			</NativeSelect>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled native select using React state. The value is managed by the component state.",
			},
		},
	},
}

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div>
				<label className="text-sm font-medium mb-1 block">Default Size</label>
				<NativeSelect>
					<NativeSelectOption value="">Select an option</NativeSelectOption>
					<NativeSelectOption value="option1">Option 1</NativeSelectOption>
					<NativeSelectOption value="option2">Option 2</NativeSelectOption>
					<NativeSelectOption value="option3">Option 3</NativeSelectOption>
				</NativeSelect>
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Small Size</label>
				<NativeSelect size="sm">
					<NativeSelectOption value="">Select an option</NativeSelectOption>
					<NativeSelectOption value="option1">Option 1</NativeSelectOption>
					<NativeSelectOption value="option2">Option 2</NativeSelectOption>
					<NativeSelectOption value="option3">Option 3</NativeSelectOption>
				</NativeSelect>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Different size variants: default and small.",
			},
		},
	},
}

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div>
				<label className="text-sm font-medium mb-1 block">Default</label>
				<NativeSelect>
					<NativeSelectOption value="">Select an option</NativeSelectOption>
					<NativeSelectOption value="option1">Option 1</NativeSelectOption>
					<NativeSelectOption value="option2">Option 2</NativeSelectOption>
				</NativeSelect>
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Disabled</label>
				<NativeSelect disabled>
					<NativeSelectOption value="">Select an option</NativeSelectOption>
					<NativeSelectOption value="option1">Option 1</NativeSelectOption>
					<NativeSelectOption value="option2">Option 2</NativeSelectOption>
				</NativeSelect>
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Required</label>
				<NativeSelect required>
					<NativeSelectOption value="">Select an option</NativeSelectOption>
					<NativeSelectOption value="option1">Option 1</NativeSelectOption>
					<NativeSelectOption value="option2">Option 2</NativeSelectOption>
				</NativeSelect>
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Invalid</label>
				<NativeSelect aria-invalid="true" defaultValue="invalid">
					<NativeSelectOption value="">Select an option</NativeSelectOption>
					<NativeSelectOption value="option1">Option 1</NativeSelectOption>
					<NativeSelectOption value="option2">Option 2</NativeSelectOption>
				</NativeSelect>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Different select states: default, disabled, required, and invalid.",
			},
		},
	},
}

export const WithOptGroups: Story = {
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
				story: "Native select with option groups to organize related options.",
			},
		},
	},
}

export const Multiple: Story = {
	render: () => (
		<NativeSelect multiple className="w-64">
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
			<NativeSelectOption value="option4">Option 4</NativeSelectOption>
			<NativeSelectOption value="option5">Option 5</NativeSelectOption>
		</NativeSelect>
	),
	parameters: {
		docs: {
			description: {
				story: "Native select with multiple selection enabled. Users can select multiple options.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<NativeSelect {...args}>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	args: {
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled native select that cannot be interacted with.",
			},
		},
	},
}

export const Invalid: Story = {
	render: (args) => (
		<NativeSelect {...args}>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	args: {
		"aria-invalid": true,
		defaultValue: "invalid",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Invalid native select with error styling. Use aria-invalid to indicate validation errors.",
			},
		},
	},
}

export const Required: Story = {
	render: (args) => (
		<NativeSelect {...args}>
			<NativeSelectOption value="">Select an option</NativeSelectOption>
			<NativeSelectOption value="option1">Option 1</NativeSelectOption>
			<NativeSelectOption value="option2">Option 2</NativeSelectOption>
			<NativeSelectOption value="option3">Option 3</NativeSelectOption>
		</NativeSelect>
	),
	args: {
		required: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Required native select that must have a value selected before form submission.",
			},
		},
	},
}
