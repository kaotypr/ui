import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Combobox,
	ComboboxInput,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxLabel,
	ComboboxChips,
	ComboboxChip,
	ComboboxChipsInput,
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
	{ label: "Raspberry", value: "raspberry" },
	{ label: "Blackberry", value: "blackberry" },
	{ label: "Cherry", value: "cherry" },
	{ label: "Peach", value: "peach" },
	{ label: "Pear", value: "pear" },
	{ label: "Plum", value: "plum" },
	{ label: "Kiwi", value: "kiwi" },
]

const groupedFruits = [
	{
		value: "Fruits",
		items: [
			{ label: "Apple", value: "apple" },
			{ label: "Banana", value: "banana" },
			{ label: "Orange", value: "orange" },
			{ label: "Grape", value: "grape" },
			{ label: "Mango", value: "mango" },
		],
	},
	{
		value: "Berries",
		items: [
			{ label: "Strawberry", value: "strawberry" },
			{ label: "Blueberry", value: "blueberry" },
			{ label: "Raspberry", value: "raspberry" },
			{ label: "Blackberry", value: "blackberry" },
		],
	},
]

const meta = {
	title: "UI/Combobox",
	component: Combobox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An input combined with a list of predefined items to select.

This component is built on top of [Base UI Combobox](https://base-ui.com/react/components/combobox).

### Component Parts
- [ComboboxInput](?path=/story/ui-combobox-comboboxinput--default): The text input to search for items in the list.
- [ComboboxContent](?path=/story/ui-combobox-comboboxcontent--default): A container for the list popup.
- [ComboboxList](?path=/story/ui-combobox-comboboxlist--default): A list container for the items.
- [ComboboxItem](?path=/story/ui-combobox-comboboxitem--default): An individual item in the list.
- [ComboboxValue](?path=/story/ui-combobox-comboboxvalue--default): The current value of the combobox.
- [ComboboxTrigger](?path=/story/ui-combobox-comboxtrigger--default): A button that opens the popup.
- [ComboboxClear](?path=/story/ui-combobox-comboboxclear--default): Clears the value when clicked.
- [ComboboxEmpty](?path=/story/ui-combobox-comboboxempty--default): Renders its children only when the list is empty.
- [ComboboxGroup](?path=/story/ui-combobox-comboboxgroup--default): Groups related items with the corresponding label.
- [ComboboxLabel](?path=/story/ui-combobox-comboboxlabel--default): An accessible label for a group.
- [ComboboxSeparator](?path=/story/ui-combobox-comboboxseparator--default): A separator element accessible to screen readers.
- [ComboboxChips](?path=/story/ui-combobox-comboboxchips--default): A container for the chips in a multiselectable input.
- [ComboboxChip](?path=/story/ui-combobox-comboboxchip--default): An individual chip that represents a value in a multiselectable input.
- [ComboboxChipsInput](?path=/story/ui-combobox-comboboxchipsinput--default): The input element for chips in a multiselectable input.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		name: {
			description: "Identifies the field when a form is submitted.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		defaultValue: {
			description:
				"The uncontrolled selected value of the combobox when it's initially rendered. To render a controlled combobox, use the value prop instead.",
			table: {
				type: { summary: "Value[] | Value | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		value: {
			description: "The selected value of the combobox. Use when controlled.",
			table: {
				type: { summary: "Value[] | Value | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		onValueChange: {
			description: "Event handler called when the selected value of the combobox changes.",
			table: {
				type: {
					summary:
						"(value: Value[] | Value | any | null, eventDetails: Combobox.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		defaultInputValue: {
			description:
				"The uncontrolled input value when initially rendered. To render a controlled input, use the inputValue prop instead.",
			table: {
				type: { summary: "string | number | string[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		inputValue: {
			description: "The input value of the combobox. Use when controlled.",
			table: {
				type: { summary: "string | number | string[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onInputValueChange: {
			description: "Event handler called when the input value changes.",
			table: {
				type: {
					summary: "(inputValue: string, eventDetails: Combobox.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onInputValueChange",
		},
		defaultOpen: {
			description:
				"Whether the popup is initially open. To render a controlled popup, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the popup is currently open. Use when controlled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description: "Event handler called when the popup is opened or closed.",
			table: {
				type: {
					summary: "(open: boolean, eventDetails: Combobox.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		autoHighlight: {
			description: "Whether the first matching item is highlighted automatically while filtering.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		highlightItemOnHover: {
			description:
				"Whether moving the pointer over items should highlight them. Disabling this prop allows CSS :hover to be differentiated from the :focus (data-highlighted) state.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		filter: {
			description: "Filter function used to match items vs input query.",
			table: {
				type: {
					summary:
						"((itemValue: Value, query: string, itemToString: ((itemValue: Value) => string) | undefined) => boolean) | null",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		filteredItems: {
			description:
				"Filtered items to display in the list. When provided, the list will use these items instead of filtering the items prop internally. Use when you want to control filtering logic externally with the useFilter() hook.",
			table: {
				type: { summary: "any[] | Group[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		grid: {
			description:
				"Whether list items are presented in a grid layout. When enabled, arrow keys navigate across rows and columns inferred from DOM rows.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		inline: {
			description: "Whether the list is rendered inline without using the popup.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		isItemEqualToValue: {
			description:
				"Custom comparison logic used to determine if a combobox item value matches the current selected value. Useful when item values are objects without matching referentially. Defaults to Object.is comparison.",
			table: {
				type: {
					summary: "((itemValue: Value, selectedValue: Value) => boolean)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		itemToStringLabel: {
			description:
				"When the item values are objects, this function converts the object value to a string representation for display in the input. If the shape of the object is { value, label }, the label will be used automatically without needing to specify this prop.",
			table: {
				type: { summary: "((itemValue: Value) => string)" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		itemToStringValue: {
			description:
				"When the item values are objects, this function converts the object value to a string representation for form submission. If the shape of the object is { value, label }, the value will be used automatically without needing to specify this prop.",
			table: {
				type: { summary: "((itemValue: Value) => string)" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		items: {
			description:
				"The items to be displayed in the list. Can be either a flat array of items or an array of groups with items.",
			table: {
				type: { summary: "any[] | Group[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		limit: {
			description: "The maximum number of items to display in the list.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "-1" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		locale: {
			description:
				"The locale to use for string comparison. Defaults to the user's runtime locale.",
			table: {
				type: { summary: "Intl.LocalesArgument" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		loopFocus: {
			description:
				"Whether to loop keyboard focus back to the input when the end of the list is reached while using the arrow keys. The first item can then be reached by pressing ArrowDown again from the input, or the last item can be reached by pressing ArrowUp from the input. The input is always included in the focus loop per ARIA Authoring Practices. When disabled, focus does not move when on the last element and the user presses ArrowDown, or when on the first element and the user presses ArrowUp.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		modal: {
			description:
				"Determines if the popup enters a modal state when open. true: user interaction is limited to the popup: document page scroll is locked and pointer interactions on outside elements are disabled. false: user interaction with the rest of the document is allowed.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		multiple: {
			description: "Whether multiple items can be selected.",
			table: {
				type: { summary: "boolean | undefined" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onItemHighlighted: {
			description:
				"Callback fired when an item is highlighted or unhighlighted. Receives the highlighted item value (or undefined if no item is highlighted) and event details with a reason property describing why the highlight changed.",
			table: {
				type: {
					summary:
						"((highlightedValue: Value | undefined, eventDetails: Combobox.Root.HighlightEventDetails) => void)",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onItemHighlighted",
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the popup is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
		},
		openOnInputClick: {
			description: "Whether the popup opens when clicking the input.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		virtualized: {
			description: "Whether the items are being externally virtualized.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
		readOnly: {
			description: "Whether the user should be unable to choose a different option from the popup.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "Whether the user must choose a value before submitting a form.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		id: {
			description: "The id of the component.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		children: {
			description: "The child components of the combobox.",
			table: {
				type: { summary: "ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Combobox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					{...args}
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
						args.onValueChange?.(newValue as any, {} as any)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
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
				story: "Default combobox with a searchable input and dropdown list of fruits.",
			},
		},
	},
}

export const WithValue: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>("apple")

		return (
			<div className="w-[300px]">
				<Combobox
					{...args}
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
						args.onValueChange?.(newValue as any, {} as any)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
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
				story: "Combobox with a pre-selected value.",
			},
		},
	},
}

export const WithClear: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>("apple")

		return (
			<div className="w-[300px]">
				<Combobox
					{...args}
					items={fruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
						args.onValueChange?.(newValue as any, {} as any)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." showClear />
					<ComboboxContent>
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
				story: "Combobox with a clear button to reset the selection.",
			},
		},
	},
}

export const Multiple: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string[]>([])
		const chipsRef = useComboboxAnchor()

		return (
			<div className="w-[300px]">
				<Combobox
					{...args}
					defaultValue={undefined}
					items={fruits}
					multiple
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string[])
						args.onValueChange?.(newValue as any, {} as any)
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
				story: "Combobox with multiple selection enabled, showing selected items as chips.",
			},
		},
	},
}

export const Grouped: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<string | null>(null)

		return (
			<div className="w-[300px]">
				<Combobox
					{...args}
					items={groupedFruits}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
						args.onValueChange?.(newValue as any, {} as any)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
						<ComboboxList>
							{groupedFruits.map((group) => (
								<ComboboxGroup key={group.value} items={group.items}>
									<ComboboxLabel>{group.value}</ComboboxLabel>
									{group.items.map((item) => (
										<ComboboxItem key={item.value} value={item.value}>
											{item.label}
										</ComboboxItem>
									))}
								</ComboboxGroup>
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
				story: "Combobox with grouped items showing categories with labels.",
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
					{...args}
					items={fruits}
					value={value}
					disabled
					onValueChange={(newValue) => {
						setValue(newValue as string | null)
						args.onValueChange?.(newValue as any, {} as any)
					}}
				>
					<ComboboxInput placeholder="Select a fruit..." />
					<ComboboxContent>
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
				story: "Combobox in a disabled state.",
			},
		},
	},
}
