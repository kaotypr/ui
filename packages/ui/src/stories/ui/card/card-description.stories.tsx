import type { Meta, StoryObj } from "@storybook/react-vite"

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "~/components/ui/card"

const meta = {
	title: "UI/Card/CardDescription",
	component: CardDescription,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Secondary descriptive text displayed below the card title. Typically used inside CardHeader.",
			},
		},
	},
	argTypes: {
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		children: {
			description: "The description text content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CardDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription {...args}>
					This is a description that provides additional context about the card
					content.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Default card description with muted text styling.",
			},
		},
	},
}

export const LongDescription: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription {...args}>
					This is a longer description that demonstrates how the component handles
					extended text content. The description will wrap naturally and maintain
					readability with appropriate line height and spacing.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Description with longer text that wraps to multiple lines.",
			},
		},
	},
}

export const ShortDescription: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription {...args}>Brief description.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Short, concise description text.",
			},
		},
	},
}
