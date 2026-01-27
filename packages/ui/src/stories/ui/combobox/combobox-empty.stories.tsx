import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { MagnifyingGlassIcon, WarningIcon } from "@phosphor-icons/react"
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
	title: "UI/Combobox/ComboboxEmpty",
	component: ComboboxEmpty,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Renders its children only when the combobox list is empty (no items match the filter). Must be used within ComboboxContent.

This component announces changes politely to screen readers, making it accessible.

This component is built on top of [Base UI Combobox.Empty](https://base-ui.com/react/components/combobox).`,
			},
		},
	},
	argTypes: {
		// Props
		children: {
			description: "The content to display when the list is empty.",
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
} satisfies Meta<typeof ComboboxEmpty>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<p className="text-muted-foreground mb-2 text-sm">
					Type &quot;xyz&quot; to see the empty state
				</p>
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
								<ComboboxItem value={item.value}>
									{item.label}
								</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty {...args}>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default ComboboxEmpty with text content.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<p className="text-muted-foreground mb-2 text-sm">
					Type &quot;xyz&quot; to see the empty state
				</p>
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
								<ComboboxItem value={item.value}>
									{item.label}
								</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty {...args}>
							<div className="flex flex-col items-center gap-2 py-2">
								<MagnifyingGlassIcon className="text-muted-foreground size-6" />
								<span>No results found</span>
							</div>
						</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxEmpty with an icon and styled content.",
			},
		},
	},
}

export const WithSuggestion: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<p className="text-muted-foreground mb-2 text-sm">
					Type &quot;xyz&quot; to see the empty state
				</p>
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
								<ComboboxItem value={item.value}>
									{item.label}
								</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty {...args}>
							<div className="flex flex-col items-center gap-1 py-2 text-center">
								<WarningIcon className="text-muted-foreground size-5" />
								<span className="font-medium">No matches found</span>
								<span className="text-muted-foreground text-xs">
									Try a different search term
								</span>
							</div>
						</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxEmpty with a suggestion message for users.",
			},
		},
	},
}
