import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	SidebarProvider,
	Sidebar,
	SidebarTrigger,
	SidebarRail,
	SidebarInset,
	SidebarInput,
	SidebarHeader,
	SidebarFooter,
	SidebarSeparator,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuBadge,
	SidebarMenuSub,
	SidebarMenuSubItem,
	SidebarMenuSubButton,
} from "~/components/ui/sidebar"
import {
	GearIcon,
	HouseIcon,
	BellIcon,
	UserIcon,
	FileIcon,
	FolderIcon,
	CaretRightIcon,
} from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `A collapsible sidebar component for navigation and content organization.

The sidebar component provides a flexible navigation system that can be collapsed to an icon-only view or hidden completely. It includes keyboard shortcuts (Cmd/Ctrl+B) and persists state via cookies.

### Component Parts
- [SidebarProvider](?path=/story/ui-sidebar-sidebarprovider--default): Context provider that manages sidebar state and provides it to child components.
- [SidebarTrigger](?path=/story/ui-sidebar-sidebartrigger--default): Button that toggles the sidebar open/closed state.
- [SidebarRail](?path=/story/ui-sidebar-sidebarrail--default): Interactive rail element for toggling the sidebar by dragging.
- [SidebarInset](?path=/story/ui-sidebar-sidebarinset--default): Main content area that adjusts based on sidebar state.
- [SidebarInput](?path=/story/ui-sidebar-sidebarinput--default): Input component styled for use within the sidebar.
- [SidebarHeader](?path=/story/ui-sidebar-sidebarheader--default): Header section at the top of the sidebar.
- [SidebarFooter](?path=/story/ui-sidebar-sidebarfooter--default): Footer section at the bottom of the sidebar.
- [SidebarSeparator](?path=/story/ui-sidebar-sidebarseparator--default): Visual separator between sidebar sections.
- [SidebarContent](?path=/story/ui-sidebar-sidebarcontent--default): Scrollable content area of the sidebar.
- [SidebarGroup](?path=/story/ui-sidebar-sidebargroup--default): Container for grouping related sidebar items.
- [SidebarGroupLabel](?path=/story/ui-sidebar-sidebargrouplabel--default): Label for a group of sidebar items.
- [SidebarGroupAction](?path=/story/ui-sidebar-sidebargroupaction--default): Action button for a sidebar group.
- [SidebarGroupContent](?path=/story/ui-sidebar-sidebargroupcontent--default): Content container within a sidebar group.
- [SidebarMenu](?path=/story/ui-sidebar-sidebarmenu--default): Menu container for sidebar navigation items.
- [SidebarMenuItem](?path=/story/ui-sidebar-sidebarmenuitem--default): Individual menu item container.
- [SidebarMenuButton](?path=/story/ui-sidebar-sidebarmenubutton--default): Button element for menu items with support for tooltips when collapsed.
- [SidebarMenuAction](?path=/story/ui-sidebar-sidebarmenuaction--default): Action button that appears on menu items.
- [SidebarMenuBadge](?path=/story/ui-sidebar-sidebarmenubadge--default): Badge component for displaying counts or labels on menu items.
- [SidebarMenuSkeleton](?path=/story/ui-sidebar-sidebarmenuskeleton--default): Loading skeleton for menu items.
- [SidebarMenuSub](?path=/story/ui-sidebar-sidebarmenusub--default): Container for submenu items.
- [SidebarMenuSubItem](?path=/story/ui-sidebar-sidebarmenusubitem--default): Individual submenu item container.
- [SidebarMenuSubButton](?path=/story/ui-sidebar-sidebarmenusubbutton--default): Button element for submenu items.`,
			},
		},
	},
	argTypes: {
		// Props
		side: {
			description: "Which side of the screen the sidebar appears on.",
			table: {
				type: { summary: '"left" | "right"' },
				defaultValue: { summary: '"left"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["left", "right"],
		},
		variant: {
			description: "Visual variant of the sidebar.",
			table: {
				type: { summary: '"sidebar" | "floating" | "inset"' },
				defaultValue: { summary: '"sidebar"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["sidebar", "floating", "inset"],
		},
		collapsible: {
			description:
				"Collapsible behavior of the sidebar. 'offExamples' hides when collapsed, 'icon' shows icons only, 'none' prevents collapsing.",
			table: {
				type: { summary: '"offExamples" | "icon" | "none"' },
				defaultValue: { summary: '"offExamples"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["offExamples", "icon", "none"],
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
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar {...args}>
				<SidebarHeader>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<div className="flex flex-col">
							<span className="text-sm font-semibold">Acme Inc</span>
							<span className="text-xs text-muted-foreground">Dashboard</span>
						</div>
					</div>
				</SidebarHeader>
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
									<FolderIcon />
									<span>Files</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarSeparator />
					<SidebarGroup>
						<SidebarGroupLabel>Settings</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<GearIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<UserIcon />
									<span>Profile</span>
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
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">Main Content</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<h2 className="text-sm font-medium">Welcome</h2>
						<p className="text-sm text-muted-foreground">
							This is the main content area. The sidebar can be toggled using the trigger button or
							the keyboard shortcut (Cmd/Ctrl+B).
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default sidebar with header, navigation menu, settings section, and footer. The sidebar can be collapsed to icon-only view or hidden completely.",
			},
		},
	},
}

export const WithSearch: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarTrigger />
					<div className="px-2">
						<SidebarInput placeholder="Search..." />
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Quick Access</SidebarGroupLabel>
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
									<span>Recent</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">With Search</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar with search input in the header.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar with a search input in the header for filtering content.",
			},
		},
	},
}

export const WithSubmenus: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<span className="text-sm font-semibold">Navigation</span>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Main Menu</SidebarGroupLabel>
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
									<CaretRightIcon />
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>Recent</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>Favorites</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>Archived</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FolderIcon />
									<span>Projects</span>
									<CaretRightIcon />
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>Active</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>Completed</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">With Submenus</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">Sidebar with nested submenu items.</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar with nested submenus demonstrating hierarchical navigation.",
			},
		},
	},
}

export const FloatingVariant: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar variant="floating">
				<SidebarHeader>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<span className="text-sm font-semibold">Floating</span>
					</div>
				</SidebarHeader>
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
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">Floating Variant</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Floating variant with rounded corners and shadow.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	args: {
		variant: "floating",
	},
	parameters: {
		docs: {
			description: {
				story: "Floating variant of the sidebar with rounded corners and shadow effect.",
			},
		},
	},
}

export const InsetVariant: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar variant="inset">
				<SidebarHeader>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<span className="text-sm font-semibold">Inset</span>
					</div>
				</SidebarHeader>
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
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">Inset Variant</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Inset variant where the main content has rounded corners and shadow, creating a
							card-like appearance.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	args: {
		variant: "inset",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Inset variant where the main content area has rounded corners and shadow, creating a card-like appearance.",
			},
		},
	},
}

export const RightSide: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar side="right">
				<SidebarHeader>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<GearIcon />
						</div>
						<span className="text-sm font-semibold">Settings</span>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Preferences</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<GearIcon />
									<span>General</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<UserIcon />
									<span>Account</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">Right Side</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar positioned on the right side of the screen.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	args: {
		side: "right",
	},
	parameters: {
		docs: {
			description: {
				story: "Sidebar positioned on the right side of the screen.",
			},
		},
	},
}

export const IconCollapsible: Story = {
	render: () => (
		<SidebarProvider defaultOpen={true}>
			<Sidebar collapsible="icon">
				<SidebarHeader>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<span className="text-sm font-semibold">Icon Mode</span>
					</div>
				</SidebarHeader>
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
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">Icon Collapsible</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							When collapsed, the sidebar shows only icons. Tooltips appear on hover to show the
							full label.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	args: {
		collapsible: "icon",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Sidebar with icon-only collapsible mode. When collapsed, only icons are shown with tooltips on hover.",
			},
		},
	},
}

export const NonCollapsible: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar collapsible="none">
				<SidebarHeader>
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<span className="text-sm font-semibold">Fixed Sidebar</span>
					</div>
				</SidebarHeader>
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
			</Sidebar>
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<h1 className="text-lg font-semibold">Non-Collapsible</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar that cannot be collapsed. Always remains visible at full width.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	args: {
		collapsible: "none",
	},
	parameters: {
		docs: {
			description: {
				story: "Non-collapsible sidebar that always remains visible at full width.",
			},
		},
	},
}
