import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog"

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.\n\nThis component is built on top of [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog).\n\n### Component Parts\n- [DialogTrigger](?path=/story/ui-dialog-dialogtrigger--default): The button that opens the dialog. Must be used within a Dialog component.\n- [DialogContent](?path=/story/ui-dialog-dialogcontent--default): The container for the dialog content. Must be used within a Dialog component.\n- [DialogHeader](?path=/story/ui-dialog-dialogheader--default): A container for the dialog title and description.\n- [DialogFooter](?path=/story/ui-dialog-dialogfooter--default): A container for the dialog action buttons.\n- [DialogTitle](?path=/story/ui-dialog-dialogtitle--default): The title of the dialog. Must be used within a DialogContent.\n- [DialogDescription](?path=/story/ui-dialog-dialogdescription--default): The description text of the dialog. Must be used within a DialogContent.\n- [DialogClose](?path=/story/ui-dialog-dialogclose--default): A button that closes the dialog. Must be used within a DialogContent.\n- [DialogOverlay](?path=/story/ui-dialog-dialogoverlay--default): The backdrop layer that covers the rest of the interface when the dialog is open.\n- [DialogPortal](?path=/story/ui-dialog-dialogportal--default): Controls where Overlay and Content are mounted in the DOM.",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the dialog. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the dialog changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    modal: {
      description:
        "When true, interaction with outside elements is disabled and only dialog content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Dialog {...(args as any)}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 rounded-md border px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 rounded-md border px-3 py-2"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic dialog with a trigger button, title, description, form fields, and action buttons.",
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
          Open Dialog
        </Button>
        <Dialog
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogClose>
              <Button variant="destructive" onClick={() => setOpen(false)}>
                Delete Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled dialog where the open state is managed by React state.",
      },
    },
  },
}

export const NonModal: Story = {
  render: (args) => (
    <Dialog {...(args as any)} modal={false}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Non-Modal Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Non-Modal Dialog</DialogTitle>
          <DialogDescription>
            This dialog is non-modal, so you can interact with content outside of it.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Try clicking outside this dialog - it won't close automatically.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A non-modal dialog that allows interaction with content outside the dialog.",
      },
    },
  },
}

export const LongContent: Story = {
  render: (args) => (
    <Dialog {...(args as any)}>
      <DialogTrigger asChild>
        <Button variant="outline">Show Long Content</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read the following terms and conditions carefully.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Decline</Button>
          </DialogClose>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dialog with long content to demonstrate scrolling behavior.",
      },
    },
  },
}
