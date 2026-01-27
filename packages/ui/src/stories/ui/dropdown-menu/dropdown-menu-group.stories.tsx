import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuGroup",
	component: DropdownMenuGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related menu items with the corresponding label. Must be used within DropdownMenuContent.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
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
} satisfies Meta<typeof DropdownMenuGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup {...args}>
						<DropdownMenuLabel>Edit</DropdownMenuLabel>
						<DropdownMenuItem>Copy</DropdownMenuItem>
						<DropdownMenuItem>Cut</DropdownMenuItem>
						<DropdownMenuItem>Paste</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default group with label and menu items.",
			},
		},
	},
}

export const MultipleGroups: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>Edit</DropdownMenuLabel>
						<DropdownMenuItem>Copy</DropdownMenuItem>
						<DropdownMenuItem>Cut</DropdownMenuItem>
						<DropdownMenuItem>Paste</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuLabel>View</DropdownMenuLabel>
						<DropdownMenuItem>Zoom In</DropdownMenuItem>
						<DropdownMenuItem>Zoom Out</DropdownMenuItem>
						<DropdownMenuItem>Reset Zoom</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple groups separated by separators for better organization.",
			},
		},
	},
}
