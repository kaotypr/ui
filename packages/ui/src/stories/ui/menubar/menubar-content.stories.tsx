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
	title: "UI/Menubar/MenubarContent",
	component: MenubarContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The container for menu items. Must be used within a MenubarMenu component.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Props
		align: {
			description:
				"How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"start"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description:
				"Additional offset along the alignment axis in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "-4" },
				category: "Props",
			},
			control: { type: "number" },
		},
		sideOffset: {
			description:
				"Distance between the anchor and the popup in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "8" },
				category: "Props",
			},
			control: { type: "number" },
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
} satisfies Meta<typeof MenubarContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent {...args}>
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
				story: "Default menubar content container with menu items.",
			},
		},
	},
}

export const CustomAlignment: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<div>
					<Menubar>
						<MenubarMenu open={open} onOpenChange={setOpen}>
							<MenubarTrigger>Start Aligned</MenubarTrigger>
							<MenubarContent align="start">
								<MenubarItem>Item 1</MenubarItem>
								<MenubarItem>Item 2</MenubarItem>
								<MenubarItem>Item 3</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
				<div>
					<Menubar>
						<MenubarMenu open={open} onOpenChange={setOpen}>
							<MenubarTrigger>End Aligned</MenubarTrigger>
							<MenubarContent align="end">
								<MenubarItem>Item 1</MenubarItem>
								<MenubarItem>Item 2</MenubarItem>
								<MenubarItem>Item 3</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Menubar content with different alignment options.",
			},
		},
	},
}

export const CustomOffset: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent sideOffset={16} alignOffset={8}>
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
				story:
					"Menubar content with custom side and alignment offsets.",
			},
		},
	},
}
