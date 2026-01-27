import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	SidebarProvider,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuBadge,
	SidebarMenuAction,
	SidebarRail,
} from "~/components/ui/sidebar"
import {
	HouseIcon,
	FileIcon,
	GearIcon,
	TrashIcon,
	BellIcon,
} from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar/SidebarMenuButton",
	component: SidebarMenuButton,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `Button element for menu items with support for tooltips when collapsed. Must be used within a SidebarMenuItem.

The menu button supports active states, variants, sizes, and tooltips that appear when the sidebar is collapsed.`,
			},
		},
	},
	argTypes: {
		// Props
		isActive: {
			description: "Whether the menu item is currently active.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		variant: {
			description: "Visual variant of the button.",
			table: {
				type: { summary: '"default" | "outline"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "outline"],
		},
		size: {
			description: "Size of the button.",
			table: {
				type: { summary: '"default" | "sm" | "lg"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg"],
		},
		tooltip: {
			description:
				"Tooltip text or props. Tooltip appears when sidebar is collapsed.",
			table: {
				type: { summary: "string | TooltipContentProps" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof SidebarMenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton {...args}>
									<HouseIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<GearIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Default menu buttons with icons and labels.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Default menu buttons with icons and text labels.",
			},
		},
	},
}

export const Active: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive>
									<HouseIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<GearIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Menu button with active state highlighted.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Menu button with active state to indicate current page or section.",
			},
		},
	},
}

export const WithBadge: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<HouseIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<BellIcon />
									<span>Notifications</span>
									<SidebarMenuBadge>3</SidebarMenuBadge>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Documents</span>
									<SidebarMenuBadge>12</SidebarMenuBadge>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Menu buttons with badges showing counts or labels.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Menu buttons with badges displaying counts or labels.",
			},
		},
	},
}

export const WithAction: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<HouseIcon />
									<span>Home</span>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<GearIcon />
								</SidebarMenuAction>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
								<SidebarMenuAction showOnHover>
									<TrashIcon />
								</SidebarMenuAction>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Menu buttons with action buttons. Hover over the second item to see
							the action button appear.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Menu buttons with action buttons that can appear on hover or always visible.",
			},
		},
	},
}

export const Sizes: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Sizes</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton size="sm">
									<HouseIcon />
									<span>Small</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton size="default">
									<HouseIcon />
									<span>Default</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton size="lg">
									<HouseIcon />
									<span>Large</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Menu buttons in different sizes: sm, default, and lg.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Menu buttons in different sizes: sm, default, and lg.",
			},
		},
	},
}

export const OutlineVariant: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton variant="outline">
									<HouseIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton variant="outline">
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton variant="outline">
									<GearIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Menu buttons with outline variant showing borders.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Menu buttons with outline variant displaying borders.",
			},
		},
	},
}

export const WithTooltip: Story = {
	render: () => (
		<SidebarProvider defaultOpen={false}>
			<Sidebar collapsible="icon">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Home">
									<HouseIcon />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Documents">
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Settings">
									<GearIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							When the sidebar is collapsed to icon-only mode, hover over the
							icons to see tooltips.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Menu buttons with tooltips that appear when the sidebar is collapsed to icon-only mode.",
			},
		},
	},
}
