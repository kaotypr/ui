import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderOpenIcon } from "@phosphor-icons/react"

import {
	Empty,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
	EmptyDescription,
} from "~/components/ui/empty"

const meta = {
	title: "UI/Empty/EmptyHeader",
	component: EmptyHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Container for the empty state header content. Groups media, title, and description together.",
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
			description: "The contents of the header, typically EmptyMedia, EmptyTitle, and EmptyDescription.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof EmptyHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader {...args}>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>
					Get started by creating a new item.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Default header with icon, title, and description.",
			},
		},
	},
}

export const WithoutMedia: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader {...args}>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>
					Get started by creating a new item.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Header without media, showing only title and description.",
			},
		},
	},
}

export const TitleOnly: Story = {
	render: (args) => (
		<Empty>
			<EmptyHeader {...args}>
				<EmptyTitle>No items found</EmptyTitle>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Header with only a title, no description.",
			},
		},
	},
}
