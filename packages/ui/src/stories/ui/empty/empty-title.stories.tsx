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
	title: "UI/Empty/EmptyTitle",
	component: EmptyTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"The heading text for the empty state. Provides a clear, concise message about the empty state.",
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
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof EmptyTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "No items found",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle {...args} />
				<EmptyDescription>
					Get started by creating a new item.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Default title with standard styling.",
			},
		},
	},
}

export const LongTitle: Story = {
	args: {
		children: "No items have been created yet in this workspace",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle {...args} />
				<EmptyDescription>
					Get started by creating a new item.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Longer title text demonstrating text wrapping.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	args: {
		children: "No items found",
		className: "text-lg font-semibold",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle {...args} />
				<EmptyDescription>
					Get started by creating a new item.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Title with custom styling applied via className.",
			},
		},
	},
}
