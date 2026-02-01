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

const meta = {
	title: "UI/Combobox/ComboboxInput",
	component: ComboboxInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The text input element for the combobox. Must be used within a Combobox component.

This component is built on top of [Base UI Combobox.Input](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Custom Props (from @kaotypr/ui)
		showTrigger: {
			description: "Whether to show the trigger button (dropdown arrow) inside the input.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		showClear: {
			description: "Whether to show the clear button when a value is selected.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
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
} satisfies Meta<typeof ComboboxInput>

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
					<ComboboxInput {...args} />
					<ComboboxContent>
						<ComboboxList>
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
		placeholder: "Select a fruit...",
	},
	parameters: {
		docs: {
			description: {
				story: "Default ComboboxInput with placeholder text and trigger button.",
			},
		},
	},
}

export const WithClearButton: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>("apple")

		return (
			<div className="w-[300px]">
				<Combobox
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput {...args} />
					<ComboboxContent>
						<ComboboxList>
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
		placeholder: "Select a fruit...",
		showClear: true,
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxInput with a clear button that appears when a value is selected.",
			},
		},
	},
}

export const WithoutTrigger: Story = {
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
					<ComboboxInput {...args} />
					<ComboboxContent>
						<ComboboxList>
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
		placeholder: "Select a fruit...",
		showTrigger: false,
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxInput without the dropdown trigger button.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>("apple")

		return (
			<div className="w-[300px]">
				<Combobox
					items={fruits}
					value={value}
					disabled
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput {...args} />
					<ComboboxContent>
						<ComboboxList>
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
		placeholder: "Select a fruit...",
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxInput in a disabled state.",
			},
		},
	},
}
