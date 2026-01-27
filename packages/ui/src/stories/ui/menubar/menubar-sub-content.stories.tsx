import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
} from "~/components/ui/menubar"
import { CaretRightIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Menubar/MenubarSubContent",
	component: MenubarSubContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The container for submenu items. Must be used within MenubarSub.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props (inherited from DropdownMenuContent)
		align: {
			description:
				"How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"start"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description:
				"Additional offset along the alignment axis in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "-3" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		side: {
			description:
				"Which side of the anchor element to align the popup against. May automatically change to avoid collisions.",
			table: {
				type: {
					summary:
						'"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"',
				},
				defaultValue: { summary: '"right"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["top", "bottom", "left", "right", "inline-start", "inline-end"],
		},
		sideOffset: {
			description:
				"Distance between the anchor and the popup in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
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
} satisfies Meta<typeof MenubarSubContent>

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
						<MenubarSub>
							<MenubarSubTrigger>
								Export
								<CaretRightIcon />
							</MenubarSubTrigger>
							<MenubarSubContent {...args}>
								<MenubarItem>PDF</MenubarItem>
								<MenubarItem>PNG</MenubarItem>
								<MenubarItem>SVG</MenubarItem>
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
				story: "Default submenu content container with menu items.",
			},
		},
	},
}

export const WithCustomPositioning: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Cut</MenubarItem>
						<MenubarSub>
							<MenubarSubTrigger>
								Export
								<CaretRightIcon />
							</MenubarSubTrigger>
							<MenubarSubContent side="left" align="end" sideOffset={5}>
								<MenubarItem>PDF</MenubarItem>
								<MenubarItem>PNG</MenubarItem>
								<MenubarItem>SVG</MenubarItem>
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
				story:
					"Submenu content with custom positioning (left side, end alignment).",
			},
		},
	},
}
