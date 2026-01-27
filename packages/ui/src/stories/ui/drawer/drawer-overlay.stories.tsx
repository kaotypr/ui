import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerOverlay,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
} from "~/components/ui/drawer"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Drawer/DrawerOverlay",
	component: DrawerOverlay,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A layer that covers the inert portion of the view when the drawer is open. Typically used automatically by DrawerContent, but can be used manually if needed.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {
		// Vaul Props
		asChild: {
			description:
				"When true, merges props with the child element instead of rendering a div.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Vaul Props",
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
} satisfies Meta<typeof DrawerOverlay>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerOverlay {...args} />
					<DrawerHeader>
						<DrawerTitle>Drawer with Custom Overlay</DrawerTitle>
						<DrawerDescription>
							The overlay is typically included automatically by DrawerContent.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">
							Drawer content goes here.
						</p>
					</div>
					<div className="p-4">
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default overlay that appears behind the drawer content. Note: DrawerContent automatically includes an overlay, so manual overlay usage is rarely needed.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerOverlay className="bg-black/30" />
					<DrawerHeader>
						<DrawerTitle>Custom Overlay Styling</DrawerTitle>
						<DrawerDescription>
							The overlay can be customized with className for different opacity or colors.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">
							Drawer content goes here.
						</p>
					</div>
					<div className="p-4">
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Overlay with custom styling applied via className. Note: DrawerContent automatically includes an overlay, so manual overlay usage is rarely needed.",
			},
		},
	},
}
