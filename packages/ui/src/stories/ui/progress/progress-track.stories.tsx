import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressTrack } from "~/components/ui/progress"

const meta = {
	title: "UI/Progress/ProgressTrack",
	component: ProgressTrack,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Contains the progress bar indicator. Must be used within a Progress component.

This component is built on top of [Base UI Progress Track](https://base-ui.com/react/components/progress).`,
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
} satisfies Meta<typeof ProgressTrack>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={45}>
				<ProgressTrack {...args} />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default progress track containing the indicator.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={60}>
				<ProgressTrack {...args} className="h-2 bg-gray-200" />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress track with custom styling.",
			},
		},
	},
}
