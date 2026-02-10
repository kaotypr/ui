import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandItem,
} from "~/components/ui/command"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
]

const meta = {
	title: "UI/Command/CommandEmpty",
	component: CommandEmpty,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Renders its children only when there are no results for the search query. Must be used within CommandList.

Automatically renders when there are no results for the search query.

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
} satisfies Meta<typeof CommandEmpty>

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
						<CommandEmpty {...args}>No results found.</CommandEmpty>
						{fruits.map((fruit) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
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
				story: "Default CommandEmpty that appears when no results match the search query.",
			},
		},
	},
}

export const WithCustomMessage: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>
							<div className="flex flex-col items-center gap-2 py-6">
								<p className="text-sm font-medium">No matches found</p>
								<p className="text-xs text-muted-foreground">Try a different search term</p>
							</div>
						</CommandEmpty>
						{fruits.map((fruit) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
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
				story: "CommandEmpty with custom content and styling for the empty state.",
			},
		},
	},
}

export const AlwaysVisible: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		// Use a filter that excludes all items to always show empty state
		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue} filter={() => 0}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found. Try searching for something else.</CommandEmpty>
						{fruits.map((fruit) => (
							<CommandItem
								key={fruit.value}
								value={fruit.value}
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
				story: "CommandEmpty always visible when using a custom filter that excludes all items.",
			},
		},
	},
}
