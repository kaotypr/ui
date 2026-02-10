import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	CaretDownIcon,
	CopyIcon,
	DotsThreeVerticalIcon,
	MagnifyingGlassIcon,
	PlusIcon,
	ScissorsIcon,
	ClipboardTextIcon,
} from "@phosphor-icons/react"

import { Button } from "~/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "~/components/ui/button-group"
import { Input } from "~/components/ui/input"

const meta = {
	title: "UI/ButtonGroup",
	component: ButtonGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"A container component for grouping related buttons and form elements together.",
					"",
					"### Component Parts",
					"- [ButtonGroupText](?path=/story/ui-buttongroup-buttongrouptext--default): A text element that can be rendered within the group.",
					"- [ButtonGroupSeparator](?path=/story/ui-buttongroup-buttongroupseparator--default): A visual separator between grouped elements.",
				].join("\n"),
			},
		},
	},
	argTypes: {
		orientation: {
			description: "The orientation of the button group layout.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: "horizontal" },
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
		children: {
			description: "The elements to group together (buttons, inputs, etc.).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline">Left</Button>
			<Button variant="outline">Center</Button>
			<Button variant="outline">Right</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default horizontal button group with outline buttons.",
			},
		},
	},
}

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline">Top</Button>
			<Button variant="outline">Middle</Button>
			<Button variant="outline">Bottom</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Vertical button group layout.",
			},
		},
	},
}

export const WithIcons: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline" size="icon">
				<ScissorsIcon />
			</Button>
			<Button variant="outline" size="icon">
				<CopyIcon />
			</Button>
			<Button variant="outline" size="icon">
				<ClipboardTextIcon />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Button group with icon-only buttons for toolbar-like actions.",
			},
		},
	},
}

export const WithInput: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<ButtonGroupText>
				<MagnifyingGlassIcon />
			</ButtonGroupText>
			<Input placeholder="Search..." />
			<Button variant="outline">Search</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Button group combining an icon text element, input field, and button.",
			},
		},
	},
}

export const WithSeparator: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline">Action</Button>
			<ButtonGroupSeparator />
			<Button variant="outline" size="icon">
				<CaretDownIcon />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Button group with a visual separator between buttons.",
			},
		},
	},
}

export const SplitButton: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button>
				<PlusIcon />
				Create
			</Button>
			<ButtonGroupSeparator />
			<Button size="icon">
				<CaretDownIcon />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Split button pattern with a primary action and dropdown trigger.",
			},
		},
	},
}

export const WithText: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<ButtonGroupText>https://</ButtonGroupText>
			<Input placeholder="example.com" />
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Button group with a text prefix and input field.",
			},
		},
	},
}

export const MixedVariants: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline">Previous</Button>
			<Button>Current</Button>
			<Button variant="outline">Next</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Button group with mixed button variants to highlight the current selection.",
			},
		},
	},
}

export const VerticalWithIcons: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="outline" size="icon">
				<PlusIcon />
			</Button>
			<Button variant="outline" size="icon">
				<CopyIcon />
			</Button>
			<Button variant="outline" size="icon">
				<DotsThreeVerticalIcon />
			</Button>
		</ButtonGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Vertical button group with icon buttons, useful for side toolbars.",
			},
		},
	},
}

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<ButtonGroup>
				<Button variant="outline" size="xs">
					XS
				</Button>
				<Button variant="outline" size="xs">
					Button
				</Button>
				<Button variant="outline" size="xs">
					Group
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="sm">
					SM
				</Button>
				<Button variant="outline" size="sm">
					Button
				</Button>
				<Button variant="outline" size="sm">
					Group
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="default">
					Default
				</Button>
				<Button variant="outline" size="default">
					Button
				</Button>
				<Button variant="outline" size="default">
					Group
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="lg">
					LG
				</Button>
				<Button variant="outline" size="lg">
					Button
				</Button>
				<Button variant="outline" size="lg">
					Group
				</Button>
			</ButtonGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Button groups with different button sizes.",
			},
		},
	},
}
