"use client"

import { Tabs, TabsList, TabsTrigger } from "@kaotypr/ui/tabs"
import { AppWindowIcon, CodeIcon } from "@phosphor-icons/react"

export function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
