import type { Meta, StoryObj } from "@storybook/react-vite"

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "~/components/ui/card"

const meta = {
	title: "UI/Card/CardContent",
	component: CardContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Main content area of the card. Must be used inside a Card component.",
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
			description: "The content to display in the card body.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CardContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent {...args}>
				<p className="text-sm text-muted-foreground">
					This is the main content area of the card. You can place any content
					here, including text, images, forms, or other components.
				</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Default content area with text content.",
			},
		},
	},
}

export const WithList: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card with List</CardTitle>
				<CardDescription>Content area containing a list.</CardDescription>
			</CardHeader>
			<CardContent {...args}>
				<ul className="space-y-2 text-sm">
					<li className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-primary" />
						First item
					</li>
					<li className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-primary" />
						Second item
					</li>
					<li className="flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-primary" />
						Third item
					</li>
				</ul>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Content area with a list of items.",
			},
		},
	},
}

export const Standalone: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardContent {...args} className="pt-6">
				<p className="text-sm">
					Content can be used without a header or footer for a minimal card
					layout.
				</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Content used without header or footer sections.",
			},
		},
	},
}
