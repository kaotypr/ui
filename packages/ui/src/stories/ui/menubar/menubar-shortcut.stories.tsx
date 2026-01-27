import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarShortcut,
} from "~/components/ui/menubar"
import {
	CopyIcon,
	ScissorsIcon,
	ClipboardTextIcon,
} from "@phosphor-icons/react"

const meta = {
	title: "UI/Menubar/MenubarShortcut",
	component: MenubarShortcut,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays keyboard shortcuts for menu items. Must be used within MenubarItem.

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
} satisfies Meta<typeof MenubarShortcut>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							<CopyIcon />
							Copy
							<MenubarShortcut {...args}>⌘C</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							<ScissorsIcon />
							Cut
							<MenubarShortcut>⌘X</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							<ClipboardTextIcon />
							Paste
							<MenubarShortcut>⌘V</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
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
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New File
							<MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Open File
							<MenubarShortcut>⌘O</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Save
							<MenubarShortcut>⌘S</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Undo
							<MenubarShortcut>⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Redo
							<MenubarShortcut>⇧⌘Z</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
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
