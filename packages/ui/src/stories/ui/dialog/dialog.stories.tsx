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
	title: "UI/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A popup that opens on top of the entire page.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).

### Component Parts
- [DialogTrigger](?path=/story/ui-dialog-dialogtrigger--default): A button that opens the dialog.
- [DialogContent](?path=/story/ui-dialog-dialogcontent--default): A container for the dialog contents.
- [DialogHeader](?path=/story/ui-dialog-dialogheader--default): A container for the dialog title and description.
- [DialogFooter](?path=/story/ui-dialog-dialogfooter--default): A container for action buttons at the bottom of the dialog.
- [DialogTitle](?path=/story/ui-dialog-dialogtitle--default): A heading that labels the dialog.
- [DialogDescription](?path=/story/ui-dialog-dialogdescription--default): A paragraph with additional information about the dialog.
- [DialogClose](?path=/story/ui-dialog-dialogclose--default): A button that closes the dialog.
- [DialogOverlay](?path=/story/ui-dialog-dialogoverlay--default): An overlay displayed beneath the popup.
- [DialogPortal](?path=/story/ui-dialog-dialogportal--default): A portal element that moves the popup to a different part of the DOM.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultOpen: {
			description:
				"Whether the dialog is initially open. To render a controlled dialog, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the dialog is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description: "Event handler called when the dialog is opened or closed.",
			table: {
				type: {
					summary: "(open: boolean, eventDetails: Dialog.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		modal: {
			description:
				"Determines if the dialog enters a modal state when open. When true, user interaction is limited to just the dialog: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled. When false, user interaction with the rest of the document is allowed. When 'trap-focus', focus is trapped inside the dialog, but document page scroll is not locked and pointer interactions outside of it remain enabled.",
			table: {
				type: { summary: 'boolean | "trap-focus"' },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: [true, false, "trap-focus"],
		},
		disablePointerDismissal: {
			description: "Determines whether the dialog should close on outside clicks.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the dialog is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
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
	},
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog
				{...args}
				open={open}
				onOpenChange={(newOpen, eventDetails) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen, eventDetails as any)
				}}
			>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline">Cancel</Button>
						<Button variant="destructive">Continue</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default dialog with trigger button, title, description, and action buttons.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<Button onClick={() => setOpen(!open)}>{open ? "Close Dialog" : "Open Dialog"}</Button>
				<Dialog
					{...args}
					open={open}
					onOpenChange={(newOpen, eventDetails) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, eventDetails as any)
					}}
				>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Controlled Dialog</DialogTitle>
							<DialogDescription>
								This dialog's open state is controlled externally.
							</DialogDescription>
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
	args: {
		open: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled dialog where the open state is managed externally via the open and onOpenChange props.",
			},
		},
	},
}

export const WithoutCloseButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Button>Open Dialog</Button>
				</DialogTrigger>
				<DialogContent showCloseButton={false}>
					<DialogHeader>
						<DialogTitle>Dialog without close button</DialogTitle>
						<DialogDescription>
							This dialog doesn't have a close button in the top-right corner. Users must use the
							footer buttons or press Escape to close it.
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
				story: "Dialog without the default close button in the top-right corner.",
			},
		},
	},
}

export const NonModal: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Dialog open={open} onOpenChange={setOpen} modal={false}>
				<DialogTrigger>
					<Button>Open Non-Modal Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Non-Modal Dialog</DialogTitle>
						<DialogDescription>
							This dialog allows interaction with the rest of the page. Focus is not trapped and
							page scrolling is not locked.
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
				story: "Non-modal dialog that allows interaction with the rest of the page.",
			},
		},
	},
}
