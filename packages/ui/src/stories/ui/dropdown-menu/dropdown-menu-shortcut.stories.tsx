import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu"
import { CopyIcon, ScissorsIcon, ClipboardTextIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuShortcut",
	component: DropdownMenuShortcut,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays keyboard shortcuts for menu items. Must be used within DropdownMenuItem.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
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
} satisfies Meta<typeof DropdownMenuShortcut>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<CopyIcon />
						Copy
						<DropdownMenuShortcut {...args}>⌘C</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ScissorsIcon />
						Cut
						<DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ClipboardTextIcon />
						Paste
						<DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						New File
						<DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Open File
						<DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Save
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Undo
						<DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Redo
						<DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
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
