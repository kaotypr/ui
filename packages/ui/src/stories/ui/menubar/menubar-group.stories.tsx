import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarGroup,
	MenubarLabel,
	MenubarItem,
	MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarGroup",
	component: MenubarGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related menu items with the corresponding label. Must be used within MenubarContent.

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
} satisfies Meta<typeof MenubarGroup>

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
						<MenubarGroup {...args}>
							<MenubarLabel>Edit</MenubarLabel>
							<MenubarItem>Copy</MenubarItem>
							<MenubarItem>Cut</MenubarItem>
							<MenubarItem>Paste</MenubarItem>
						</MenubarGroup>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default group with label and menu items.",
			},
		},
	},
}

export const MultipleGroups: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarGroup>
							<MenubarLabel>Edit</MenubarLabel>
							<MenubarItem>Copy</MenubarItem>
							<MenubarItem>Cut</MenubarItem>
							<MenubarItem>Paste</MenubarItem>
						</MenubarGroup>
						<MenubarSeparator />
						<MenubarGroup>
							<MenubarLabel>View</MenubarLabel>
							<MenubarItem>Zoom In</MenubarItem>
							<MenubarItem>Zoom Out</MenubarItem>
							<MenubarItem>Reset Zoom</MenubarItem>
						</MenubarGroup>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple groups separated by separators for better organization.",
			},
		},
	},
}
