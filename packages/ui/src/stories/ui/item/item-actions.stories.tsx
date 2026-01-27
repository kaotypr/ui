import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileIcon } from "@phosphor-icons/react"
import {
	Item,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
	ItemActions,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Item/ItemActions",
	component: ItemActions,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Container for action buttons or controls. Typically placed at the end of an item.",
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
			description: "The action buttons or controls to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ItemActions>

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
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
			<ItemActions {...args}>
				<Button variant="ghost" size="sm">
					Open
				</Button>
			</ItemActions>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default actions container with a single button.",
			},
		},
	},
}

export const MultipleActions: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
			<ItemActions {...args}>
				<Button variant="ghost" size="sm">
					Edit
				</Button>
				<Button variant="ghost" size="sm">
					Delete
				</Button>
			</ItemActions>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Actions container with multiple buttons.",
			},
		},
	},
}

export const WithPrimaryAction: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
			<ItemActions {...args}>
				<Button variant="ghost" size="sm">
					Cancel
				</Button>
				<Button size="sm">Save</Button>
			</ItemActions>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Actions container with both secondary and primary buttons.",
			},
		},
	},
}

export const WithoutDescription: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
			</ItemContent>
			<ItemActions {...args}>
				<Button variant="ghost" size="sm">
					Open
				</Button>
			</ItemActions>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Actions container works with items that don't have descriptions.",
			},
		},
	},
}
