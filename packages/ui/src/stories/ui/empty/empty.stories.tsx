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

const meta = {
	title: "UI/Empty",
	component: Empty,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"A component for displaying empty states when there is no content to show.",
					"",
					"### Component Parts",
					"- [EmptyHeader](?path=/story/ui-empty-emptyheader--default): Container for the empty state header content.",
					"- [EmptyMedia](?path=/story/ui-empty-emptymedia--default): Container for icons or media with variant support.",
					"- [EmptyTitle](?path=/story/ui-empty-emptytitle--default): The heading text for the empty state.",
					"- [EmptyDescription](?path=/story/ui-empty-emptydescription--default): The description text providing context or instructions.",
					"- [EmptyContent](?path=/story/ui-empty-emptycontent--default): Container for additional content like action buttons.",
				].join("\n"),
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
			description: "The contents of the empty state.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Empty>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Empty {...args}>
			<EmptyHeader>
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
				story: "Default empty state with icon, title, and description.",
			},
		},
	},
}

export const WithoutIcon: Story = {
	render: (args) => (
		<Empty {...args}>
			<EmptyHeader>
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
				story: "Empty state without an icon, showing only title and description.",
			},
		},
	},
}

export const WithContent: Story = {
	render: (args) => (
		<Empty {...args}>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>
					Get started by creating a new item.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<button type="button" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
					Create Item
				</button>
			</EmptyContent>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Empty state with additional content like action buttons.",
			},
		},
	},
}

export const CustomWidth: Story = {
	render: (args) => (
		<Empty {...args} className="w-[400px]">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>
					This empty state has a custom width to demonstrate how it adapts to different container sizes.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Empty state with custom width to show flexibility.",
			},
		},
	},
}
