import type { Meta, StoryObj } from "@storybook/react-vite"
import { ShareIcon } from "@phosphor-icons/react"

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
	title: "UI/Card/CardHeader",
	component: CardHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Container for the card title, description, and optional action. Must be used inside a Card component.",
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
			description:
				"The header content, typically CardTitle, CardDescription, and optionally CardAction.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CardHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader {...args}>
				<CardTitle>Card Header</CardTitle>
				<CardDescription>
					This is the default header layout with title and description.
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
				story: "Default header with title and description.",
			},
		},
	},
}

export const WithAction: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader {...args}>
				<CardTitle>Card Header with Action</CardTitle>
				<CardDescription>
					Header includes an action button positioned on the right.
				</CardDescription>
				<CardAction>
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
				story: "Header with an action button in the top-right corner.",
			},
		},
	},
}

export const TitleOnly: Story = {
	render: (args) => (
		<Card className="w-[350px]">
			<CardHeader {...args}>
				<CardTitle>Title Only</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">Card content goes here.</p>
			</CardContent>
		</Card>
	),
	parameters: {
		docs: {
			description: {
				story: "Header with only a title, no description.",
			},
		},
	},
}
