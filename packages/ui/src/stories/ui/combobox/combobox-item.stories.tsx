import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { StarIcon, HeartIcon, CircleIcon } from "@phosphor-icons/react"
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

const meta = {
	title: "UI/Combobox/ComboboxItem",
	component: ComboboxItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual item in the combobox list. Must be used within ComboboxList.

Each item must have a unique value to identify it. The item automatically displays a check indicator when selected.

This component is built on top of [Base UI Combobox.Item](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		value: {
			description: "A unique value that identifies this item.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "null" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description: "Whether the component should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		index: {
			description: "The index of the item in the list. Improves performance when specified.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		onClick: {
			description: "An optional click handler for the item when selected.",
			table: {
				type: { summary: "MouseEventHandler<HTMLDivElement>" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onClick",
		},
		children: {
			description: "The content to display inside the item.",
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
} satisfies Meta<typeof ComboboxItem>

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
								<ComboboxItem {...args} value={item.value}>
									{item.label}
								</ComboboxItem>
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
				story: "Default ComboboxItem displaying text content.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		const iconFruits = [
			{ label: "Apple", value: "apple", icon: StarIcon },
			{ label: "Orange", value: "orange", icon: HeartIcon },
			{ label: "Grape", value: "grape", icon: CircleIcon },
		]

		return (
			<div className="w-[300px]">
				<Combobox
					items={iconFruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof iconFruits)[number]) => (
								<ComboboxItem value={item.value}>
									<item.icon className="size-4" />
									{item.label}
								</ComboboxItem>
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
				story: "ComboboxItem with an icon displayed alongside the label.",
			},
		},
	},
}

export const DisabledItem: Story = {
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
								<ComboboxItem value={item.value} disabled={item.value === "banana"}>
									{item.label}
									{item.value === "banana" && " (unavailable)"}
								</ComboboxItem>
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
				story: "ComboboxItem in a disabled state cannot be selected.",
			},
		},
	},
}

export const WithDescription: Story = {
	render: () => {
		const [value, setValue] = React.useState<string | null>(null)

		const detailedFruits = [
			{ label: "Apple", value: "apple", description: "Crispy and sweet" },
			{ label: "Banana", value: "banana", description: "Rich in potassium" },
			{ label: "Orange", value: "orange", description: "High in vitamin C" },
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
									<div className="flex flex-col gap-0.5">
										<span className="font-medium">{item.label}</span>
										<span className="text-muted-foreground text-xs">{item.description}</span>
									</div>
								</ComboboxItem>
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
				story: "ComboboxItem with a label and description.",
			},
		},
	},
}
