import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Textarea } from "~/components/ui/textarea"

const meta = {
	title: "UI/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A native textarea element for multi-line text input.

This component provides a styled textarea element that automatically works with form validation and accessibility features.`,
			},
		},
	},
	argTypes: {
		// Standard HTML Textarea Props
		defaultValue: {
			description: "The default value of the textarea (uncontrolled).",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		value: {
			description: "The controlled value of the textarea.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		placeholder: {
			description: "Placeholder text displayed when the textarea is empty.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description: "When true, prevents user interaction with the textarea.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "When true, the textarea is required.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		readOnly: {
			description: "When true, the textarea is read-only.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		name: {
			description: "The name attribute of the textarea element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		id: {
			description: "The id attribute of the textarea element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		autoComplete: {
			description: "The autocomplete attribute of the textarea element.",
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
		rows: {
			description: "The number of visible text lines.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		cols: {
			description: "The visible width of the textarea in character columns.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "number" },
		},
		wrap: {
			description: "How the text should be wrapped.",
			table: {
				type: { summary: '"hard" | "soft" | "off"' },
				defaultValue: { summary: '"soft"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["hard", "soft", "off"],
		},
		spellCheck: {
			description: "Whether to enable spell checking.",
			table: {
				type: { summary: "boolean | 'true' | 'false'" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "boolean" },
		},

		// Event Handlers
		onChange: {
			description: "Event handler called when the textarea value changes.",
			table: {
				type: {
					summary: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onChange",
		},
		onFocus: {
			description: "Event handler called when the textarea receives focus.",
			table: {
				type: {
					summary: "(event: React.FocusEvent<HTMLTextAreaElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onFocus",
		},
		onBlur: {
			description: "Event handler called when the textarea loses focus.",
			table: {
				type: {
					summary: "(event: React.FocusEvent<HTMLTextAreaElement>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onBlur",
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
		style: {
			description: "CSS properties applied to the element.",
			table: {
				type: { summary: "React.CSSProperties" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},

		// Accessibility
		"aria-invalid": {
			description: "Indicates that the textarea value is invalid.",
			table: {
				type: { summary: "boolean | 'true' | 'false'" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "boolean" },
		},
		"aria-label": {
			description: "An accessible label for the textarea.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
		"aria-describedby": {
			description: "Identifies the element(s) that describe the textarea.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: "Enter your message...",
	},
	parameters: {
		docs: {
			description: {
				story: "Default textarea with placeholder text.",
			},
		},
	},
}

export const WithValue: Story = {
	args: {
		value: "This is a pre-filled textarea with some content.",
		placeholder: "Enter your message...",
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with a pre-filled value.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState("")
		return (
			<Textarea
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
					"Controlled textarea using React state. The value is managed by the component state.",
			},
		},
	},
}

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-full max-w-md">
			<div>
				<label className="text-sm font-medium mb-1 block">Small (3 rows)</label>
				<Textarea placeholder="Small textarea" rows={3} />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Medium (5 rows)</label>
				<Textarea placeholder="Medium textarea" rows={5} />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Large (10 rows)</label>
				<Textarea placeholder="Large textarea" rows={10} />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Textareas with different row sizes.",
			},
		},
	},
}

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-full max-w-md">
			<div>
				<label className="text-sm font-medium mb-1 block">Default</label>
				<Textarea placeholder="Default textarea" />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Disabled</label>
				<Textarea placeholder="Disabled textarea" disabled />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Read Only</label>
				<Textarea value="This is a read-only textarea." readOnly />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Required</label>
				<Textarea placeholder="Required textarea" required />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Invalid</label>
				<Textarea
					placeholder="Invalid textarea"
					aria-invalid="true"
					defaultValue="This textarea has an error."
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Different textarea states: default, disabled, read-only, required, and invalid.",
			},
		},
	},
}

export const WithConstraints: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-full max-w-md">
			<div>
				<label className="text-sm font-medium mb-1 block">
					Max Length (100 characters)
				</label>
				<Textarea placeholder="Max 100 chars" maxLength={100} />
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">
					Min Length (10 characters)
				</label>
				<Textarea placeholder="Min 10 chars" minLength={10} />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Textareas with validation constraints: max length and min length.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		placeholder: "Disabled textarea",
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled textarea that cannot be interacted with.",
			},
		},
	},
}

export const Invalid: Story = {
	args: {
		placeholder: "Invalid textarea",
		"aria-invalid": true,
		defaultValue: "This textarea has an error.",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Invalid textarea with error styling. Use aria-invalid to indicate validation errors.",
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
				story: "Required textarea that must be filled before form submission.",
			},
		},
	},
}

export const WithAutoComplete: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-full max-w-md">
			<div>
				<label className="text-sm font-medium mb-1 block">Address</label>
				<Textarea
					placeholder="Enter your address"
					autoComplete="street-address"
					rows={3}
				/>
			</div>
			<div>
				<label className="text-sm font-medium mb-1 block">Additional Notes</label>
				<Textarea placeholder="Additional information" autoComplete="off" rows={4} />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Textareas with autocomplete attributes to help browsers provide suggestions.",
			},
		},
	},
}
