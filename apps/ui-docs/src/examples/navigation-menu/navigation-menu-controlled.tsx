"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@kaotypr/ui/navigation-menu"
import { useState } from "react"

export function NavigationMenuControlled() {
  const [value, setValue] = useState<string | null>(null)
  return (
    <NavigationMenu value={value} onValueChange={(v) => setValue(v)}>
      <NavigationMenuList>
        <NavigationMenuItem value="overview">
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
              <NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
              <NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
