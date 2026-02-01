import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"
import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/ToggleGroup/ToggleGroupItem",
	component: ToggleGroupItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A single toggle button within a toggle group. Must be used within ToggleGroup.

This component is built on top of [Base UI Toggle](https://base-ui.com/react/components/toggle).`,
			},
		},
	},
	argTypes: {
		// Props
		variant: {
			description: "The visual variant of the toggle item.",
			table: {
				type: { summary: '"default" | "outline"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "outline"],
		},
		size: {
			description: "The size of the toggle item.",
			table: {
				type: { summary: '"default" | "sm" | "lg"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg"],
		},
		// Base UI Props
		value: {
			description: "A unique string that identifies the toggle when used inside a toggle group.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		defaultPressed: {
			description:
				"Whether the toggle button is currently pressed. This is the uncontrolled counterpart of pressed.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		pressed: {
			description:
				"Whether the toggle button is currently pressed. This is the controlled counterpart of defaultPressed.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onPressedChange: {
			description: "Callback fired when the pressed state is changed.",
			table: {
				type: {
					summary: "(pressed: boolean, eventDetails: Toggle.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onPressedChange",
		},
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop. Set to false if the rendered element is not a button (e.g. div).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description: "Whether the component should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
	},
} satisfies Meta<typeof ToggleGroupItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		value: "bold",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue}>
				<ToggleGroupItem {...args} aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default toggle item within a toggle group.",
			},
		},
	},
}

export const WithText: Story = {
	args: {
		value: "left",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} multiple={false}>
				<ToggleGroupItem {...args} aria-label="Align left">
					Left
				</ToggleGroupItem>
				<ToggleGroupItem value="center" aria-label="Align center">
					Center
				</ToggleGroupItem>
				<ToggleGroupItem value="right" aria-label="Align right">
					Right
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item with text content instead of icons.",
			},
		},
	},
}

export const OutlineVariant: Story = {
	args: {
		value: "bold",
		variant: "outline",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue}>
				<ToggleGroupItem {...args} aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" variant="outline" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" variant="outline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item with outline variant showing a border.",
			},
		},
	},
}

export const SmallSize: Story = {
	args: {
		value: "bold",
		size: "sm",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} size="sm">
				<ToggleGroupItem {...args} aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item with small size variant.",
			},
		},
	},
}

export const LargeSize: Story = {
	args: {
		value: "bold",
		size: "lg",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} size="lg">
				<ToggleGroupItem {...args} aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item with large size variant.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		value: "bold",
		disabled: true,
	},
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue}>
				<ToggleGroupItem value="bold" disabled aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item with disabled state. The item is non-interactive.",
			},
		},
	},
}

export const Pressed: Story = {
	args: {
		value: "bold",
	},
	render: () => {
		const [value, setValue] = React.useState<string[]>(["bold"])

		return (
			<ToggleGroup value={value} onValueChange={setValue}>
				<ToggleGroupItem value="bold" aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item in pressed/selected state.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	args: {
		value: "bold",
		className: "border-2 border-primary",
	},
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue}>
				<ToggleGroupItem {...args} aria-label="Bold">
					<TextBIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle item with custom className for styling.",
			},
		},
	},
}
