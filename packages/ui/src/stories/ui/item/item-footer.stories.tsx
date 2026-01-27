import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderIcon } from "@phosphor-icons/react"
import {
	Item,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
	ItemFooter,
	ItemActions,
	ItemHeader,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Item/ItemFooter",
	component: ItemFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Footer section that spans the full width of the item. Useful for actions, metadata, or content that should be displayed below the main item content.",
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
			description: "The footer content to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ItemFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Project Settings</ItemTitle>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
			<ItemFooter {...args}>
				<ItemActions>
					<Button variant="ghost" size="sm">
						Cancel
					</Button>
					<Button size="sm">Save</Button>
				</ItemActions>
			</ItemFooter>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default footer with action buttons spanning the full width.",
			},
		},
	},
}

export const WithMetadata: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Project Settings</ItemTitle>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
			<ItemFooter {...args}>
				<div className="flex items-center justify-between w-full">
					<span className="text-xs text-muted-foreground">
						Last saved 2 hours ago
					</span>
					<ItemActions>
						<Button variant="ghost" size="sm">
							Cancel
						</Button>
						<Button size="sm">Save</Button>
					</ItemActions>
				</div>
			</ItemFooter>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Footer with metadata and actions.",
			},
		},
	},
}

export const ActionsOnly: Story = {
	render: (args) => (
		<Item>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Project Settings</ItemTitle>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
			<ItemFooter {...args}>
				<ItemActions>
					<Button variant="ghost" size="sm">
						Reset
					</Button>
					<Button variant="ghost" size="sm">
						Cancel
					</Button>
					<Button size="sm">Save</Button>
				</ItemActions>
			</ItemFooter>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Footer with multiple action buttons.",
			},
		},
	},
}

export const WithHeaderAndFooter: Story = {
	render: (args) => (
		<Item>
			<ItemHeader>
				<ItemTitle>Project Settings</ItemTitle>
			</ItemHeader>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
			<ItemFooter {...args}>
				<ItemActions>
					<Button variant="ghost" size="sm">
						Cancel
					</Button>
					<Button size="sm">Save</Button>
				</ItemActions>
			</ItemFooter>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Item with both header and footer sections.",
			},
		},
	},
}
