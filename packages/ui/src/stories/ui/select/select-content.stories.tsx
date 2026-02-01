import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select"

const meta = {
	title: "UI/Select/SelectContent",
	component: SelectContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the select list. Must be used within a Select component.

This component is built on top of [Base UI Select Popup](https://base-ui.com/react/components/select).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		side: {
			description:
				"Which side of the anchor element to align the popup against. May automatically change to avoid collisions.",
			table: {
				type: {
					summary: '"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"',
				},
				defaultValue: { summary: '"bottom"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["top", "bottom", "left", "right", "inline-start", "inline-end"],
		},
		sideOffset: {
			description:
				"Distance between the anchor and the popup in pixels. Also accepts a function that returns the distance.",
			table: {
				type: { summary: "number | OffsetFunction" },
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
			description:
				"Additional offset along the alignment axis in pixels. Also accepts a function that returns the offset.",
			table: {
				type: { summary: "number | OffsetFunction" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		alignItemWithTrigger: {
			description:
				"Whether the positioner overlaps the trigger so the selected item's text is aligned with the trigger's value text. This only applies to mouse input and is automatically disabled if there is not enough space.",
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
} satisfies Meta<typeof SelectContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent {...args}>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
					<SelectItem value="grape">Grape</SelectItem>
					<SelectItem value="strawberry">Strawberry</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default content container positioned below the trigger.",
			},
		},
	},
}

export const TopPositioned: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent side="top">
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Content positioned above the trigger.",
			},
		},
	},
}

export const CustomAlignment: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent align="start" sideOffset={8}>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Content with custom alignment and offset.",
			},
		},
	},
}

export const WithoutItemAlignment: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent alignItemWithTrigger={false}>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Content without item alignment with trigger, using standard positioning.",
			},
		},
	},
}
