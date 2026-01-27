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
	title: "UI/Item/ItemSeparator",
	component: ItemSeparator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A visual separator between items. Provides spacing and visual distinction between grouped items.",
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
	},
} satisfies Meta<typeof ItemSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<ItemGroup>
			<Item>
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Document.pdf</ItemTitle>
					<ItemDescription>Last modified 2 hours ago</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator {...args} />
			<Item>
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
				story: "Default separator between items in a group.",
			},
		},
	},
}

export const MultipleSeparators: Story = {
	render: (args) => (
		<ItemGroup>
			<Item>
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Document.pdf</ItemTitle>
					<ItemDescription>Last modified 2 hours ago</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator {...args} />
			<Item>
				<ItemMedia variant="icon">
					<FolderIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Projects</ItemTitle>
					<ItemDescription>12 items</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator {...args} />
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
				story: "Multiple separators used to divide multiple items into sections.",
			},
		},
	},
}
