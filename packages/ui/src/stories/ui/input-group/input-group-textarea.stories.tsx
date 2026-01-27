import type { Meta, StoryObj } from "@storybook/react-vite"
import { UserIcon } from "@phosphor-icons/react"

import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroupTextarea,
} from "~/components/ui/input-group"

const meta = {
	title: "UI/InputGroup/InputGroupTextarea",
	component: InputGroupTextarea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A textarea element styled for use within an InputGroup. Must be used within an InputGroup component. This component wraps the base Textarea component with styles that remove borders and shadows to integrate seamlessly with the input group container.",
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
		// Standard textarea props
		placeholder: {
			description: "Placeholder text displayed when the textarea is empty.",
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
		defaultValue: {
			description: "The default value of the textarea (uncontrolled).",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
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
		disabled: {
			description: "When true, prevents the user from interacting with the textarea.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		readOnly: {
			description: "When true, prevents the user from modifying the textarea value.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "When true, indicates that the textarea is required.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		"aria-invalid": {
			description: "Indicates that the textarea value is invalid.",
			table: {
				type: { summary: "boolean | 'true' | 'false' | 'grammar' | 'spelling'" },
				defaultValue: { summary: "undefined" },
				category: "Accessibility",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof InputGroupTextarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea {...args} placeholder="Enter your message..." rows={4} />
		</InputGroup>
	),
	args: {
		rows: 4,
	},
	parameters: {
		docs: {
			description: {
				story: "Default textarea within an input group.",
			},
		},
	},
}

export const WithBlockStartAddon: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="block-start">
				<UserIcon />
			</InputGroupAddon>
			<InputGroupTextarea {...args} placeholder="Enter your message..." rows={4} />
		</InputGroup>
	),
	args: {
		rows: 4,
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with a block-start aligned addon (above the textarea).",
			},
		},
	},
}

export const WithBlockEndAddon: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea {...args} placeholder="Enter your message..." rows={4} />
			<InputGroupAddon align="block-end">
				<InputGroupText>0/500 characters</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		rows: 4,
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with a block-end aligned addon (below the textarea) showing character count.",
			},
		},
	},
}

export const WithBothBlockAddons: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="block-start">
				<UserIcon />
			</InputGroupAddon>
			<InputGroupTextarea {...args} placeholder="Enter your message..." rows={4} />
			<InputGroupAddon align="block-end">
				<InputGroupText>0/500 characters</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		rows: 4,
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with both block-start and block-end addons.",
			},
		},
	},
}

export const SmallRows: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea {...args} placeholder="Short message..." rows={2} />
		</InputGroup>
	),
	args: {
		rows: 2,
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with a small number of rows.",
			},
		},
	},
}

export const LargeRows: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea {...args} placeholder="Long message..." rows={8} />
		</InputGroup>
	),
	args: {
		rows: 8,
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with a large number of rows.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<InputGroup data-disabled="true">
			<InputGroupTextarea {...args} placeholder="Disabled textarea" rows={4} disabled />
		</InputGroup>
	),
	args: {
		rows: 4,
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled textarea within an input group.",
			},
		},
	},
}

export const Invalid: Story = {
	render: (args) => (
		<InputGroup aria-invalid="true">
			<InputGroupTextarea {...args} placeholder="Invalid textarea" rows={4} aria-invalid="true" />
		</InputGroup>
	),
	args: {
		rows: 4,
		"aria-invalid": true,
	},
	parameters: {
		docs: {
			description: {
				story: "Invalid textarea with error styling.",
			},
		},
	},
}

export const ReadOnly: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea {...args} value="This is a read-only textarea value." rows={4} readOnly />
		</InputGroup>
	),
	args: {
		rows: 4,
		readOnly: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Read-only textarea within an input group.",
			},
		},
	},
}

export const WithCharacterLimit: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea {...args} placeholder="Enter your message..." rows={4} maxLength={500} />
			<InputGroupAddon align="block-end">
				<InputGroupText>0/500 characters</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		rows: 4,
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea with character limit and counter display.",
			},
		},
	},
}
