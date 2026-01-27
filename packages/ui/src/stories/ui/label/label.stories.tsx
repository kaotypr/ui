import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

const meta = {
	title: "UI/Label",
	component: Label,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A styled label element for form inputs and other form controls.

Labels provide accessible text descriptions for form elements and can be associated with inputs using the \`htmlFor\` prop.`,
			},
		},
	},
	argTypes: {
		// Standard HTML Label Props
		htmlFor: {
			description:
				"The id of the form element this label is associated with. Clicking the label will focus the associated element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		form: {
			description:
				"The id of the form element this label is associated with.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		children: {
			description: "The content to display inside the label.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
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
		"aria-label": {
			description: "An accessible label for the label element itself.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
		"aria-labelledby": {
			description:
				"Identifies the element(s) that label the label element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Label",
	},
	parameters: {
		docs: {
			description: {
				story: "Default label element.",
			},
		},
	},
}

export const WithInput: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label {...args} htmlFor="email-input">
				Email
			</Label>
			<Input id="email-input" type="email" placeholder="Enter your email" />
		</div>
	),
	args: {
		children: "Email",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Label associated with an input using the `htmlFor` prop. Clicking the label will focus the input.",
			},
		},
	},
}

export const Required: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label {...args} htmlFor="required-input">
				Email <span className="text-destructive">*</span>
			</Label>
			<Input
				id="required-input"
				type="email"
				placeholder="Enter your email"
				required
			/>
		</div>
	),
	args: {
		children: "Email",
	},
	parameters: {
		docs: {
			description: {
				story: "Label with required indicator (asterisk).",
			},
		},
	},
}

export const WithDisabledInput: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2 w-64">
			<Label {...args} htmlFor="disabled-input">
				Disabled Field
			</Label>
			<Input
				id="disabled-input"
				type="text"
				placeholder="This input is disabled"
				disabled
			/>
		</div>
	),
	args: {
		children: "Disabled Field",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Label associated with a disabled input. The label automatically applies disabled styling when the associated input is disabled.",
			},
		},
	},
}

export const MultipleFields: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-64">
			<div className="flex flex-col gap-2">
				<Label htmlFor="name-input">Name</Label>
				<Input id="name-input" type="text" placeholder="Enter your name" />
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="email-input">
					Email <span className="text-destructive">*</span>
				</Label>
				<Input
					id="email-input"
					type="email"
					placeholder="Enter your email"
					required
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="password-input">Password</Label>
				<Input
					id="password-input"
					type="password"
					placeholder="Enter your password"
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple labeled form fields demonstrating common form patterns.",
			},
		},
	},
}

export const WithDescription: Story = {
	render: () => (
		<div className="flex flex-col gap-2 w-64">
			<Label htmlFor="username-input">Username</Label>
			<p className="text-xs text-muted-foreground">
				Choose a unique username for your account
			</p>
			<Input id="username-input" type="text" placeholder="Enter username" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Label with a description text below it, providing additional context for the form field.",
			},
		},
	},
}

export const Standalone: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Label {...args}>Standalone Label</Label>
			<p className="text-xs text-muted-foreground">
				This label is not associated with any input element.
			</p>
		</div>
	),
	args: {
		children: "Standalone Label",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Label used standalone without an associated input, useful for section headers or informational text.",
			},
		},
	},
}
