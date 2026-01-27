import type { Meta, StoryObj } from "@storybook/react-vite"
import { FolderIcon } from "@phosphor-icons/react"
import {
	Item,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
	ItemHeader,
} from "~/components/ui/item"

const meta = {
	title: "UI/Item/ItemHeader",
	component: ItemHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Header section that spans the full width of the item. Useful for titles or content that should be displayed above the main item content.",
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
			description: "The header content to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ItemHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item>
			<ItemHeader {...args}>
				<ItemTitle>Project Settings</ItemTitle>
			</ItemHeader>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Default header with a title spanning the full width.",
			},
		},
	},
}

export const WithActions: Story = {
	render: (args) => (
		<Item>
			<ItemHeader {...args}>
				<ItemTitle>Project Settings</ItemTitle>
			</ItemHeader>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Header can contain additional content like actions or badges.",
			},
		},
	},
}

export const ComplexHeader: Story = {
	render: (args) => (
		<Item>
			<ItemHeader {...args}>
				<div className="flex items-center justify-between w-full">
					<ItemTitle>Project Settings</ItemTitle>
					<span className="text-xs text-muted-foreground">v2.0</span>
				</div>
			</ItemHeader>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Header with complex content including title and metadata.",
			},
		},
	},
}
