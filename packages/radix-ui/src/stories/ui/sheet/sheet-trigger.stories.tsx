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
  SheetClose,
} from "~/components/ui/sheet"

const meta = {
  title: "UI/Sheet/SheetTrigger",
  component: SheetTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The button that opens the sheet. Must be used within a Sheet component.\n\nThis component is built on top of [Radix UI Dialog Trigger](https://www.radix-ui.com/primitives/docs/components/dialog#trigger).",
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
} satisfies Meta<typeof SheetTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger {...args} asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet</SheetTitle>
          <SheetDescription>
            This is a basic sheet triggered by the button.
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
        story: "A basic sheet trigger using asChild with a Button component.",
      },
    },
  },
}

export const Destructive: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button variant="destructive">Delete</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A sheet trigger with a destructive button variant for dangerous actions.",
      },
    },
  },
}

export const WithoutAsChild: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">Click to Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet</SheetTitle>
          <SheetDescription>
            This trigger renders a button element directly without using asChild.
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
          "A sheet trigger without asChild, which renders a button element directly.",
      },
    },
  },
}
