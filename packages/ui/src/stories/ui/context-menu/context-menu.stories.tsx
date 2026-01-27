import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuLabel,
	ContextMenuGroup,
	ContextMenuShortcut,
} from "~/components/ui/context-menu"
import { CopyIcon, ScissorsIcon, ClipboardTextIcon, TrashIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/ContextMenu",
	component: ContextMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu that appears at the pointer on right click or long press.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).

### Component Parts
- [ContextMenuTrigger](?path=/story/ui-contextmenu-contextmenutrigger--default): The trigger area that opens the menu on right click or long press.
- [ContextMenuContent](?path=/story/ui-contextmenu-contextmenucontent--default): The container for menu items.
- [ContextMenuItem](?path=/story/ui-contextmenu-contextmenuitem--default): An individual interactive item in the menu.
- [ContextMenuCheckboxItem](?path=/story/ui-contextmenu-contextmenucheckboxitem--default): A menu item that toggles a setting on or off.
- [ContextMenuRadioItem](?path=/story/ui-contextmenu-contextmenuitem--default): A menu item that works like a radio button in a given group.
- [ContextMenuLabel](?path=/story/ui-contextmenu-contextmenulabel--default): An accessible label for a group of menu items.
- [ContextMenuSeparator](?path=/story/ui-contextmenu-contextmenuseparator--default): A visual separator between menu groups.
- [ContextMenuShortcut](?path=/story/ui-contextmenu-contextmenushortcut--default): Displays keyboard shortcuts for menu items.
- [ContextMenuGroup](?path=/story/ui-contextmenu-contextmenugroup--default): Groups related menu items together.
- [ContextMenuSub](?path=/story/ui-contextmenu-contextmenusub--default): Groups all parts of a submenu.
- [ContextMenuSubTrigger](?path=/story/ui-contextmenu-contextmenusubtrigger--default): A menu item that opens a submenu.
- [ContextMenuSubContent](?path=/story/ui-contextmenu-contextmenusubcontent--default): The container for submenu items.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultOpen: {
			description:
				"Whether the menu is initially open. To render a controlled menu, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the menu is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description:
				"Event handler called when the menu is opened or closed.",
			table: {
				type: {
					summary:
						"(open: boolean, eventDetails: ContextMenu.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		highlightItemOnHover: {
			description:
				"Whether moving the pointer over items should highlight them. Disabling this prop allows CSS :hover to be differentiated from the :focus (data-highlighted) state.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		closeParentOnEsc: {
			description:
				"When in a submenu, determines whether pressing the Escape key closes the entire menu, or only the current child menu.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the menu is closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
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
		orientation: {
			description:
				"The visual orientation of the menu. Controls whether roving focus uses up/down or left/right arrow keys.",
			table: {
				type: { summary: '"vertical" | "horizontal"' },
				defaultValue: { summary: '"vertical"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["vertical", "horizontal"],
		},
	},
} satisfies Meta<typeof ContextMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen, {} as any)
				}}
			>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>
						<CopyIcon />
						Copy
						<ContextMenuShortcut>⌘C</ContextMenuShortcut>
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
					<ContextMenuSeparator />
					<ContextMenuItem variant="destructive">
						<TrashIcon />
						Delete
						<ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default context menu with common actions and keyboard shortcuts.",
			},
		},
	},
}

export const WithGroups: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel>Edit</ContextMenuLabel>
						<ContextMenuItem>
							<CopyIcon />
							Copy
						</ContextMenuItem>
						<ContextMenuItem>
							<ScissorsIcon />
							Cut
						</ContextMenuItem>
						<ContextMenuItem>
							<ClipboardTextIcon />
							Paste
						</ContextMenuItem>
					</ContextMenuGroup>
					<ContextMenuSeparator />
					<ContextMenuGroup>
						<ContextMenuLabel>Actions</ContextMenuLabel>
						<ContextMenuItem variant="destructive">
							<TrashIcon />
							Delete
						</ContextMenuItem>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Context menu with grouped items and labels for better organization.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<button
					type="button"
					onClick={() => setOpen(!open)}
					className="rounded-md border px-4 py-2 text-sm"
				>
					{open ? "Close Menu" : "Open Menu"}
				</button>
				<ContextMenu
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, {} as any)
					}}
				>
					<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
						Right click here
					</ContextMenuTrigger>
					<ContextMenuContent>
						<ContextMenuItem>
							<CopyIcon />
							Copy
						</ContextMenuItem>
						<ContextMenuItem>
							<ScissorsIcon />
							Cut
						</ContextMenuItem>
						<ContextMenuItem>
							<ClipboardTextIcon />
							Paste
						</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenu>
			</div>
		)
	},
	args: {
		open: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled context menu where the open state is managed externally.",
			},
		},
	},
}
