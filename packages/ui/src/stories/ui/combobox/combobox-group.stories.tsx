import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Combobox,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxGroup,
	ComboboxLabel,
	ComboboxEmpty,
} from "~/components/ui/combobox"

const groupedFruits = [
	{
		value: "Fruits",
		items: [
			{ label: "Apple", value: "apple" },
			{ label: "Banana", value: "banana" },
			{ label: "Orange", value: "orange" },
			{ label: "Grape", value: "grape" },
			{ label: "Mango", value: "mango" },
		],
	},
	{
		value: "Berries",
		items: [
			{ label: "Strawberry", value: "strawberry" },
			{ label: "Blueberry", value: "blueberry" },
			{ label: "Raspberry", value: "raspberry" },
			{ label: "Blackberry", value: "blackberry" },
		],
	},
]

const meta = {
	title: "UI/Combobox/ComboboxGroup",
	component: ComboboxGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Groups related items with a corresponding label. Must be used within ComboboxList.

Use together with ComboboxLabel to provide an accessible heading for each group.

This component is built on top of [Base UI Combobox.Group](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		items: {
			description:
				"Items to be rendered within this group. When provided, child Collection components will use these items.",
			table: {
				type: { summary: "any[]" },
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
} satisfies Meta<typeof ComboboxGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					items={groupedFruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{groupedFruits.map((group) => (
								<ComboboxGroup {...args} key={group.value} items={group.items}>
									<ComboboxLabel>{group.value}</ComboboxLabel>
									{group.items.map((item) => (
										<ComboboxItem key={item.value} value={item.value}>
											{item.label}
										</ComboboxItem>
									))}
								</ComboboxGroup>
							))}
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
				story: "Default ComboboxGroup with a label and grouped items.",
			},
		},
	},
}

export const MultipleGroups: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		const produceGroups = [
			{
				value: "Fruits",
				items: [
					{ label: "Apple", value: "apple" },
					{ label: "Banana", value: "banana" },
					{ label: "Orange", value: "orange" },
				],
			},
			{
				value: "Vegetables",
				items: [
					{ label: "Carrot", value: "carrot" },
					{ label: "Broccoli", value: "broccoli" },
					{ label: "Spinach", value: "spinach" },
				],
			},
			{
				value: "Grains",
				items: [
					{ label: "Rice", value: "rice" },
					{ label: "Wheat", value: "wheat" },
					{ label: "Oats", value: "oats" },
				],
			},
		]

		return (
			<div className="w-[300px]">
				<Combobox
					items={produceGroups}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select an item..." />
					<ComboboxContent>
						<ComboboxList>
							{produceGroups.map((group) => (
								<ComboboxGroup key={group.value} items={group.items}>
									<ComboboxLabel>{group.value}</ComboboxLabel>
									{group.items.map((item) => (
										<ComboboxItem key={item.value} value={item.value}>
											{item.label}
										</ComboboxItem>
									))}
								</ComboboxGroup>
							))}
						</ComboboxList>
						<ComboboxEmpty>No items found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Multiple ComboboxGroups organizing items by category.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					items={groupedFruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{groupedFruits.map((group) => (
								<ComboboxGroup
									key={group.value}
									items={group.items}
									className="border-border border-b pb-2 last:border-b-0"
								>
									<ComboboxLabel className="text-primary font-semibold">
										{group.value}
									</ComboboxLabel>
									{group.items.map((item) => (
										<ComboboxItem key={item.value} value={item.value}>
											{item.label}
										</ComboboxItem>
									))}
								</ComboboxGroup>
							))}
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
				story: "ComboboxGroup with custom styling applied to the group container.",
			},
		},
	},
}
