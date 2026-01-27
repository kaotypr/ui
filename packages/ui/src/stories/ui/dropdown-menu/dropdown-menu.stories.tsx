import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu"
import { CopyIcon, ScissorsIcon, ClipboardTextIcon, TrashIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/DropdownMenu",
	component: DropdownMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu that appears when clicking a trigger element.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).

### Component Parts
- [DropdownMenuTrigger](?path=/story/ui-dropdownmenu-dropdownmenutrigger--default): The button that opens the menu.
- [DropdownMenuContent](?path=/story/ui-dropdownmenu-dropdownmenucontent--default): The container for menu items.
- [DropdownMenuItem](?path=/story/ui-dropdownmenu-dropdownmenuitem--default): An individual interactive item in the menu.
- [DropdownMenuCheckboxItem](?path=/story/ui-dropdownmenu-dropdownmenucheckboxitem--default): A menu item that toggles a setting on or off.
- [DropdownMenuRadioItem](?path=/story/ui-dropdownmenu-dropdownmenuitem--default): A menu item that works like a radio button in a given group.
- [DropdownMenuLabel](?path=/story/ui-dropdownmenu-dropdownmenulabel--default): An accessible label for a group of menu items.
- [DropdownMenuSeparator](?path=/story/ui-dropdownmenu-dropdownmenuseparator--default): A visual separator between menu groups.
- [DropdownMenuShortcut](?path=/story/ui-dropdownmenu-dropdownmenushortcut--default): Displays keyboard shortcuts for menu items.
- [DropdownMenuGroup](?path=/story/ui-dropdownmenu-dropdownmenugroup--default): Groups related menu items together.
- [DropdownMenuSub](?path=/story/ui-dropdownmenu-dropdownmenusub--default): Groups all parts of a submenu.
- [DropdownMenuSubTrigger](?path=/story/ui-dropdownmenu-dropdownmenusubtrigger--default): A menu item that opens a submenu.
- [DropdownMenuSubContent](?path=/story/ui-dropdownmenu-dropdownmenusubcontent--default): The container for submenu items.
- [DropdownMenuPortal](?path=/story/ui-dropdownmenu-dropdownmenuportal--default): A portal element that moves the popup to a different part of the DOM.`,
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
						"(open: boolean, eventDetails: Menu.Root.ChangeEventDetails) => void",
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
		modal: {
			description:
				"Determines if the menu enters a modal state when open. When true, user interaction is limited to the menu: document page scroll is locked and pointer interactions on outside elements are disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen, {} as any)
				}}
			>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<CopyIcon />
						Copy
						<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
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
					<DropdownMenuSeparator />
					<DropdownMenuItem variant="destructive">
						<TrashIcon />
						Delete
						<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default dropdown menu with common actions and keyboard shortcuts.",
			},
		},
	},
}

export const WithGroups: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>Edit</DropdownMenuLabel>
						<DropdownMenuItem>
							<CopyIcon />
							Copy
						</DropdownMenuItem>
						<DropdownMenuItem>
							<ScissorsIcon />
							Cut
						</DropdownMenuItem>
						<DropdownMenuItem>
							<ClipboardTextIcon />
							Paste
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem variant="destructive">
							<TrashIcon />
							Delete
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Dropdown menu with grouped items and labels for better organization.",
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
				<DropdownMenu
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, {} as any)
					}}
				>
					<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>
							<CopyIcon />
							Copy
						</DropdownMenuItem>
						<DropdownMenuItem>
							<ScissorsIcon />
							Cut
						</DropdownMenuItem>
						<DropdownMenuItem>
							<ClipboardTextIcon />
							Paste
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
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
					"Controlled dropdown menu where the open state is managed externally.",
			},
		},
	},
}
