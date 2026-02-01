"use client"

import { Button } from "@kaotypr/ui/button"
import { Card, CardContent } from "@kaotypr/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@kaotypr/ui/tooltip"
import { Check, Copy } from "lucide-react"
import * as React from "react"

interface ComponentPreviewClientProps {
  children: React.ReactNode
  source: React.ReactNode
  rawSource?: string
  className?: string
  align?: "center" | "start" | "end"
}

const COLLAPSED_HEIGHT = "8rem"
const EXPANDED_MAX_HEIGHT = "18rem"

export function ComponentPreviewClient({
  children,
  source,
  rawSource,
  className,
  align = "center",
}: ComponentPreviewClientProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    if (!rawSource) return
    try {
      await navigator.clipboard.writeText(rawSource)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Card className={`my-4 p-0 gap-0 overflow-hidden border rounded-lg ${className || ""}`}>
      {/* Preview Area */}
      <CardContent className="p-0">
        <div
          className={`not-prose flex min-h-[200px] justify-center p-6 bg-background relative ${
            align === "start" ? "items-start" : align === "end" ? "items-end" : "items-center"
          }`}
        >
          {children}
        </div>
      </CardContent>

      {/* Code Section */}
      <div className="border-t bg-muted relative">
        {/* Code Content - single container with overflow control */}
        <div
          className={`transition-all duration-300 ease-in-out no-scrollbar ${isExpanded ? "overflow-auto" : "overflow-hidden"}`}
          style={{
            maxHeight: isExpanded ? EXPANDED_MAX_HEIGHT : COLLAPSED_HEIGHT,
          }}
        >
          {source}
        </div>

        {/* Gradient fade overlay + View Code button (collapsed state) */}
        {!isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Gradient fade from transparent to background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-muted pointer-events-none" />
            <Button
              variant="outline"
              size="sm"
              className="relative z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={() => setIsExpanded(true)}
            >
              View Code
            </Button>
          </div>
        )}

        {/* Floating copy button (expanded state) */}
        {isExpanded && rawSource && (
          <Tooltip>
            <TooltipTrigger
              className="absolute top-2 right-4 h-8 w-8 inline-flex items-center justify-center rounded-md bg-muted-foreground/10 text-muted-foreground hover:text-foreground hover:bg-muted-foreground/20 z-10 cursor-pointer"
              onClick={handleCopy}
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </TooltipTrigger>
            <TooltipContent>{copied ? "Copied!" : "Copy to clipboard"}</TooltipContent>
          </Tooltip>
        )}

        {/* Collapse button (expanded state) */}
        {isExpanded && (
          <div className="border-t bg-muted/50 px-4 py-2 flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground h-7 text-xs"
              onClick={() => setIsExpanded(false)}
            >
              Collapse
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
