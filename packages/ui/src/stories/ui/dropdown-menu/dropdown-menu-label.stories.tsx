import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuLabel",
	component: DropdownMenuLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible label that is automatically associated with its parent group. Must be used within DropdownMenuGroup.

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
} satisfies Meta<typeof DropdownMenuLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel {...args}>Edit</DropdownMenuLabel>
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
				story: "Default label for a group of menu items.",
			},
		},
	},
}

export const WithInset: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel inset>Edit</DropdownMenuLabel>
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
				story: "Label with inset prop to align with items that have icons.",
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
				story: "Multiple groups with labels for better organization.",
			},
		},
	},
}
