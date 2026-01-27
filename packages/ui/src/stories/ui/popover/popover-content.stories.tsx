import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverTitle,
	PopoverDescription,
} from "~/components/ui/popover"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Popover/PopoverContent",
	component: PopoverContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the popover contents. Must be used within a Popover component.

This component is built on top of [Base UI Popover](https://base-ui.com/react/components/popover).`,
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
			description:
				"Distance between the anchor and the popup in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "4" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		align: {
			description:
				"How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"center"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description:
				"Additional offset along the alignment axis in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		// Base UI Props (Popup)
		initialFocus: {
			description:
				"Determines the element to focus when the popover is opened.",
			table: {
				type: {
					summary:
						"boolean | RefObject | ((openType: InteractionType) => boolean | void | HTMLElement | null)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		finalFocus: {
			description:
				"Determines the element to focus when the popover is closed.",
			table: {
				type: {
					summary:
						"boolean | RefObject | ((closeType: InteractionType) => boolean | void | HTMLElement | null)",
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
} satisfies Meta<typeof PopoverContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent {...args}>
					<PopoverHeader>
						<PopoverTitle>Popover Title</PopoverTitle>
						<PopoverDescription>
							Default popover content with standard positioning.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default popover content with standard positioning.",
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
				<Popover open={openTop} onOpenChange={setOpenTop}>
					<PopoverTrigger asChild>
						<Button variant="outline">Top</Button>
					</PopoverTrigger>
					<PopoverContent side="top">
						<PopoverHeader>
							<PopoverTitle>Top Side</PopoverTitle>
							<PopoverDescription>
								Content appears above the trigger.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>

				<div className="flex items-center gap-8">
					<Popover open={openLeft} onOpenChange={setOpenLeft}>
						<PopoverTrigger asChild>
							<Button variant="outline">Left</Button>
						</PopoverTrigger>
						<PopoverContent side="left">
							<PopoverHeader>
								<PopoverTitle>Left Side</PopoverTitle>
								<PopoverDescription>
									Content appears to the left of the trigger.
								</PopoverDescription>
							</PopoverHeader>
						</PopoverContent>
					</Popover>

					<Popover open={openRight} onOpenChange={setOpenRight}>
						<PopoverTrigger asChild>
							<Button variant="outline">Right</Button>
						</PopoverTrigger>
						<PopoverContent side="right">
							<PopoverHeader>
								<PopoverTitle>Right Side</PopoverTitle>
								<PopoverDescription>
									Content appears to the right of the trigger.
								</PopoverDescription>
							</PopoverHeader>
						</PopoverContent>
					</Popover>
				</div>

				<Popover open={openBottom} onOpenChange={setOpenBottom}>
					<PopoverTrigger asChild>
						<Button variant="outline">Bottom</Button>
					</PopoverTrigger>
					<PopoverContent side="bottom">
						<PopoverHeader>
							<PopoverTitle>Bottom Side</PopoverTitle>
							<PopoverDescription>
								Content appears below the trigger.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates popover content positioned on different sides of the trigger.",
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
				<Popover open={openStart} onOpenChange={setOpenStart}>
					<PopoverTrigger asChild>
						<Button variant="outline">Align Start</Button>
					</PopoverTrigger>
					<PopoverContent align="start">
						<PopoverHeader>
							<PopoverTitle>Align Start</PopoverTitle>
							<PopoverDescription>
								Content aligned to the start of the trigger.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>

				<Popover open={openCenter} onOpenChange={setOpenCenter}>
					<PopoverTrigger asChild>
						<Button variant="outline">Align Center</Button>
					</PopoverTrigger>
					<PopoverContent align="center">
						<PopoverHeader>
							<PopoverTitle>Align Center</PopoverTitle>
							<PopoverDescription>
								Content centered relative to the trigger.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>

				<Popover open={openEnd} onOpenChange={setOpenEnd}>
					<PopoverTrigger asChild>
						<Button variant="outline">Align End</Button>
					</PopoverTrigger>
					<PopoverContent align="end">
						<PopoverHeader>
							<PopoverTitle>Align End</PopoverTitle>
							<PopoverDescription>
								Content aligned to the end of the trigger.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates different alignment options for the popover content.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline">Open styled popover</Button>
				</PopoverTrigger>
				<PopoverContent className="w-96 border-2 border-blue-500 bg-blue-50 p-6">
					<PopoverHeader>
						<PopoverTitle className="text-lg font-bold text-blue-900">
							Custom Styled Content
						</PopoverTitle>
						<PopoverDescription className="text-blue-800">
							This popover has custom styling with a wider width, colored
							border, and custom background.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
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

export const CustomOffset: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline">Open with offset</Button>
				</PopoverTrigger>
				<PopoverContent sideOffset={16} alignOffset={16}>
					<PopoverHeader>
						<PopoverTitle>Custom Offset</PopoverTitle>
						<PopoverDescription>
							This popover has custom side and alignment offsets for more
							spacing from the trigger.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Content with custom side and alignment offsets for increased spacing.",
			},
		},
	},
}
