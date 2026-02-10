import type { Meta, StoryObj } from "@storybook/react-vite"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

import { InputGroup, InputGroupAddon, InputGroupInput } from "~/components/ui/input-group"

const meta = {
	title: "UI/InputGroup/InputGroupInput",
	component: InputGroupInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"An input element styled for use within an InputGroup. Must be used within an InputGroup component. This component wraps the base Input component with styles that remove borders and shadows to integrate seamlessly with the input group container.",
			},
		},
	},
	argTypes: {
		// Styling
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		// Standard input props
		type: {
			description: "The type of input element.",
			table: {
				type: {
					summary:
						'"text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "range" | "hidden"',
				},
				defaultValue: { summary: '"text"' },
				category: "Props",
			},
			control: { type: "select" },
			options: [
				"text",
				"email",
				"password",
				"number",
				"tel",
				"url",
				"search",
				"date",
				"time",
				"datetime-local",
				"month",
				"week",
				"color",
				"file",
				"range",
				"hidden",
			],
		},
		placeholder: {
			description: "Placeholder text displayed when the input is empty.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		value: {
			description: "The controlled value of the input.",
			table: {
				type: { summary: "string | number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		defaultValue: {
			description: "The default value of the input (uncontrolled).",
			table: {
				type: { summary: "string | number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description: "When true, prevents the user from interacting with the input.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		readOnly: {
			description: "When true, prevents the user from modifying the input value.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "When true, indicates that the input is required.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		"aria-invalid": {
			description: "Indicates that the input value is invalid.",
			table: {
				type: { summary: "boolean | 'true' | 'false' | 'grammar' | 'spelling'" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof InputGroupInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput {...args} placeholder="Enter text" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default input within an input group.",
			},
		},
	},
}

export const WithPrefix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
			<InputGroupInput {...args} placeholder="Search..." />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input with a prefix addon.",
			},
		},
	},
}

export const WithSuffix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput {...args} placeholder="Enter text" />
			<InputGroupAddon align="inline-end">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input with a suffix addon.",
			},
		},
	},
}

export const WithPrefixAndSuffix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
			<InputGroupInput {...args} placeholder="Search..." />
			<InputGroupAddon align="inline-end">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input with both prefix and suffix addons.",
			},
		},
	},
}

export const Password: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput {...args} type="password" placeholder="Enter password" />
		</InputGroup>
	),
	args: {
		type: "password",
	},
	parameters: {
		docs: {
			description: {
				story: "Password input within an input group.",
			},
		},
	},
}

export const Email: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput {...args} type="email" placeholder="Enter email" />
		</InputGroup>
	),
	args: {
		type: "email",
	},
	parameters: {
		docs: {
			description: {
				story: "Email input within an input group.",
			},
		},
	},
}

export const NumberInput: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput {...args} type="number" placeholder="0" />
		</InputGroup>
	),
	args: {
		type: "number",
	},
	parameters: {
		docs: {
			description: {
				story: "Number input within an input group.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<InputGroup data-disabled="true">
			<InputGroupInput {...args} placeholder="Disabled input" disabled />
		</InputGroup>
	),
	args: {
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled input within an input group.",
			},
		},
	},
}

export const Invalid: Story = {
	render: (args) => (
		<InputGroup aria-invalid="true">
			<InputGroupInput {...args} placeholder="Invalid input" aria-invalid="true" />
		</InputGroup>
	),
	args: {
		"aria-invalid": true,
	},
	parameters: {
		docs: {
			description: {
				story: "Invalid input with error styling.",
			},
		},
	},
}

export const ReadOnly: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput {...args} value="Read-only value" readOnly />
		</InputGroup>
	),
	args: {
		readOnly: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Read-only input within an input group.",
			},
		},
	},
}
