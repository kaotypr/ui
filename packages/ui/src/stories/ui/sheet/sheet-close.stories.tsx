import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetClose,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sheet/SheetClose",
	component: SheetClose,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that closes the sheet. Must be used within a Sheet component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop. Set to false if the rendered element is not a button (e.g. div).",
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
} satisfies Meta<typeof SheetClose>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Default sheet close button that closes the sheet when clicked.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<SheetClose {...args}>
							<Button variant="outline">Close</Button>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default sheet close button that closes the sheet when clicked.",
			},
		},
	},
}

export const WithAsChild: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Sheet close button using asChild prop to compose with a Button component.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<SheetClose>
							<Button variant="destructive">Close Sheet</Button>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Sheet close button using the asChild prop to compose with a custom button element.",
			},
		},
	},
}

export const InFooter: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Sheet close button placed in the footer alongside other actions.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<p className="text-sm text-muted-foreground">
							Sheet content goes here.
						</p>
					</div>
					<div className="flex gap-2">
						<SheetClose>
							<Button variant="outline">Cancel</Button>
						</SheetClose>
						<Button>Save Changes</Button>
					</div>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Sheet close button placed in the footer alongside other action buttons.",
			},
		},
	},
}
