import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetOverlay,
} from "~/components/ui/sheet"

const meta = {
  title: "UI/Sheet/SheetOverlay",
  component: SheetOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The backdrop layer that covers the rest of the interface when the sheet is open.\n\nThis component is built on top of [Radix UI Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay).\n\nNote: SheetOverlay is typically used automatically by SheetContent, but can be used directly for custom implementations.",
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
} satisfies Meta<typeof SheetOverlay>

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
          <SheetTitle>Sheet</SheetTitle>
          <SheetDescription>
            This sheet uses the default overlay. The overlay is automatically
            rendered by SheetContent, providing a backdrop behind the sheet.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button variant="outline">Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A sheet with the default overlay behavior. The overlay is automatically included by SheetContent, providing a backdrop.",
      },
    },
  },
}

export const CustomOverlay: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet with Custom Overlay</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Custom Overlay</SheetTitle>
          <SheetDescription>
            This example demonstrates custom overlay styling. In practice,
            SheetContent handles the overlay automatically.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button variant="outline">Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A sheet demonstrating custom overlay usage. Note that SheetContent handles overlay rendering automatically.",
      },
    },
  },
}
