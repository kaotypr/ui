import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuShortcut,
} from "~/components/ui/context-menu"
import { CopyIcon, ScissorsIcon, ClipboardTextIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/ContextMenu/ContextMenuShortcut",
	component: ContextMenuShortcut,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays keyboard shortcuts for menu items. Must be used within ContextMenuItem.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
			},
		},
	},
	argTypes: {
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
} satisfies Meta<typeof ContextMenuShortcut>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>
						<CopyIcon />
						Copy
						<ContextMenuShortcut {...args}>⌘C</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<ScissorsIcon />
						Cut
						<ContextMenuShortcut>⌘X</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<ClipboardTextIcon />
						Paste
						<ContextMenuShortcut>⌘V</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Keyboard shortcuts displayed on the right side of menu items.",
			},
		},
	},
}

export const VariousShortcuts: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>
						New File
						<ContextMenuShortcut>⌘N</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Open File
						<ContextMenuShortcut>⌘O</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Save
						<ContextMenuShortcut>⌘S</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Undo
						<ContextMenuShortcut>⌘Z</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Redo
						<ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Various keyboard shortcuts with different key combinations.",
			},
		},
	},
}
