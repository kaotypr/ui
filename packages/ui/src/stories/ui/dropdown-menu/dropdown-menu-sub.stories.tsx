import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuSub",
	component: DropdownMenuSub,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups all parts of a submenu. Must be used within DropdownMenuContent.

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
			description:
				"Event handler called when the menu is opened or closed.",
			table: {
				type: {
					summary:
						"(open: boolean, eventDetails: Menu.SubmenuRoot.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
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
} satisfies Meta<typeof DropdownMenuSub>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuSub {...args}>
						<DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>Option 1</DropdownMenuItem>
							<DropdownMenuItem>Option 2</DropdownMenuItem>
							<DropdownMenuItem>Option 3</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>Email</DropdownMenuItem>
							<DropdownMenuItem>Message</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									<DropdownMenuItem>Copy Link</DropdownMenuItem>
									<DropdownMenuItem>QR Code</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuSub>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>
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
