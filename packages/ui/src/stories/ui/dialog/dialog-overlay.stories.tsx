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
	DialogOverlay,
	DialogPortal,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Dialog/DialogOverlay",
	component: DialogOverlay,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An overlay displayed beneath the popup. Must be used within a DialogPortal component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		forceRender: {
			description: "Whether the backdrop is forced to render even when nested.",
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
} satisfies Meta<typeof DialogOverlay>

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
				<DialogPortal>
					<DialogOverlay {...args} />
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>
								This dialog uses a custom overlay. The overlay is displayed beneath the popup.
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
					"Default overlay displayed beneath the dialog popup. Note: DialogContent already includes an overlay by default, so this example shows explicit overlay usage.",
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
				<DialogPortal>
					<DialogOverlay className="bg-black/30 backdrop-blur-md" />
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>
								This dialog has a custom overlay with increased opacity and backdrop blur.
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
				story: "Overlay with custom styling applied via className.",
			},
		},
	},
}

export const ForceRender: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [nestedOpen, setNestedOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Parent Dialog</Button>
				</DialogTrigger>
				<DialogPortal>
					<DialogOverlay forceRender />
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Parent Dialog</DialogTitle>
							<DialogDescription>
								This dialog has forceRender enabled on the overlay, so it will render even when
								nested dialogs are open.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Dialog open={nestedOpen} onOpenChange={setNestedOpen}>
								<DialogTrigger>
									<Button variant="outline">Open Nested Dialog</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Nested Dialog</DialogTitle>
										<DialogDescription>
											This is a nested dialog. The parent overlay is still rendered due to
											forceRender.
										</DialogDescription>
									</DialogHeader>
									<DialogFooter>
										<Button variant="outline" onClick={() => setNestedOpen(false)}>
											Close
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
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
				story: "Overlay with forceRender enabled, so it renders even when nested dialogs are open.",
			},
		},
	},
}
