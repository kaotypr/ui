import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	MenubarLabel,
	MenubarGroup,
	MenubarShortcut,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
} from "~/components/ui/menubar"
import {
	CopyIcon,
	ScissorsIcon,
	ClipboardTextIcon,
	TrashIcon,
	FileIcon,
	FolderOpenIcon,
	FloppyDiskIcon,
	PrinterIcon,
	CaretRightIcon,
} from "@phosphor-icons/react"

const meta = {
	title: "UI/Menubar",
	component: Menubar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu bar providing commands and options for your application.

This component is built on top of [Base UI Menubar](https://base-ui.com/react/components/menubar).

### Component Parts
- [MenubarMenu](?path=/story/ui-menubar-menubarmenu--default): Groups all parts of a menu within the menubar.
- [MenubarTrigger](?path=/story/ui-menubar-menubartrigger--default): The button that opens the menu.
- [MenubarContent](?path=/story/ui-menubar-menubarcontent--default): The container for menu items.
- [MenubarItem](?path=/story/ui-menubar-menubaritem--default): An individual interactive item in the menu.
- [MenubarCheckboxItem](?path=/story/ui-menubar-menubarcheckboxitem--default): A menu item that toggles a setting on or off.
- [MenubarRadioItem](?path=/story/ui-menubar-menubarradioitem--default): A menu item that works like a radio button in a given group.
- [MenubarLabel](?path=/story/ui-menubar-menubarlabel--default): An accessible label for a group of menu items.
- [MenubarSeparator](?path=/story/ui-menubar-menubarseparator--default): A visual separator between menu groups.
- [MenubarShortcut](?path=/story/ui-menubar-menubarshortcut--default): Displays keyboard shortcuts for menu items.
- [MenubarGroup](?path=/story/ui-menubar-menubargroup--default): Groups related menu items together.
- [MenubarSub](?path=/story/ui-menubar-menubarsub--default): Groups all parts of a submenu.
- [MenubarSubTrigger](?path=/story/ui-menubar-menubarsubtrigger--default): A menu item that opens a submenu.
- [MenubarSubContent](?path=/story/ui-menubar-menubarsubcontent--default): The container for submenu items.
- [MenubarPortal](?path=/story/ui-menubar-menubarportal--default): A portal element that moves the popup to a different part of the DOM.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
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
		modal: {
			description:
				"Whether the menubar is modal. When true, user interaction is limited to the menubar: document page scroll is locked and pointer interactions on outside elements are disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description: "Whether the whole menubar is disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		orientation: {
			description: "The orientation of the menubar.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		// Styling
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary: "string | ((state: Menubar.State) => string | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"CSS properties applied to the element, or a function that returns styles based on the component's state.",
			table: {
				type: {
					summary:
						"CSSProperties | ((state: Menubar.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Menubar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Menubar {...args}>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<FileIcon />
						New
						<MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						<FolderOpenIcon />
						Open
						<MenubarShortcut>⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						<FloppyDiskIcon />
						Save
						<MenubarShortcut>⌘S</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<PrinterIcon />
						Print
						<MenubarShortcut>⌘P</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
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
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default menubar with File and Edit menus containing common actions and keyboard shortcuts.",
			},
		},
	},
}

export const WithSubmenus: Story = {
	render: () => (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<FileIcon />
						New
						<MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						<FolderOpenIcon />
						Open
						<MenubarShortcut>⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>
							Export
							<CaretRightIcon />
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>PDF</MenubarItem>
							<MenubarItem>PNG</MenubarItem>
							<MenubarItem>SVG</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						<PrinterIcon />
						Print
						<MenubarShortcut>⌘P</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
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
	),
	parameters: {
		docs: {
			description: {
				story: "Menubar with submenus demonstrating nested menu structures.",
			},
		},
	},
}

export const WithGroups: Story = {
	render: () => (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarLabel>Sort</MenubarLabel>
						<MenubarItem>Date</MenubarItem>
						<MenubarItem>Name</MenubarItem>
						<MenubarItem>Type</MenubarItem>
					</MenubarGroup>
					<MenubarSeparator />
					<MenubarGroup>
						<MenubarLabel>Display</MenubarLabel>
						<MenubarItem>Grid</MenubarItem>
						<MenubarItem>List</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Menubar menu with grouped items and labels for better organization.",
			},
		},
	},
}

export const WithDestructiveItem: Story = {
	render: () => (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<FileIcon />
						New
						<MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						<FolderOpenIcon />
						Open
						<MenubarShortcut>⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem variant="destructive">
						<TrashIcon />
						Delete
						<MenubarShortcut>⌘⌫</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
	parameters: {
		docs: {
			description: {
				story: "Menubar with a destructive menu item for dangerous actions.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<Menubar disabled>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<FileIcon />
						New
					</MenubarItem>
					<MenubarItem>
						<FolderOpenIcon />
						Open
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<CopyIcon />
						Copy
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled menubar where all interactions are disabled.",
			},
		},
	},
}

export const VerticalOrientation: Story = {
	render: () => (
		<Menubar orientation="vertical" className="flex-col w-48">
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<FileIcon />
						New
					</MenubarItem>
					<MenubarItem>
						<FolderOpenIcon />
						Open
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
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
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
	parameters: {
		docs: {
			description: {
				story: "Menubar with vertical orientation.",
			},
		},
	},
}
