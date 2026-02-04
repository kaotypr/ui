import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { CaretUpDownIcon } from "@phosphor-icons/react"
import {
	Combobox,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxTrigger,
	ComboboxEmpty,
} from "~/components/ui/combobox"
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "~/components/ui/input-group"

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Orange", value: "orange" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
]

const meta = {
	title: "UI/Combobox/ComboboxTrigger",
	component: ComboboxTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that opens the combobox popup. Must be used within a Combobox component.

The trigger automatically displays a dropdown icon and toggles the popup open/closed state.

This component is built on top of [Base UI Combobox.Trigger](https://base-ui.com/react/components/combobox).`,
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
		nativeButton: {
			description:
				"Whether the component renders a native <button> element when replacing it via the render prop.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
		},
		// Props
		children: {
			description: "The content to display inside the trigger.",
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
} satisfies Meta<typeof ComboboxTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
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
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<p className="text-muted-foreground mt-4 text-xs">
					Note: ComboboxTrigger is built into ComboboxInput by default. The trigger button with the
					dropdown icon is automatically included.
				</p>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default ComboboxTrigger is built into ComboboxInput and shows a dropdown icon.",
			},
		},
	},
}

export const StandaloneTrigger: Story = {
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
					<InputGroup className="w-auto">
						<InputGroupInput
							placeholder="Select a fruit..."
							readOnly
							value={value ? fruits.find((f) => f.value === value)?.label || "" : ""}
						/>
						<InputGroupAddon align="inline-end">
							<InputGroupButton size="icon-xs" variant="ghost" render={<ComboboxTrigger />}>
								<CaretUpDownIcon className="size-4" />
							</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
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
	parameters: {
		docs: {
			description: {
				story: "ComboboxTrigger used as a standalone button with custom icon.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => {
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
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<p className="text-muted-foreground mt-4 text-xs">
					When the combobox is disabled, the trigger button is also disabled.
				</p>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "ComboboxTrigger in a disabled state.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
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
					<InputGroup className="w-auto">
						<InputGroupInput
							placeholder="Select a fruit..."
							readOnly
							value={value ? fruits.find((f) => f.value === value)?.label || "" : ""}
						/>
						<InputGroupAddon align="inline-end">
							<InputGroupButton
								size="icon-xs"
								variant="ghost"
								render={
									<ComboboxTrigger
										render={<div className="cursor-pointer" />}
										nativeButton={false}
									/>
								}
							>
								<CaretUpDownIcon className="size-4" />
							</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<p className="text-muted-foreground mt-4 text-xs">
					The trigger is rendered as a div element instead of a button using the `render` prop.
				</p>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a ReactElement to replace the default button element. Set `nativeButton={false}` when the rendered element is not a button.",
			},
		},
	},
}

export const RenderWithState: Story = {
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
					<InputGroup className="w-auto">
						<InputGroupInput
							placeholder="Select a fruit..."
							readOnly
							value={value ? fruits.find((f) => f.value === value)?.label || "" : ""}
						/>
						<InputGroupAddon align="inline-end">
							<ComboboxTrigger
								render={(props, state) => (
									<InputGroupButton
										{...props}
										size="icon-xs"
										variant="ghost"
										className={state.open ? "bg-accent" : ""}
									>
										<CaretUpDownIcon
											className={`size-4 transition-transform duration-200 ${state.open ? "rotate-180" : ""}`}
										/>
									</InputGroupButton>
								)}
							/>
						</InputGroupAddon>
					</InputGroup>
					<ComboboxContent>
						<ComboboxList>
							{(item: (typeof fruits)[number]) => (
								<ComboboxItem value={item.value}>{item.label}</ComboboxItem>
							)}
						</ComboboxList>
						<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					</ComboboxContent>
				</Combobox>
				<p className="text-muted-foreground mt-4 text-xs">
					The trigger uses a render function to access state. The icon rotates based on open state.
				</p>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean) and `popupOpen` (boolean).",
			},
		},
	},
}
