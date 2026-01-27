import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarSeparator",
	component: MenubarSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A separator element accessible to screen readers. Must be used within MenubarContent.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		orientation: {
			description: "The orientation of the separator.",
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
			description: "Additional CSS class names to apply.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof MenubarSeparator>

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
						<MenubarItem>Paste</MenubarItem>
						<MenubarSeparator {...args} />
						<MenubarItem>Delete</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default separator between menu items.",
			},
		},
	},
}

export const MultipleSeparators: Story = {
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
						<MenubarItem>Paste</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Delete</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple separators to organize menu items into distinct groups.",
			},
		},
	},
}
