import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuSub,
	ContextMenuSubTrigger,
	ContextMenuSubContent,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuSub",
	component: ContextMenuSub,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups all parts of a submenu. Must be used within ContextMenuContent.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
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
					summary: "(open: boolean, eventDetails: Menu.SubmenuRoot.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
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
	},
} satisfies Meta<typeof ContextMenuSub>

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
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuSub {...args}>
						<ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
						<ContextMenuSubContent>
							<ContextMenuItem>Option 1</ContextMenuItem>
							<ContextMenuItem>Option 2</ContextMenuItem>
							<ContextMenuItem>Option 3</ContextMenuItem>
						</ContextMenuSubContent>
					</ContextMenuSub>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default submenu with nested menu items.",
			},
		},
	},
}

export const NestedSubmenu: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuSub>
						<ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
						<ContextMenuSubContent>
							<ContextMenuItem>Email</ContextMenuItem>
							<ContextMenuItem>Message</ContextMenuItem>
							<ContextMenuSub>
								<ContextMenuSubTrigger>More</ContextMenuSubTrigger>
								<ContextMenuSubContent>
									<ContextMenuItem>Copy Link</ContextMenuItem>
									<ContextMenuItem>QR Code</ContextMenuItem>
								</ContextMenuSubContent>
							</ContextMenuSub>
						</ContextMenuSubContent>
					</ContextMenuSub>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Nested submenu with multiple levels.",
			},
		},
	},
}
