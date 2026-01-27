import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarSub",
	component: MenubarSub,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups all parts of a submenu. Must be used within MenubarContent.

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
} satisfies Meta<typeof MenubarSub>

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
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Cut</MenubarItem>
						<MenubarSeparator />
						<MenubarSub {...args}>
							<MenubarSubTrigger>More Options</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Option 1</MenubarItem>
								<MenubarItem>Option 2</MenubarItem>
								<MenubarItem>Option 3</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
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
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Cut</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email</MenubarItem>
								<MenubarItem>Message</MenubarItem>
								<MenubarSub>
									<MenubarSubTrigger>More</MenubarSubTrigger>
									<MenubarSubContent>
										<MenubarItem>Copy Link</MenubarItem>
										<MenubarItem>QR Code</MenubarItem>
									</MenubarSubContent>
								</MenubarSub>
							</MenubarSubContent>
						</MenubarSub>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
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
