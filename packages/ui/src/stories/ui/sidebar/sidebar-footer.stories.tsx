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
	SidebarFooter,
	SidebarMenuBadge,
} from "~/components/ui/sidebar"
import {
	HouseIcon,
	FileIcon,
	BellIcon,
	UserIcon,
	GearIcon,
} from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar/SidebarFooter",
	component: SidebarFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `Footer section at the bottom of the sidebar. Must be used within a Sidebar component.

The footer typically contains user profile information, notifications, or other bottom-level controls.`,
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
} satisfies Meta<typeof SidebarFooter>

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
				</SidebarContent>
				<SidebarFooter {...args}>
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
				</SidebarFooter>
			</Sidebar>
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Default sidebar footer with user actions.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Default sidebar footer with menu items for user actions.",
			},
		},
	},
}

export const WithNotifications: Story = {
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
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<BellIcon />
								<span>Notifications</span>
								<SidebarMenuBadge>3</SidebarMenuBadge>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<UserIcon />
								<span>Profile</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar footer with notifications badge.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar footer with notification badge showing unread count.",
			},
		},
	},
}

export const UserProfile: Story = {
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
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<div className="flex items-center gap-2 px-2 py-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
							<UserIcon />
						</div>
						<div className="flex flex-col">
							<span className="text-sm font-medium">John Doe</span>
							<span className="text-xs text-muted-foreground">
								john@example.com
							</span>
						</div>
					</div>
				</SidebarFooter>
			</Sidebar>
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar footer with user profile information.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar footer displaying user profile information.",
			},
		},
	},
}
