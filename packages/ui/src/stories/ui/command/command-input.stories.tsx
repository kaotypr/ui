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
]

const meta = {
	title: "UI/Command/CommandInput",
	component: CommandInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The search input for filtering commands. Must be used within a Command component.

All props are forwarded to the underlying input element. Can be controlled with the value and onValueChange props.

This component is built on top of [cmdk](https://github.com/pacocoursey/cmdk).`,
			},
		},
	},
	argTypes: {
		// Input Props
		placeholder: {
			description: "Placeholder text for the input.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		value: {
			description: "The controlled value of the input.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		defaultValue: {
			description: "The uncontrolled default value of the input.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description: "Event handler called when the input value changes.",
			table: {
				type: { summary: "(value: string) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		disabled: {
			description: "Whether the input is disabled.",
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
} satisfies Meta<typeof CommandInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput {...args} />
					<CommandList>
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
				story: "Default CommandInput with placeholder text.",
			},
		},
	},
}

export const WithPlaceholder: Story = {
	render: () => {
		const [value, setValue] = React.useState<string>("")

		return (
			<div className="w-[300px]">
				<Command value={value} onValueChange={setValue}>
					<CommandInput placeholder="Search fruits..." />
					<CommandList>
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
				story: "CommandInput with custom placeholder text.",
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
					<CommandInput placeholder="Type a command or search..." disabled />
					<CommandList>
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
				story: "CommandInput in a disabled state.",
			},
		},
	},
}
