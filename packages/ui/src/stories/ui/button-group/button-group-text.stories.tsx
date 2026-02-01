import type { Meta, StoryObj } from "@storybook/react-vite"
import { At, CurrencyDollar, Hash, MagnifyingGlass } from "@phosphor-icons/react"

import { Button } from "~/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "~/components/ui/button-group"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/ButtonGroup/ButtonGroupText",
	component: ButtonGroupText,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A text element for displaying static text or icons within a ButtonGroup. Must be used within a ButtonGroup component.",
			},
		},
	},
	argTypes: {
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		render: {
			description:
				"A function to customize the rendered element. Receives props to spread onto your custom element.",
			table: {
				type: { summary: "React.ReactElement | ((props: GenericHTMLProps) => React.ReactElement)" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		children: {
			description: "The content to display (text, icons, or any React node).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ButtonGroupText>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<ButtonGroup>
			<ButtonGroupText {...args}>https://</ButtonGroupText>
			<Input placeholder="example.com" />
		</ButtonGroup>
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
		<ButtonGroup>
			<ButtonGroupText {...args}>
				<MagnifyingGlass />
			</ButtonGroupText>
			<Input placeholder="Search..." />
			<Button variant="outline">Search</Button>
		</ButtonGroup>
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
		<ButtonGroup>
			<ButtonGroupText {...args}>
				<At />@
			</ButtonGroupText>
			<Input placeholder="username" />
		</ButtonGroup>
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
		<ButtonGroup>
			<ButtonGroupText {...args}>
				<CurrencyDollar />
			</ButtonGroupText>
			<Input type="number" placeholder="0.00" />
		</ButtonGroup>
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
		<ButtonGroup>
			<ButtonGroupText {...args}>
				<Hash />
			</ButtonGroupText>
			<Input placeholder="channel-name" />
		</ButtonGroup>
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
		<ButtonGroup>
			<Input placeholder="0" />
			<ButtonGroupText {...args}>kg</ButtonGroupText>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Text element used as a suffix for unit display.",
			},
		},
	},
}

export const CustomRender: Story = {
	render: (args) => (
		<ButtonGroup>
			<ButtonGroupText {...args} render={<span />}>
				Custom Element
			</ButtonGroupText>
			<Input placeholder="Input" />
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Using the render prop to customize the underlying element.",
			},
		},
	},
}
