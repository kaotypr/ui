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
	title: "UI/Dialog/DialogContent",
	component: DialogContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the dialog contents. Must be used within a Dialog component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Props
		showCloseButton: {
			description:
				"Whether to show the close button in the top-right corner.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		// Base UI Props
		initialFocus: {
			description:
				"Determines the element to focus when the dialog is opened. Can be false (don't move focus), true (use default behavior), a RefObject, or a function.",
			table: {
				type: {
					summary:
						'boolean | RefObject<HTMLElement> | ((openType: InteractionType) => boolean | void | HTMLElement | null)',
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		finalFocus: {
			description:
				"Determines the element to focus when the dialog is closed. Can be false (don't move focus), true (use default behavior), a RefObject, or a function.",
			table: {
				type: {
					summary:
						'boolean | RefObject<HTMLElement> | ((closeType: InteractionType) => boolean | void | HTMLElement | null)',
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
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
} satisfies Meta<typeof DialogContent>

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
				<DialogContent {...args}>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This is the default dialog content with header, description, and
							footer.
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
				story: "Default dialog content container with all standard elements.",
			},
		},
	},
}

export const WithoutCloseButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent showCloseButton={false}>
					<DialogHeader>
						<DialogTitle>Dialog without close button</DialogTitle>
						<DialogDescription>
							This dialog content doesn't have a close button in the top-right
							corner.
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
				story:
					"Dialog content without the default close button in the top-right corner.",
			},
		},
	},
}

export const CustomWidth: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button>Open Wide Dialog</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-2xl">
					<DialogHeader>
						<DialogTitle>Wide Dialog</DialogTitle>
						<DialogDescription>
							This dialog has a custom maximum width using className.
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
				story: "Dialog content with custom width using className.",
			},
		},
	},
}
