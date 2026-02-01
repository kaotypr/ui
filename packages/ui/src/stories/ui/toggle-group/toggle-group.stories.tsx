import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"
import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/ToggleGroup",
	component: ToggleGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A group of toggle buttons that allows users to select one or multiple options. Provides shared state management for a series of toggle buttons.

This component is built on top of [Base UI Toggle Group](https://base-ui.com/react/components/toggle-group).

### Component Parts
- [ToggleGroupItem](?path=/story/ui-togglegroup-togglegroupitem--default): Represents a single toggle button within the group.`,
			},
		},
	},
	argTypes: {
		// Props
		variant: {
			description: "The visual variant of the toggle group items.",
			table: {
				type: { summary: '"default" | "outline"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "outline"],
		},
		size: {
			description: "The size of the toggle group items.",
			table: {
				type: { summary: '"default" | "sm" | "lg"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg"],
		},
		spacing: {
			description: "The spacing between toggle group items. Set to 0 for connected appearance.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Props",
			},
			control: { type: "number" },
		},
		orientation: {
			description: "The orientation of the toggle group.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		// Base UI Props
		defaultValue: {
			description:
				"The open state of the toggle group represented by an array of the values of all pressed toggle buttons. This is the uncontrolled counterpart of value.",
			table: {
				type: { summary: "any[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "object" },
		},
		value: {
			description:
				"The open state of the toggle group represented by an array of the values of all pressed toggle buttons. This is the controlled counterpart of defaultValue.",
			table: {
				type: { summary: "any[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "object" },
		},
		onValueChange: {
			description: "Callback fired when the pressed states of the toggle group changes.",
			table: {
				type: {
					summary: "(groupValue: any[], eventDetails: Toggle.Group.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		loopFocus: {
			description:
				"Whether to loop keyboard focus back to the first item when the end of the list is reached while using the arrow keys.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		multiple: {
			description:
				"When false only one item in the group can be pressed. If any item in the group becomes pressed, the others will become unpressed. When true multiple items can be pressed.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description: "Whether the toggle group should ignore user interaction.",
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
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup
				{...args}
				value={value}
				onValueChange={(newValue) => {
					setValue(newValue)
					args.onValueChange?.(newValue, {} as any)
				}}
			>
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
				story:
					"Default toggle group with text formatting options. Multiple items can be selected simultaneously.",
			},
		},
	},
}

export const SingleSelection: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} multiple={false}>
				<ToggleGroupItem value="left" aria-label="Align left">
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
				story: "Toggle group with single selection mode. Only one item can be pressed at a time.",
			},
		},
	},
}

export const WithSpacing: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} spacing={8}>
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
				story: "Toggle group with spacing between items for a separated appearance.",
			},
		},
	},
}

export const OutlineVariant: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} variant="outline">
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
				story: "Toggle group with outline variant showing borders around each item.",
			},
		},
	},
}

export const Vertical: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} orientation="vertical">
				<ToggleGroupItem value="bold" aria-label="Bold">
					<TextBIcon />
					<span>Bold</span>
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Italic">
					<TextItalicIcon />
					<span>Italic</span>
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Underline">
					<TextUnderlineIcon />
					<span>Underline</span>
				</ToggleGroupItem>
			</ToggleGroup>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Toggle group displayed vertically. Items stack on top of each other.",
			},
		},
	},
}

export const SmallSize: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} size="sm">
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
				story: "Toggle group with small size variant.",
			},
		},
	},
}

export const LargeSize: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} size="lg">
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
				story: "Toggle group with large size variant.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([])

		return (
			<ToggleGroup value={value} onValueChange={setValue} disabled>
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
				story: "Toggle group with disabled state. All items are non-interactive.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: () => (
		<ToggleGroup defaultValue={["bold"]}>
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
	),
	parameters: {
		docs: {
			description: {
				story:
					"Uncontrolled toggle group using defaultValue prop. The 'bold' option is initially selected.",
			},
		},
	},
}
