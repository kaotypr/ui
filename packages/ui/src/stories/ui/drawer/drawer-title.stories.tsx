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
	title: "UI/Drawer/DrawerTitle",
	component: DrawerTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An optional accessible title to be announced when the drawer is opened. Must be used within a DrawerHeader component.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {
		// Vaul Props
		asChild: {
			description: "When true, merges props with the child element instead of rendering a heading.",
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
} satisfies Meta<typeof DrawerTitle>

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
					<DrawerHeader>
						<DrawerTitle {...args}>Drawer Title</DrawerTitle>
						<DrawerDescription>Drawer description goes here.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
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
				story: "Default drawer title displayed in the header.",
			},
		},
	},
}

export const LongTitle: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>
							This is a very long title that demonstrates how the drawer title handles longer text
							content
						</DrawerTitle>
						<DrawerDescription>Long titles will wrap appropriately.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
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
				story: "Drawer title with long text that wraps appropriately.",
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
					<DrawerHeader>
						<DrawerTitle className="text-2xl font-bold">Custom Styled Title</DrawerTitle>
						<DrawerDescription>The title can be customized with className.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
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
				story: "Drawer title with custom styling applied via className.",
			},
		},
	},
}
