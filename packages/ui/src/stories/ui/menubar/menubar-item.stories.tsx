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
	TrashIcon,
} from "@phosphor-icons/react"

const meta = {
	title: "UI/Menubar/MenubarItem",
	component: MenubarItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual interactive item in the menu. Must be used within MenubarContent.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Props
		inset: {
			description:
				"When true, adds left padding to align with items that have icons.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		variant: {
			description: "The visual variant of the menu item.",
			table: {
				type: { summary: '"default" | "destructive"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "destructive"],
		},
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
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description:
				"Whether the component should ignore user interaction.",
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
} satisfies Meta<typeof MenubarItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem {...args} onClick={() => args.onClick?.({} as any)}>
							Copy
						</MenubarItem>
						<MenubarItem onClick={() => {}}>Cut</MenubarItem>
						<MenubarItem onClick={() => {}}>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default menu item with text content.",
			},
		},
	},
}

export const WithIcons: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							<CopyIcon />
							Copy
						</MenubarItem>
						<MenubarItem>
							<ScissorsIcon />
							Cut
						</MenubarItem>
						<MenubarItem>
							<ClipboardTextIcon />
							Paste
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Menu items with icons displayed before the text.",
			},
		},
	},
}

export const WithShortcuts: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							<CopyIcon />
							Copy
							<MenubarShortcut>⌘C</MenubarShortcut>
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
				story: "Menu items with keyboard shortcuts displayed on the right.",
			},
		},
	},
}

export const Destructive: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							<CopyIcon />
							Copy
						</MenubarItem>
						<MenubarItem>
							<ScissorsIcon />
							Cut
						</MenubarItem>
						<MenubarItem variant="destructive">
							<TrashIcon />
							Delete
							<MenubarShortcut>⌘⌫</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Menu item with destructive variant styling.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							<CopyIcon />
							Copy
						</MenubarItem>
						<MenubarItem disabled>
							<ScissorsIcon />
							Cut (disabled)
						</MenubarItem>
						<MenubarItem>
							<ClipboardTextIcon />
							Paste
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Menu item with disabled state.",
			},
		},
	},
}

export const WithInset: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							<CopyIcon />
							Copy
						</MenubarItem>
						<MenubarItem inset>Item without icon</MenubarItem>
						<MenubarItem>
							<ClipboardTextIcon />
							Paste
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Menu item with inset prop to align with items that have icons.",
			},
		},
	},
}
