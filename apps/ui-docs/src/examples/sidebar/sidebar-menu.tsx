"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
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
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Travel",
    url: "#",
    icon: MapTrifoldIcon,
  },
  {
    name: "Support",
    url: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Feedback",
    url: "#",
    icon: PaperPlaneTiltIcon,
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
                    <SidebarMenuButton render={<a href={project.url} />}>
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
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
