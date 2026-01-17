import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
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
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A sheet component that slides in from the edge of the screen, perfect for side panels and mobile interfaces.\n\nThis component is built on top of [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog).\n\n### Component Parts\n- [SheetTrigger](?path=/story/ui-sheet-sheettrigger--default): The button that opens the sheet. Must be used within a Sheet component.\n- [SheetContent](?path=/story/ui-sheet-sheetcontent--default): The container for the sheet content. Must be used within a Sheet component.\n- [SheetHeader](?path=/story/ui-sheet-sheetheader--default): A container for the sheet title and description.\n- [SheetFooter](?path=/story/ui-sheet-sheetfooter--default): A container for the sheet action buttons.\n- [SheetTitle](?path=/story/ui-sheet-sheettitle--default): The title of the sheet. Must be used within a SheetContent.\n- [SheetDescription](?path=/story/ui-sheet-sheetdescription--default): The description text of the sheet. Must be used within a SheetContent.\n- [SheetClose](?path=/story/ui-sheet-sheetclose--default): A button that closes the sheet. Must be used within a SheetContent.\n- [SheetOverlay](?path=/story/ui-sheet-sheetoverlay--default): The backdrop layer that covers the rest of the interface when the sheet is open.\n- [SheetPortal](?path=/story/ui-sheet-sheetportal--default): Controls where Overlay and Content are mounted in the DOM.",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the sheet. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The open state of the sheet when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the sheet changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    modal: {
      description:
        "When true, interaction with outside elements is disabled and only sheet content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Sheet {...(args as any)}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="rounded-md border px-3 py-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="rounded-md border px-3 py-2"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic sheet with a trigger button, title, description, form fields, and action buttons.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Sheet
        </Button>
        <Sheet
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </SheetClose>
              <Button variant="destructive" onClick={() => setOpen(false)}>
                Delete Account
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled sheet where the open state is managed by React state.",
      },
    },
  },
}

export const NonModal: Story = {
  render: (args) => (
    <Sheet {...(args as any)} modal={false}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Non-Modal Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Non-Modal Sheet</SheetTitle>
          <SheetDescription>
            This sheet is non-modal, so you can interact with content outside of it.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Try clicking outside this sheet - it won't close automatically.
          </p>
        </div>
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
          "A non-modal sheet that allows interaction with content outside the sheet.",
      },
    },
  },
}

export const LongContent: Story = {
  render: (args) => (
    <Sheet {...(args as any)}>
      <SheetTrigger asChild>
        <Button variant="outline">Show Long Content</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Terms and Conditions</SheetTitle>
          <SheetDescription>
            Please read the following terms and conditions carefully.
          </SheetDescription>
        </SheetHeader>
        <div className="max-h-[400px] overflow-y-auto py-4">
          <div className="space-y-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Decline</Button>
          </SheetClose>
          <Button>Accept</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A sheet with long content to demonstrate scrolling behavior.",
      },
    },
  },
}
