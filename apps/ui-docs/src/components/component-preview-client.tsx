"use client"

import { Button } from "@kaotypr/ui/button"
import { Card, CardContent } from "@kaotypr/ui/card"
import { Check, ChevronDown, ChevronUp, Code, Copy } from "lucide-react"
import * as React from "react"

interface ComponentPreviewClientProps {
  children: React.ReactNode
  source: React.ReactNode
  rawSource?: string
  className?: string
  align?: "center" | "start" | "end"
}

const COLLAPSED_HEIGHT = "8rem"
const EXPANDED_MAX_HEIGHT = "24rem"

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
      <div className="border-t bg-muted/30">
        {/* Code Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground gap-2 h-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Code className="w-4 h-4" />
            {isExpanded ? "Collapse" : "View Code"}
            {isExpanded ? (
              <ChevronUp className="w-3 h-3 ml-1" />
            ) : (
              <ChevronDown className="w-3 h-3 ml-1" />
            )}
          </Button>

          {rawSource && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground gap-2 h-8"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
          )}
        </div>

        {/* Code Content */}
        <div
          className="overflow-hidden transition-all duration-200"
          style={{
            maxHeight: isExpanded ? EXPANDED_MAX_HEIGHT : COLLAPSED_HEIGHT,
          }}
        >
          <div className={`overflow-y-auto ${isExpanded ? `max-h-[${EXPANDED_MAX_HEIGHT}]` : ""}`}>
            {source}
          </div>
        </div>

        {/* Show line count indicator when collapsed */}
        {!isExpanded && (
          <div className="px-4 py-1 text-xs text-muted-foreground bg-muted/30 border-t">
            Click "View Code" to see full source
          </div>
        )}
      </div>
    </Card>
  )
}
