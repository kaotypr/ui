import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "~/components/ui/hover-card"

const meta = {
	title: "UI/HoverCard/HoverCardContent",
	component: HoverCardContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the hover card contents. Must be used within a HoverCard component.

This component is built on top of [Base UI Preview Card](https://base-ui.com/react/components/preview-card).`,
			},
		},
	},
	argTypes: {
		// Base UI Props (Positioner)
		side: {
			description:
				"Which side of the anchor element to align the popup against. May automatically change to avoid collisions.",
			table: {
				type: { summary: '"top" | "bottom" | "left" | "right"' },
				defaultValue: { summary: '"bottom"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["top", "bottom", "left", "right"],
		},
		sideOffset: {
			description: "Distance between the anchor and the popup in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "4" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		align: {
			description: "How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"center"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description: "Additional offset along the alignment axis in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "4" },
				category: "Base UI Props",
			},
			control: { type: "number" },
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
} satisfies Meta<typeof HoverCardContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger>
					<a href="#" className="text-blue-600 underline">
						Hover over this link
					</a>
				</HoverCardTrigger>
				<HoverCardContent {...args}>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Preview Card</h4>
						<p className="text-sm text-muted-foreground">
							A popup that appears when a link is hovered, showing a preview for sighted users.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default hover card content with standard positioning.",
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
			<div className="flex flex-col items-center gap-8">
				<HoverCard open={openTop} onOpenChange={setOpenTop}>
					<HoverCardTrigger>
						<a href="#" className="text-blue-600 underline">
							Top
						</a>
					</HoverCardTrigger>
					<HoverCardContent side="top">
						<div className="space-y-2">
							<h4 className="text-sm font-semibold">Top Side</h4>
							<p className="text-sm text-muted-foreground">Content appears above the trigger.</p>
						</div>
					</HoverCardContent>
				</HoverCard>

				<div className="flex items-center gap-8">
					<HoverCard open={openLeft} onOpenChange={setOpenLeft}>
						<HoverCardTrigger>
							<a href="#" className="text-blue-600 underline">
								Left
							</a>
						</HoverCardTrigger>
						<HoverCardContent side="left">
							<div className="space-y-2">
								<h4 className="text-sm font-semibold">Left Side</h4>
								<p className="text-sm text-muted-foreground">
									Content appears to the left of the trigger.
								</p>
							</div>
						</HoverCardContent>
					</HoverCard>

					<HoverCard open={openRight} onOpenChange={setOpenRight}>
						<HoverCardTrigger>
							<a href="#" className="text-blue-600 underline">
								Right
							</a>
						</HoverCardTrigger>
						<HoverCardContent side="right">
							<div className="space-y-2">
								<h4 className="text-sm font-semibold">Right Side</h4>
								<p className="text-sm text-muted-foreground">
									Content appears to the right of the trigger.
								</p>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>

				<HoverCard open={openBottom} onOpenChange={setOpenBottom}>
					<HoverCardTrigger>
						<a href="#" className="text-blue-600 underline">
							Bottom
						</a>
					</HoverCardTrigger>
					<HoverCardContent side="bottom">
						<div className="space-y-2">
							<h4 className="text-sm font-semibold">Bottom Side</h4>
							<p className="text-sm text-muted-foreground">Content appears below the trigger.</p>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Demonstrates hover card content positioned on different sides of the trigger.",
			},
		},
	},
}

export const CustomAlignment: Story = {
	render: () => {
		const [openStart, setOpenStart] = React.useState<boolean>(false)
		const [openCenter, setOpenCenter] = React.useState<boolean>(false)
		const [openEnd, setOpenEnd] = React.useState<boolean>(false)

		return (
			<div className="flex flex-col items-center gap-8">
				<HoverCard open={openStart} onOpenChange={setOpenStart}>
					<HoverCardTrigger>
						<a href="#" className="text-blue-600 underline">
							Align Start
						</a>
					</HoverCardTrigger>
					<HoverCardContent align="start">
						<div className="space-y-2">
							<h4 className="text-sm font-semibold">Align Start</h4>
							<p className="text-sm text-muted-foreground">
								Content aligned to the start of the trigger.
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>

				<HoverCard open={openCenter} onOpenChange={setOpenCenter}>
					<HoverCardTrigger>
						<a href="#" className="text-blue-600 underline">
							Align Center
						</a>
					</HoverCardTrigger>
					<HoverCardContent align="center">
						<div className="space-y-2">
							<h4 className="text-sm font-semibold">Align Center</h4>
							<p className="text-sm text-muted-foreground">
								Content centered relative to the trigger.
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>

				<HoverCard open={openEnd} onOpenChange={setOpenEnd}>
					<HoverCardTrigger>
						<a href="#" className="text-blue-600 underline">
							Align End
						</a>
					</HoverCardTrigger>
					<HoverCardContent align="end">
						<div className="space-y-2">
							<h4 className="text-sm font-semibold">Align End</h4>
							<p className="text-sm text-muted-foreground">
								Content aligned to the end of the trigger.
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Demonstrates different alignment options for the hover card content.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger>
					<a href="#" className="text-blue-600 underline">
						Hover for styled content
					</a>
				</HoverCardTrigger>
				<HoverCardContent className="w-96 border-2 border-blue-500 bg-blue-50 p-6">
					<div className="space-y-3">
						<h4 className="text-lg font-bold text-blue-900">Custom Styled Content</h4>
						<p className="text-sm text-blue-800">
							This hover card has custom styling with a wider width, colored border, and custom
							background.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Content with custom styling applied via className.",
			},
		},
	},
}
