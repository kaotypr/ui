import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSub,
	ContextMenuSubTrigger,
	ContextMenuSubContent,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuSubContent",
	component: ContextMenuSubContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The container for submenu items. Must be used within ContextMenuSub.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props (inherited from ContextMenuContent)
		align: {
			description:
				"How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"start"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description:
				"Additional offset along the alignment axis in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "4" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		side: {
			description:
				"Which side of the anchor element to align the popup against. May automatically change to avoid collisions.",
			table: {
				type: {
					summary:
						'"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"',
				},
				defaultValue: { summary: '"right"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["top", "bottom", "left", "right", "inline-start", "inline-end"],
		},
		sideOffset: {
			description:
				"Distance between the anchor and the popup in pixels.",
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
} satisfies Meta<typeof ContextMenuSubContent>

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
					<ContextMenuSub>
						<ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
						<ContextMenuSubContent {...args}>
							<ContextMenuItem>Option 1</ContextMenuItem>
							<ContextMenuItem>Option 2</ContextMenuItem>
							<ContextMenuItem>Option 3</ContextMenuItem>
						</ContextMenuSubContent>
					</ContextMenuSub>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default submenu content container with menu items.",
			},
		},
	},
}

export const WithCustomPositioning: Story = {
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
					<ContextMenuSub>
						<ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
						<ContextMenuSubContent side="left" align="end" sideOffset={5}>
							<ContextMenuItem>Option 1</ContextMenuItem>
							<ContextMenuItem>Option 2</ContextMenuItem>
							<ContextMenuItem>Option 3</ContextMenuItem>
						</ContextMenuSubContent>
					</ContextMenuSub>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Submenu content with custom positioning (left side, end alignment).",
			},
		},
	},
}
