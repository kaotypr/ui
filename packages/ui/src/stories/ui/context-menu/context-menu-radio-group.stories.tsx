import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuLabel,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuRadioGroup",
	component: ContextMenuRadioGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related radio items. Must be used within ContextMenuGroup, which must be within ContextMenuContent.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultValue: {
			description:
				"The uncontrolled value of the radio item that should be initially selected. To render a controlled radio group, use the value prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description:
				"The controlled value of the radio item that should be currently selected. To render an uncontrolled radio group, use the defaultValue prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description: "Function called when the selected value changes.",
			table: {
				type: {
					summary: "(value: any, eventDetails: Menu.RadioGroup.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
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
} satisfies Meta<typeof ContextMenuRadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [value, setValue] = React.useState<string>("center")

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel>Alignment</ContextMenuLabel>
						<ContextMenuRadioGroup
							{...args}
							value={value}
							onValueChange={(newValue) => {
								setValue(newValue)
								args.onValueChange?.(newValue, {} as any)
							}}
						>
							<ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
							<ContextMenuRadioItem value="center">Center</ContextMenuRadioItem>
							<ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default radio group with controlled value.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel>View</ContextMenuLabel>
						<ContextMenuRadioGroup defaultValue="grid">
							<ContextMenuRadioItem value="list">List</ContextMenuRadioItem>
							<ContextMenuRadioItem value="grid">Grid</ContextMenuRadioItem>
							<ContextMenuRadioItem value="table">Table</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Uncontrolled radio group using defaultValue prop.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel>Alignment</ContextMenuLabel>
						<ContextMenuRadioGroup defaultValue="center" disabled>
							<ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
							<ContextMenuRadioItem value="center">Center</ContextMenuRadioItem>
							<ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio group with disabled state.",
			},
		},
	},
}
