import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Combobox,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxValue,
	ComboboxEmpty,
} from "~/components/ui/combobox"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
]

const meta = {
	title: "UI/Combobox/ComboboxValue",
	component: ComboboxValue,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays the current selected value of the combobox. Can be used within a custom trigger setup.

This component doesn't render its own HTML element. It displays the selected value or a placeholder when no value is selected.

This component is built on top of [Base UI Combobox.Value](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		placeholder: {
			description: "The placeholder value to display when no value is selected.",
			table: {
				type: { summary: "ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		// Props
		children: {
			description: "A render function that receives the selected value and returns a ReactNode.",
			table: {
				type: { summary: "ReactNode | ((selectedValue: any) => ReactNode)" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ComboboxValue>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<div className="bg-muted mt-4 rounded-md p-3">
					<p className="text-muted-foreground mb-1 text-xs font-medium">Current Value:</p>
					<Combobox
						items={fruits}
						value={value}
						onValueChange={(newValue) => {
							setValue(newValue as string | null)
						}}
					>
						<div className="text-foreground text-sm font-medium">
							<ComboboxValue {...args} placeholder="Nothing selected">
								{(selectedValue: string) => {
									const fruit = fruits.find((f) => f.value === selectedValue)
									return fruit?.label || selectedValue
								}}
							</ComboboxValue>
						</div>
					</Combobox>
				</div>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxValue displaying the current selection with a custom render function.",
			},
		},
	},
}

export const WithPlaceholder: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<div className="bg-muted mt-4 rounded-md p-3">
					<p className="text-muted-foreground mb-1 text-xs font-medium">Selected Value Display:</p>
					<Combobox
						items={fruits}
						value={value}
						onValueChange={(newValue) => {
							setValue(newValue as string | null)
						}}
					>
						<div className="text-sm">
							<ComboboxValue
								placeholder={
									<span className="text-muted-foreground italic">No fruit selected</span>
								}
							/>
						</div>
					</Combobox>
				</div>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxValue with a styled placeholder when no value is selected.",
			},
		},
	},
}

export const CustomRenderFunction: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>("apple")

		const detailedFruits = [
			{ label: "Apple", value: "apple", emoji: "🍎", color: "text-red-500" },
			{
				label: "Banana",
				value: "banana",
				emoji: "🍌",
				color: "text-yellow-500",
			},
			{
				label: "Orange",
				value: "orange",
				emoji: "🍊",
				color: "text-orange-500",
			},
			{ label: "Grape", value: "grape", emoji: "🍇", color: "text-purple-500" },
			{ label: "Mango", value: "mango", emoji: "🥭", color: "text-amber-500" },
		]

		return (
			<div className="w-[300px]">
				<Combobox
					items={detailedFruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof detailedFruits)[number]) => (
								<ComboboxItem value={item.value}>
									<span className="mr-2">{item.emoji}</span>
									{item.label}
								</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<div className="bg-muted mt-4 rounded-md p-3">
					<p className="text-muted-foreground mb-1 text-xs font-medium">Custom Value Display:</p>
					<Combobox
						items={detailedFruits}
						value={value}
						onValueChange={(newValue) => {
							setValue(newValue as string | null)
						}}
					>
						<div className="text-sm">
							<ComboboxValue placeholder="Select a fruit">
								{(selectedValue: string) => {
									const fruit = detailedFruits.find((f) => f.value === selectedValue)
									if (!fruit) return selectedValue
									return (
										<span className={`font-medium ${fruit.color}`}>
											{fruit.emoji} {fruit.label}
										</span>
									)
								}}
							</ComboboxValue>
						</div>
					</Combobox>
				</div>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxValue with a custom render function that displays emoji and colored text.",
			},
		},
	},
}
