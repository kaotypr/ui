import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerOverlay,
} from "~/components/ui/drawer"

const meta = {
  title: "UI/Drawer/DrawerOverlay",
  component: DrawerOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The backdrop layer that covers the rest of the interface when the drawer is open.\n\nThis component is built on top of [Vaul Drawer Overlay](https://vaul.emilkowal.ski/).\n\nNote: DrawerOverlay is typically used automatically by DrawerContent, but can be used directly for custom implementations.",
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
  },
} satisfies Meta<typeof DrawerOverlay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer uses the default overlay. The overlay is automatically
            rendered by DrawerContent.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="outline">Close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A drawer with the default overlay. The overlay is automatically included by DrawerContent.",
      },
    },
  },
}

export const CustomOverlay: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer with Custom Overlay</Button>
      </DrawerTrigger>
      <DrawerContent className="[&>div:first-child]:bg-black/80">
        <DrawerHeader>
          <DrawerTitle>Drawer with Custom Overlay</DrawerTitle>
          <DrawerDescription>
            This drawer has a custom overlay styling applied via className on
            DrawerContent.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="outline">Close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A drawer with custom overlay styling. The overlay can be styled by targeting the first child of DrawerContent.",
      },
    },
  },
}
