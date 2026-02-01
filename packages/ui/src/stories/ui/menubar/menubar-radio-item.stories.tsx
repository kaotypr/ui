import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarGroup,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarLabel,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarRadioItem",
	component: MenubarRadioItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that works like a radio button in a given group. Must be used within MenubarRadioGroup, which must be within MenubarGroup.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
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
		value: {
			description:
				"Value of the radio item. This is the value that will be set in the Menu.RadioGroup when the item is selected.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onClick: {
			description: "The click handler for the menu item.",
			table: {
				type: { summary: "MouseEventHandler<HTMLDivElement>" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onClick",
		},
		closeOnClick: {
			description: "Whether to close the menu when the item is clicked.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
} satisfies Meta<typeof MenubarRadioItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		value: "default",
	},
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [value, setValue] = React.useState<string>("center")

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarGroup>
							<MenubarLabel>Alignment</MenubarLabel>
							<MenubarRadioGroup value={value} onValueChange={setValue}>
								<MenubarRadioItem {...args} value="left" onClick={() => args.onClick?.({} as any)}>
									Left
								</MenubarRadioItem>
								<MenubarRadioItem value="center">Center</MenubarRadioItem>
								<MenubarRadioItem value="right">Right</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarGroup>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default radio items within a radio group.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	args: {
		value: "default",
	},
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarGroup>
							<MenubarLabel>View</MenubarLabel>
							<MenubarRadioGroup defaultValue="grid">
								<MenubarRadioItem value="list">List</MenubarRadioItem>
								<MenubarRadioItem value="grid">Grid</MenubarRadioItem>
								<MenubarRadioItem value="table">Table</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarGroup>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Uncontrolled radio group using defaultValue prop.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		value: "center",
		disabled: true,
	},
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [value, setValue] = React.useState<string>("center")

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarGroup>
							<MenubarLabel>Alignment</MenubarLabel>
							<MenubarRadioGroup value={value} onValueChange={setValue}>
								<MenubarRadioItem value="left">Left</MenubarRadioItem>
								<MenubarRadioItem value="center">Center</MenubarRadioItem>
								<MenubarRadioItem value="right" disabled>
									Right (disabled)
								</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarGroup>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio items with one item disabled.",
			},
		},
	},
}
