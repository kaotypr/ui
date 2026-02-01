import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderOpenIcon, MagnifyingGlassIcon, PackageIcon } from "@phosphor-icons/react"

import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "~/components/ui/empty"

const meta = {
	title: "UI/Empty/EmptyMedia",
	component: EmptyMedia,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Container for icons or media in the empty state. Supports default and icon variants.",
			},
		},
	},
	argTypes: {
		variant: {
			description: "The visual variant of the media container.",
			table: {
				type: { summary: '"default" | "icon"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "icon"],
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
			description: "The icon or media content to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof EmptyMedia>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		variant: "default",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia {...args}>
					<FolderOpenIcon className="size-12" />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>Get started by creating a new item.</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Default variant without background styling.",
			},
		},
	},
}

export const IconVariant: Story = {
	args: {
		variant: "icon",
	},
	render: (args) => (
		<Empty>
			<EmptyHeader>
				<EmptyMedia {...args}>
					<FolderOpenIcon />
				</EmptyMedia>
				<EmptyTitle>No items found</EmptyTitle>
				<EmptyDescription>Get started by creating a new item.</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
	parameters: {
		docs: {
			description: {
				story: "Icon variant with background and rounded styling.",
			},
		},
	},
}

export const DifferentIcons: Story = {
	render: () => (
		<div className="space-y-8">
			<Empty>
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<MagnifyingGlassIcon />
					</EmptyMedia>
					<EmptyTitle>No results found</EmptyTitle>
					<EmptyDescription>Try adjusting your search terms.</EmptyDescription>
				</EmptyHeader>
			</Empty>
			<Empty>
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<PackageIcon />
					</EmptyMedia>
					<EmptyTitle>No packages</EmptyTitle>
					<EmptyDescription>Start by adding your first package.</EmptyDescription>
				</EmptyHeader>
			</Empty>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Different icons demonstrating various empty state scenarios.",
			},
		},
	},
}
