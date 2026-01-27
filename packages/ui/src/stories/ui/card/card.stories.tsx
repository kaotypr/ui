import type { Meta, StoryObj } from "@storybook/react-vite"
import { HeartIcon, ShareIcon, BookmarkIcon } from "@phosphor-icons/react"

import { Button } from "~/components/ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardContent,
	CardFooter,
} from "~/components/ui/card"

const meta = {
	title: "UI/Card",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"A flexible container component for displaying content with optional header, footer, and action elements.",
					"",
					"### Component Parts",
					"- [CardHeader](?path=/story/ui-card-cardheader--default): Container for the card title, description, and optional action.",
					"- [CardTitle](?path=/story/ui-card-cardtitle--default): The main title text of the card.",
					"- [CardDescription](?path=/story/ui-card-carddescription--default): Secondary descriptive text displayed below the title.",
					"- [CardAction](?path=/story/ui-card-cardaction--default): Optional action element positioned in the header.",
					"- [CardContent](?path=/story/ui-card-cardcontent--default): Main content area of the card.",
					"- [CardFooter](?path=/story/ui-card-cardfooter--default): Footer section typically containing actions or metadata.",
				].join("\n"),
			},
		},
	},
	argTypes: {
		size: {
			description: "The size variant of the card.",
			table: {
				type: { summary: '"default" | "sm"' },
				defaultValue: { summary: "default" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm"],
		},
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
			description: "The card content, typically composed of CardHeader, CardContent, and CardFooter.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>
					Card description provides additional context about the card content.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">
					This is the main content area of the card. You can place any content
					here.
				</p>
			</CardContent>
			<CardFooter>
				<Button variant="outline">Cancel</Button>
				<Button>Action</Button>
			</CardFooter>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Default card with header, content, and footer sections.",
			},
		},
	},
}

export const WithAction: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<CardHeader>
				<CardTitle>Card with Action</CardTitle>
				<CardDescription>Card description with an action button.</CardDescription>
				<CardAction>
					<Button variant="ghost" size="icon">
						<ShareIcon />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">
					This card includes an action button in the header area.
				</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Card with an action button positioned in the header.",
			},
		},
	},
}

export const WithImage: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<img
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=200&fit=crop"
				alt="card"
				className="w-full h-48 object-cover"
			/>
			<CardHeader>
				<CardTitle>Card with Image</CardTitle>
				<CardDescription>
					A card that includes an image at the top.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">
					Images are automatically styled to fit the card layout.
				</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Card with an image displayed at the top.",
			},
		},
	},
}

export const Simple: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<CardContent className="pt-6">
				<p className="text-sm">
					A simple card with only content, no header or footer.
				</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Minimal card with only content section.",
			},
		},
	},
}

export const Small: Story = {
	args: {
		size: "sm",
	},
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<CardHeader>
				<CardTitle>Small Card</CardTitle>
				<CardDescription>This card uses the small size variant.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">
					Small cards have reduced padding and gap spacing.
				</p>
			</CardContent>
			<CardFooter>
				<Button variant="outline" size="sm">
					Cancel
				</Button>
				<Button size="sm">Action</Button>
			</CardFooter>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Card using the small size variant with reduced spacing.",
			},
		},
	},
}

export const Interactive: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Card {...args} className="w-[350px]">
			<CardHeader>
				<CardTitle>Interactive Card</CardTitle>
				<CardDescription>Card with multiple interactive elements.</CardDescription>
				<CardAction>
					<Button variant="ghost" size="icon">
						<BookmarkIcon />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">
					This card demonstrates various interactive elements working together.
				</p>
			</CardContent>
			<CardFooter className="justify-between">
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
				story: "Card with multiple interactive elements including header action and footer buttons.",
			},
		},
	},
}
