import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderOpenIcon } from "@phosphor-icons/react"

import {
	Empty,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
	EmptyDescription,
	EmptyContent,
} from "~/components/ui/empty"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Empty/EmptyContent",
	component: EmptyContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Container for additional content in the empty state, such as action buttons or secondary information.",
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
			description: "The additional content, typically action buttons or secondary information.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof EmptyContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>Get started by creating a new item.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent {...args}>
				<Button>Create Item</Button>
			</EmptyContent>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Content area with a single action button.",
			},
		},
	},
}

export const MultipleButtons: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>
					Get started by creating a new item or importing existing content.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent {...args}>
				<Button>Create Item</Button>
				<Button variant="outline">Import</Button>
			</EmptyContent>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Content area with multiple action buttons.",
			},
		},
	},
}

export const WithSecondaryAction: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>Get started by creating a new item.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent {...args}>
				<Button>Create Item</Button>
				<button
					type="button"
					className="text-sm text-muted-foreground underline underline-offset-4"
				>
					Learn more
				</button>
			</EmptyContent>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Content area with primary action button and secondary link.",
			},
		},
	},
}

export const TextOnly: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>Get started by creating a new item.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent {...args}>
				<p className="text-sm text-muted-foreground">Need help? Contact support for assistance.</p>
			</EmptyContent>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Content area with text-only content instead of buttons.",
			},
		},
	},
}
