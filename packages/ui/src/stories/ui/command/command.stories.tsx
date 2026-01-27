import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandSeparator,
} from "~/components/ui/command"

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
	title: "UI/Command",
	component: Command,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A command menu component that filters and sorts items automatically. Can be used as an accessible combobox or command palette.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk).

### Component Parts
- [CommandDialog](?path=/story/ui-command-commanddialog--default): A dialog wrapper for the command menu.
- [CommandInput](?path=/story/ui-command-commandinput--default): The search input for filtering commands.
- [CommandList](?path=/story/ui-command-commandlist--default): Container for command items and groups.
- [CommandEmpty](?path=/story/ui-command-commandempty--default): Renders when no results are found.
- [CommandGroup](?path=/story/ui-command-commandgroup--default): Groups related command items together.
- [CommandItem](?path=/story/ui-command-commanditem--default): An individual command item.
- [CommandShortcut](?path=/story/ui-command-commandshortcut--default): Displays keyboard shortcuts for commands.
- [CommandSeparator](?path=/story/ui-command-commandseparator--default): A visual separator between command groups.`,
			},
		},
	},
	argTypes: {
		// cmdk Props
		value: {
			description:
				"The controlled value of the selected item. Use with onValueChange.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		defaultValue: {
			description:
				"The uncontrolled default value of the selected item.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description:
				"Event handler called when the selected value changes.",
			table: {
				type: { summary: "(value: string) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		filter: {
			description:
				"Custom filter function that is called to rank each item. Receives (value, search, keywords) and returns a number (0 = filtered out, 1 = included).",
			table: {
				type: {
					summary:
						"(value: string, search: string, keywords?: string[]) => number",
				},
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		shouldFilter: {
			description:
				"Whether to filter items. Set to false to disable filtering and sorting.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		loop: {
			description:
				"Whether arrow keys wrap around the list (when you reach the end, it goes back to the first item).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
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
} satisfies Meta<typeof Command>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command
					{...args}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue)
						args.onValueChange?.(newValue)
					}}
				>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{fruits.map((fruit) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
								onSelect={() => {
									setValue(fruit.value)
									args.onValueChange?.(fruit.value)
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
				story:
					"Default command menu with searchable input and list of items.",
			},
		},
	},
}

export const WithGroups: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const commands = [
			{
				heading: "Fruits",
				items: [
					{ label: "Apple", value: "apple" },
					{ label: "Banana", value: "banana" },
					{ label: "Orange", value: "orange" },
				],
			},
			{
				heading: "Berries",
				items: [
					{ label: "Strawberry", value: "strawberry" },
					{ label: "Blueberry", value: "blueberry" },
					{ label: "Raspberry", value: "raspberry" },
				],
			},
		]

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{commands.map((group, index) => (
							<React.Fragment key={group.heading}>
								<CommandGroup heading={group.heading}>
									{group.items.map((item) => (
										<CommandItem
											key={item.value}
											value={item.value}
											onSelect={() => setValue(item.value)}
										>
											{item.label}
										</CommandItem>
									))}
								</CommandGroup>
								{index < commands.length - 1 && <CommandSeparator />}
							</React.Fragment>
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Command menu with grouped items and separators between groups.",
			},
		},
	},
}

export const WithLoop: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command
					{...args}
					loop
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue)
						args.onValueChange?.(newValue)
					}}
				>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{fruits.map((fruit) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
								onSelect={() => {
									setValue(fruit.value)
									args.onValueChange?.(fruit.value)
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
	args: {
		loop: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Command menu with loop enabled - arrow keys wrap around the list.",
			},
		},
	},
}

export const WithoutFiltering: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command
					{...args}
					shouldFilter={false}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue)
						args.onValueChange?.(newValue)
					}}
				>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{fruits.map((fruit) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
								onSelect={() => {
									setValue(fruit.value)
									args.onValueChange?.(fruit.value)
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
	args: {
		shouldFilter: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Command menu with filtering disabled - all items are always shown.",
			},
		},
	},
}
