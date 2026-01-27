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
	title: "UI/Drawer",
	component: Drawer,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A drawer component that slides in from the edge of the screen.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).

### Component Parts
- [DrawerTrigger](?path=/story/ui-drawer-drawertrigger--default): The button that opens the drawer.
- [DrawerContent](?path=/story/ui-drawer-drawercontent--default): Contains content to be rendered in the open drawer.
- [DrawerHeader](?path=/story/ui-drawer-drawerheader--default): Header section of the drawer.
- [DrawerFooter](?path=/story/ui-drawer-drawerfooter--default): Footer section of the drawer.
- [DrawerTitle](?path=/story/ui-drawer-drawertitle--default): An optional accessible title to be announced when the drawer is opened.
- [DrawerDescription](?path=/story/ui-drawer-drawerdescription--default): An optional accessible description to be announced when the drawer is opened.
- [DrawerClose](?path=/story/ui-drawer-drawerclose--default): The button that closes the drawer.
- [DrawerOverlay](?path=/story/ui-drawer-draweroverlay--default): A layer that covers the inert portion of the view when the drawer is open.
- [DrawerPortal](?path=/story/ui-drawer-drawerportal--default): When used, portals your overlay and content parts into the body.`,
			},
		},
	},
	argTypes: {
		// Vaul Props
		defaultOpen: {
			description:
				"Whether the drawer is initially open. Use for uncontrolled drawers.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description:
				"Whether the drawer is currently open. Use together with onOpenChange for controlled drawers.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description:
				"Event handler called when the drawer is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		modal: {
			description:
				"Whether the drawer should be modal (traps focus and prevents interaction with the rest of the page).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
		container: {
			description:
				"The container element to portal the drawer into. Defaults to document.body.",
			table: {
				type: { summary: "HTMLElement" },
				defaultValue: { summary: "document.body" },
				category: "Vaul Props",
			},
			control: false,
		},
		direction: {
			description:
				"The direction from which the drawer slides in.",
			table: {
				type: { summary: '"bottom" | "left" | "right" | "top"' },
				defaultValue: { summary: '"bottom"' },
				category: "Vaul Props",
			},
			control: { type: "select" },
			options: ["bottom", "left", "right", "top"],
		},
		onAnimationEnd: {
			description:
				"Event handler called when the drawer animation ends.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onAnimationEnd",
		},
		dismissible: {
			description:
				"Whether the drawer can be dismissed by clicking outside or pressing Escape.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
		handleOnly: {
			description:
				"Whether the drawer can only be dismissed by dragging the handle.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
		repositionInputs: {
			description:
				"Whether to reposition inputs when the drawer opens to prevent them from being hidden by the keyboard.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
		snapPoints: {
			description:
				"Array of snap points for the drawer. Each point is a number between 0 and 1 representing the height/width percentage.",
			table: {
				type: { summary: "number[]" },
				defaultValue: { summary: "undefined" },
				category: "Vaul Props",
			},
			control: false,
		},
		activeSnapPoint: {
			description:
				"The currently active snap point. Use with setActiveSnapPoint for controlled snap points.",
			table: {
				type: { summary: "number | string | null" },
				defaultValue: { summary: "undefined" },
				category: "Vaul Props",
			},
			control: false,
		},
		setActiveSnapPoint: {
			description:
				"Function to set the active snap point. Provided by Vaul when using snap points.",
			table: {
				type: { summary: "(point: number | string | null) => void" },
				defaultValue: { summary: "undefined" },
				category: "Vaul Props",
			},
			control: false,
		},
		fadeFromIndex: {
			description:
				"Index of the snap point from which to fade out content.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Vaul Props",
			},
			control: { type: "number" },
		},
		snapToSequentialPoint: {
			description:
				"Whether to snap to sequential points when dragging.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Vaul Props",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen)
				}}
			>
				<DrawerTrigger asChild>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Are you absolutely sure?</DrawerTitle>
						<DrawerDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">
							Drawer content goes here.
						</p>
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
				story:
					"Default drawer that slides in from the bottom with a trigger button, header, content, and footer.",
			},
		},
	},
}

export const LeftDirection: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen)
				}}
				direction="left"
			>
				<DrawerTrigger asChild>
					<Button>Open Left Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Sidebar Navigation</DrawerTitle>
						<DrawerDescription>
							Navigate through different sections of the application.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 space-y-2">
						<Button variant="ghost" className="w-full justify-start">
							Home
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Settings
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Profile
						</Button>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
	args: {
		direction: "left",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Drawer that slides in from the left side, useful for navigation menus.",
			},
		},
	},
}

export const RightDirection: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen)
				}}
				direction="right"
			>
				<DrawerTrigger asChild>
					<Button>Open Right Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Settings</DrawerTitle>
						<DrawerDescription>
							Manage your account settings and preferences.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 space-y-4">
						<div>
							<label className="text-sm font-medium">Theme</label>
							<select className="mt-1 w-full rounded-md border p-2">
								<option>Light</option>
								<option>Dark</option>
								<option>System</option>
							</select>
						</div>
					</div>
					<DrawerFooter>
						<Button>Save Changes</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	},
	args: {
		direction: "right",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Drawer that slides in from the right side, commonly used for settings panels.",
			},
		},
	},
}

export const TopDirection: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen)
				}}
				direction="top"
			>
				<DrawerTrigger asChild>
					<Button>Open Top Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Notifications</DrawerTitle>
						<DrawerDescription>
							You have 3 new notifications.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 space-y-2">
						<div className="rounded-md border p-3">
							<p className="text-sm font-medium">New message</p>
							<p className="text-xs text-muted-foreground">2 minutes ago</p>
						</div>
						<div className="rounded-md border p-3">
							<p className="text-sm font-medium">Task completed</p>
							<p className="text-xs text-muted-foreground">5 minutes ago</p>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
	args: {
		direction: "top",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Drawer that slides in from the top, useful for notifications or alerts.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<Button onClick={() => setOpen(!open)}>
					{open ? "Close Drawer" : "Open Drawer"}
				</Button>
				<Drawer
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen)
					}}
				>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Controlled Drawer</DrawerTitle>
							<DrawerDescription>
								This drawer's open state is controlled externally.
							</DrawerDescription>
						</DrawerHeader>
						<div className="p-4">
							<p className="text-sm text-muted-foreground">
								The drawer can be opened and closed using the button above.
							</p>
						</div>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button variant="outline">Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
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
					"Controlled drawer where the open state is managed externally.",
			},
		},
	},
}

export const NonDismissible: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen)
				}}
				dismissible={false}
			>
				<DrawerTrigger asChild>
					<Button>Open Non-Dismissible Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Important Action Required</DrawerTitle>
						<DrawerDescription>
							This drawer cannot be dismissed by clicking outside or pressing Escape.
							You must use the close button.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">
							Use this pattern for critical actions that require explicit confirmation.
						</p>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button>Confirm</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	},
	args: {
		dismissible: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Drawer that cannot be dismissed by clicking outside or pressing Escape. Useful for critical actions.",
			},
		},
	},
}
