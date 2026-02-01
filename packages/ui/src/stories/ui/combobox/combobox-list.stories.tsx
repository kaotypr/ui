import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Combobox,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxEmpty,
} from "~/components/ui/combobox"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
]

const manyFruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Pineapple", value: "pineapple" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Raspberry", value: "raspberry" },
	{ label: "Blackberry", value: "blackberry" },
	{ label: "Cherry", value: "cherry" },
	{ label: "Peach", value: "peach" },
	{ label: "Pear", value: "pear" },
	{ label: "Plum", value: "plum" },
	{ label: "Kiwi", value: "kiwi" },
]

const meta = {
	title: "UI/Combobox/ComboboxList",
	component: ComboboxList,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A list container for the combobox items. Must be used within ComboboxContent.

The list renders items using a render function pattern, where you pass a function as children that receives each item and returns the rendered element.

This component is built on top of [Base UI Combobox.List](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		children: {
			description: "A render function that receives each item and returns a ReactNode.",
			table: {
				type: { summary: "ReactNode | ((item: any, index: number) => ReactNode)" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
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
} satisfies Meta<typeof ComboboxList>

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
						<ComboboxList {...args}>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default ComboboxList with a render function for items.",
			},
		},
	},
}

export const ScrollableList: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					items={manyFruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList {...args}>
							{(item: (typeof manyFruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxList with many items, demonstrating scrollable behavior.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
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
						<ComboboxList {...args}>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	args: {
		className: "bg-muted/50",
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxList with custom className applied.",
			},
		},
	},
}
