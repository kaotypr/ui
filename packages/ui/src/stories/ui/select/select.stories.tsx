import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select"

const meta = {
	title: "UI/Select",
	component: Select,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A form component for choosing a predefined value in a dropdown menu.

This component is built on top of [Base UI Select](https://base-ui.com/react/components/select).

### Component Parts
- [SelectTrigger](?path=/story/ui-select-selecttrigger--default): The button that opens the select popup.
- [SelectValue](?path=/story/ui-select-selectvalue--default): A text label of the currently selected item.
- [SelectContent](?path=/story/ui-select-selectcontent--default): A container for the select list.
- [SelectItem](?path=/story/ui-select-selectitem--default): An individual option in the select popup.
- [SelectGroup](?path=/story/ui-select-selectgroup--default): Groups related select items with the corresponding label.
- [SelectLabel](?path=/story/ui-select-selectlabel--default): An accessible label that is automatically associated with its parent group.
- [SelectSeparator](?path=/story/ui-select-selectseparator--default): A separator element accessible to screen readers.
- [SelectScrollUpButton](?path=/story/ui-select-selectscrollupbutton--default): An element that scrolls the select popup up when hovered.
- [SelectScrollDownButton](?path=/story/ui-select-selectscrolldownbutton--default): An element that scrolls the select popup down when hovered.`,
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
				"The uncontrolled value of the select when it's initially rendered. To render a controlled select, use the value prop instead.",
			table: {
				type: { summary: "Value[] | Value | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description: "The value of the select. Use when controlled.",
			table: {
				type: { summary: "Value[] | Value | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description: "Event handler called when the value of the select changes.",
			table: {
				type: {
					summary:
						"(value: Value[] | Value | any | null, eventDetails: Select.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		defaultOpen: {
			description:
				"Whether the select popup is initially open. To render a controlled select popup, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the select popup is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description: "Event handler called when the select popup is opened or closed.",
			table: {
				type: {
					summary: "(open: boolean, eventDetails: Select.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
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
		actionsRef: {
			description:
				"A ref to imperative actions. When specified, the select will not be unmounted when closed. Instead, the unmount function must be called to unmount the select manually. Useful when the select's animation is controlled by an external library.",
			table: {
				type: { summary: "RefObject<Select.Root.Actions>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		isItemEqualToValue: {
			description:
				"Custom comparison logic used to determine if a select item value matches the current selected value. Useful when item values are objects without matching referentially. Defaults to Object.is comparison.",
			table: {
				type: { summary: "(itemValue: Value, value: Value) => boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		itemToStringLabel: {
			description:
				"When the item values are objects, this function converts the object value to a string representation for display in the trigger. If the shape of the object is { value, label }, the label will be used automatically without needing to specify this prop.",
			table: {
				type: { summary: "(itemValue: Value) => string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		itemToStringValue: {
			description:
				"When the item values are objects, this function converts the object value to a string representation for form submission. If the shape of the object is { value, label }, the value will be used automatically without needing to specify this prop.",
			table: {
				type: { summary: "(itemValue: Value) => string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		items: {
			description:
				"Data structure of the items rendered in the select popup. When specified, SelectValue renders the label of the selected item instead of the raw value.",
			table: {
				type: {
					summary: "Record<string, ReactNode> | ({ label: ReactNode, value: any })[]",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		modal: {
			description:
				"Determines if the select enters a modal state when open. When true, user interaction is limited to the select: document page scroll is locked and pointer interactions on outside elements are disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
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
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the select popup is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
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
			description:
				"Whether the user should be unable to choose a different option from the select popup.",
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
		inputRef: {
			description: "A ref to access the hidden input element.",
			table: {
				type: { summary: "Ref<HTMLInputElement>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		id: {
			description: "The id of the Select.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Select {...args}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
				<SelectItem value="grape">Grape</SelectItem>
				<SelectItem value="strawberry">Strawberry</SelectItem>
			</SelectContent>
		</Select>
	),
	parameters: {
		docs: {
			description: {
				story: "A basic select component with a placeholder and multiple options.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState<string | null>(null)
		return (
			<Select
				{...args}
				value={value}
				onValueChange={(v: any) => {
					setValue(v as string | null)
					args.onValueChange?.(v as any, {} as any)
				}}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
					<SelectItem value="grape">Grape</SelectItem>
					<SelectItem value="strawberry">Strawberry</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Controlled select using React state. The value is managed by the component state.",
			},
		},
	},
}

export const WithGroups: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a category" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>Vegetables</SelectLabel>
					<SelectItem value="carrot">Carrot</SelectItem>
					<SelectItem value="broccoli">Broccoli</SelectItem>
					<SelectItem value="spinach">Spinach</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
	parameters: {
		docs: {
			description: {
				story: "Select with grouped items and labels to organize options into categories.",
			},
		},
	},
}

export const Multiple: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([])
		return (
			<Select multiple value={value} onValueChange={setValue as any}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select languages" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="javascript">JavaScript</SelectItem>
					<SelectItem value="typescript">TypeScript</SelectItem>
					<SelectItem value="python">Python</SelectItem>
					<SelectItem value="rust">Rust</SelectItem>
					<SelectItem value="go">Go</SelectItem>
				</SelectContent>
			</Select>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Select with multiple selection enabled. Users can select multiple items.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectContent>
		</Select>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled select that cannot be interacted with.",
			},
		},
	},
}
