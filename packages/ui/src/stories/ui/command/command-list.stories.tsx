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
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Raspberry", value: "raspberry" },
]

const meta = {
	title: "UI/Command/CommandList",
	component: CommandList,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Container for command items and groups. Must be used within a Command component.

Contains items and groups. Animate height using the --cmdk-list-height CSS variable.

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
} satisfies Meta<typeof CommandList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList {...args}>
						<CommandEmpty>No results found.</CommandEmpty>
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
				story: "Default CommandList containing command items.",
			},
		},
	},
}

export const WithManyItems: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		const manyFruits = Array.from({ length: 20 }, (_, i) => ({
			label: `Fruit ${i + 1}`,
			value: `fruit-${i + 1}`,
		}))

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{manyFruits.map((fruit) => (
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
				story:
					"CommandList with many items, demonstrating scrolling behavior.",
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
					<CommandList className="max-h-48">
						<CommandEmpty>No results found.</CommandEmpty>
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
				story: "CommandList with custom max-height styling.",
			},
		},
	},
}
