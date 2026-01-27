import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { CircleIcon, LeafIcon } from "@phosphor-icons/react"
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
]

const meta = {
	title: "UI/Combobox/ComboboxLabel",
	component: ComboboxLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible label for a ComboboxGroup. Must be used within ComboboxGroup.

The label is automatically associated with its parent group for accessibility purposes.

This component is built on top of [Base UI Combobox.GroupLabel](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Props
		children: {
			description: "The content to display as the group label.",
			table: {
				type: { summary: "ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
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
} satisfies Meta<typeof ComboboxLabel>

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
					<ComboboxInput placeholder="Select an item..." />
					<ComboboxContent>
						<ComboboxList>
							{groupedFruits.map((group) => (
								<ComboboxGroup key={group.value} items={group.items}>
									<ComboboxLabel {...args}>{group.value}</ComboboxLabel>
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
				story: "Default ComboboxLabel displaying text content.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		const iconGroups = [
			{
				value: "Fruits",
				icon: CircleIcon,
				items: [
					{ label: "Apple", value: "apple" },
					{ label: "Banana", value: "banana" },
				],
			},
			{
				value: "Vegetables",
				icon: LeafIcon,
				items: [
					{ label: "Carrot", value: "carrot" },
					{ label: "Broccoli", value: "broccoli" },
				],
			},
		]

		return (
			<div className="w-[300px]">
				<Combobox
					items={iconGroups}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select an item..." />
					<ComboboxContent>
						<ComboboxList>
							{iconGroups.map((group) => (
								<ComboboxGroup key={group.value} items={group.items}>
									<ComboboxLabel className="flex items-center gap-1.5">
										<group.icon className="size-3.5" />
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
						<ComboboxEmpty>No items found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxLabel with an icon alongside the text.",
			},
		},
	},
}

export const CustomStyling: Story = {
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
					<ComboboxInput placeholder="Select an item..." />
					<ComboboxContent>
						<ComboboxList>
							{groupedFruits.map((group) => (
								<ComboboxGroup key={group.value} items={group.items}>
									<ComboboxLabel className="bg-muted/50 text-primary -mx-1 rounded px-3 py-1 text-xs font-bold uppercase tracking-wider">
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
						<ComboboxEmpty>No items found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxLabel with custom styling for a distinct appearance.",
			},
		},
	},
}
