import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuCheckboxItem,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuCheckboxItem",
	component: DropdownMenuCheckboxItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that toggles a setting on or off. Must be used within DropdownMenuContent.

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
			description: "Event handler called when the checkbox item is ticked or unticked.",
			table: {
				type: {
					summary: "(checked: boolean, eventDetails: Menu.CheckboxItem.ChangeEventDetails) => void",
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
} satisfies Meta<typeof DropdownMenuCheckboxItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [checked, setChecked] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuCheckboxItem
						{...args}
						checked={checked}
						onCheckedChange={(newChecked) => {
							setChecked(newChecked)
							args.onCheckedChange?.(newChecked, {} as any)
						}}
						onClick={() => args.onClick?.({} as any)}
					>
						Show line numbers
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem checked={true}>Word wrap</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem checked={false}>Minimap</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuCheckboxItem defaultChecked={false}>
						Show line numbers
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem defaultChecked={true}>Word wrap</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem defaultChecked={false}>Minimap</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
						Enabled option
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem checked={false} disabled>
						Disabled option
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem checked={true} disabled>
						Disabled checked option
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
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
