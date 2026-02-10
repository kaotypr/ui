import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
} from "~/components/ui/drawer"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Drawer/DrawerContent",
	component: DrawerContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Contains content to be rendered in the open drawer. Must be used within a Drawer component.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {
		// Vaul Props
		asChild: {
			description: "When true, merges props with the child element instead of rendering a div.",
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
} satisfies Meta<typeof DrawerContent>

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
				<DrawerContent {...args}>
					<DrawerHeader>
						<DrawerTitle>Drawer Title</DrawerTitle>
						<DrawerDescription>Drawer description goes here.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">Drawer content goes here.</p>
					</div>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default drawer content with header, body, and footer sections.",
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
					<Button>Open Custom Styled Drawer</Button>
				</DrawerTrigger>
				<DrawerContent className="max-h-[60vh]">
					<DrawerHeader>
						<DrawerTitle>Custom Styled Content</DrawerTitle>
						<DrawerDescription>The content can be customized with className.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 space-y-4 overflow-y-auto">
						<div className="rounded-md border p-4">
							<p className="text-sm font-medium">Section 1</p>
							<p className="text-xs text-muted-foreground mt-1">Content in section 1</p>
						</div>
						<div className="rounded-md border p-4">
							<p className="text-sm font-medium">Section 2</p>
							<p className="text-xs text-muted-foreground mt-1">Content in section 2</p>
						</div>
						<div className="rounded-md border p-4">
							<p className="text-sm font-medium">Section 3</p>
							<p className="text-xs text-muted-foreground mt-1">Content in section 3</p>
						</div>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Drawer content with custom styling applied via className.",
			},
		},
	},
}

export const ScrollableContent: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button>Open Scrollable Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Long Content</DrawerTitle>
						<DrawerDescription>This drawer contains scrollable content.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 space-y-4 overflow-y-auto max-h-[50vh]">
						{Array.from({ length: 20 }).map((_, i) => (
							<div key={i} className="rounded-md border p-4">
								<p className="text-sm font-medium">Item {i + 1}</p>
								<p className="text-xs text-muted-foreground mt-1">
									This is item number {i + 1} in a long list of items.
								</p>
							</div>
						))}
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Drawer content with scrollable content area for long lists.",
			},
		},
	},
}
