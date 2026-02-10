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

const groupedCommands = [
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

const meta = {
	title: "UI/Command/CommandSeparator",
	component: CommandSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A visual separator between command groups. Must be used within CommandList.

Visible when the search query is empty or alwaysRender is true, hidden otherwise.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk).`,
			},
		},
	},
	argTypes: {
		// cmdk Props
		alwaysRender: {
			description: "Whether to always render the separator, even when filtered.",
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
} satisfies Meta<typeof CommandSeparator>

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
						{groupedCommands.map((group, index) => (
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
								{index < groupedCommands.length - 1 && <CommandSeparator {...args} />}
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
				story: "Default CommandSeparator between command groups.",
			},
		},
	},
}

export const AlwaysRender: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{groupedCommands.map((group, index) => (
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
								{index < groupedCommands.length - 1 && <CommandSeparator alwaysRender />}
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
				story: "CommandSeparator with alwaysRender enabled, keeping it visible even when filtered.",
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
						{groupedCommands.map((group, index) => (
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
								{index < groupedCommands.length - 1 && <CommandSeparator className="my-2" />}
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
				story: "CommandSeparator with custom margin styling.",
			},
		},
	},
}
