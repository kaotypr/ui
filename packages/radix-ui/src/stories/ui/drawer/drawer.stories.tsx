import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "~/components/ui/drawer"

const meta = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A drawer component that slides in from the edge of the screen, perfect for mobile and tablet interfaces.\n\nThis component is built on top of [Vaul Drawer](https://vaul.emilkowal.ski/).\n\n### Component Parts\n- [DrawerTrigger](?path=/story/ui-drawer-drawertrigger--default): The button that opens the drawer. Must be used within a Drawer component.\n- [DrawerContent](?path=/story/ui-drawer-drawercontent--default): The container for the drawer content. Must be used within a Drawer component.\n- [DrawerHeader](?path=/story/ui-drawer-drawerheader--default): A container for the drawer title and description.\n- [DrawerFooter](?path=/story/ui-drawer-drawerfooter--default): A container for the drawer action buttons.\n- [DrawerTitle](?path=/story/ui-drawer-drawertitle--default): The title of the drawer. Must be used within a DrawerContent.\n- [DrawerDescription](?path=/story/ui-drawer-drawerdescription--default): The description text of the drawer. Must be used within a DrawerContent.\n- [DrawerClose](?path=/story/ui-drawer-drawerclose--default): A button that closes the drawer. Must be used within a DrawerContent.\n- [DrawerOverlay](?path=/story/ui-drawer-draweroverlay--default): The backdrop layer that covers the rest of the interface when the drawer is open.\n- [DrawerPortal](?path=/story/ui-drawer-drawerportal--default): Controls where Overlay and Content are mounted in the DOM.",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the drawer. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Vaul Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The open state of the drawer when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Vaul Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the drawer changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    direction: {
      description: "The direction from which the drawer opens.",
      table: {
        type: { summary: '"top" | "bottom" | "left" | "right"' },
        defaultValue: { summary: '"bottom"' },
        category: "Vaul Props",
      },
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    modal: {
      description:
        "When true, interaction with outside elements is disabled and only drawer content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Vaul Props",
      },
      control: { type: "boolean" },
    },
    dismissible: {
      description:
        "If false, disables all default dismissal actions: outside click, esc key, drag to close.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Vaul Props",
      },
      control: { type: "boolean" },
    },
    shouldScaleBackground: {
      description:
        "Enables background scaling effect. Requires a wrapper with data-vaul-drawer-wrapper attribute.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Vaul Props",
      },
      control: { type: "boolean" },
    },
    snapPoints: {
      description:
        "Snap points for drawer heights/widths. Must be ordered from least visible to most visible.",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "undefined" },
        category: "Vaul Props",
      },
    },
    closeThreshold: {
      description:
        "Percent threshold (0-1) for closing drawer when swiped.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Vaul Props",
      },
      control: { type: "number", min: 0, max: 1, step: 0.1 },
    },
    handleOnly: {
      description:
        "Drawer draggable only via Drawer.Handle component if true.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Vaul Props",
      },
      control: { type: "boolean" },
    },
    onAnimationEnd: {
      description:
        "Fires after open/close animation ends. Passes current open state.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onAnimationEnd",
    },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Drawer {...(args as any)}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 p-4">
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
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic drawer with a trigger button, title, description, form fields, and action buttons.",
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
          Open Drawer
        </Button>
        <Drawer
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DrawerClose>
              <Button variant="destructive" onClick={() => setOpen(false)}>
                Delete Account
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled drawer where the open state is managed by React state.",
      },
    },
  },
}

export const TopDirection: Story = {
  render: (args) => (
    <Drawer {...(args as any)} direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Top Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Top Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer opens from the top of the screen.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Drawers can open from any direction: top, bottom, left, or right.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story: "A drawer that opens from the top of the screen.",
      },
    },
  },
}

export const RightDirection: Story = {
  render: (args) => (
    <Drawer {...(args as any)} direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Right Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Right Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer opens from the right side of the screen.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Side drawers are great for navigation menus or settings panels.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story: "A drawer that opens from the right side of the screen.",
      },
    },
  },
}

export const NonDismissible: Story = {
  render: (args) => (
    <Drawer {...(args as any)} dismissible={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Non-Dismissible Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Important Action Required</DrawerTitle>
          <DrawerDescription>
            This drawer cannot be dismissed by clicking outside, pressing ESC, or dragging. You must use the close button.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Use this for critical actions that require explicit user confirmation.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>I Understand</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A non-dismissible drawer that requires explicit user action to close.",
      },
    },
  },
}

export const LongContent: Story = {
  render: (args) => (
    <Drawer {...(args as any)}>
      <DrawerTrigger asChild>
        <Button variant="outline">Show Long Content</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Terms and Conditions</DrawerTitle>
          <DrawerDescription>
            Please read the following terms and conditions carefully.
          </DrawerDescription>
        </DrawerHeader>
        <div className="max-h-[400px] overflow-y-auto p-4">
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
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Decline</Button>
          </DrawerClose>
          <Button>Accept</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A drawer with long content to demonstrate scrolling behavior.",
      },
    },
  },
}
