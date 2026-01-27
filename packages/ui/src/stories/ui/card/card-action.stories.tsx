import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	ShareIcon,
	BookmarkIcon,
	DotsThreeVerticalIcon,
} from "@phosphor-icons/react"

import { Button } from "~/components/ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardContent,
} from "~/components/ui/card"

const meta = {
	title: "UI/Card/CardAction",
	component: CardAction,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Optional action element positioned in the top-right corner of the card header. Must be used inside CardHeader.",
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
			description: "The action element, typically a button or icon button.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CardAction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card with Action</CardTitle>
				<CardDescription>
					This card includes an action button in the header.
				</CardDescription>
				<CardAction {...args}>
					<Button variant="ghost" size="icon">
						<ShareIcon />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Default action button positioned in the header.",
			},
		},
	},
}

export const MultipleActions: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card with Multiple Actions</CardTitle>
				<CardDescription>
					Multiple action buttons can be grouped together.
				</CardDescription>
				<CardAction {...args}>
					<div className="flex gap-1">
						<Button variant="ghost" size="icon">
							<BookmarkIcon />
						</Button>
						<Button variant="ghost" size="icon">
							<ShareIcon />
						</Button>
						<Button variant="ghost" size="icon">
							<DotsThreeVerticalIcon />
						</Button>
					</div>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple action buttons grouped together in the action area.",
			},
		},
	},
}

export const TextButton: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card with Text Action</CardTitle>
				<CardDescription>
					Action can also be a text button instead of an icon.
				</CardDescription>
				<CardAction {...args}>
					<Button variant="ghost" size="sm">
						More
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Action using a text button instead of an icon button.",
			},
		},
	},
}
