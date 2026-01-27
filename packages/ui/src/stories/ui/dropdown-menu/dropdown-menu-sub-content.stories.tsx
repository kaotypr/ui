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
	title: "UI/DropdownMenu/DropdownMenuSubContent",
	component: DropdownMenuSubContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The container for submenu items. Must be used within DropdownMenuSub.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props (inherited from DropdownMenuContent)
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
				defaultValue: { summary: "-3" },
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
} satisfies Meta<typeof DropdownMenuSubContent>

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
						<DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
						<DropdownMenuSubContent {...args}>
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
				story: "Default submenu content container with menu items.",
			},
		},
	},
}

export const WithCustomPositioning: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
						<DropdownMenuSubContent side="left" align="end" sideOffset={5}>
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
				story:
					"Submenu content with custom positioning (left side, end alignment).",
			},
		},
	},
}
