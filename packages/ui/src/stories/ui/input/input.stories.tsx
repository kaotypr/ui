import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A native input element that automatically works with Field.

This component is built on top of [Base UI Input](https://base-ui.com/react/components/input).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultValue: {
			description: "The default value of the input (uncontrolled).",
			table: {
				type: { summary: "string | number | string[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},

		// Standard HTML Input Props
		type: {
			description: "The type of input element.",
			table: {
				type: {
					summary:
						'"text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "range" | "checkbox" | "radio" | "hidden"',
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
				"file",
				"color",
				"range",
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
				type: { summary: "string | number | string[]" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description: "When true, prevents user interaction with the input.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "When true, the input is required.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		readOnly: {
			description: "When true, the input is read-only.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		name: {
			description: "The name attribute of the input element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		id: {
			description: "The id attribute of the input element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		autoComplete: {
			description: "The autocomplete attribute of the input element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		maxLength: {
			description: "The maximum number of characters allowed.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		minLength: {
			description: "The minimum number of characters required.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		pattern: {
			description: "A regular expression pattern the input value must match.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},

		// Event Handlers
		onChange: {
			description: "Event handler called when the input value changes.",
			table: {
				type: {
					summary: "(event: React.ChangeEvent<HTMLInputElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onChange",
		},
		onFocus: {
			description: "Event handler called when the input receives focus.",
			table: {
				type: {
					summary: "(event: React.FocusEvent<HTMLInputElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onFocus",
		},
		onBlur: {
			description: "Event handler called when the input loses focus.",
			table: {
				type: {
					summary: "(event: React.FocusEvent<HTMLInputElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onBlur",
		},

		// Styling
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: { summary: "string | ((state: Input.State) => string | undefined)" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"CSS properties applied to the element, or a function that returns styles based on the component's state.",
			table: {
				type: {
					summary: "CSSProperties | ((state: Input.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},

		// Accessibility
		"aria-invalid": {
			description: "Indicates that the input value is invalid.",
			table: {
				type: { summary: "boolean | 'true' | 'false'" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "boolean" },
		},
		"aria-label": {
			description: "An accessible label for the input.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
		"aria-describedby": {
			description: "Identifies the element(s) that describe the input.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: "Enter text...",
	},
	parameters: {
		docs: {
			description: {
				story: "Default input field with placeholder text.",
			},
		},
	},
}

export const WithValue: Story = {
	args: {
		value: "Hello, World!",
		placeholder: "Enter text...",
	},
	parameters: {
		docs: {
			description: {
				story: "Input field with a pre-filled value.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState("")
		return (
			<Input
				{...args}
				value={value}
				onChange={(e) => {
					setValue(e.target.value)
					args.onChange?.(e)
				}}
			/>
		)
	},
	args: {
		placeholder: "Type something...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled input field using React state. The value is managed by the component state.",
			},
		},
	},
}

export const Types: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div>
				<label className="text-sm font-medium mb-1 block">Text</label>
				<Input type="text" placeholder="Enter text" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Email</label>
				<Input type="email" placeholder="email@example.com" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Password</label>
				<Input type="password" placeholder="Enter password" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Number</label>
				<Input type="number" placeholder="Enter number" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Tel</label>
				<Input type="tel" placeholder="(555) 123-4567" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">URL</label>
				<Input type="url" placeholder="https://example.com" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Search</label>
				<Input type="search" placeholder="Search..." />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Different input types: text, email, password, number, tel, url, and search.",
			},
		},
	},
}

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div>
				<label className="text-sm font-medium mb-1 block">Default</label>
				<Input placeholder="Default input" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Disabled</label>
				<Input placeholder="Disabled input" disabled />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Read Only</label>
				<Input value="Read-only value" readOnly />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Required</label>
				<Input placeholder="Required input" required />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Invalid</label>
				<Input placeholder="Invalid input" aria-invalid="true" defaultValue="invalid@" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Different input states: default, disabled, read-only, required, and invalid.",
			},
		},
	},
}

export const WithConstraints: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div>
				<label className="text-sm font-medium mb-1 block">Max Length (10 characters)</label>
				<Input placeholder="Max 10 chars" maxLength={10} />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Min Length (5 characters)</label>
				<Input placeholder="Min 5 chars" minLength={5} />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Pattern (numbers only)</label>
				<Input placeholder="Numbers only" pattern="[0-9]*" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Input fields with validation constraints: max length, min length, and pattern matching.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled input field that cannot be interacted with.",
			},
		},
	},
}

export const Invalid: Story = {
	args: {
		placeholder: "Invalid input",
		"aria-invalid": true,
		defaultValue: "invalid@",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Invalid input field with error styling. Use aria-invalid to indicate validation errors.",
			},
		},
	},
}

export const Required: Story = {
	args: {
		placeholder: "Required field",
		required: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Required input field that must be filled before form submission.",
			},
		},
	},
}

export const WithAutoComplete: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div>
				<label className="text-sm font-medium mb-1 block">Email</label>
				<Input type="email" placeholder="email@example.com" autoComplete="email" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Name</label>
				<Input placeholder="Full name" autoComplete="name" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Phone</label>
				<Input type="tel" placeholder="(555) 123-4567" autoComplete="tel" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Input fields with autocomplete attributes to help browsers provide suggestions.",
			},
		},
	},
}
