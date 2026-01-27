import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuLabel,
	ContextMenuItem,
	ContextMenuSeparator,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuGroup",
	component: ContextMenuGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related menu items with the corresponding label. Must be used within ContextMenuContent.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
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
} satisfies Meta<typeof ContextMenuGroup>

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
					<ContextMenuGroup {...args}>
						<ContextMenuLabel>Edit</ContextMenuLabel>
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
				story: "Default group with label and menu items.",
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
					<ContextMenuSeparator />
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
				story: "Multiple groups separated by separators for better organization.",
			},
		},
	},
}
