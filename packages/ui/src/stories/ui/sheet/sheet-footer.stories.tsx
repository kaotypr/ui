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
	title: "UI/Sheet/SheetFooter",
	component: SheetFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for action buttons at the bottom of the sheet. Must be used within a SheetContent component.`,
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
} satisfies Meta<typeof SheetFooter>

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
							Default sheet footer with action buttons.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<p className="text-sm text-muted-foreground">
							Sheet content goes here.
						</p>
					</div>
					<SheetFooter {...args}>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button onClick={() => setOpen(false)}>Save Changes</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default sheet footer with cancel and save buttons.",
			},
		},
	},
}

export const SingleButton: Story = {
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
							Sheet footer with a single action button.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<p className="text-sm text-muted-foreground">
							Sheet content goes here.
						</p>
					</div>
					<SheetFooter>
						<Button onClick={() => setOpen(false)} className="w-full">
							Confirm
						</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet footer with a single full-width action button.",
			},
		},
	},
}

export const CustomStyling: Story = {
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
							Sheet footer with custom styling applied via className.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<p className="text-sm text-muted-foreground">
							Sheet content goes here.
						</p>
					</div>
					<SheetFooter className="border-t border-gray-200 pt-4">
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button onClick={() => setOpen(false)}>Save Changes</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet footer with custom styling applied via className.",
			},
		},
	},
}
