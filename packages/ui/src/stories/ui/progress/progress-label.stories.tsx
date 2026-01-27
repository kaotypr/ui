import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressLabel, ProgressValue } from "~/components/ui/progress"

const meta = {
	title: "UI/Progress/ProgressLabel",
	component: ProgressLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible label for the progress bar. Must be used within a Progress component.

This component is built on top of [Base UI Progress Label](https://base-ui.com/react/components/progress).`,
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
} satisfies Meta<typeof ProgressLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={45}>
				<ProgressLabel {...args}>Progress</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default progress label providing accessible description.",
			},
		},
	},
}

export const CustomLabel: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={60}>
				<ProgressLabel {...args}>Uploading files</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress label with custom text.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={75}>
				<ProgressLabel {...args} className="text-lg font-bold">
					Processing
				</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress label with custom styling.",
			},
		},
	},
}
