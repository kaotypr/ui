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
	title: "UI/Select/SelectItem",
	component: SelectItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual option in the select popup. Must be used within a SelectContent component.

This component is built on top of [Base UI Select Item](https://base-ui.com/react/components/select).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		label: {
			description:
				"Specifies the text label to use when the item is matched during keyboard text navigation. Defaults to the item text content if not provided.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description: "A unique value that identifies this select item.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "null" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop. Set to true if the rendered element is a native button.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disabled: {
			description: "Whether the component should ignore user interaction.",
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
} satisfies Meta<typeof SelectItem>

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
				<SelectContent>
					<SelectItem {...args} value="apple">
						Apple
					</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default select item that can be selected.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana" disabled>
						Banana (disabled)
					</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled item that cannot be selected.",
			},
		},
	},
}

export const Selected: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select defaultValue="banana" open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
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
				story: "Item that is currently selected, showing the check indicator.",
			},
		},
	},
}

export const CustomLabel: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		return (
			<Select open={open} onOpenChange={setOpen}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a language" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="js" label="JavaScript">
						JS
					</SelectItem>
					<SelectItem value="ts" label="TypeScript">
						TS
					</SelectItem>
					<SelectItem value="py" label="Python">
						PY
					</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Item with custom label for keyboard navigation while displaying different content.",
			},
		},
	},
}
