import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectScrollDownButton,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select"

const meta = {
	title: "UI/Select/SelectScrollDownButton",
	component: SelectScrollDownButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An element that scrolls the select popup down when hovered. Does not render when using touch input. Must be used within a SelectContent component.

This component is built on top of [Base UI Select ScrollDownArrow](https://base-ui.com/react/components/select).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		keepMounted: {
			description:
				"Whether to keep the HTML element in the DOM while the select popup is not scrollable.",
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
} satisfies Meta<typeof SelectScrollDownButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent className="max-h-[200px]">
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
					<SelectItem value="grape">Grape</SelectItem>
					<SelectItem value="strawberry">Strawberry</SelectItem>
					<SelectItem value="mango">Mango</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
					<SelectItem value="watermelon">Watermelon</SelectItem>
					<SelectItem value="kiwi">Kiwi</SelectItem>
					<SelectItem value="peach">Peach</SelectItem>
					<SelectScrollDownButton />
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Scroll down button that appears when the content is scrollable and the user can scroll down.",
			},
		},
	},
}

export const WithManyItems: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		const fruits = [
			"Apple",
			"Banana",
			"Orange",
			"Grape",
			"Strawberry",
			"Mango",
			"Pineapple",
			"Watermelon",
			"Kiwi",
			"Peach",
			"Pear",
			"Cherry",
			"Plum",
			"Apricot",
			"Blueberry",
		]
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent className="max-h-[200px]">
					{fruits.map((fruit) => (
						<SelectItem key={fruit.toLowerCase()} value={fruit.toLowerCase()}>
							{fruit}
						</SelectItem>
					))}
					<SelectScrollDownButton />
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Scroll down button with many items, making the content scrollable.",
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
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent className="max-h-[200px]">
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
					<SelectItem value="grape">Grape</SelectItem>
					<SelectItem value="strawberry">Strawberry</SelectItem>
					<SelectItem value="mango">Mango</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
					<SelectScrollDownButton className="bg-blue-50 text-blue-600" />
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Scroll down button with custom styling applied via className.",
			},
		},
	},
}
