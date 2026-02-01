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
	title: "UI/Menubar/MenubarSubTrigger",
	component: MenubarSubTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that opens a submenu. Must be used within MenubarSub.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Props
		inset: {
			description: "When true, adds left padding to align with items that have icons.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		// Base UI Props
		label: {
			description:
				"Overrides the text label to use when the item is matched during keyboard text navigation.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
		openOnHover: {
			description: "Whether the menu should also open when the trigger is hovered.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		delay: {
			description:
				"How long to wait before the menu may be opened on hover. Specified in milliseconds. Requires the openOnHover prop.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description:
				"How long to wait before closing the menu that was opened on hover. Specified in milliseconds. Requires the openOnHover prop.",
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
} satisfies Meta<typeof MenubarSubTrigger>

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
							<MenubarSubTrigger {...args}>
								Export
								<CaretRightIcon />
							</MenubarSubTrigger>
							<MenubarSubContent>
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
				story: "Default submenu trigger that opens a nested menu.",
			},
		},
	},
}

export const Disabled: Story = {
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
							<MenubarSubTrigger disabled>
								Export (disabled)
								<CaretRightIcon />
							</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>PDF</MenubarItem>
								<MenubarItem>PNG</MenubarItem>
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
				story: "Submenu trigger with disabled state.",
			},
		},
	},
}
