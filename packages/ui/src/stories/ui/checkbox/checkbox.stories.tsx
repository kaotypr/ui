import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Checkbox } from "~/components/ui/checkbox"

const meta = {
	title: "UI/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A checkbox component for selecting one or more options from a set.\n\nThis component is built on top of [Base UI Checkbox](https://base-ui.com/react/components/checkbox).",
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
		defaultChecked: {
			description:
				"Whether the checkbox is initially ticked. To render a controlled checkbox, use the `checked` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		checked: {
			description:
				"Whether the checkbox is currently ticked. To render an uncontrolled checkbox, use the `defaultChecked` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onCheckedChange: {
			description: "Event handler called when the checkbox is ticked or unticked.",
			table: {
				type: {
					summary: "(checked: boolean, eventDetails: Checkbox.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onCheckedChange",
		},
		indeterminate: {
			description: "Whether the checkbox is in a mixed state: neither ticked, nor unticked.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		value: {
			description: "The value of the selected checkbox.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		nativeButton: {
			description:
				"Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `true` if the rendered element is a native button.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		parent: {
			description:
				"Whether the checkbox controls a group of child checkboxes. Must be used in a Checkbox Group.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		uncheckedValue: {
			description:
				"The value submitted with the form when the checkbox is unchecked. By default, unchecked checkboxes do not submit any value, matching native checkbox behavior.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
			description: "Whether the user should be unable to tick or untick the checkbox.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "Whether the user must tick the checkbox before submitting a form.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		id: {
			description: "The id of the input element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
		// Styling
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description: "Inline styles to apply",
			table: {
				type: { summary: "React.CSSProperties" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
	render: (args) => (
		<label className="flex items-center gap-2 cursor-pointer">
			<Checkbox {...args} />
			<span>Accept terms and conditions</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story: "Default checkbox in an uncontrolled state with a label.",
			},
		},
	},
}

export const Checked: Story = {
	args: {
		defaultChecked: true,
	},
	render: (args) => (
		<label className="flex items-center gap-2 cursor-pointer">
			<Checkbox {...args} />
			<span>Stay logged in for 7 days</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story: "Checkbox that is checked by default (uncontrolled).",
			},
		},
	},
}

export const Controlled: Story = {
	render: () => {
		const [checked, setChecked] = useState(false)
		return (
			<label className="flex items-center gap-2 cursor-pointer">
				<Checkbox
					checked={checked}
					onCheckedChange={(value) => {
						setChecked(value)
					}}
				/>
				<span>Controlled checkbox</span>
			</label>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Controlled checkbox using `checked` and `onCheckedChange` props with React state.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Checkbox disabled />
				<span>Disabled unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Checkbox disabled defaultChecked />
				<span>Disabled checked</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled checkboxes in both unchecked and checked states.",
			},
		},
	},
}

export const Indeterminate: Story = {
	render: () => {
		const [checkedItems, setCheckedItems] = useState({
			item1: false,
			item2: false,
			item3: false,
		})

		const allChecked = Object.values(checkedItems).every(Boolean)
		const someChecked = Object.values(checkedItems).some(Boolean)

		return (
			<div className="flex flex-col gap-4">
				<label className="flex items-center gap-2 cursor-pointer">
					<Checkbox
						checked={allChecked}
						indeterminate={someChecked && !allChecked}
						onCheckedChange={(checked) => {
							setCheckedItems({
								item1: checked,
								item2: checked,
								item3: checked,
							})
						}}
					/>
					<span>Select all</span>
				</label>
				<div className="ml-6 flex flex-col gap-2">
					<label className="flex items-center gap-2 cursor-pointer">
						<Checkbox
							checked={checkedItems.item1}
							onCheckedChange={(checked) => {
								setCheckedItems((prev) => ({
									...prev,
									item1: checked,
								}))
							}}
						/>
						<span>Item 1</span>
					</label>
					<label className="flex items-center gap-2 cursor-pointer">
						<Checkbox
							checked={checkedItems.item2}
							onCheckedChange={(checked) => {
								setCheckedItems((prev) => ({
									...prev,
									item2: checked,
								}))
							}}
						/>
						<span>Item 2</span>
					</label>
					<label className="flex items-center gap-2 cursor-pointer">
						<Checkbox
							checked={checkedItems.item3}
							onCheckedChange={(checked) => {
								setCheckedItems((prev) => ({
									...prev,
									item3: checked,
								}))
							}}
						/>
						<span>Item 3</span>
					</label>
				</div>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Checkbox in indeterminate state when some (but not all) child items are selected. This is commonly used for 'select all' functionality.",
			},
		},
	},
}

export const Required: Story = {
	args: {
		required: true,
	},
	render: (args) => (
		<label className="flex items-center gap-2 cursor-pointer">
			<Checkbox {...args} />
			<span>I agree to the terms and conditions *</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story: "Required checkbox that must be checked before form submission.",
			},
		},
	},
}

export const ReadOnly: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-default">
				<Checkbox readOnly />
				<span>Read-only unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-default">
				<Checkbox readOnly defaultChecked />
				<span>Read-only checked</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Read-only checkboxes that cannot be toggled by user interaction.",
			},
		},
	},
}

export const WithForm: Story = {
	render: () => (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				const formData = new FormData(e.currentTarget)
				alert(
					`Form submitted with:\n- stayLoggedIn: ${formData.get(
						"stayLoggedIn",
					)}\n- newsletter: ${formData.get("newsletter")}`,
				)
			}}
			className="flex flex-col gap-4"
		>
			<label className="flex items-center gap-2 cursor-pointer">
				<Checkbox name="stayLoggedIn" value="true" />
				<span>Stay logged in for 7 days</span>
			</label>
			<label className="flex items-center gap-2 cursor-pointer">
				<Checkbox name="newsletter" value="subscribe" />
				<span>Subscribe to newsletter</span>
			</label>
			<button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
				Submit
			</button>
		</form>
	),
	parameters: {
		docs: {
			description: {
				story: "Checkboxes integrated in a form with `name` and `value` props for form submission.",
			},
		},
	},
}

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-pointer">
				<Checkbox />
				<span>Unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-pointer">
				<Checkbox defaultChecked />
				<span>Checked</span>
			</label>
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Checkbox disabled />
				<span>Disabled unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Checkbox disabled defaultChecked />
				<span>Disabled checked</span>
			</label>
			<label className="flex items-center gap-2 cursor-default">
				<Checkbox readOnly />
				<span>Read-only unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-default">
				<Checkbox readOnly defaultChecked />
				<span>Read-only checked</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "All checkbox states displayed together for comparison.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => (
		<label className="flex items-center gap-2 cursor-pointer">
			<Checkbox
				render={<span role="checkbox" tabIndex={0} className="inline-flex" />}
				nativeButton={false}
			/>
			<span>Custom span element as checkbox</span>
		</label>
	),
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
	render: () => (
		<label className="flex items-center gap-2 cursor-pointer">
			<Checkbox
				render={(props, state) => (
					<button
						{...props}
						className={`size-5 rounded border-2 transition-colors ${
							state.checked
								? "border-green-600 bg-green-600"
								: state.indeterminate
									? "border-yellow-500 bg-yellow-500"
									: "border-gray-400 bg-white"
						}`}
					>
						{state.checked && <span className="text-white text-xs">✓</span>}
						{state.indeterminate && <span className="text-white text-xs">−</span>}
					</button>
				)}
			/>
			<span>Custom styled checkbox with state</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `checked` (boolean), `indeterminate` (boolean), `disabled` (boolean), `readOnly` (boolean), and `required` (boolean).",
			},
		},
	},
}
