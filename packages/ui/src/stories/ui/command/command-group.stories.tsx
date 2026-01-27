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
	title: "UI/Command/CommandGroup",
	component: CommandGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related command items together with a heading. Must be used within CommandList.

Groups items together with the given heading. Groups will not unmount from the DOM, rather the hidden attribute is applied to hide it from view when filtered out.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk).`,
			},
		},
	},
	argTypes: {
		// cmdk Props
		heading: {
			description: "The heading text for the group.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof CommandGroup>

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
						{groupedCommands.map((group) => (
							<CommandGroup {...args} key={group.heading} heading={group.heading}>
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
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default CommandGroup with a heading and grouped items.",
			},
		},
	},
}

export const MultipleGroups: Story = {
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
				heading: "Vegetables",
				items: [
					{ label: "Carrot", value: "carrot" },
					{ label: "Broccoli", value: "broccoli" },
					{ label: "Spinach", value: "spinach" },
				],
			},
			{
				heading: "Grains",
				items: [
					{ label: "Rice", value: "rice" },
					{ label: "Wheat", value: "wheat" },
					{ label: "Oats", value: "oats" },
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
					"Multiple CommandGroups with separators between them.",
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
						{groupedCommands.map((group) => (
							<CommandGroup
								key={group.heading}
								heading={group.heading}
								className="border-border border-b pb-2 last:border-b-0"
							>
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
						))}
					</CommandList>
				</Command>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "CommandGroup with custom styling applied to the group container.",
			},
		},
	},
}
