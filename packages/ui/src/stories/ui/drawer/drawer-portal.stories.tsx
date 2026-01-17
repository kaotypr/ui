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
  DrawerPortal,
} from "~/components/ui/drawer"

const meta = {
  title: "UI/Drawer/DrawerPortal",
  component: DrawerPortal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Controls where Overlay and Content are mounted in the DOM (e.g. into document body).\n\nThis component is built on top of [Vaul Drawer Portal](https://vaul.emilkowal.ski/).\n\nNote: DrawerPortal is typically used automatically by DrawerContent, but can be used directly for custom implementations.",
      },
    },
  },
  argTypes: {
    container: {
      description:
        "The HTML element into which portal contents are rendered.",
      table: {
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "document.body" },
        category: "Vaul Props",
      },
    },
  },
} satisfies Meta<typeof DrawerPortal>

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
            This drawer uses the default portal. The portal is automatically
            rendered by DrawerContent, mounting the drawer content to
            document.body.
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
          "A drawer with the default portal behavior. The portal is automatically included by DrawerContent, mounting to document.body.",
      },
    },
  },
}

export const CustomContainer: Story = {
  render: () => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer with Custom Container</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer with Custom Portal Container</DrawerTitle>
            <DrawerDescription>
              This example demonstrates how to use a custom container for the
              portal. In practice, DrawerContent handles this automatically.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline">Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A drawer demonstrating custom portal container usage. Note that DrawerContent handles portal mounting automatically.",
      },
    },
  },
}
