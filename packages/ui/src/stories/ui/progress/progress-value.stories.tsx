import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressLabel, ProgressValue } from "~/components/ui/progress"

const meta = {
	title: "UI/Progress/ProgressValue",
	component: ProgressValue,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A text label displaying the current value. Must be used within a Progress component.

This component is built on top of [Base UI Progress Value](https://base-ui.com/react/components/progress).`,
			},
		},
	},
	argTypes: {
		children: {
			description:
				"A function that receives the formatted value and raw value, returning the content to display.",
			table: {
				type: {
					summary: "((formattedValue: string | null, value: number | null) => ReactNode) | null",
				},
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
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
} satisfies Meta<typeof ProgressValue>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={45}>
				<ProgressLabel>Progress</ProgressLabel>
				<ProgressValue {...args} />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default progress value displaying the current percentage.",
			},
		},
	},
}

export const CustomFormat: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={65}>
				<ProgressLabel>Progress</ProgressLabel>
				<ProgressValue {...args}>{(formattedValue) => `${formattedValue}% complete`}</ProgressValue>
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress value with custom formatting using children function.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={80}>
				<ProgressLabel>Progress</ProgressLabel>
				<ProgressValue {...args} className="text-lg font-semibold" />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress value with custom styling.",
			},
		},
	},
}

export const WithoutLabel: Story = {
	render: (args) => (
		<div className="w-64">
			<Progress value={55}>
				<ProgressValue {...args} />
			</Progress>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Progress value displayed without a label.",
			},
		},
	},
}
