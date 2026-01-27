import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	AtIcon,
	CurrencyDollarIcon,
	EyeIcon,
	EyeSlashIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from "@phosphor-icons/react"

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "~/components/ui/input-group"

const meta = {
	title: "UI/InputGroup",
	component: InputGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container component for grouping input fields with addons, buttons, and text elements.

### Component Parts
- [InputGroupAddon](?path=/story/ui-inputgroup-inputgroupaddon--default): A container for icons, text, or buttons positioned around the input.
- [InputGroupButton](?path=/story/ui-inputgroup-inputgroupbutton--default): A button element designed to work within an input group.
- [InputGroupText](?path=/story/ui-inputgroup-inputgrouptext--default): A text element for displaying static text or icons.
- [InputGroupInput](?path=/story/ui-inputgroup-inputgroupinput--default): An input element styled for use within an input group.
- [InputGroupTextarea](?path=/story/ui-inputgroup-inputgrouptextarea--default): A textarea element styled for use within an input group.`,
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
		children: {
			description: "The input group children (addons, inputs, buttons, etc.).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupInput placeholder="Enter text" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default input group with a single input field.",
			},
		},
	},
}

export const WithPrefixIcon: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupAddon align="inline-start">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="Search..." />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with an icon prefix addon.",
			},
		},
	},
}

export const WithSuffixButton: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupInput type="password" placeholder="Enter password" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton>
					<EyeIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with a button suffix addon.",
			},
		},
	},
}

export const WithPrefixAndSuffix: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupAddon align="inline-start">
				<AtIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="username" />
			<InputGroupAddon align="inline-end">
				<InputGroupText>@example.com</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with both prefix and suffix elements.",
			},
		},
	},
}

export const WithCurrency: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupAddon align="inline-start">
				<CurrencyDollarIcon />
			</InputGroupAddon>
			<InputGroupInput type="number" placeholder="0.00" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with currency symbol prefix for monetary input.",
			},
		},
	},
}

export const WithTextPrefix: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupAddon align="inline-start">
				<InputGroupText>https://</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="example.com" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with text prefix addon.",
			},
		},
	},
}

export const WithTextarea: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupAddon align="block-start">
				<UserIcon />
			</InputGroupAddon>
			<InputGroupTextarea placeholder="Enter your message..." rows={4} />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with textarea and block-start aligned addon.",
			},
		},
	},
}

export const WithBlockEndAddon: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupTextarea placeholder="Enter your message..." rows={4} />
			<InputGroupAddon align="block-end">
				<InputGroupText>0/500 characters</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group with textarea and block-end aligned addon showing character count.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<InputGroup {...args} data-disabled="true">
			<InputGroupAddon align="inline-start">
				<UserIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="Disabled input" disabled />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled input group with reduced opacity.",
			},
		},
	},
}

export const Invalid: Story = {
	render: (args) => (
		<InputGroup {...args} aria-invalid="true">
			<InputGroupAddon align="inline-start">
				<UserIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="Invalid input" aria-invalid="true" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Input group in invalid state with error styling.",
			},
		},
	},
}

export const ComplexExample: Story = {
	render: (args) => (
		<InputGroup {...args}>
			<InputGroupAddon align="inline-start">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="Search users..." />
			<InputGroupAddon align="inline-end">
				<InputGroupButton>
					<EyeSlashIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Complex input group with icon prefix and button suffix.",
			},
		},
	},
}
