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
	title: "UI/Item/ItemTitle",
	component: ItemTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"The title or heading of the item. Supports text truncation and can be used as a link.",
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
			description: "The title text content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof ItemTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle {...args}>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default title with text content.",
			},
		},
	},
}

export const AsLink: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle {...args}>
					<a href="#" className="hover:text-primary">
						Document.pdf
					</a>
				</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Title can contain links with hover effects.",
			},
		},
	},
}

export const LongTitle: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle {...args}>
					Very Long Document Name That Will Be Truncated With Ellipsis.pdf
				</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Long titles are automatically truncated with ellipsis.",
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
			<ItemContent>
				<ItemTitle {...args}>Document.pdf</ItemTitle>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Title without description.",
			},
		},
	},
}
