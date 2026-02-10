import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressIndicator } from "~/components/ui/progress"

const meta = {
	title: "UI/Progress/ProgressIndicator",
	component: ProgressIndicator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Visualizes the completion status of the task. Must be used within a Progress component.

This component is built on top of [Base UI Progress Indicator](https://base-ui.com/react/components/progress).`,
			},
		},
	},
	argTypes: {
		// Styling
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary: "string | ((state: Progress.Root.State) => string | undefined)",
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
					summary: "CSSProperties | ((state: Progress.Root.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ProgressIndicator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={45}>
				<ProgressIndicator {...args} />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default progress indicator showing completion status.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={70}>
				<ProgressIndicator {...args} className="bg-blue-500" />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress indicator with custom styling.",
			},
		},
	},
}

export const DifferentValues: Story = {
	render: () => (
		<div className="w-64 space-y-4">
			<Progress value={25}>
				<ProgressIndicator />
			</Progress>
			<Progress value={50}>
				<ProgressIndicator />
			</Progress>
			<Progress value={75}>
				<ProgressIndicator />
			</Progress>
			<Progress value={100}>
				<ProgressIndicator />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress indicators showing different completion percentages.",
			},
		},
	},
}
