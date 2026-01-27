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
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Dialog/DialogHeader",
	component: DialogHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the dialog title and description. Must be used within a DialogContent component.

This is a custom component added by @kaotypr/ui.`,
			},
		},
	},
	argTypes: {
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
} satisfies Meta<typeof DialogHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader {...args}>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This is a description of what the dialog is about.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
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
					"Default dialog header containing a title and description.",
			},
		},
	},
}

export const TitleOnly: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Simple Title</DialogTitle>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Dialog header with only a title, no description.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader className="gap-4">
						<DialogTitle className="text-2xl">Custom Styled Header</DialogTitle>
						<DialogDescription className="text-base">
							This header has custom spacing and text sizes applied via className.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Dialog header with custom styling applied via className.",
			},
		},
	},
}
