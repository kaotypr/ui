import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuLabel,
	ContextMenuGroup,
	ContextMenuItem,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuLabel",
	component: ContextMenuLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible label that is automatically associated with its parent group. Must be used within ContextMenuGroup.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
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
} satisfies Meta<typeof ContextMenuLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel {...args}>Edit</ContextMenuLabel>
						<ContextMenuItem>Copy</ContextMenuItem>
						<ContextMenuItem>Cut</ContextMenuItem>
						<ContextMenuItem>Paste</ContextMenuItem>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
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
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel inset>Edit</ContextMenuLabel>
						<ContextMenuItem>Copy</ContextMenuItem>
						<ContextMenuItem>Cut</ContextMenuItem>
						<ContextMenuItem>Paste</ContextMenuItem>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
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
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuGroup>
						<ContextMenuLabel>Edit</ContextMenuLabel>
						<ContextMenuItem>Copy</ContextMenuItem>
						<ContextMenuItem>Cut</ContextMenuItem>
						<ContextMenuItem>Paste</ContextMenuItem>
					</ContextMenuGroup>
					<ContextMenuGroup>
						<ContextMenuLabel>View</ContextMenuLabel>
						<ContextMenuItem>Zoom In</ContextMenuItem>
						<ContextMenuItem>Zoom Out</ContextMenuItem>
						<ContextMenuItem>Reset Zoom</ContextMenuItem>
					</ContextMenuGroup>
				</ContextMenuContent>
			</ContextMenu>
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
