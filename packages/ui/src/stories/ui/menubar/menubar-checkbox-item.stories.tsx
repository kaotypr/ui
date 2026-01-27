import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarCheckboxItem,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarCheckboxItem",
	component: MenubarCheckboxItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that toggles a setting on or off. Must be used within MenubarContent.

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
		defaultChecked: {
			description:
				"Whether the checkbox item is initially ticked. To render a controlled checkbox item, use the checked prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		checked: {
			description:
				"Whether the checkbox item is currently ticked. To render an uncontrolled checkbox item, use the defaultChecked prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onCheckedChange: {
			description:
				"Event handler called when the checkbox item is ticked or unticked.",
			table: {
				type: {
					summary:
						"(checked: boolean, eventDetails: Menu.CheckboxItem.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onCheckedChange",
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
			description:
				"Whether the component should ignore user interaction.",
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
} satisfies Meta<typeof MenubarCheckboxItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [checked, setChecked] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem
							{...args}
							checked={checked}
							onCheckedChange={(newChecked) => {
								setChecked(newChecked)
								args.onCheckedChange?.(newChecked, {} as any)
							}}
							onClick={() => args.onClick?.({} as any)}
						>
							Show line numbers
						</MenubarCheckboxItem>
						<MenubarCheckboxItem checked={true}>
							Word wrap
						</MenubarCheckboxItem>
						<MenubarCheckboxItem checked={false}>
							Minimap
						</MenubarCheckboxItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default checkbox items with checked and unchecked states.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem defaultChecked={false}>
							Show line numbers
						</MenubarCheckboxItem>
						<MenubarCheckboxItem defaultChecked={true}>
							Word wrap
						</MenubarCheckboxItem>
						<MenubarCheckboxItem defaultChecked={false}>
							Minimap
						</MenubarCheckboxItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Uncontrolled checkbox items using defaultChecked prop.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [checked, setChecked] = React.useState<boolean>(true)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem checked={checked} onCheckedChange={setChecked}>
							Enabled option
						</MenubarCheckboxItem>
						<MenubarCheckboxItem checked={false} disabled>
							Disabled option
						</MenubarCheckboxItem>
						<MenubarCheckboxItem checked={true} disabled>
							Disabled checked option
						</MenubarCheckboxItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Checkbox items with disabled state.",
			},
		},
	},
}
