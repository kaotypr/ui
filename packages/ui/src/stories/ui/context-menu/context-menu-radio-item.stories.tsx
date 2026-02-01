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
	title: "UI/ContextMenu/ContextMenuRadioItem",
	component: ContextMenuRadioItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that works like a radio button in a given group. Must be used within ContextMenuRadioGroup, which must be within ContextMenuGroup.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		label: {
			description:
				"Overrides the text label to use when the item is matched during keyboard text navigation.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description:
				"Value of the radio item. This is the value that will be set in the Menu.RadioGroup when the item is selected.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onClick: {
			description: "The click handler for the menu item.",
			table: {
				type: { summary: "MouseEventHandler<HTMLDivElement>" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onClick",
		},
		closeOnClick: {
			description: "Whether to close the menu when the item is clicked.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
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
} satisfies Meta<typeof ContextMenuRadioItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		value: "default",
	},
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
						<ContextMenuRadioGroup value={value} onValueChange={setValue}>
							<ContextMenuRadioItem
								{...args}
								value="left"
								onClick={() => args.onClick?.({} as any)}
							>
								Left
							</ContextMenuRadioItem>
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
				story: "Default radio items within a radio group.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	args: {
		value: "default",
	},
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
	args: {
		value: "center",
		disabled: true,
	},
	render: () => {
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
						<ContextMenuRadioGroup value={value} onValueChange={setValue}>
							<ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
							<ContextMenuRadioItem value="center">Center</ContextMenuRadioItem>
							<ContextMenuRadioItem value="right" disabled>
								Right (disabled)
							</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio items with one item disabled.",
			},
		},
	},
}
