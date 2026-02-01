import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sheet",
	component: Sheet,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A slide-out panel that opens from the edge of the screen.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).

### Component Parts
- [SheetTrigger](?path=/story/ui-sheet-sheettrigger--default): A button that opens the sheet.
- [SheetContent](?path=/story/ui-sheet-sheetcontent--default): A container for the sheet contents.
- [SheetHeader](?path=/story/ui-sheet-sheetheader--default): A container for the sheet title and description.
- [SheetFooter](?path=/story/ui-sheet-sheetfooter--default): A container for action buttons at the bottom of the sheet.
- [SheetTitle](?path=/story/ui-sheet-sheettitle--default): A heading that labels the sheet.
- [SheetDescription](?path=/story/ui-sheet-sheetdescription--default): A paragraph with additional information about the sheet.
- [SheetClose](?path=/story/ui-sheet-sheetclose--default): A button that closes the sheet.
- [SheetOverlay](?path=/story/ui-sheet-sheetoverlay--default): An overlay displayed beneath the popup.
- [SheetPortal](?path=/story/ui-sheet-sheetportal--default): A portal element that moves the popup to a different part of the DOM.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultOpen: {
			description:
				"Whether the sheet is initially open. To render a controlled sheet, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the sheet is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description: "Event handler called when the sheet is opened or closed.",
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
				"Determines if the sheet enters a modal state when open. When true, user interaction is limited to just the sheet: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled. When false, user interaction with the rest of the document is allowed. When 'trap-focus', focus is trapped inside the sheet, but document page scroll is not locked and pointer interactions outside of it remain enabled.",
			table: {
				type: { summary: 'boolean | "trap-focus"' },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: [true, false, "trap-focus"],
		},
		disablePointerDismissal: {
			description: "Determines whether the sheet should close on outside clicks.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the sheet is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
		},
	},
} satisfies Meta<typeof Sheet>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet
				{...args}
				open={open}
				onOpenChange={(newOpen, eventDetails) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen, eventDetails as any)
				}}
			>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Edit Profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<p className="text-sm text-muted-foreground">Sheet content goes here.</p>
					</div>
					<SheetFooter>
						<Button variant="outline">Cancel</Button>
						<Button>Save Changes</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default sheet with trigger button, title, description, and action buttons.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<Button onClick={() => setOpen(!open)}>{open ? "Close Sheet" : "Open Sheet"}</Button>
				<Sheet
					{...args}
					open={open}
					onOpenChange={(newOpen, eventDetails) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, eventDetails as any)
					}}
				>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Controlled Sheet</SheetTitle>
							<SheetDescription>This sheet's open state is controlled externally.</SheetDescription>
						</SheetHeader>
						<SheetFooter>
							<Button variant="outline" onClick={() => setOpen(false)}>
								Close
							</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
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
					"Controlled sheet where the open state is managed externally via the open and onOpenChange props.",
			},
		},
	},
}

export const DifferentSides: Story = {
	render: () => {
		const [openTop, setOpenTop] = React.useState<boolean>(false)
		const [openRight, setOpenRight] = React.useState<boolean>(false)
		const [openBottom, setOpenBottom] = React.useState<boolean>(false)
		const [openLeft, setOpenLeft] = React.useState<boolean>(false)

		return (
			<div className="flex flex-col items-center gap-4">
				<Sheet open={openTop} onOpenChange={setOpenTop}>
					<SheetTrigger>
						<Button variant="outline">Top</Button>
					</SheetTrigger>
					<SheetContent side="top">
						<SheetHeader>
							<SheetTitle>Top Sheet</SheetTitle>
							<SheetDescription>This sheet slides in from the top.</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>

				<div className="flex items-center gap-4">
					<Sheet open={openLeft} onOpenChange={setOpenLeft}>
						<SheetTrigger>
							<Button variant="outline">Left</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<SheetHeader>
								<SheetTitle>Left Sheet</SheetTitle>
								<SheetDescription>This sheet slides in from the left.</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>

					<Sheet open={openRight} onOpenChange={setOpenRight}>
						<SheetTrigger>
							<Button variant="outline">Right</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader>
								<SheetTitle>Right Sheet</SheetTitle>
								<SheetDescription>This sheet slides in from the right.</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>

				<Sheet open={openBottom} onOpenChange={setOpenBottom}>
					<SheetTrigger>
						<Button variant="outline">Bottom</Button>
					</SheetTrigger>
					<SheetContent side="bottom">
						<SheetHeader>
							<SheetTitle>Bottom Sheet</SheetTitle>
							<SheetDescription>This sheet slides in from the bottom.</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Demonstrates sheets positioned on different sides of the screen.",
			},
		},
	},
}

export const WithoutCloseButton: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent showCloseButton={false}>
					<SheetHeader>
						<SheetTitle>Sheet without close button</SheetTitle>
						<SheetDescription>
							This sheet doesn't have a close button in the top-right corner. Users must use the
							footer buttons or press Escape to close it.
						</SheetDescription>
					</SheetHeader>
					<SheetFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button onClick={() => setOpen(false)}>Confirm</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet without the default close button in the top-right corner.",
			},
		},
	},
}

export const NonModal: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen} modal={false}>
				<SheetTrigger>
					<Button>Open Non-Modal Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Non-Modal Sheet</SheetTitle>
						<SheetDescription>
							This sheet allows interaction with the rest of the page. Focus is not trapped and page
							scrolling is not locked.
						</SheetDescription>
					</SheetHeader>
					<SheetFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Close
						</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Non-modal sheet that allows interaction with the rest of the page.",
			},
		},
	},
}
