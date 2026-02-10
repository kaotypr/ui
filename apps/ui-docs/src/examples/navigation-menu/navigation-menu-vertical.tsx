"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@kaotypr/ui/navigation-menu"

export function NavigationMenuVertical() {
  return (
    <NavigationMenu orientation="vertical">
      <NavigationMenuList className="flex-col">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[300px]">
              <NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
              <NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[300px]">
              <NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
              <NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
