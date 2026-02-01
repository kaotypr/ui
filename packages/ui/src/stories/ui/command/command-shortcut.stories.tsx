import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandItem,
	CommandShortcut,
} from "~/components/ui/command"

const items = [
	{ label: "New File", value: "new-file", shortcut: "⌘N" },
	{ label: "Open File", value: "open-file", shortcut: "⌘O" },
	{ label: "Save File", value: "save-file", shortcut: "⌘S" },
	{ label: "Close File", value: "close-file", shortcut: "⌘W" },
	{ label: "Find", value: "find", shortcut: "⌘F" },
]

const meta = {
	title: "UI/Command/CommandShortcut",
	component: CommandShortcut,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays keyboard shortcuts for commands. Must be used within CommandItem.

The shortcut text is displayed on the right side of the command item and styled appropriately.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk).`,
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
} satisfies Meta<typeof CommandShortcut>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{items.map((item) => (
							<CommandItem
								key={item.value}
								value={item.value}
								onSelect={() => setValue(item.value)}
							>
								{item.label}
								<CommandShortcut {...args}>{item.shortcut}</CommandShortcut>
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default CommandShortcut displaying keyboard shortcuts.",
			},
		},
	},
}

export const WithMacShortcuts: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const macItems = [
			{ label: "Copy", value: "copy", shortcut: "⌘C" },
			{ label: "Paste", value: "paste", shortcut: "⌘V" },
			{ label: "Cut", value: "cut", shortcut: "⌘X" },
			{ label: "Undo", value: "undo", shortcut: "⌘Z" },
			{ label: "Redo", value: "redo", shortcut: "⇧⌘Z" },
		]

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{macItems.map((item) => (
							<CommandItem
								key={item.value}
								value={item.value}
								onSelect={() => setValue(item.value)}
							>
								{item.label}
								<CommandShortcut>{item.shortcut}</CommandShortcut>
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "CommandShortcut with Mac-style keyboard shortcuts.",
			},
		},
	},
}

export const WithWindowsShortcuts: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const windowsItems = [
			{ label: "Copy", value: "copy", shortcut: "Ctrl+C" },
			{ label: "Paste", value: "paste", shortcut: "Ctrl+V" },
			{ label: "Cut", value: "cut", shortcut: "Ctrl+X" },
			{ label: "Undo", value: "undo", shortcut: "Ctrl+Z" },
			{ label: "Redo", value: "redo", shortcut: "Ctrl+Y" },
		]

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{windowsItems.map((item) => (
							<CommandItem
								key={item.value}
								value={item.value}
								onSelect={() => setValue(item.value)}
							>
								{item.label}
								<CommandShortcut>{item.shortcut}</CommandShortcut>
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "CommandShortcut with Windows-style keyboard shortcuts.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{items.map((item) => (
							<CommandItem
								key={item.value}
								value={item.value}
								onSelect={() => setValue(item.value)}
							>
								{item.label}
								<CommandShortcut className="text-xs font-mono">{item.shortcut}</CommandShortcut>
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "CommandShortcut with custom styling applied.",
			},
		},
	},
}
