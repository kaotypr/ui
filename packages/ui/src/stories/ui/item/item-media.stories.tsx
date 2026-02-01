import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileIcon, FolderIcon } from "@phosphor-icons/react"
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "~/components/ui/item"

const meta = {
	title: "UI/Item/ItemMedia",
	component: ItemMedia,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Container for icons or images displayed alongside the item. Supports default, icon, and image variants.

The media container automatically adjusts its layout based on whether the item has a description, positioning icons appropriately.`,
			},
		},
	},
	argTypes: {
		// Props
		variant: {
			description: "The visual variant of the media container.",
			table: {
				type: { summary: '"default" | "icon" | "image"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "icon", "image"],
		},
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
			description: "The icon or image content to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ItemMedia>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item>
			<ItemMedia {...args}>
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default media container with an icon.",
			},
		},
	},
}

export const IconVariant: Story = {
	render: (args) => (
		<Item>
			<ItemMedia {...args} variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Projects</ItemTitle>
				<ItemDescription>12 items</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		variant: "icon",
	},
	parameters: {
		docs: {
			description: {
				story: "Icon variant with proper sizing for icons.",
			},
		},
	},
}

export const ImageVariant: Story = {
	render: (args) => (
		<Item>
			<ItemMedia {...args} variant="image">
				<img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-sm" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>John Doe</ItemTitle>
				<ItemDescription>Software Engineer</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		variant: "image",
	},
	parameters: {
		docs: {
			description: {
				story: "Image variant with proper sizing and rounded corners for images.",
			},
		},
	},
}

export const ImageWithSmallItem: Story = {
	render: (args) => (
		<Item size="sm">
			<ItemMedia {...args} variant="image">
				<img src="https://via.placeholder.com/32" alt="Avatar" className="rounded-sm" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>John Doe</ItemTitle>
				<ItemDescription>Software Engineer</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		variant: "image",
	},
	parameters: {
		docs: {
			description: {
				story: "Image variant adapts its size based on the item size.",
			},
		},
	},
}

export const ImageWithExtraSmallItem: Story = {
	render: (args) => (
		<Item size="xs">
			<ItemMedia {...args} variant="image">
				<img src="https://via.placeholder.com/24" alt="Avatar" className="rounded-sm" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>John Doe</ItemTitle>
				<ItemDescription>Software Engineer</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		variant: "image",
	},
	parameters: {
		docs: {
			description: {
				story: "Image variant with extra small item size showing minimal dimensions.",
			},
		},
	},
}
