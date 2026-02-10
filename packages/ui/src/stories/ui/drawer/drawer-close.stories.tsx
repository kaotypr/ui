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
	title: "UI/Drawer/DrawerClose",
	component: DrawerClose,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The button that closes the drawer. Must be used within a Drawer component.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {
		// Vaul Props
		asChild: {
			description: "When true, merges props with the child element instead of rendering a button.",
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
} satisfies Meta<typeof DrawerClose>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Drawer Title</DrawerTitle>
						<DrawerDescription>Drawer description goes here.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
					</div>
					<div className="p-4">
						<DrawerClose {...args}>
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
				story: "Default close button that closes the drawer when clicked.",
			},
		},
	},
}

export const WithAsChild: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Custom Close Button</DrawerTitle>
						<DrawerDescription>
							The close button uses asChild to merge props with a custom button element.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
					</div>
					<div className="p-4">
						<DrawerClose>
							<Button variant="destructive">Delete & Close</Button>
						</DrawerClose>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Close button using asChild prop to merge props with a custom button element.",
			},
		},
	},
}

export const InFooter: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Drawer with Footer</DrawerTitle>
						<DrawerDescription>
							The close button is typically placed in the footer alongside other actions.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
					</div>
					<div className="flex gap-2 p-4">
						<Button>Submit</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Close button placed in the footer alongside other action buttons.",
			},
		},
	},
}
