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
	DialogPortal,
	DialogOverlay,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Dialog/DialogPortal",
	component: DialogPortal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A portal element that moves the popup to a different part of the DOM. Must be used within a Dialog component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		container: {
			description:
				"A parent element to render the portal element into. By default, the portal element is appended to document.body.",
			table: {
				type: { summary: "HTMLElement | ShadowRoot | RefObject | null" },
				defaultValue: { summary: "document.body" },
				category: "Base UI Props",
			},
		},
		keepMounted: {
			description:
				"Whether to keep the portal mounted in the DOM while the popup is hidden.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
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
} satisfies Meta<typeof DialogPortal>

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
				<DialogPortal {...args}>
					<DialogOverlay />
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>
								This dialog uses an explicit portal. The portal moves the popup
								to a different part of the DOM (typically document.body).
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button variant="outline" onClick={() => setOpen(false)}>
								Close
							</Button>
						</DialogFooter>
					</DialogContent>
				</DialogPortal>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default portal that renders the dialog content in document.body. Note: DialogContent already includes a portal by default, so this example shows explicit portal usage.",
			},
		},
	},
}

export const KeepMounted: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogPortal keepMounted>
					<DialogOverlay />
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>
								This dialog portal has keepMounted enabled, so it stays mounted
								in the DOM even when closed. This can be useful for performance
								when the dialog content is expensive to render.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button variant="outline" onClick={() => setOpen(false)}>
								Close
							</Button>
						</DialogFooter>
					</DialogContent>
				</DialogPortal>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Portal with keepMounted enabled, so it stays mounted in the DOM even when the dialog is closed.",
			},
		},
	},
}

export const CustomContainer: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		const containerRef = React.useRef<HTMLDivElement>(null)

		return (
			<div className="space-y-4">
				<div
					ref={containerRef}
					className="border-2 border-dashed border-gray-300 p-4 rounded-lg"
				>
					<p className="text-sm text-muted-foreground">
						Portal container (dialog will render here)
					</p>
				</div>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger>
						<Button>Open Dialog</Button>
					</DialogTrigger>
					<DialogPortal container={containerRef.current}>
						<DialogOverlay />
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Dialog Title</DialogTitle>
								<DialogDescription>
									This dialog portal renders into a custom container instead of
									document.body.
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<Button variant="outline" onClick={() => setOpen(false)}>
									Close
								</Button>
							</DialogFooter>
						</DialogContent>
					</DialogPortal>
				</Dialog>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Portal that renders into a custom container element instead of document.body.",
			},
		},
	},
}
