"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@kaotypr/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@kaotypr/ui/sidebar"
import {
  ChartPieIcon,
  DotsThreeIcon,
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
                    <SidebarMenuButton
                      render={<a href={project.url} />}
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger render={<SidebarMenuAction />}>
                        <DotsThreeIcon />
                        <span className="sr-only">More</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span>Edit Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Delete Project</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
