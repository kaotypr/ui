import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarLabel,
	MenubarGroup,
	MenubarItem,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarLabel",
	component: MenubarLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible label that is automatically associated with its parent group. Must be used within MenubarGroup.

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
} satisfies Meta<typeof MenubarLabel>

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
						<MenubarGroup>
							<MenubarLabel {...args}>Edit</MenubarLabel>
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
				story: "Default label for a group of menu items.",
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
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarGroup>
							<MenubarLabel inset>Edit</MenubarLabel>
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
				story: "Label with inset prop to align with items that have icons.",
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
				story: "Multiple groups with labels for better organization.",
			},
		},
	},
}
