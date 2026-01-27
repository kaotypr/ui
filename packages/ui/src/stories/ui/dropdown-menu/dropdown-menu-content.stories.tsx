import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuContent",
	component: DropdownMenuContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the menu items. Must be used within a DropdownMenu component.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
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
				defaultValue: { summary: "0" },
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
				defaultValue: { summary: '"bottom"' },
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
				defaultValue: { summary: "4" },
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
} satisfies Meta<typeof DropdownMenuContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent {...args}>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuItem>Paste</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default content container with menu items.",
			},
		},
	},
}

export const WithCustomAlignment: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent align="end" side="top" sideOffset={10}>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuItem>Paste</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Content with custom alignment and positioning (aligned to end, positioned on top).",
			},
		},
	},
}
