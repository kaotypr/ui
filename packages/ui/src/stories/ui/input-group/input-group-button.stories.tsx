import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	EyeIcon,
	EyeSlashIcon,
	MagnifyingGlassIcon,
	XIcon,
} from "@phosphor-icons/react"

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "~/components/ui/input-group"

const meta = {
	title: "UI/InputGroup/InputGroupButton",
	component: InputGroupButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A button element designed to work within an InputGroup. Must be used within an InputGroupAddon component.",
			},
		},
	},
	argTypes: {
		// Props
		size: {
			description:
				"The size of the button. 'xs' is extra small, 'sm' is small, 'icon-xs' and 'icon-sm' are icon-only button sizes.",
			table: {
				type: { summary: '"xs" | "sm" | "icon-xs" | "icon-sm"' },
				defaultValue: { summary: '"xs"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["xs", "sm", "icon-xs", "icon-sm"],
		},
		variant: {
			description: "The visual variant of the button.",
			table: {
				type: {
					summary:
						'"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
				},
				defaultValue: { summary: '"ghost"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
		},
		type: {
			description: "The button type attribute.",
			table: {
				type: { summary: '"button" | "submit" | "reset"' },
				defaultValue: { summary: '"button"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["button", "submit", "reset"],
		},
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
			description: "The button content (text, icons, or any React node).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof InputGroupButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Enter text" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args}>
					<XIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "xs",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Default button with extra small size and ghost variant.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput type="password" placeholder="Enter password" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args}>
					<EyeIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "xs",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Button with an icon for toggling password visibility.",
			},
		},
	},
}

export const IconOnly: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Search..." />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args} size="icon-xs">
					<MagnifyingGlassIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "icon-xs",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Icon-only button with icon-xs size.",
			},
		},
	},
}

export const IconSmall: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Search..." />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args} size="icon-sm">
					<EyeSlashIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "icon-sm",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Icon-only button with icon-sm size.",
			},
		},
	},
}

export const SmallSize: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Enter text" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args} size="sm">
					Clear
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "sm",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Button with small size and text label.",
			},
		},
	},
}

export const OutlineVariant: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Search..." />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args} variant="outline">
					<MagnifyingGlassIcon />
					Search
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "xs",
		variant: "outline",
	},
	parameters: {
		docs: {
			description: {
				story: "Button with outline variant.",
			},
		},
	},
}

export const WithTextAndIcon: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Enter text" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton {...args}>
					<EyeSlashIcon />
					Hide
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		size: "xs",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Button with both icon and text content.",
			},
		},
	},
}

export const PrefixButton: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupButton {...args}>
					<MagnifyingGlassIcon />
				</InputGroupButton>
			</InputGroupAddon>
			<InputGroupInput placeholder="Search..." />
		</InputGroup>
	),
	args: {
		size: "xs",
		variant: "ghost",
	},
	parameters: {
		docs: {
			description: {
				story: "Button used as a prefix addon.",
			},
		},
	},
}
