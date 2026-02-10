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
	SidebarSeparator,
} from "~/components/ui/sidebar"
import { HouseIcon, FileIcon, GearIcon, UserIcon, BellIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar/SidebarContent",
	component: SidebarContent,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `Scrollable content area of the sidebar. Must be used within a Sidebar component.

The content area automatically handles scrolling and adjusts its overflow behavior when the sidebar is collapsed to icon-only mode.`,
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
} satisfies Meta<typeof SidebarContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent {...args}>
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
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Default sidebar content with navigation items.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Default sidebar content area with navigation items.",
			},
		},
	},
}

export const Scrollable: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							{Array.from({ length: 20 }).map((_, i) => (
								<SidebarMenuItem key={i}>
									<SidebarMenuButton>
										<HouseIcon />
										<span>Item {i + 1}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
					<SidebarSeparator />
					<SidebarGroup>
						<SidebarGroupLabel>More Items</SidebarGroupLabel>
						<SidebarMenu>
							{Array.from({ length: 10 }).map((_, i) => (
								<SidebarMenuItem key={i}>
									<SidebarMenuButton>
										<FileIcon />
										<span>More Item {i + 1}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar content with many items demonstrating scrollable behavior.
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
					"Sidebar content with many items demonstrating automatic scrolling when content overflows.",
			},
		},
	},
}

export const WithMultipleGroups: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Main</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
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
						</SidebarMenu>
					</SidebarGroup>
					<SidebarSeparator />
					<SidebarGroup>
						<SidebarGroupLabel>Account</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<UserIcon />
									<span>Profile</span>
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
					<SidebarSeparator />
					<SidebarGroup>
						<SidebarGroupLabel>Notifications</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<BellIcon />
									<span>Alerts</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar content with multiple groups separated by dividers.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar content organized into multiple groups with separators between them.",
			},
		},
	},
}
