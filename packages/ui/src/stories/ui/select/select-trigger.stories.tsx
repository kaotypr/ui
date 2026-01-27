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
	title: "UI/Select/SelectTrigger",
	component: SelectTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that opens the select popup. Must be used within a Select component.

This component is built on top of [Base UI Select Trigger](https://base-ui.com/react/components/select).`,
			},
		},
	},
	argTypes: {
		// Custom Props
		size: {
			description: "The size variant of the trigger.",
			table: {
				type: { summary: '"sm" | "default"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["sm", "default"],
		},
		// Base UI Props
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description:
				"Whether the component should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof SelectTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger {...args} className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
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
				story: "Default trigger button that opens the select popup.",
			},
		},
	},
}

export const Small: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger size="sm" className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
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
				story: "Small size variant of the trigger.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger disabled className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
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
				story: "Disabled trigger that cannot open the select popup.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[200px] border-2 border-blue-500 bg-blue-50 text-blue-900">
					<SelectValue placeholder="Custom styled trigger" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="option1">Option 1</SelectItem>
					<SelectItem value="option2">Option 2</SelectItem>
					<SelectItem value="option3">Option 3</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger with custom styling applied via className.",
			},
		},
	},
}
