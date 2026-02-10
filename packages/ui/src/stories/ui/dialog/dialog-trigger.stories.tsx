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
	title: "UI/Dialog/DialogTrigger",
	component: DialogTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that opens the dialog. Must be used within a Dialog component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		handle: {
			description:
				"A handle to associate the trigger with a dialog. Can be created with the Dialog.createHandle() method.",
			table: {
				type: { summary: "Dialog.Handle" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		payload: {
			description: "A payload to pass to the dialog when it is opened.",
			table: {
				type: { summary: "Payload" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		id: {
			description:
				"ID of the trigger. In addition to being forwarded to the rendered element, it is also used to specify the active trigger for the dialogs in controlled mode.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
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
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
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
} satisfies Meta<typeof DialogTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger {...args}>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>
							This is a dialog opened by clicking the trigger button.
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
				story: "Default trigger button that opens the dialog.",
			},
		},
	},
}

export const WithCustomButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button variant="destructive" size="lg">
						Delete Account
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirm Deletion</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete your account? This action cannot be undone.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button variant="destructive" onClick={() => setOpen(false)}>
							Delete
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger using a custom button variant and size via the prop.",
			},
		},
	},
}

export const MultipleTriggers: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="flex gap-2">
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger>
						<Button variant="outline">Trigger 1</Button>
					</DialogTrigger>
					<DialogTrigger>
						<Button variant="outline">Trigger 2</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
							<DialogDescription>This dialog can be opened by multiple triggers.</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button variant="outline" onClick={() => setOpen(false)}>
								Close
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple trigger buttons that can open the same dialog.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger
					render={<span className="cursor-pointer text-blue-600 underline hover:text-blue-800" />}
					nativeButton={false}
				>
					Click to open settings
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Settings</DialogTitle>
						<DialogDescription>
							The trigger is rendered as a span link instead of a button.
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
					"Use the `render` prop with a ReactElement to replace the default button element. Set `nativeButton={false}` when the rendered element is not a button.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger
					render={(props, state) => (
						<button
							{...props}
							className={`rounded px-4 py-2 font-medium transition-colors ${
								state.open ? "bg-gray-700 text-white" : "bg-gray-600 text-white hover:bg-gray-700"
							}`}
						>
							{state.open ? "Dialog Open" : "Open Dialog"}
						</button>
					)}
				/>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>State-Aware Trigger</DialogTitle>
						<DialogDescription>
							The trigger text and style change based on the dialog's open state.
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
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean) indicating if the dialog is currently open.",
			},
		},
	},
}
