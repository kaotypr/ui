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
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Blueberry", value: "blueberry" },
]

const meta = {
	title: "UI/Combobox/ComboboxChipsInput",
	component: ComboboxChipsInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The text input element for a multiselectable combobox with chips. Must be used within ComboboxChips.

This input sits alongside the chips in the container and allows users to type to filter the available options.

This component is built on top of [Base UI Combobox.Input](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		disabled: {
			description: "Whether the component should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		placeholder: {
			description: "Placeholder text displayed when the input is empty.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof ComboboxChipsInput>

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
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
								const fruit = fruits.find((f) => f.value === val)
								return (
									<ComboboxChip key={val}>
										{fruit?.label || val}
									</ComboboxChip>
								)
							})
						}
						<ComboboxChipsInput {...args} />
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
	args: {
		placeholder: "Select fruits...",
	},
	parameters: {
		docs: {
			description: {
				story: "Default ComboboxChipsInput with placeholder text.",
			},
		},
	},
}

export const WithChips: Story = {
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
									<ComboboxChip key={val}>
										{fruit?.label || val}
									</ComboboxChip>
								)
							})
						}
						<ComboboxChipsInput {...args} />
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
					The input expands as you type and shrinks when empty. It sits inline
					with the chips.
				</p>
			</div>
		)
	},
	args: {
		placeholder: "Add more...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"ComboboxChipsInput alongside existing chips, showing how the input adapts.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
		const [value, setValue] = React.useState<string[]>(["apple", "banana"])
		const chipsRef = useComboboxAnchor()

		return (
			<div className="w-[350px]">
				<Combobox
					items={fruits}
					multiple
					disabled
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string[])
					}}
				>
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
								const fruit = fruits.find((f) => f.value === val)
								return (
									<ComboboxChip key={val}>
										{fruit?.label || val}
									</ComboboxChip>
								)
							})
						}
						<ComboboxChipsInput placeholder="Select fruits..." />
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
				story: "ComboboxChipsInput in a disabled state.",
			},
		},
	},
}

export const CustomPlaceholder: Story = {
	render: () => {
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
					<ComboboxChips ref={chipsRef}>
						{value.map((val) => {
								const fruit = fruits.find((f) => f.value === val)
								return (
									<ComboboxChip key={val}>
										{fruit?.label || val}
									</ComboboxChip>
								)
							})
						}
						<ComboboxChipsInput placeholder="Type to search and add fruits..." />
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
				story: "ComboboxChipsInput with a descriptive placeholder.",
			},
		},
	},
}
