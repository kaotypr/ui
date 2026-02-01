import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderOpenIcon } from "@phosphor-icons/react"

import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "~/components/ui/empty"

const meta = {
	title: "UI/Empty/EmptyDescription",
	component: EmptyDescription,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"The description text providing context or instructions for the empty state. Supports links with automatic styling.",
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
			description: "The description text content. Can include links.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof EmptyDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Get started by creating a new item.",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription {...args} />
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Default description with standard styling.",
			},
		},
	},
}

export const WithLink: Story = {
	args: {
		children: (
			<>
				Get started by{" "}
				<a href="#" className="underline underline-offset-4">
					creating a new item
				</a>
				.
			</>
		),
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription {...args} />
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Description with an embedded link. Links are automatically styled with hover effects.",
			},
		},
	},
}

export const LongDescription: Story = {
	args: {
		children:
			"This workspace is currently empty. You can get started by creating your first item, importing existing content, or connecting to an external data source.",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription {...args} />
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Longer description text demonstrating text wrapping and balance.",
			},
		},
	},
}

export const MultipleLinks: Story = {
	args: {
		children: (
			<>
				Get started by{" "}
				<a href="#" className="underline underline-offset-4">
					creating a new item
				</a>{" "}
				or{" "}
				<a href="#" className="underline underline-offset-4">
					importing existing content
				</a>
				.
			</>
		),
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription {...args} />
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Description with multiple links, all automatically styled.",
			},
		},
	},
}
