import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select"

const meta = {
	title: "UI/Select/SelectLabel",
	component: SelectLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible label that is automatically associated with its parent group. Must be used within a SelectGroup component.

This component is built on top of [Base UI Select GroupLabel](https://base-ui.com/react/components/select).`,
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
} satisfies Meta<typeof SelectLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="orange">Orange</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default label for a select group.",
			},
		},
	},
}

export const MultipleLabels: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Vegetables</SelectLabel>
						<SelectItem value="carrot">Carrot</SelectItem>
						<SelectItem value="broccoli">Broccoli</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple labels organizing different groups of items.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel className="text-blue-600 font-semibold">Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="orange">Orange</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Label with custom styling applied via className.",
			},
		},
	},
}
