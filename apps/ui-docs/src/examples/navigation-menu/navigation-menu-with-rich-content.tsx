"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@kaotypr/ui/navigation-menu"

export function NavigationMenuWithRichContent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-4 p-6 w-[500px]">
              <div>
                <h3 className="text-lg font-semibold mb-2">UI Components</h3>
                <div className="grid gap-2">
                  <NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
                  <NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
                  <NavigationMenuLink href="/components/dialog">Dialog</NavigationMenuLink>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Form Components</h3>
                <div className="grid gap-2">
                  <NavigationMenuLink href="/components/checkbox">Checkbox</NavigationMenuLink>
                  <NavigationMenuLink href="/components/select">Select</NavigationMenuLink>
                  <NavigationMenuLink href="/components/radio">Radio</NavigationMenuLink>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
