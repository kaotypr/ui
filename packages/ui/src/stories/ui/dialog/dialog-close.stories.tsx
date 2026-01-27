import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Dialog/DialogClose",
	component: DialogClose,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that closes the dialog. Must be used within a DialogContent component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
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
} satisfies Meta<typeof DialogClose>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This dialog has a close button that can be used to close it.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose {...args} asChild>
							<Button variant="outline">Close</Button>
						</DialogClose>
						<Button onClick={() => setOpen(false)}>Confirm</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default close button in the dialog footer.",
			},
		},
	},
}

export const AsButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This dialog has a close button styled as a destructive button.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="destructive">Cancel</Button>
						</DialogClose>
						<Button onClick={() => setOpen(false)}>Confirm</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Close button with custom styling using the asChild prop to render as a Button component.",
			},
		},
	},
}

export const MultipleCloseButtons: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This dialog has multiple close buttons in different locations.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button>Save and Close</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Multiple close buttons in the footer, both using DialogClose component.",
			},
		},
	},
}
