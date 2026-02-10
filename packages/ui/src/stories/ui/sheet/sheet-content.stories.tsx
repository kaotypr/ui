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
	title: "UI/Sheet/SheetContent",
	component: SheetContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the sheet contents. Must be used within a Sheet component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Props
		side: {
			description: "Which side of the screen the sheet slides in from.",
			table: {
				type: { summary: '"top" | "right" | "bottom" | "left"' },
				defaultValue: { summary: '"right"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["top", "right", "bottom", "left"],
		},
		showCloseButton: {
			description: "Whether to show the close button in the top-right corner.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		// Base UI Props
		initialFocus: {
			description:
				"Determines the element to focus when the sheet is opened. Can be false (don't move focus), true (use default behavior), a RefObject, or a function.",
			table: {
				type: {
					summary:
						"boolean | RefObject<HTMLElement> | ((openType: InteractionType) => boolean | void | HTMLElement | null)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		finalFocus: {
			description:
				"Determines the element to focus when the sheet is closed. Can be false (don't move focus), true (use default behavior), a RefObject, or a function.",
			table: {
				type: {
					summary:
						"boolean | RefObject<HTMLElement> | ((closeType: InteractionType) => boolean | void | HTMLElement | null)",
				},
				defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof SheetContent>

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
				<SheetContent {...args}>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Default sheet content with header, description, and footer.
						</SheetDescription>
					</SheetHeader>
					<div className="py-4">
						<p className="text-sm text-muted-foreground">Sheet content goes here.</p>
					</div>
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
				story: "Default sheet content container with all standard elements.",
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
							<SheetTitle>Top Side</SheetTitle>
							<SheetDescription>Content slides in from the top.</SheetDescription>
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
								<SheetTitle>Left Side</SheetTitle>
								<SheetDescription>Content slides in from the left.</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>

					<Sheet open={openRight} onOpenChange={setOpenRight}>
						<SheetTrigger>
							<Button variant="outline">Right</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader>
								<SheetTitle>Right Side</SheetTitle>
								<SheetDescription>Content slides in from the right.</SheetDescription>
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
							<SheetTitle>Bottom Side</SheetTitle>
							<SheetDescription>Content slides in from the bottom.</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Demonstrates sheet content positioned on different sides of the screen.",
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
							This sheet content doesn't have a close button in the top-right corner.
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
				story: "Sheet content without the default close button in the top-right corner.",
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
					<Button>Open Styled Sheet</Button>
				</SheetTrigger>
				<SheetContent className="w-96 border-2 border-blue-500 bg-blue-50">
					<SheetHeader>
						<SheetTitle className="text-lg font-bold text-blue-900">
							Custom Styled Content
						</SheetTitle>
						<SheetDescription className="text-blue-800">
							This sheet has custom styling with a wider width, colored border, and custom
							background.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet content with custom styling applied via className.",
			},
		},
	},
}
