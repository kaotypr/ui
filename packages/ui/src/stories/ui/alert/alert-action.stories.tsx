import type { Meta, StoryObj } from "@storybook/react-vite"
import { X } from "@phosphor-icons/react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "~/components/ui/alert"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Alert/AlertAction",
	component: AlertAction,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Optional action button positioned in the top-right corner of the alert. Must be used inside Alert component.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Content of the action button, typically a button or icon button.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Props",
			},
			control: false,
		},
		className: {
			description: "Additional class names to apply to the action container.",
			table: {
				type: { summary: "string" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof AlertAction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			<AlertAction {...args}>
				<Button variant="ghost" size="sm">
					<X className="size-4" />
				</Button>
			</AlertAction>
		</Alert>
	),
	parameters: {
		docs: {
			description: {
				story: "Action button with an icon, typically used for dismissing the alert.",
			},
		},
	},
}

export const WithTextButton: Story = {
	render: (args) => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			<AlertAction {...args}>
				<Button variant="ghost" size="sm">
					Dismiss
				</Button>
			</AlertAction>
		</Alert>
	),
	parameters: {
		docs: {
			description: {
				story: "Action button with text label instead of an icon.",
			},
		},
	},
}

export const WithCustomAction: Story = {
	render: (args) => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			<AlertAction {...args}>
				<Button variant="outline" size="sm">
					Learn More
				</Button>
			</AlertAction>
		</Alert>
	),
	parameters: {
		docs: {
			description: {
				story: "Custom action button with different variant and text.",
			},
		},
	},
}
