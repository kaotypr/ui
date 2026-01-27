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
	title: "UI/Popover/PopoverHeader",
	component: PopoverHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the popover header content. Must be used within a PopoverContent component.

This component provides a structured layout for the popover's title and description.`,
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
} satisfies Meta<typeof PopoverHeader>

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
				<PopoverContent>
					<PopoverHeader {...args}>
						<PopoverTitle>Popover Title</PopoverTitle>
						<PopoverDescription>
							This is the default header with title and description.
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
					"Default header containing a title and description for the popover.",
			},
		},
	},
}

export const TitleOnly: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Title Only</PopoverTitle>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Header with only a title, no description.",
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
				<PopoverContent>
					<PopoverHeader className="border-b border-gray-200 pb-3">
						<PopoverTitle>Custom Styled Header</PopoverTitle>
						<PopoverDescription>
							Header with custom styling including a border separator.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Header with custom styling applied via className.",
			},
		},
	},
}
