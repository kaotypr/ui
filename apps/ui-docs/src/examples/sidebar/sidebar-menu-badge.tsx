"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@kaotypr/ui/sidebar"
import {
  ChartPieIcon,
  LifebuoyIcon,
  MapTrifoldIcon,
  PaperPlaneTiltIcon,
  SquareIcon,
} from "@phosphor-icons/react"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: SquareIcon,
    badge: "24",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: ChartPieIcon,
    badge: "12",
  },
  {
    name: "Travel",
    url: "#",
    icon: MapTrifoldIcon,
    badge: "3",
  },
  {
    name: "Support",
    url: "#",
    icon: LifebuoyIcon,
    badge: "21",
  },
  {
    name: "Feedback",
    url: "#",
    icon: PaperPlaneTiltIcon,
    badge: "8",
  },
]

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton
                      render={<a href={project.url} />}
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
