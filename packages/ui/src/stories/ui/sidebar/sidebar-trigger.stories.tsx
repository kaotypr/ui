import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	SidebarProvider,
	Sidebar,
	SidebarTrigger,
	SidebarRail,
	SidebarInset,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "~/components/ui/sidebar"
import { HouseIcon, FileIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar/SidebarTrigger",
	component: SidebarTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `Button that toggles the sidebar open/closed state. Must be used within a SidebarProvider.

The trigger button can be placed in the sidebar header or in the main content area. It supports keyboard shortcuts (Cmd/Ctrl+B) for toggling.`,
			},
		},
	},
	argTypes: {
		// Button Props (inherited)
		variant: {
			description: "Visual variant of the button.",
			table: {
				type: { summary: "ButtonVariant" },
				defaultValue: { summary: '"ghost"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
		},
		size: {
			description: "Size of the button.",
			table: {
				type: { summary: "ButtonSize" },
				defaultValue: { summary: '"icon-sm"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon", "icon-sm"],
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
} satisfies Meta<typeof SidebarTrigger>

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
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger {...args} />
					<h1 className="text-lg font-semibold">Sidebar Trigger</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Click the trigger button to toggle the sidebar. You can also use
							the keyboard shortcut Cmd/Ctrl+B.
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
					"Default sidebar trigger button placed in the main content header. Click to toggle the sidebar open/closed.",
			},
		},
	},
}

export const InSidebarHeader: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar>
				<div className="flex h-16 items-center gap-2 border-b px-4">
					<SidebarTrigger {...args} />
					<span className="text-sm font-semibold">Sidebar</span>
				</div>
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
					<h1 className="text-lg font-semibold">Trigger in Header</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Trigger button placed in the sidebar header.
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Trigger button placed within the sidebar header.",
			},
		},
	},
}

export const CustomVariant: Story = {
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
			</Sidebar>
			<SidebarRail />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger variant="outline" size="sm" />
					<h1 className="text-lg font-semibold">Custom Variant</h1>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Trigger button with custom variant (outline) and size (sm).
						</p>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Trigger button with custom variant and size props.",
			},
		},
	},
}
