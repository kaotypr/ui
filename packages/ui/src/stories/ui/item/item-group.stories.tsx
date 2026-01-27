import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileIcon, FolderIcon } from "@phosphor-icons/react"
import {
	Item,
	ItemGroup,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
	ItemSeparator,
} from "~/components/ui/item"

const meta = {
	title: "UI/Item/ItemGroup",
	component: ItemGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A container for grouping multiple items together. Provides consistent spacing and layout for item collections.",
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
			description: "The items to group together.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ItemGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<ItemGroup {...args}>
			<Item>
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Document.pdf</ItemTitle>
					<ItemDescription>Last modified 2 hours ago</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item>
				<ItemMedia variant="icon">
					<FolderIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Projects</ItemTitle>
					<ItemDescription>12 items</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item>
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Report.xlsx</ItemTitle>
					<ItemDescription>Last modified 1 day ago</ItemDescription>
				</ItemContent>
			</Item>
		</ItemGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default item group with multiple items and separators.",
			},
		},
	},
}

export const WithSmallItems: Story = {
	render: (args) => (
		<ItemGroup {...args}>
			<Item size="sm">
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Document.pdf</ItemTitle>
					<ItemDescription>Last modified 2 hours ago</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item size="sm">
				<ItemMedia variant="icon">
					<FolderIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Projects</ItemTitle>
					<ItemDescription>12 items</ItemDescription>
				</ItemContent>
			</Item>
		</ItemGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Item group with small-sized items showing reduced spacing.",
			},
		},
	},
}

export const WithExtraSmallItems: Story = {
	render: (args) => (
		<ItemGroup {...args}>
			<Item size="xs">
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Document.pdf</ItemTitle>
					<ItemDescription>Last modified 2 hours ago</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item size="xs">
				<ItemMedia variant="icon">
					<FolderIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Projects</ItemTitle>
					<ItemDescription>12 items</ItemDescription>
				</ItemContent>
			</Item>
		</ItemGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Item group with extra small-sized items showing minimal spacing.",
			},
		},
	},
}
