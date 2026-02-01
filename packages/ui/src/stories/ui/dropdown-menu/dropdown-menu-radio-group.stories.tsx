import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
} from "~/components/ui/dropdown-menu"

const meta = {
	title: "UI/DropdownMenu/DropdownMenuRadioGroup",
	component: DropdownMenuRadioGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related radio items. Must be used within DropdownMenuGroup, which must be within DropdownMenuContent.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultValue: {
			description:
				"The uncontrolled value of the radio item that should be initially selected. To render a controlled radio group, use the value prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description:
				"The controlled value of the radio item that should be currently selected. To render an uncontrolled radio group, use the defaultValue prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description: "Function called when the selected value changes.",
			table: {
				type: {
					summary: "(value: any, eventDetails: Menu.RadioGroup.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
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
} satisfies Meta<typeof DropdownMenuRadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)
		const [value, setValue] = React.useState<string>("center")

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>Alignment</DropdownMenuLabel>
						<DropdownMenuRadioGroup
							{...args}
							value={value}
							onValueChange={(newValue) => {
								setValue(newValue)
								args.onValueChange?.(newValue, {} as any)
							}}
						>
							<DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="center">Center</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default radio group with controlled value.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>View</DropdownMenuLabel>
						<DropdownMenuRadioGroup defaultValue="grid">
							<DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="table">Table</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Uncontrolled radio group using defaultValue prop.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						<DropdownMenuLabel>Alignment</DropdownMenuLabel>
						<DropdownMenuRadioGroup defaultValue="center" disabled>
							<DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="center">Center</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Radio group with disabled state.",
			},
		},
	},
}
