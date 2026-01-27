import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetOverlay,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sheet/SheetOverlay",
	component: SheetOverlay,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An overlay displayed beneath the popup. Must be used within a Sheet component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		forceRender: {
			description:
				"Whether the backdrop is forced to render even when nested.",
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
} satisfies Meta<typeof SheetOverlay>

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
					<SheetOverlay {...args} />
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Default sheet overlay displayed beneath the popup.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default sheet overlay that appears beneath the popup when the sheet is open.",
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
					<SheetOverlay className="bg-black/30 backdrop-blur-md" />
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Sheet overlay with custom styling for darker background and blur effect.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Sheet overlay with custom styling applied via className for a darker background and blur effect.",
			},
		},
	},
}

export const ForceRender: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetOverlay forceRender />
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Sheet overlay with forceRender prop, forcing it to render even when nested.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Sheet overlay with forceRender prop, forcing it to render even when the sheet is nested within another dialog.",
			},
		},
	},
}
