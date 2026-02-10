import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuRadioItem",
	component: DropdownMenuRadioItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that works like a radio button in a given group. Must be used within DropdownMenuRadioGroup, which must be within DropdownMenuGroup.

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
} satisfies Meta<typeof DropdownMenuRadioItem>

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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>Alignment</DropdownMenuLabel>
						<DropdownMenuRadioGroup value={value} onValueChange={setValue}>
							<DropdownMenuRadioItem
								{...args}
								value="left"
								onClick={() => args.onClick?.({} as any)}
							>
								Left
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="center">Center</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>View</DropdownMenuLabel>
						<DropdownMenuRadioGroup defaultValue="grid">
							<DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="table">Table</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>Alignment</DropdownMenuLabel>
						<DropdownMenuRadioGroup value={value} onValueChange={setValue}>
							<DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="center">Center</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="right" disabled>
								Right (disabled)
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
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
