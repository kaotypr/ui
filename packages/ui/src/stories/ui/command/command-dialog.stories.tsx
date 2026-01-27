import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandItem,
} from "~/components/ui/command"
import { Button } from "~/components/ui/button"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Raspberry", value: "raspberry" },
]

const meta = {
	title: "UI/Command/CommandDialog",
	component: CommandDialog,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A dialog wrapper for the command menu. Provides a modal overlay for the command palette.

This component wraps the Dialog component and provides a command menu interface. Must be used with Command, CommandInput, CommandList, and CommandItem components.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk) and [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
			},
		},
	},
	argTypes: {
		// Custom Props
		title: {
			description: "The title of the command dialog.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Command Palette"' },
				category: "Props",
			},
			control: { type: "text" },
		},
		description: {
			description: "The description of the command dialog.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Search for a command to run..."' },
				category: "Props",
			},
			control: { type: "text" },
		},
		showCloseButton: {
			description: "Whether to show the close button in the dialog.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		// Base UI Dialog Props
		open: {
			description: "Whether the dialog is open. Use when controlled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		defaultOpen: {
			description:
				"Whether the dialog is initially open (uncontrolled).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description:
				"Event handler called when the dialog open state changes.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		modal: {
			description:
				"Whether the dialog is modal. When true, interaction with outside elements is disabled.",
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
} satisfies Meta<typeof CommandDialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: undefined,
	},
	render: ({ children, ...args }: any) => {
		const [open, setOpen] = React.useState(false)
		const [value, setValue] = React.useState<string>("")

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Command Menu</Button>
				<CommandDialog
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen)
					}}
				>
					<Command value={value} onValueChange={setValue}>
						<CommandInput placeholder="Type a command or search..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							{fruits.map((fruit) => (
								<CommandItem
									key={fruit.value}
									value={fruit.value}
									onSelect={() => {
										setValue(fruit.value)
										setOpen(false)
									}}
								>
									{fruit.label}
								</CommandItem>
							))}
						</CommandList>
					</Command>
				</CommandDialog>
			</>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default CommandDialog with a button to open it and a command menu inside.",
			},
		},
	},
}

export const WithCustomTitle: Story = {
	args: {
		children: undefined,
	},
	render: (_args) => {
		const [open, setOpen] = React.useState(false)
		const [value, setValue] = React.useState<string>("")

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Command Menu</Button>
				<CommandDialog
					open={open}
					onOpenChange={setOpen}
					title="Quick Actions"
					description="Search for actions to perform..."
				>
					<Command value={value} onValueChange={setValue}>
						<CommandInput placeholder="Type a command or search..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							{fruits.map((fruit) => (
								<CommandItem
									key={fruit.value}
									value={fruit.value}
									onSelect={() => {
										setValue(fruit.value)
										setOpen(false)
									}}
								>
									{fruit.label}
								</CommandItem>
							))}
						</CommandList>
					</Command>
				</CommandDialog>
			</>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"CommandDialog with custom title and description text.",
			},
		},
	},
}

export const WithCloseButton: Story = {
	args: {
		children: undefined,
	},
	render: (_args) => {
		const [open, setOpen] = React.useState(false)
		const [value, setValue] = React.useState<string>("")

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Command Menu</Button>
				<CommandDialog
					open={open}
					onOpenChange={setOpen}
					showCloseButton
				>
					<Command value={value} onValueChange={setValue}>
						<CommandInput placeholder="Type a command or search..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							{fruits.map((fruit) => (
								<CommandItem
									key={fruit.value}
									value={fruit.value}
									onSelect={() => {
										setValue(fruit.value)
										setOpen(false)
									}}
								>
									{fruit.label}
								</CommandItem>
							))}
						</CommandList>
					</Command>
				</CommandDialog>
			</>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"CommandDialog with a visible close button in the top-right corner.",
			},
		},
	},
}
