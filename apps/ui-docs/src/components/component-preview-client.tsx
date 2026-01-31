"use client"

import * as React from "react"
import { Code } from "lucide-react"
import { Card, CardContent } from "@kaotypr/ui/card"
import { Button } from "@kaotypr/ui/button"

interface ComponentPreviewClientProps {
  children: React.ReactNode
  source: React.ReactNode
  className?: string
  align?: "center" | "start" | "end"
}

export function ComponentPreviewClient({
  children,
  source,
  className,
  align = "center",
}: ComponentPreviewClientProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className={`my-4 p-0 gap-0 overflow-hidden ${className || ""}`}>
      <CardContent className="p-0">
        <div
          className={`not-prose flex min-h-[200px] justify-center p-6 bg-background relative ${
            align === "start" ? "items-start" : align === "end" ? "items-end" : "items-center"
          }`}
        >
          {children}
        </div>
      </CardContent>
      <div className="flex items-center justify-end px-4 py-2 border-t bg-muted/30">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Code className="w-4 h-4" />
          {isOpen ? "Hide Code" : "View Code"}
        </Button>
      </div>
      {isOpen && (
        <div className="border-t">
          {source}
        </div>
      )}
    </Card>
  )
}
