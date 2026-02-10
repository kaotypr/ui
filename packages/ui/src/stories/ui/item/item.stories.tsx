import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileIcon, FolderIcon } from "@phosphor-icons/react"
import {
	Item,
	ItemGroup,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
	ItemActions,
	ItemHeader,
	ItemFooter,
	ItemSeparator,
} from "~/components/ui/item"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Item",
	component: Item,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A flexible item component for displaying structured content with media, title, description, and actions.

This component uses [Base UI's useRender](https://base-ui.com/react/utils/use-render) for flexible rendering.

### Component Parts
- [ItemGroup](?path=/story/ui-item-itemgroup--default): A container for grouping multiple items together.
- [ItemSeparator](?path=/story/ui-item-itemseparator--default): A visual separator between items.
- [ItemMedia](?path=/story/ui-item-itemmedia--default): Container for icons or images displayed alongside the item.
- [ItemContent](?path=/story/ui-item-itemcontent--default): Container for the main content of the item.
- [ItemTitle](?path=/story/ui-item-itemtitle--default): The title or heading of the item.
- [ItemDescription](?path=/story/ui-item-itemdescription--default): Additional descriptive text for the item.
- [ItemActions](?path=/story/ui-item-itemactions--default): Container for action buttons or controls.
- [ItemHeader](?path=/story/ui-item-itemheader--default): Header section that spans the full width.
- [ItemFooter](?path=/story/ui-item-itemfooter--default): Footer section that spans the full width.`,
			},
		},
	},
	argTypes: {
		// Props
		variant: {
			description: "The visual variant of the item.",
			table: {
				type: { summary: '"default" | "outline" | "muted"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "outline", "muted"],
		},
		size: {
			description: "The size of the item.",
			table: {
				type: { summary: '"default" | "sm" | "xs"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "xs"],
		},
		// Base UI Props
		render: {
			description:
				"A function to customize the rendered element. Receives props and returns a React element. Useful for rendering as a different element or component.",
			table: {
				type: { summary: "RenderProp<React.HTMLAttributes<any>>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
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
	},
} satisfies Meta<typeof Item>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Item {...args}>
			<ItemMedia variant="icon">
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
				story: "Default item with icon, title, and description.",
			},
		},
	},
}

export const WithActions: Story = {
	render: (args) => (
		<Item {...args}>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Projects</ItemTitle>
				<ItemDescription>12 items</ItemDescription>
			</ItemContent>
			<ItemActions>
				<Button variant="ghost" size="sm">
					Open
				</Button>
			</ItemActions>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Item with action buttons.",
			},
		},
	},
}

export const WithImage: Story = {
	render: (args) => (
		<Item {...args}>
			<ItemMedia variant="image">
				<img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-sm" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>John Doe</ItemTitle>
				<ItemDescription>Software Engineer</ItemDescription>
			</ItemContent>
		</Item>
	),
	parameters: {
		docs: {
			description: {
				story: "Item with image media instead of icon.",
			},
		},
	},
}

export const Outline: Story = {
	render: (args) => (
		<Item {...args} variant="outline">
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		variant: "outline",
	},
	parameters: {
		docs: {
			description: {
				story: "Item with outline variant showing a visible border.",
			},
		},
	},
}

export const Muted: Story = {
	render: (args) => (
		<Item {...args} variant="muted">
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		variant: "muted",
	},
	parameters: {
		docs: {
			description: {
				story: "Item with muted variant showing a subtle background.",
			},
		},
	},
}

export const Small: Story = {
	render: (args) => (
		<Item {...args} size="sm">
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		size: "sm",
	},
	parameters: {
		docs: {
			description: {
				story: "Item with small size variant.",
			},
		},
	},
}

export const ExtraSmall: Story = {
	render: (args) => (
		<Item {...args} size="xs">
			<ItemMedia variant="icon">
				<FileIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Document.pdf</ItemTitle>
				<ItemDescription>Last modified 2 hours ago</ItemDescription>
			</ItemContent>
		</Item>
	),
	args: {
		size: "xs",
	},
	parameters: {
		docs: {
			description: {
				story: "Item with extra small size variant.",
			},
		},
	},
}

export const WithHeaderAndFooter: Story = {
	render: (args) => (
		<Item {...args}>
			<ItemHeader>
				<ItemTitle>Project Settings</ItemTitle>
			</ItemHeader>
			<ItemMedia variant="icon">
				<FolderIcon />
			</ItemMedia>
			<ItemContent>
				<ItemDescription>Manage your project configuration</ItemDescription>
			</ItemContent>
			<ItemFooter>
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
				story: "Item with header and footer sections spanning full width.",
			},
		},
	},
}

export const Grouped: Story = {
	render: (args) => (
		<ItemGroup>
			<Item {...args}>
				<ItemMedia variant="icon">
					<FileIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Document.pdf</ItemTitle>
					<ItemDescription>Last modified 2 hours ago</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item {...args}>
				<ItemMedia variant="icon">
					<FolderIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Projects</ItemTitle>
					<ItemDescription>12 items</ItemDescription>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item {...args}>
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
				story: "Multiple items grouped together with separators.",
			},
		},
	},
}
