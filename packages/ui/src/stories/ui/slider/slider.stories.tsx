import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Slider } from "~/components/ui/slider"

const meta = {
	title: "UI/Slider",
	component: Slider,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An easily stylable range input component for selecting numeric values.

This component is built on top of [Base UI Slider](https://base-ui.com/react/components/slider).`,
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
				"The uncontrolled value of the slider when it's initially rendered. To render a controlled slider, use the value prop instead.",
			table: {
				type: { summary: "number | number[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "object" },
		},
		value: {
			description: "The value of the slider. For ranged sliders, provide an array with two values.",
			table: {
				type: { summary: "number | number[]" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "object" },
		},
		onValueChange: {
			description:
				"Callback function that is fired when the slider's value changed. You can pull out the new value by accessing event.target.value (any). The eventDetails.reason indicates what triggered the change: 'input-change' when the hidden range input emits a change event (for example, via form integration), 'track-press' when the control track is pressed, 'drag' while dragging a thumb, 'keyboard' for keyboard input, 'none' when the change is triggered without a specific interaction.",
			table: {
				type: {
					summary:
						"(value: number | number[], eventDetails: Slider.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		onValueCommitted: {
			description:
				"Callback function that is fired when the pointerup is triggered. Warning: This is a generic event not a change event. The eventDetails.reason indicates what triggered the commit: 'drag' while dragging a thumb, 'track-press' when the control track is pressed, 'keyboard' for keyboard input, 'input-change' when the hidden range input emits a change event (for example, via form integration), 'none' when the commit occurs without a specific interaction.",
			table: {
				type: {
					summary:
						"(value: number | number[], eventDetails: Slider.Root.CommitEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueCommitted",
		},
		locale: {
			description:
				"The locale used by Intl.NumberFormat when formatting the value. Defaults to the user's runtime locale.",
			table: {
				type: { summary: "Intl.LocalesArgument" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		thumbAlignment: {
			description:
				"How the thumb(s) are aligned relative to Slider.Control when the value is at min or max: 'center': The center of the thumb is aligned with the control edge, 'edge': The thumb is inset within the control such that its edge is aligned with the control edge, 'edge-client-only': Same as 'edge' but renders after React hydration on the client, reducing bundle size in return.",
			table: {
				type: {
					summary: "'center' | 'edge' | 'edge-client-only'",
				},
				defaultValue: { summary: "'edge'" },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["center", "edge", "edge-client-only"],
		},
		thumbCollisionBehavior: {
			description:
				"Controls how thumbs behave when they collide during pointer interactions. 'push' (default): Thumbs push each other without restoring their previous positions when dragged back. 'swap': Thumbs swap places when dragged past each other. 'none': Thumbs cannot move past each other; excess movement is ignored.",
			table: {
				type: { summary: "'none' | 'push' | 'swap'" },
				defaultValue: { summary: "'push'" },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["none", "push", "swap"],
		},
		step: {
			description:
				"The granularity with which the slider can step through values. (A 'discrete' slider.) The min prop serves as the origin for the valid values. We recommend (max - min) to be evenly divisible by the step.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "1" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		largeStep: {
			description:
				"The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "10" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		minStepsBetweenValues: {
			description: "The minimum steps between values in a range slider.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		min: {
			description: "The minimum allowed value of the slider. Should not be equal to max.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		max: {
			description: "The maximum allowed value of the slider. Should not be equal to min.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		format: {
			description: "Options to format the input value.",
			table: {
				type: { summary: "Intl.NumberFormatOptions" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		disabled: {
			description: "Whether the slider should ignore user interaction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		orientation: {
			description: "The component orientation.",
			table: {
				type: { summary: "Orientation" },
				defaultValue: { summary: "'horizontal'" },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		// Styling
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary: "string | ((state: Slider.Root.State) => string | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"CSS properties applied to the element, or a function that returns styles based on the component's state.",
			table: {
				type: {
					summary: "CSSProperties | ((state: Slider.Root.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a ReactElement or a function that returns the element to render.",
			table: {
				type: {
					summary: "ReactElement | ((props: HTMLProps, state: Slider.Root.State) => ReactElement)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<number>(50)

		return (
			<div className="w-64">
				<Slider
					{...args}
					value={value}
					onValueChange={(newValue) => {
						const numValue = Array.isArray(newValue) ? newValue[0] : newValue
						setValue(numValue)
						args.onValueChange?.(newValue, {} as any)
					}}
				/>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default slider with controlled value.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: (args) => (
		<div className="w-64">
			<Slider {...args} defaultValue={30} />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Uncontrolled slider using defaultValue prop.",
			},
		},
	},
}

export const Range: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<number[]>([20, 80])

		return (
			<div className="w-64">
				<Slider
					{...args}
					value={value}
					onValueChange={(newValue) => {
						const arrayValue = Array.isArray(newValue) ? newValue : [newValue]
						setValue(arrayValue)
						args.onValueChange?.(newValue, {} as any)
					}}
				/>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Range slider with two thumbs for selecting a value range.",
			},
		},
	},
}

export const Vertical: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<number>(50)

		return (
			<div className="h-64">
				<Slider
					{...args}
					orientation="vertical"
					value={value}
					onValueChange={(newValue) => {
						const numValue = Array.isArray(newValue) ? newValue[0] : newValue
						setValue(numValue)
						args.onValueChange?.(newValue, {} as any)
					}}
				/>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Vertical orientation slider.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<div className="w-64">
			<Slider {...args} defaultValue={50} disabled />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Slider with disabled state.",
			},
		},
	},
}

export const WithSteps: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<number>(50)

		return (
			<div className="w-64">
				<Slider
					{...args}
					step={10}
					min={0}
					max={100}
					value={value}
					onValueChange={(newValue) => {
						const numValue = Array.isArray(newValue) ? newValue[0] : newValue
						setValue(numValue)
						args.onValueChange?.(newValue, {} as any)
					}}
				/>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Slider with step increments of 10. Use arrow keys to step through values.",
			},
		},
	},
}

export const CustomRange: Story = {
	render: (args) => {
		const [value, setValue] = React.useState<number>(250)

		return (
			<div className="w-64">
				<Slider
					{...args}
					min={0}
					max={500}
					step={25}
					value={value}
					onValueChange={(newValue) => {
						const numValue = Array.isArray(newValue) ? newValue[0] : newValue
						setValue(numValue)
						args.onValueChange?.(newValue, {} as any)
					}}
				/>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Slider with custom min (0), max (500), and step (25) values.",
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
				alert(`Form submitted with volume: ${formData.get("volume")}`)
			}}
			className="flex flex-col gap-4 w-64"
		>
			<label htmlFor="volume-slider" className="text-sm font-medium">
				Volume
			</label>
			<Slider name="volume" defaultValue={50} />
			<button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
				Submit
			</button>
		</form>
	),
	parameters: {
		docs: {
			description: {
				story: "Slider integrated in a form with `name` prop for form submission.",
			},
		},
	},
}
