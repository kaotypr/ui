import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select"

const meta = {
	title: "UI/Select/SelectValue",
	component: SelectValue,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A text label of the currently selected item. Must be used within a SelectTrigger component.

This component is built on top of [Base UI Select Value](https://base-ui.com/react/components/select).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		placeholder: {
			description:
				"The placeholder value to display when no value is selected. This is overridden by children if specified, or by a null item's label in items.",
			table: {
				type: { summary: "ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		children: {
			description: "Accepts a function that returns a ReactNode to format the selected value.",
			table: {
				type: { summary: "ReactNode | ((value: any) => ReactNode)" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
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
} satisfies Meta<typeof SelectValue>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue {...args} placeholder="Select a fruit" />
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
				story: "Default value display with a placeholder when no value is selected.",
			},
		},
	},
}

export const WithSelectedValue: Story = {
	render: () => (
		<Select defaultValue="banana">
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
				story: "Value display when an item is selected.",
			},
		},
	},
}

export const CustomFormatter: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[200px]">
				<SelectValue placeholder="Select a language">
					{(value: string) => (value ? `Selected: ${value.toUpperCase()}` : null)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="javascript">JavaScript</SelectItem>
				<SelectItem value="typescript">TypeScript</SelectItem>
				<SelectItem value="python">Python</SelectItem>
			</SelectContent>
		</Select>
	),
	parameters: {
		docs: {
			description: {
				story: "Custom formatter function to format the selected value display.",
			},
		},
	},
}

export const CustomPlaceholder: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Choose an option..." />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
			</SelectContent>
		</Select>
	),
	parameters: {
		docs: {
			description: {
				story: "Custom placeholder text displayed when no value is selected.",
			},
		},
	},
}
