import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	SidebarProvider,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarGroupAction,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "~/components/ui/sidebar"
import { HouseIcon, FileIcon, GearIcon, PlusIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Sidebar/SidebarGroup",
	component: SidebarGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `Container for grouping related sidebar items. Must be used within SidebarContent.

Groups provide structure and organization to sidebar content, typically containing a label and a collection of menu items.`,
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
} satisfies Meta<typeof SidebarGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup {...args}>
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
							Default sidebar group with label and menu items.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Default sidebar group with a label and collection of menu items.",
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
						<SidebarGroupLabel>Projects</SidebarGroupLabel>
						<SidebarGroupAction>
							<PlusIcon />
						</SidebarGroupAction>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Project 1</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Project 2</span>
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
							Sidebar group with an action button in the header.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar group with an action button that appears next to the label.",
			},
		},
	},
}

export const WithGroupContent: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarGroupContent>
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
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<div className="flex flex-1 flex-col">
				<main className="flex flex-1 flex-col gap-4 p-4">
					<div className="rounded-lg border p-4">
						<p className="text-sm text-muted-foreground">
							Sidebar group using SidebarGroupContent wrapper for additional styling control.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Sidebar group using SidebarGroupContent for wrapping menu content.",
			},
		},
	},
}

export const MultipleGroups: Story = {
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
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>Files</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<FileIcon />
									<span>Documents</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>Settings</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<GearIcon />
									<span>Preferences</span>
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
							Multiple sidebar groups organized together.
						</p>
					</div>
				</main>
			</div>
		</SidebarProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple sidebar groups organized within the sidebar content.",
			},
		},
	},
}
