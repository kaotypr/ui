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
import { FileIcon, FolderIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
]

const meta = {
	title: "UI/Command/CommandItem",
	component: CommandItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual command item. Must be used within CommandList.

Item that becomes active on pointer enter. You should provide a unique value for each item, but it will be automatically inferred from the textContent.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk).`,
			},
		},
	},
	argTypes: {
		// cmdk Props
		value: {
			description:
				"The unique value for the item. If not provided, it will be inferred from the textContent.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		keywords: {
			description: "Keywords to help with filtering. Keywords act as aliases for the item value.",
			table: {
				type: { summary: "string[]" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		disabled: {
			description: "Whether the item is disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		onSelect: {
			description: "Event handler called when the item is selected.",
			table: {
				type: { summary: "(value: string) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onSelect",
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
} satisfies Meta<typeof CommandItem>

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
						{fruits.map((fruit) => (
							<CommandItem
								{...args}
								key={fruit.value}
								value={fruit.value}
								onSelect={() => {
									setValue(fruit.value)
									args.onSelect?.(fruit.value)
								}}
							>
								{fruit.label}
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
				story: "Default CommandItem with text content.",
			},
		},
	},
}

export const WithIcons: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const items = [
			{ label: "Search", value: "search", icon: MagnifyingGlassIcon },
			{ label: "Files", value: "files", icon: FileIcon },
			{ label: "Folders", value: "folders", icon: FolderIcon },
		]

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{items.map((item) => {
							const Icon = item.icon
							return (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={() => setValue(item.value)}
								>
									<Icon />
									{item.label}
								</CommandItem>
							)
						})}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "CommandItem with icons displayed before the text.",
			},
		},
	},
}

export const WithShortcuts: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const items = [
			{ label: "New File", value: "new-file", shortcut: "⌘N" },
			{ label: "Open File", value: "open-file", shortcut: "⌘O" },
			{ label: "Save File", value: "save-file", shortcut: "⌘S" },
		]

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
				story: "CommandItem with keyboard shortcuts displayed on the right.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{fruits.map((fruit, index) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
								disabled={index === 1}
								onSelect={() => setValue(fruit.value)}
							>
								{fruit.label}
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
				story: "CommandItem with one item disabled.",
			},
		},
	},
}

export const WithKeywords: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const items = [
			{
				label: "Settings",
				value: "settings",
				keywords: ["preferences", "config", "options"],
			},
			{
				label: "Profile",
				value: "profile",
				keywords: ["account", "user", "me"],
			},
		]

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
								keywords={item.keywords}
								onSelect={() => setValue(item.value)}
							>
								{item.label}
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
				story: "CommandItem with keywords for improved search matching.",
			},
		},
	},
}
