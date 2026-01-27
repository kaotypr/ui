import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	AtIcon,
	CurrencyDollarIcon,
	HashIcon,
	MagnifyingGlassIcon,
} from "@phosphor-icons/react"

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "~/components/ui/input-group"

const meta = {
	title: "UI/InputGroup/InputGroupText",
	component: InputGroupText,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A text element for displaying static text or icons within an InputGroup. Must be used within an InputGroupAddon component.",
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
			description: "The text content (text, icons, or any React node).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof InputGroupText>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupText {...args}>https://</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="example.com" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default text element displaying a URL prefix.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupText {...args}>
					<MagnifyingGlassIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="Search..." />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Text element containing an icon.",
			},
		},
	},
}

export const IconWithText: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupText {...args}>
					<AtIcon />
					@
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="username" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Text element combining an icon and text.",
			},
		},
	},
}

export const CurrencyPrefix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupText {...args}>
					<CurrencyDollarIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput type="number" placeholder="0.00" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Currency symbol prefix for monetary input fields.",
			},
		},
	},
}

export const HashtagPrefix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupText {...args}>
					<HashIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="channel-name" />
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Hashtag prefix for channel or tag input fields.",
			},
		},
	},
}

export const TextSuffix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="0" />
			<InputGroupAddon align="inline-end">
				<InputGroupText {...args}>kg</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Text element used as a suffix for unit display.",
			},
		},
	},
}

export const DomainSuffix: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupAddon align="inline-start">
				<InputGroupText>@</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="username" />
			<InputGroupAddon align="inline-end">
				<InputGroupText {...args}>@example.com</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Text element used as a domain suffix.",
			},
		},
	},
}

export const CharacterCount: Story = {
	render: (args) => (
		<InputGroup>
			<InputGroupInput placeholder="Enter text" />
			<InputGroupAddon align="inline-end">
				<InputGroupText {...args}>0/100</InputGroupText>
			</InputGroupAddon>
		</InputGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Text element displaying character count as a suffix.",
			},
		},
	},
}
