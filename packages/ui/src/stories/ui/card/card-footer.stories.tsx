import type { Meta, StoryObj } from "@storybook/react-vite"
import { HeartIcon } from "@phosphor-icons/react"

import { Button } from "~/components/ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "~/components/ui/card"

const meta = {
	title: "UI/Card/CardFooter",
	component: CardFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Footer section typically containing actions or metadata. Must be used inside a Card component.",
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
			description: "The footer content, typically buttons or other action elements.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CardFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
			<CardFooter {...args}>
				<Button variant="outline">Cancel</Button>
				<Button>Action</Button>
			</CardFooter>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Default footer with action buttons.",
			},
		},
	},
}

export const SingleButton: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
			<CardFooter {...args}>
				<Button className="w-full">Full Width Button</Button>
			</CardFooter>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Footer with a single full-width button.",
			},
		},
	},
}

export const WithIcons: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
			<CardFooter {...args} className="justify-between">
				<Button variant="ghost" size="icon">
					<HeartIcon />
				</Button>
				<div className="flex gap-2">
					<Button variant="outline" size="sm">
						Share
					</Button>
					<Button size="sm">View</Button>
				</div>
			</CardFooter>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Footer with icon button and action buttons using justify-between layout.",
			},
		},
	},
}

export const Metadata: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
			<CardFooter {...args} className="flex-col items-start gap-2">
				<p className="text-xs text-muted-foreground">Last updated 2 hours ago</p>
				<div className="flex gap-2">
					<Button variant="outline" size="sm">
						Edit
					</Button>
					<Button size="sm">Save</Button>
				</div>
			</CardFooter>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Footer with metadata text and action buttons.",
			},
		},
	},
}
