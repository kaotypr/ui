import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Combobox,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxSeparator,
	ComboboxEmpty,
} from "~/components/ui/combobox"

const meta = {
	title: "UI/Combobox/ComboboxSeparator",
	component: ComboboxSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A visual separator element that is accessible to screen readers. Must be used within ComboboxContent.

Use to visually separate items or groups in the combobox list.

This component is built on top of [Base UI Combobox.Separator](https://base-ui.com/react/components/combobox).`,
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
} satisfies Meta<typeof ComboboxSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		const items = [
			{ label: "Apple", value: "apple", category: "fruit" },
			{ label: "Banana", value: "banana", category: "fruit" },
			{ label: "Orange", value: "orange", category: "fruit" },
			{ label: "Carrot", value: "carrot", category: "vegetable" },
			{ label: "Broccoli", value: "broccoli", category: "vegetable" },
		]

		return (
			<div className="w-[300px]">
				<Combobox
					items={items}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select an item..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof items)[number], index: number) => {
								const prevItem = items[index - 1]
								const showSeparator = prevItem && prevItem.category !== item.category

								return (
									<React.Fragment key={item.value}>
										{showSeparator && <ComboboxSeparator {...args} />}
										<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
									</React.Fragment>
								)
							}}
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
				story: "Default ComboboxSeparator used to visually divide items by category.",
			},
		},
	},
}

export const BetweenSections: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		const recentItems = [
			{ label: "Apple", value: "apple" },
			{ label: "Banana", value: "banana" },
		]

		const allItems = [
			{ label: "Cherry", value: "cherry" },
			{ label: "Date", value: "date" },
			{ label: "Elderberry", value: "elderberry" },
			{ label: "Fig", value: "fig" },
		]

		const combinedItems = [...recentItems, ...allItems]

		return (
			<div className="w-[300px]">
				<Combobox
					items={combinedItems}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof combinedItems)[number], index: number) => (
								<React.Fragment key={item.value}>
									{index === recentItems.length && <ComboboxSeparator />}
									<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
								</React.Fragment>
							)}
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
				story: "ComboboxSeparator used to divide recent items from all items.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		const items = [
			{ label: "Apple", value: "apple" },
			{ label: "Banana", value: "banana" },
			{ label: "Cherry", value: "cherry" },
			{ label: "Date", value: "date" },
		]

		return (
			<div className="w-[300px]">
				<Combobox
					items={items}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof items)[number], index: number) => (
								<React.Fragment key={item.value}>
									{index === 2 && <ComboboxSeparator className="bg-primary/20 my-2 h-0.5" />}
									<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
								</React.Fragment>
							)}
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
				story: "ComboboxSeparator with custom styling applied.",
			},
		},
	},
}
