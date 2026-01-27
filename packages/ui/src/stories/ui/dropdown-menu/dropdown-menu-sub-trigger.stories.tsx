import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuSubTrigger",
	component: DropdownMenuSubTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A menu item that opens a submenu. Must be used within DropdownMenuSub.

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
			description:
				"Whether the component should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		openOnHover: {
			description:
				"Whether the menu should also open when the trigger is hovered.",
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
} satisfies Meta<typeof DropdownMenuSubTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger {...args}>More Options</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>Option 1</DropdownMenuItem>
							<DropdownMenuItem>Option 2</DropdownMenuItem>
							<DropdownMenuItem>Option 3</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>
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
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger disabled>
							More Options (disabled)
						</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>Option 1</DropdownMenuItem>
							<DropdownMenuItem>Option 2</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>
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
