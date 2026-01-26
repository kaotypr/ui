import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "~/components/ui/dialog"

const meta = {
  title: "UI/Dialog/DialogOverlay",
  component: DialogOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The backdrop layer that covers the rest of the interface when the dialog is open.\n\nThis component is built on top of [Radix UI Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay).\n\nNote: DialogOverlay is typically used automatically by DialogContent, but can be used directly for custom implementations.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Additional CSS class names to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
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
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof DialogOverlay>

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
            This dialog uses the default overlay. The overlay is automatically
            rendered by DialogContent.
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
          "A dialog with the default overlay. The overlay is automatically included by DialogContent.",
      },
    },
  },
}

export const CustomOverlay: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog with Custom Overlay</Button>
      </DialogTrigger>
      <DialogContent className="[&>div:first-child]:bg-black/80">
        <DialogHeader>
          <DialogTitle>Dialog with Custom Overlay</DialogTitle>
          <DialogDescription>
            This dialog has a custom overlay styling applied via className on
            DialogContent.
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
          "A dialog with custom overlay styling. The overlay can be styled by targeting the first child of DialogContent.",
      },
    },
  },
}
