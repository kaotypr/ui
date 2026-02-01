import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Switch } from "~/components/ui/switch"

const meta = {
	title: "UI/Switch",
	component: Switch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A control that indicates whether a setting is on or off.\n\nThis component is built on top of [Base UI Switch](https://base-ui.com/react/components/switch).",
			},
		},
	},
	argTypes: {
		// Custom Props
		size: {
			description: "The size of the switch.",
			table: {
				type: { summary: '"sm" | "default"' },
				defaultValue: { summary: "default" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["sm", "default"],
		},
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
				"Whether the switch is initially active. To render a controlled switch, use the `checked` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		checked: {
			description:
				"Whether the switch is currently active. To render an uncontrolled switch, use the `defaultChecked` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onCheckedChange: {
			description: "Event handler called when the switch is activated or deactivated.",
			table: {
				type: {
					summary: "(checked: boolean, eventDetails: Switch.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onCheckedChange",
		},
		value: {
			description:
				'The value submitted with the form when the switch is on. By default, switch submits the "on" value, matching native checkbox behavior.',
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
		uncheckedValue: {
			description:
				"The value submitted with the form when the switch is off. By default, unchecked switches do not submit any value, matching native checkbox behavior.",
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
			description: "Whether the user should be unable to activate or deactivate the switch.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		required: {
			description: "Whether the user must activate the switch before submitting a form.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		id: {
			description: "The id of the switch element.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
	render: (args) => (
		<label className="flex items-center gap-2 cursor-pointer">
			<Switch {...args} />
			<span>Enable notifications</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story: "Default switch in an uncontrolled state with a label.",
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
			<Switch {...args} />
			<span>Dark mode enabled</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story: "Switch that is checked by default (uncontrolled).",
			},
		},
	},
}

export const Controlled: Story = {
	render: () => {
		const [checked, setChecked] = useState(false)
		return (
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch
					checked={checked}
					onCheckedChange={(value) => {
						setChecked(value)
					}}
				/>
				<span>Controlled switch</span>
			</label>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Controlled switch using `checked` and `onCheckedChange` props with React state.",
			},
		},
	},
}

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch size="default" />
				<span>Default size</span>
			</label>
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch size="sm" />
				<span>Small size</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Switch component in different sizes.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Switch disabled />
				<span>Disabled unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Switch disabled defaultChecked />
				<span>Disabled checked</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled switches in both unchecked and checked states.",
			},
		},
	},
}

export const ReadOnly: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-default">
				<Switch readOnly />
				<span>Read-only unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-default">
				<Switch readOnly defaultChecked />
				<span>Read-only checked</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Read-only switches that cannot be toggled by user interaction.",
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
			<Switch {...args} />
			<span>I agree to the terms and conditions *</span>
		</label>
	),
	parameters: {
		docs: {
			description: {
				story: "Required switch that must be checked before form submission.",
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
					`Form submitted with:\n- notifications: ${formData.get(
						"notifications",
					)}\n- darkMode: ${formData.get("darkMode")}`,
				)
			}}
			className="flex flex-col gap-4"
		>
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch name="notifications" value="on" />
				<span>Enable notifications</span>
			</label>
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch name="darkMode" value="on" />
				<span>Enable dark mode</span>
			</label>
			<button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
				Submit
			</button>
		</form>
	),
	parameters: {
		docs: {
			description: {
				story: "Switches integrated in a form with `name` and `value` props for form submission.",
			},
		},
	},
}

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch />
				<span>Unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-pointer">
				<Switch defaultChecked />
				<span>Checked</span>
			</label>
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Switch disabled />
				<span>Disabled unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-not-allowed opacity-50">
				<Switch disabled defaultChecked />
				<span>Disabled checked</span>
			</label>
			<label className="flex items-center gap-2 cursor-default">
				<Switch readOnly />
				<span>Read-only unchecked</span>
			</label>
			<label className="flex items-center gap-2 cursor-default">
				<Switch readOnly defaultChecked />
				<span>Read-only checked</span>
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "All switch states displayed together for comparison.",
			},
		},
	},
}
