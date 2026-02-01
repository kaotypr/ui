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
	title: "UI/Popover/PopoverTitle",
	component: PopoverTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A heading that labels the popover. Must be used within a PopoverContent component.

This component is built on top of [Base UI Popover](https://base-ui.com/react/components/popover).`,
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
} satisfies Meta<typeof PopoverTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle {...args}>Popover Title</PopoverTitle>
						<PopoverDescription>This is the default title styling.</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default title with standard styling.",
			},
		},
	},
}

export const LongTitle: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>
							This is a longer title that demonstrates how the component handles text wrapping
						</PopoverTitle>
						<PopoverDescription>
							The title will wrap to multiple lines if needed.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Title with longer text that wraps to multiple lines.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button variant="outline">Open styled popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle className="text-lg font-bold text-blue-900">
							Custom Styled Title
						</PopoverTitle>
						<PopoverDescription>
							Title with custom styling including larger font size, bold weight, and custom color.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Title with custom styling applied via className.",
			},
		},
	},
}
