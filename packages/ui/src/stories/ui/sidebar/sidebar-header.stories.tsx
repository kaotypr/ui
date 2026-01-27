import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	SidebarProvider,
	Sidebar,
	SidebarHeader,
	SidebarTrigger,
	SidebarInput,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "~/components/ui/sidebar"
import { HouseIcon, FileIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar/SidebarHeader",
	component: SidebarHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `Header section at the top of the sidebar. Must be used within a Sidebar component.

The header typically contains branding, a trigger button, search input, or other top-level controls.`,
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
} satisfies Meta<typeof SidebarHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader {...args}>
					<SidebarTrigger />
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<div className="flex flex-col">
							<span className="text-sm font-semibold">Acme Inc</span>
							<span className="text-xs text-muted-foreground">
								Dashboard
							</span>
						</div>
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
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Default sidebar header with trigger button and branding.
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
					"Default sidebar header with trigger button and company branding.",
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
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar header with search input for filtering content.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar header with a search input field.",
			},
		},
	},
}

export const Simple: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<div className="flex items-center gap-2 px-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
							<HouseIcon />
						</div>
						<span className="text-sm font-semibold">App Name</span>
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
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Simple sidebar header with just branding, no trigger button.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Simple sidebar header with minimal branding content.",
			},
		},
	},
}
