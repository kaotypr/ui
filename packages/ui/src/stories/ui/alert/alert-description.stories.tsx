import type { Meta, StoryObj } from "@storybook/react-vite"

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"

const meta = {
	title: "UI/Alert/AlertDescription",
	component: AlertDescription,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"The description text providing additional details about the alert. Must be used inside Alert component.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Text content of the alert description.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Props",
			},
			control: { type: "text" },
		},
		className: {
			description: "Additional class names to apply to the description element.",
			table: {
				type: { summary: "string" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof AlertDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "You can add components to your app using the cli.",
	},
	render: (args) => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription {...args} />
		</Alert>
	),
	parameters: {
		docs: {
			description: {
				story: "Description providing additional context about the alert.",
			},
		},
	},
}

export const WithMultipleParagraphs: Story = {
	args: {
		children: (
			<>
				<p>
					You can add components to your app using the cli. This will help you get started quickly.
				</p>
				<p>Make sure to read the documentation for more information about available components.</p>
			</>
		),
	},
	render: (args) => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription {...args} />
		</Alert>
	),
	parameters: {
		docs: {
			description: {
				story: "Description with multiple paragraphs. Paragraphs are automatically spaced.",
			},
		},
	},
}

export const WithLink: Story = {
	args: {
		children: (
			<>
				You can add components to your app using the cli.{" "}
				<a href="#" className="underline underline-offset-3">
					Learn more
				</a>{" "}
				about available components.
			</>
		),
	},
	render: (args) => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription {...args} />
		</Alert>
	),
	parameters: {
		docs: {
			description: {
				story: "Description with an embedded link. Links are automatically styled.",
			},
		},
	},
}
