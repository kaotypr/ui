import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Toggle } from "~/components/ui/toggle"
import { TextBolderIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A two-state button that can be on or off.\n\nThis component is built on top of [Base UI Toggle](https://base-ui.com/react/components/toggle).",
			},
		},
	},
	argTypes: {
		// Custom Props
		variant: {
			description: "The visual variant of the toggle.",
			table: {
				type: { summary: '"default" | "outline"' },
				defaultValue: { summary: "default" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "outline"],
		},
		size: {
			description: "The size of the toggle.",
			table: {
				type: { summary: '"default" | "sm" | "lg"' },
				defaultValue: { summary: "default" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg"],
		},
		// Base UI Props
		value: {
			description: "A unique string that identifies the toggle when used inside a toggle group.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		defaultPressed: {
			description:
				"Whether the toggle button is currently pressed. This is the uncontrolled counterpart of `pressed`.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		pressed: {
			description:
				"Whether the toggle button is currently pressed. This is the controlled counterpart of `defaultPressed`.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onPressedChange: {
			description: "Callback fired when the pressed state is changed.",
			table: {
				type: {
					summary: "(pressed: boolean, eventDetails: Toggle.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onPressedChange",
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
		nativeButton: {
			description:
				"Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `false` if the rendered element is not a button (e.g. `<div>`).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
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
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
	render: (args) => (
		<Toggle {...args} aria-label="Toggle bold">
			<TextBolderIcon />
		</Toggle>
	),
	parameters: {
		docs: {
			description: {
				story: "Default toggle button in an uncontrolled state.",
			},
		},
	},
}

export const Pressed: Story = {
	args: {
		defaultPressed: true,
	},
	render: (args) => (
		<Toggle {...args} aria-label="Toggle bold">
			<TextBolderIcon />
		</Toggle>
	),
	parameters: {
		docs: {
			description: {
				story: "Toggle that is pressed by default (uncontrolled).",
			},
		},
	},
}

export const Controlled: Story = {
	render: () => {
		const [pressed, setPressed] = useState(false)
		return (
			<Toggle
				pressed={pressed}
				onPressedChange={(value) => {
					setPressed(value)
				}}
				aria-label="Toggle bold"
			>
				<TextBolderIcon />
			</Toggle>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Controlled toggle using `pressed` and `onPressedChange` props with React state.",
			},
		},
	},
}

export const Variants: Story = {
	render: () => (
		<div className="flex gap-2">
			<Toggle variant="default" aria-label="Toggle bold">
				<TextBolderIcon />
			</Toggle>
			<Toggle variant="outline" aria-label="Toggle italic">
				<TextItalicIcon />
			</Toggle>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Toggle component in different variants.",
			},
		},
	},
}

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Toggle size="sm" aria-label="Small toggle">
				<TextBolderIcon />
			</Toggle>
			<Toggle size="default" aria-label="Default toggle">
				<TextBolderIcon />
			</Toggle>
			<Toggle size="lg" aria-label="Large toggle">
				<TextBolderIcon />
			</Toggle>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Toggle component in different sizes.",
			},
		},
	},
}

export const WithText: Story = {
	render: () => (
		<div className="flex gap-2">
			<Toggle aria-label="Toggle bold">
				<TextBolderIcon />
				<span>Bold</span>
			</Toggle>
			<Toggle aria-label="Toggle italic">
				<TextItalicIcon />
				<span>Italic</span>
			</Toggle>
			<Toggle aria-label="Toggle underline">
				<TextUnderlineIcon />
				<span>Underline</span>
			</Toggle>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Toggle buttons with icons and text labels.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<div className="flex gap-2">
			<Toggle disabled aria-label="Disabled toggle">
				<TextBolderIcon />
			</Toggle>
			<Toggle disabled defaultPressed aria-label="Disabled pressed toggle">
				<TextBolderIcon />
			</Toggle>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled toggles in both unpressed and pressed states.",
			},
		},
	},
}

export const FormattingToolbar: Story = {
	render: () => {
		const [bold, setBold] = useState(false)
		const [italic, setItalic] = useState(false)
		const [underline, setUnderline] = useState(false)

		return (
			<div className="flex gap-1 rounded-lg border p-1">
				<Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
					<TextBolderIcon />
				</Toggle>
				<Toggle pressed={italic} onPressedChange={setItalic} aria-label="Toggle italic">
					<TextItalicIcon />
				</Toggle>
				<Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Toggle underline">
					<TextUnderlineIcon />
				</Toggle>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Example of multiple toggles used together in a formatting toolbar.",
			},
		},
	},
}

export const OutlineVariant: Story = {
	render: () => (
		<div className="flex gap-2">
			<Toggle variant="outline" aria-label="Toggle bold">
				<TextBolderIcon />
			</Toggle>
			<Toggle variant="outline" defaultPressed aria-label="Toggle italic">
				<TextItalicIcon />
			</Toggle>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Toggle buttons with outline variant styling.",
			},
		},
	},
}

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2">
				<Toggle aria-label="Unpressed toggle">
					<TextBolderIcon />
				</Toggle>
				<Toggle defaultPressed aria-label="Pressed toggle">
					<TextBolderIcon />
				</Toggle>
			</div>
			<div className="flex gap-2">
				<Toggle disabled aria-label="Disabled unpressed toggle">
					<TextBolderIcon />
				</Toggle>
				<Toggle disabled defaultPressed aria-label="Disabled pressed toggle">
					<TextBolderIcon />
				</Toggle>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "All toggle states displayed together for comparison.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => (
		<Toggle
			render={<div className="cursor-pointer" />}
			nativeButton={false}
			aria-label="Toggle bold"
		>
			<TextBolderIcon />
			<span>Custom div toggle</span>
		</Toggle>
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
	render: () => {
		const [pressed, setPressed] = useState(false)
		return (
			<Toggle
				pressed={pressed}
				onPressedChange={setPressed}
				render={(props, state) => (
					<button
						{...props}
						className={`inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
							state.pressed
								? "bg-primary text-primary-foreground"
								: "bg-transparent hover:bg-muted"
						}`}
					>
						<TextBolderIcon />
						<span>{state.pressed ? "Pressed" : "Not pressed"}</span>
					</button>
				)}
				aria-label="Toggle bold"
			/>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `pressed` (boolean), `disabled` (boolean).",
			},
		},
	},
}
