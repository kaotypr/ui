import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState, useEffect } from "react"
import { Progress, ProgressLabel, ProgressValue } from "~/components/ui/progress"

const meta = {
	title: "UI/Progress",
	component: Progress,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays the status of a task that takes a long time.

This component is built on top of [Base UI Progress](https://base-ui.com/react/components/progress).

### Component Parts
- [ProgressTrack](?path=/story/ui-progress-progresstrack--default): Contains the progress bar indicator.
- [ProgressIndicator](?path=/story/ui-progress-progressindicator--default): Visualizes the completion status of the task.
- [ProgressLabel](?path=/story/ui-progress-progresslabel--default): An accessible label for the progress bar.
- [ProgressValue](?path=/story/ui-progress-progressvalue--default): A text label displaying the current value.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		value: {
			description:
				"The current value. The component is indeterminate when value is null.",
			table: {
				type: { summary: "number | null" },
				defaultValue: { summary: "null" },
				category: "Base UI Props",
			},
			control: { type: "number", min: 0, max: 100 },
		},
		"aria-valuetext": {
			description:
				"A string value that provides a user-friendly name for aria-valuenow, the current value of the meter.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		getAriaValueText: {
			description:
				"Accepts a function which returns a string value that provides a human-readable text alternative for the current value of the progress bar.",
			table: {
				type: {
					summary:
						"((formattedValue: string | null, value: number | null) => string)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
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
		min: {
			description: "The minimum value.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		max: {
			description: "The maximum value.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		format: {
			description: "Options to format the value.",
			table: {
				type: { summary: "Intl.NumberFormatOptions" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		// Styling
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary:
						"string | ((state: Progress.Root.State) => string | undefined)",
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
					summary:
						"CSSProperties | ((state: Progress.Root.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress {...args}>
				<ProgressLabel>Progress</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	),
	args: {
		value: 45,
	},
	parameters: {
		docs: {
			description: {
				story: "Default progress bar with label and value display.",
			},
		},
	},
}

export const WithLabel: Story = {
	render: (args) => {
		const [value, setValue] = useState(33)
		return (
			<div className="w-64">
				<Progress {...args} value={value}>
					<ProgressLabel>Uploading files</ProgressLabel>
					<ProgressValue />
				</Progress>
			</div>
		)
	},
	args: {
		value: 33,
	},
	parameters: {
		docs: {
			description: {
				story: "Progress bar with a custom label.",
			},
		},
	},
}

export const Indeterminate: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress {...args}>
				<ProgressLabel>Loading</ProgressLabel>
			</Progress>
		</div>
	),
	args: {
		value: null,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Indeterminate progress bar for when the completion status is unknown.",
			},
		},
	},
}

export const CustomRange: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress {...args}>
				<ProgressLabel>Progress</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	),
	args: {
		value: 50,
		min: 0,
		max: 200,
	},
	parameters: {
		docs: {
			description: {
				story: "Progress bar with custom min and max values.",
			},
		},
	},
}

export const DifferentValues: Story = {
	render: () => (
		<div className="w-64 space-y-4">
			<Progress value={25}>
				<ProgressLabel>25% Complete</ProgressLabel>
				<ProgressValue />
			</Progress>
			<Progress value={50}>
				<ProgressLabel>50% Complete</ProgressLabel>
				<ProgressValue />
			</Progress>
			<Progress value={75}>
				<ProgressLabel>75% Complete</ProgressLabel>
				<ProgressValue />
			</Progress>
			<Progress value={100}>
				<ProgressLabel>100% Complete</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress bars showing different completion percentages.",
			},
		},
	},
}

export const Animated: Story = {
	render: () => {
		const [value, setValue] = useState(0)

		// Simulate progress
		useEffect(() => {
			const interval = setInterval(() => {
				setValue((prev) => {
					if (prev >= 100) {
						clearInterval(interval)
						return 100
					}
					return prev + 5
				})
			}, 200)
			return () => clearInterval(interval)
		}, [])

		return (
			<div className="w-64">
				<Progress value={value}>
					<ProgressLabel>Uploading</ProgressLabel>
					<ProgressValue />
				</Progress>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Animated progress bar that increments over time.",
			},
		},
	},
}
