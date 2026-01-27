import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileIcon } from "@phosphor-icons/react"
import {
	Item,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
} from "~/components/ui/item"

const meta = {
	title: "UI/Item/ItemDescription",
	component: ItemDescription,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Additional descriptive text for the item. Supports text truncation and can contain links.",
			},
		},
	},
	argTypes: {
		// Styling
		className: {
			description: "Additional CSS class names to apply.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		children: {
			description: "The description text content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof ItemDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription {...args}>
					Last modified 2 hours ago
				</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default description with text content.",
			},
		},
	},
}

export const WithLink: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription {...args}>
					Last modified 2 hours ago by{" "}
					<a href="#" className="hover:text-primary underline">
						John Doe
					</a>
				</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Description can contain links with hover effects.",
			},
		},
	},
}

export const LongDescription: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription {...args}>
					This is a very long description that will be truncated with ellipsis
					when it exceeds two lines of text. The description supports multiple
					lines but will be cut off if it's too long.
				</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Long descriptions are automatically truncated to two lines.",
			},
		},
	},
}

export const WithExtraSmallItem: Story = {
	render: (args) => (
		<Item size="xs">
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription {...args}>
					Last modified 2 hours ago
				</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Description adapts font size for extra small items.",
			},
		},
	},
}

export const MultipleLines: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription {...args}>
					Last modified 2 hours ago. This document contains important
					information about the project.
				</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Description supports multiple lines of text.",
			},
		},
	},
}
