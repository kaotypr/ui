import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarMenu",
	component: MenubarMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups all parts of a menu within the menubar. Must be used within a Menubar component.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
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
			description: "Event handler called when the menu is opened or closed.",
			table: {
				type: {
					summary: "(open: boolean, eventDetails: Menu.Root.ChangeEventDetails) => void",
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
			description: "Event handler called after any animations complete when the menu is closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
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
} satisfies Meta<typeof MenubarMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, {} as any)
					}}
				>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>New</MenubarItem>
						<MenubarItem>Open</MenubarItem>
						<MenubarItem>Save</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default menubar menu with File menu containing basic items.",
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
				<Menubar>
					<MenubarMenu
						{...args}
						open={open}
						onOpenChange={(newOpen) => {
							setOpen(newOpen)
							args.onOpenChange?.(newOpen, {} as any)
						}}
					>
						<MenubarTrigger>File</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>New</MenubarItem>
							<MenubarItem>Open</MenubarItem>
							<MenubarItem>Save</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
			</div>
		)
	},
	args: {
		open: false,
	},
	parameters: {
		docs: {
			description: {
				story: "Controlled menubar menu where the open state is managed externally.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<Menubar>
			<MenubarMenu disabled>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>New</MenubarItem>
					<MenubarItem>Open</MenubarItem>
					<MenubarItem>Save</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled menubar menu that cannot be opened.",
			},
		},
	},
}
