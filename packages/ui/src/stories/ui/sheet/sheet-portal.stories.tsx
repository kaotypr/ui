import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetPortal,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sheet/SheetPortal",
	component: SheetPortal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A portal element that moves the popup to a different part of the DOM. By default, the portal element is appended to document.body. Must be used within a Sheet component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		container: {
			description:
				"A parent element to render the portal element into.",
			table: {
				type: { summary: "HTMLElement | ShadowRoot | RefObject | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
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
} satisfies Meta<typeof SheetPortal>

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
				<SheetPortal {...args}>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Sheet Title</SheetTitle>
							<SheetDescription>
								Default sheet portal that renders the content in a portal.
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</SheetPortal>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default sheet portal that renders the content in a portal appended to document.body.",
			},
		},
	},
}

export const KeepMounted: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetPortal keepMounted>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Sheet Title</SheetTitle>
							<SheetDescription>
								Sheet portal with keepMounted prop, keeping the portal mounted even when closed.
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</SheetPortal>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Sheet portal with keepMounted prop, keeping the portal mounted in the DOM even when the sheet is closed.",
			},
		},
	},
}
