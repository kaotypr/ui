import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
} from "~/components/ui/drawer"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Drawer/DrawerTrigger",
	component: DrawerTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The button that opens the drawer. Must be used within a Drawer component.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {
		// Vaul Props
		asChild: {
			description:
				"When true, merges props with the child element instead of rendering a button.",
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
} satisfies Meta<typeof DrawerTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger {...args} asChild>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Drawer Title</DrawerTitle>
						<DrawerDescription>
							Drawer description goes here.
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
					"Default trigger button that opens the drawer when clicked.",
			},
		},
	},
}

export const WithAsChild: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button variant="outline" size="lg">
						Click to Open Drawer
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Custom Trigger</DrawerTitle>
						<DrawerDescription>
							The trigger uses asChild to merge props with a custom button element.
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
					"Trigger using asChild prop to merge props with a custom button element.",
			},
		},
	},
}

export const CustomElement: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<div className="cursor-pointer rounded-md border border-dashed p-8 text-center hover:bg-muted">
						<p className="text-sm font-medium">Click anywhere in this area</p>
						<p className="text-xs text-muted-foreground mt-1">
							Custom trigger element
						</p>
					</div>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Custom Element Trigger</DrawerTitle>
						<DrawerDescription>
							The trigger can be any element when using asChild.
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
					"Trigger can be any custom element when using the asChild prop.",
			},
		},
	},
}
