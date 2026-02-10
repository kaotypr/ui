import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
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
	{ label: "Pineapple", value: "pineapple" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Blueberry", value: "blueberry" },
]

const meta = {
	title: "UI/Combobox/ComboboxChips",
	component: ComboboxChips,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for chips in a multiselectable combobox. Must be used within a Combobox component with \`multiple\` prop enabled.

The ComboboxChips component uses a render function pattern to display the selected values as chips.

This component is built on top of [Base UI Combobox.Chips](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Props
		children: {
			description:
				"A render function that receives the selected values array and returns ReactNode.",
			table: {
				type: { summary: "(value: any[]) => ReactNode" },
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
} satisfies Meta<typeof ComboboxChips>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])
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
					<ComboboxChips {...args} ref={chipsRef}>
						{value.map((val) => {
							const fruit = fruits.find((f) => f.value === val)
							return <ComboboxChip key={val}>{fruit?.label || val}</ComboboxChip>
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
				story:
					"Default ComboboxChips with multiple selection enabled, displaying selected items as removable chips.",
			},
		},
	},
}

export const WithPreselectedValues: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>(["apple", "banana", "grape"])
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
							return <ComboboxChip key={val}>{fruit?.label || val}</ComboboxChip>
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
				story: "ComboboxChips with pre-selected values displayed as chips.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>(["apple", "mango"])
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
					<ComboboxChips ref={chipsRef} className="border-primary/50 focus-within:border-primary">
						{value.map((val) => {
							const fruit = fruits.find((f) => f.value === val)
							return (
								<ComboboxChip key={val} className="bg-primary/10 text-primary">
									{fruit?.label || val}
								</ComboboxChip>
							)
						})}
						<ComboboxChipsInput placeholder="Add fruits..." />
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
				story: "ComboboxChips with custom styling applied to the container and chips.",
			},
		},
	},
}

export const ManySelections: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>([
			"apple",
			"banana",
			"orange",
			"grape",
			"mango",
			"strawberry",
		])
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
							return <ComboboxChip key={val}>{fruit?.label || val}</ComboboxChip>
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
				story:
					"ComboboxChips with many selections, demonstrating how chips wrap to multiple lines.",
			},
		},
	},
}
