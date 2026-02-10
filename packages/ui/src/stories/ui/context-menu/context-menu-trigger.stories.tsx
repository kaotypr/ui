import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
} from "~/components/ui/context-menu"

const meta = {
	title: "UI/ContextMenu/ContextMenuTrigger",
	component: ContextMenuTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An area that opens the menu on right click or long press. Must be used within a ContextMenu component.

This component is built on top of [Base UI Context Menu](https://base-ui.com/react/components/context-menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
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
} satisfies Meta<typeof ContextMenuTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger
					{...args}
					className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
				>
					Right click here
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuItem>Paste</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default trigger area that opens the context menu on right click.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-900 text-base font-semibold">
					Custom styled trigger area
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>Action 1</ContextMenuItem>
					<ContextMenuItem>Action 2</ContextMenuItem>
					<ContextMenuItem>Action 3</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger with custom styling applied via className.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger
					render={<section />}
					className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
				>
					Right click this section element
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuItem>Paste</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a ReactElement to replace the default span element with a different HTML tag.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<ContextMenu open={open} onOpenChange={setOpen}>
				<ContextMenuTrigger
					render={(props, state) => (
						<div
							{...props}
							className={`flex h-[150px] w-[300px] items-center justify-center rounded-md border text-sm transition-colors ${
								state.open
									? "border-primary bg-primary/10 text-primary"
									: "border-dashed hover:bg-accent/50"
							}`}
						>
							{state.open ? "Menu is open" : "Right click here"}
						</div>
					)}
				/>
				<ContextMenuContent>
					<ContextMenuItem>Copy</ContextMenuItem>
					<ContextMenuItem>Cut</ContextMenuItem>
					<ContextMenuItem>Paste</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean).",
			},
		},
	},
}
