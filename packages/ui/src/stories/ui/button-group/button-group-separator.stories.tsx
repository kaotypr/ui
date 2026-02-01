import type { Meta, StoryObj } from "@storybook/react-vite"
import { CaretDown, Plus } from "@phosphor-icons/react"

import { Button } from "~/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "~/components/ui/button-group"

const meta = {
	title: "UI/ButtonGroup/ButtonGroupSeparator",
	component: ButtonGroupSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A visual separator for dividing elements within a ButtonGroup. Must be used within a ButtonGroup component.",
			},
		},
	},
	argTypes: {
		orientation: {
			description:
				"The orientation of the separator. Should match the opposite of the parent ButtonGroup orientation.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: "vertical" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["horizontal", "vertical"],
		},
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof ButtonGroupSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<ButtonGroup>
			<Button variant="outline">Action</Button>
			<ButtonGroupSeparator {...args} />
			<Button variant="outline" size="icon">
				<CaretDown />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default vertical separator in a horizontal button group.",
			},
		},
	},
}

export const SplitButton: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<ButtonGroup>
			<Button>
				<Plus />
				Create New
			</Button>
			<ButtonGroupSeparator {...args} />
			<Button size="icon">
				<CaretDown />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Separator used in a split button pattern with primary action and dropdown.",
			},
		},
	},
}

export const BetweenActions: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<ButtonGroup>
			<Button variant="outline">Edit</Button>
			<ButtonGroupSeparator {...args} />
			<Button variant="outline">Preview</Button>
			<ButtonGroupSeparator {...args} />
			<Button variant="outline">Publish</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple separators between action buttons.",
			},
		},
	},
}

export const VerticalGroup: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup orientation="vertical">
			<Button variant="outline">First</Button>
			<ButtonGroupSeparator {...args} />
			<Button variant="outline">Second</Button>
			<ButtonGroupSeparator {...args} />
			<Button variant="outline">Third</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Horizontal separators in a vertical button group.",
			},
		},
	},
}

export const IconButtons: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<ButtonGroup>
			<Button variant="outline" size="icon">
				<Plus />
			</Button>
			<ButtonGroupSeparator {...args} />
			<Button variant="outline" size="icon">
				<CaretDown />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Separator between icon-only buttons.",
			},
		},
	},
}
