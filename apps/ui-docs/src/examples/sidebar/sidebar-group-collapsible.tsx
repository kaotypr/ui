"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kaotypr/ui/collapsible"
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
import { CaretDownIcon, LifebuoyIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react"

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                render={<CollapsibleTrigger />}
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                Help
                <CaretDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <LifebuoyIcon />
                        Support
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <PaperPlaneTiltIcon />
                        Feedback
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
