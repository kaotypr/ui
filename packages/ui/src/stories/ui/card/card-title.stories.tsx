import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card"

const meta = {
	title: "UI/Card/CardTitle",
	component: CardTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "The main title text of the card. Typically used inside CardHeader.",
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
			description: "The title text content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CardTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle {...args}>Card Title</CardTitle>
				<CardDescription>This is a description that appears below the title.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Default card title with standard styling.",
			},
		},
	},
}

export const LongTitle: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle {...args}>
					This is a longer card title that demonstrates how the component handles text wrapping
				</CardTitle>
				<CardDescription>The title will wrap to multiple lines if needed.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Title with longer text that wraps to multiple lines.",
			},
		},
	},
}

export const WithoutDescription: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle {...args}>Title Without Description</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Title used without a description element.",
			},
		},
	},
}
