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
	title: "UI/Combobox/ComboboxContent",
	component: ComboboxContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the combobox popup content. Must be used within a Combobox component.

This component wraps Base UI's Combobox.Portal, Combobox.Positioner, and Combobox.Popup.

This component is built on top of [Base UI Combobox.Popup](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Position Props
		side: {
			description: "Which side of the anchor element to align the popup against.",
			table: {
				type: { summary: '"top" | "bottom" | "left" | "right"' },
				defaultValue: { summary: "bottom" },
				category: "Position",
			},
			control: { type: "select" },
			options: ["top", "bottom", "left", "right"],
		},
		sideOffset: {
			description: "Distance between the anchor and the popup in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "6" },
				category: "Position",
			},
			control: { type: "number" },
		},
		align: {
			description: "How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: "start" },
				category: "Position",
			},
			control: { type: "select" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description: "Additional offset along the alignment axis in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Position",
			},
			control: { type: "number" },
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
} satisfies Meta<typeof ComboboxContent>

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
					<ComboboxContent {...args}>
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
				story: "Default ComboboxContent with standard positioning.",
			},
		},
	},
}

export const TopSide: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="mt-48 w-[300px]">
				<Combobox
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent {...args}>
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
		side: "top",
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxContent positioned above the input.",
			},
		},
	},
}

export const WithOffset: Story = {
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
					<ComboboxContent {...args}>
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
		sideOffset: 16,
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxContent with increased side offset.",
			},
		},
	},
}

export const CenterAligned: Story = {
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
					<ComboboxContent {...args}>
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
		align: "center",
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxContent with center alignment.",
			},
		},
	},
}
