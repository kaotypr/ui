import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuSeparator",
	component: ContextMenuSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A separator element accessible to screen readers. Must be used within ContextMenuContent.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		orientation: {
			description: "The orientation of the separator.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
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
} satisfies Meta<typeof ContextMenuSeparator>

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
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuItem>Paste</ContextMenuItem>
					<ContextMenuSeparator {...args} />
					<ContextMenuItem>Delete</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default separator between menu items.",
			},
		},
	},
}

export const MultipleSeparators: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Paste</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Delete</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple separators to organize menu items into distinct groups.",
			},
		},
	},
}
