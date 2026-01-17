import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetPortal,
} from "~/components/ui/sheet"

const meta = {
  title: "UI/Sheet/SheetPortal",
  component: SheetPortal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Controls where Overlay and Content are mounted in the DOM.\n\nThis component is built on top of [Radix UI Dialog Portal](https://www.radix-ui.com/primitives/docs/components/dialog#portal).\n\nNote: SheetPortal is typically used automatically by SheetContent, but can be used directly for custom implementations.",
      },
    },
  },
  argTypes: {
    container: {
      description:
        "The container into which the portal content is rendered. By default, it renders as a child of document.body.",
      table: {
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "document.body" },
        category: "Radix UI Props",
      },
    },
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof SheetPortal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet with Portal</SheetTitle>
          <SheetDescription>
            This sheet uses the default portal behavior, rendering content in document.body.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A sheet using the default portal behavior. SheetPortal is automatically used by SheetContent.",
      },
    },
  },
}

export const CustomContainer: Story = {
  render: () => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    return (
      <div>
        <div
          ref={containerRef}
          id="custom-portal-container"
          className="relative h-64 w-full rounded-md border-2 border-dashed p-4"
        >
          <p className="text-sm text-muted-foreground">
            Custom portal container
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mt-4">
              Open Sheet (Custom Container)
            </Button>
          </SheetTrigger>
          <SheetPortal container={containerRef.current || undefined}>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet in Custom Container</SheetTitle>
                <SheetDescription>
                  This sheet is rendered in a custom container instead of document.body.
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </SheetPortal>
        </Sheet>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A sheet rendered in a custom container using the container prop. Note: This is a demonstration; in practice, SheetContent handles the portal automatically.",
      },
    },
  },
}
