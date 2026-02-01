import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { CircleIcon, StarIcon } from "@phosphor-icons/react"
import {
	Combobox,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxChips,
	ComboboxChip,
	ComboboxChipsInput,
	ComboboxEmpty,
	useComboboxAnchor,
} from "~/components/ui/combobox"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
]

const meta = {
	title: "UI/Combobox/ComboboxChip",
	component: ComboboxChip,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual chip representing a selected value in a multiselectable combobox. Must be used within ComboboxChips.

Each chip displays the value and includes a remove button by default.

This component is built on top of [Base UI Combobox.Chip](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Custom Props
		showRemove: {
			description: "Whether to show the remove button on the chip.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		children: {
			description: "The content to display inside the chip.",
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
} satisfies Meta<typeof ComboboxChip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string[]>(["apple", "banana"])
		const chipsRef = useComboboxAnchor()

		return (
			<div className="w-[350px]">
				<Combobox
					items={fruits}
					multiple
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string[])
					}}
				>
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
							const fruit = fruits.find((f) => f.value === val)
							return (
								<ComboboxChip {...args} key={val}>
									{fruit?.label || val}
								</ComboboxChip>
							)
						})}
						<ComboboxChipsInput />
					</ComboboxChips>
					<ComboboxContent anchor={chipsRef}>
						<ComboboxList>
							{fruits.map((item) => (
								<ComboboxItem key={item.value} value={item.value}>
									{item.label}
								</ComboboxItem>
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
				story: "Default ComboboxChip with a label and remove button.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>(["apple", "banana"])
		const chipsRef = useComboboxAnchor()

		const iconFruits = [
			{ label: "Apple", value: "apple", icon: CircleIcon },
			{ label: "Banana", value: "banana", icon: StarIcon },
			{ label: "Orange", value: "orange", icon: StarIcon },
		]

		return (
			<div className="w-[350px]">
				<Combobox
					items={iconFruits}
					multiple
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string[])
					}}
				>
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
							const fruit = iconFruits.find((f) => f.value === val)
							const Icon = fruit?.icon || StarIcon
							return (
								<ComboboxChip key={val}>
									<Icon className="size-3" />
									{fruit?.label || val}
								</ComboboxChip>
							)
						})}
						<ComboboxChipsInput />
					</ComboboxChips>
					<ComboboxContent anchor={chipsRef}>
						<ComboboxList>
							{iconFruits.map((item) => (
								<ComboboxItem key={item.value} value={item.value}>
									<item.icon className="size-4" />
									{item.label}
								</ComboboxItem>
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
				story: "ComboboxChip with an icon displayed alongside the label.",
			},
		},
	},
}

export const WithoutRemoveButton: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>(["apple", "banana"])
		const chipsRef = useComboboxAnchor()

		return (
			<div className="w-[350px]">
				<Combobox
					items={fruits}
					multiple
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string[])
					}}
				>
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
							const fruit = fruits.find((f) => f.value === val)
							return (
								<ComboboxChip key={val} showRemove={false}>
									{fruit?.label || val}
								</ComboboxChip>
							)
						})}
						<ComboboxChipsInput />
					</ComboboxChips>
					<ComboboxContent anchor={chipsRef}>
						<ComboboxList>
							{fruits.map((item) => (
								<ComboboxItem key={item.value} value={item.value}>
									{item.label}
								</ComboboxItem>
							))}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<p className="text-muted-foreground mt-4 text-xs">
					Chips without remove buttons. Deselect items from the dropdown list.
				</p>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxChip without the remove button (showRemove=false).",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>(["apple", "banana", "orange"])
		const chipsRef = useComboboxAnchor()

		const colorMap: Record<string, string> = {
			apple: "bg-red-100 text-red-800",
			banana: "bg-yellow-100 text-yellow-800",
			orange: "bg-orange-100 text-orange-800",
			grape: "bg-purple-100 text-purple-800",
			mango: "bg-amber-100 text-amber-800",
		}

		return (
			<div className="w-[350px]">
				<Combobox
					items={fruits}
					multiple
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string[])
					}}
				>
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
							const fruit = fruits.find((f) => f.value === val)
							return (
								<ComboboxChip key={val} className={colorMap[val] || ""}>
									{fruit?.label || val}
								</ComboboxChip>
							)
						})}
						<ComboboxChipsInput />
					</ComboboxChips>
					<ComboboxContent anchor={chipsRef}>
						<ComboboxList>
							{fruits.map((item) => (
								<ComboboxItem key={item.value} value={item.value}>
									{item.label}
								</ComboboxItem>
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
				story: "ComboboxChip with custom colors based on the selected value.",
			},
		},
	},
}
