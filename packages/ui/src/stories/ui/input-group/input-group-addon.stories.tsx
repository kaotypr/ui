import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	AtIcon,
	CurrencyDollarIcon,
	EyeIcon,
	HashIcon,
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
	title: "UI/InputGroup/InputGroupAddon",
	component: InputGroupAddon,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A container for icons, text, or buttons positioned around the input. Must be used within an InputGroup component. Clicking the addon (except buttons) will focus the input.",
			},
		},
	},
	argTypes: {
		// Props
		align: {
			description:
				"The alignment of the addon relative to the input. 'inline-start' and 'inline-end' place addons on the left/right, while 'block-start' and 'block-end' place them above/below.",
			table: {
				type: {
					summary: '"inline-start" | "inline-end" | "block-start" | "block-end"',
				},
				defaultValue: { summary: '"inline-start"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["inline-start", "inline-end", "block-start", "block-end"],
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
			description:
				"The content to display (icons, text, buttons, or any React node).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof InputGroupAddon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon {...args} align="inline-start">
				<MagnifyingGlassIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="Search..." />
		</InputGroup>
	),
	args: {
		align: "inline-start",
	},
	parameters: {
		docs: {
			description: {
				story: "Default addon with inline-start alignment (left side).",
			},
		},
	},
}

export const InlineEnd: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Enter text" />
			<InputGroupAddon {...args} align="inline-end">
				<EyeIcon />
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		align: "inline-end",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon aligned to inline-end (right side).",
			},
		},
	},
}

export const BlockStart: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon {...args} align="block-start">
				<UserIcon />
			</InputGroupAddon>
			<InputGroupTextarea placeholder="Enter your message..." rows={4} />
		</InputGroup>
	),
	args: {
		align: "block-start",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon aligned to block-start (above the input).",
			},
		},
	},
}

export const BlockEnd: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupTextarea placeholder="Enter your message..." rows={4} />
			<InputGroupAddon {...args} align="block-end">
				<InputGroupText>0/500 characters</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		align: "block-end",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon aligned to block-end (below the input).",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon {...args} align="inline-start">
				<CurrencyDollarIcon />
			</InputGroupAddon>
			<InputGroupInput type="number" placeholder="0.00" />
		</InputGroup>
	),
	args: {
		align: "inline-start",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon containing an icon.",
			},
		},
	},
}

export const WithText: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon {...args} align="inline-start">
				<InputGroupText>https://</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="example.com" />
		</InputGroup>
	),
	args: {
		align: "inline-start",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon containing text.",
			},
		},
	},
}

export const WithButton: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput type="password" placeholder="Enter password" />
			<InputGroupAddon {...args} align="inline-end">
				<InputGroupButton>
					<EyeIcon />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		align: "inline-end",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon containing a button element.",
			},
		},
	},
}

export const WithIconAndText: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon {...args} align="inline-start">
				<AtIcon />
				<InputGroupText>@</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="username" />
		</InputGroup>
	),
	args: {
		align: "inline-start",
	},
	parameters: {
		docs: {
			description: {
				story: "Addon containing both icon and text.",
			},
		},
	},
}

export const MultipleAddons: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon {...args} align="inline-start">
				<HashIcon />
			</InputGroupAddon>
			<InputGroupInput placeholder="channel-name" />
			<InputGroupAddon align="inline-end">
				<InputGroupText>#general</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	args: {
		align: "inline-start",
	},
	parameters: {
		docs: {
			description: {
				story: "Input group with multiple addons on both sides.",
			},
		},
	},
}
