import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sheet/SheetHeader",
	component: SheetHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the sheet title and description. Must be used within a SheetContent component.`,
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
} satisfies Meta<typeof SheetHeader>

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
					<SheetHeader {...args}>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Default sheet header containing title and description.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default sheet header with title and description.",
			},
		},
	},
}

export const TitleOnly: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title Only</SheetTitle>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet header with only a title, no description.",
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
					<SheetHeader className="border-b border-gray-200 pb-4">
						<SheetTitle className="text-xl font-bold">Custom Styled Header</SheetTitle>
						<SheetDescription className="text-base">
							Sheet header with custom styling applied via className.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet header with custom styling applied via className.",
			},
		},
	},
}
