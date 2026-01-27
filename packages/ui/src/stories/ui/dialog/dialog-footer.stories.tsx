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
	title: "UI/Dialog/DialogFooter",
	component: DialogFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for action buttons at the bottom of the dialog. Must be used within a DialogContent component.

This is a custom component added by @kaotypr/ui.`,
			},
		},
	},
	argTypes: {
		// Props
		showCloseButton: {
			description:
				"Whether to show a close button in the footer.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
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
} satisfies Meta<typeof DialogFooter>

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
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This dialog has a footer with action buttons.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter {...args}>
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
					"Default dialog footer with action buttons.",
			},
		},
	},
}

export const WithCloseButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This dialog footer includes a close button.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter showCloseButton>
						<Button variant="outline">Cancel</Button>
						<Button>Confirm</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Dialog footer with a close button enabled via showCloseButton prop.",
			},
		},
	},
}

export const SingleButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Information</DialogTitle>
						<DialogDescription>
							This dialog footer has only a single button.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button onClick={() => setOpen(false)}>Got it</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Dialog footer with a single action button.",
			},
		},
	},
}
