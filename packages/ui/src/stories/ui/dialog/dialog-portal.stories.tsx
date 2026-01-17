import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogPortal,
} from "~/components/ui/dialog"

const meta = {
  title: "UI/Dialog/DialogPortal",
  component: DialogPortal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Controls where Overlay and Content are mounted in the DOM (e.g. into document body).\n\nThis component is built on top of [Radix UI Dialog Portal](https://www.radix-ui.com/primitives/docs/components/dialog#portal).\n\nNote: DialogPortal is typically used automatically by DialogContent, but can be used directly for custom implementations.",
      },
    },
  },
  argTypes: {
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
    container: {
      description:
        "The HTML element into which portal contents are rendered.",
      table: {
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "document.body" },
        category: "Radix UI Props",
      },
    },
  },
} satisfies Meta<typeof DialogPortal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog</DialogTitle>
          <DialogDescription>
            This dialog uses the default portal. The portal is automatically
            rendered by DialogContent, mounting the dialog content to
            document.body.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dialog with the default portal behavior. The portal is automatically included by DialogContent, mounting to document.body.",
      },
    },
  },
}

export const CustomContainer: Story = {
  render: () => {
    React.useEffect(() => {
      const customContainer = document.createElement("div")
      customContainer.id = "custom-dialog-container"
      customContainer.style.position = "fixed"
      customContainer.style.top = "0"
      customContainer.style.left = "0"
      customContainer.style.width = "100%"
      customContainer.style.height = "100%"
      customContainer.style.pointerEvents = "none"
      document.body.appendChild(customContainer)

      return () => {
        document.body.removeChild(customContainer)
      }
    }, [])

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog with Custom Container</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog with Custom Portal Container</DialogTitle>
            <DialogDescription>
              This example demonstrates how to use a custom container for the
              portal. In practice, DialogContent handles this automatically.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A dialog demonstrating custom portal container usage. Note that DialogContent handles portal mounting automatically.",
      },
    },
  },
}
