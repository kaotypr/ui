"use client"

import { Button } from "@kaotypr/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
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
  SidebarIcon,
  SidebarSimpleIcon,
  SquareIcon,
} from "@phosphor-icons/react"
import * as React from "react"

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
  const [open, setOpen] = React.useState(true)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
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
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <Button onClick={() => setOpen((open) => !open)} size="sm" variant="ghost">
            {open ? <SidebarSimpleIcon /> : <SidebarIcon />}
            <span>{open ? "Close" : "Open"} Sidebar</span>
          </Button>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
