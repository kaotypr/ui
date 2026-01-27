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
	title: "UI/Item/ItemContent",
	component: ItemContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Container for the main content of the item. Typically contains ItemTitle and ItemDescription components.",
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
			description: "The content to display (typically ItemTitle and ItemDescription).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ItemContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent {...args}>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default content container with title and description.",
			},
		},
	},
}

export const TitleOnly: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent {...args}>
				<ItemTitle>Document.pdf</ItemTitle>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Content container with only a title, no description.",
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
			<ItemContent {...args}>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Content container adapts spacing for extra small items.",
			},
		},
	},
}

export const MultipleContent: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent {...args}>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
			<ItemContent {...args}>
				<ItemTitle>Secondary</ItemTitle>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple content containers can be used for complex layouts.",
			},
		},
	},
}
