import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog"

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog that interrupts the user with important content and expects a response.\n\nThis component is built on top of [Radix UI Alert Dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog).\n\n### Component Parts\n- [AlertDialogTrigger](?path=/story/ui-alertdialog-alertdialogtrigger--default): The button that opens the alert dialog. Must be used within an AlertDialog component.\n- [AlertDialogContent](?path=/story/ui-alertdialog-alertdialogcontent--default): The container for the alert dialog content. Must be used within an AlertDialog component.\n- [AlertDialogHeader](?path=/story/ui-alertdialog-alertdialogheader--default): A container for the alert dialog title and description.\n- [AlertDialogFooter](?path=/story/ui-alertdialog-alertdialogfooter--default): A container for the alert dialog action buttons.\n- [AlertDialogTitle](?path=/story/ui-alertdialog-alertdialogtitle--default): The title of the alert dialog. Must be used within an AlertDialogContent.\n- [AlertDialogDescription](?path=/story/ui-alertdialog-alertdialogdescription--default): The description text of the alert dialog. Must be used within an AlertDialogContent.\n- [AlertDialogAction](?path=/story/ui-alertdialog-alertdialogaction--default): The button that confirms the action. Must be used within an AlertDialogContent.\n- [AlertDialogCancel](?path=/story/ui-alertdialog-alertdialogcancel--default): The button that cancels the action. Must be used within an AlertDialogContent.",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the dialog. Must be used in conjunction with onOpenChange.",
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
        "When true, interaction with outside elements is disabled and only menu content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
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
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AlertDialog {...(args as any)}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic alert dialog with a trigger button, title, description, and action buttons.",
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
        <AlertDialog
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => setOpen(false)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled alert dialog where the open state is managed by React state.",
      },
    },
  },
}

export const Destructive: Story = {
  render: (args) => (
    <AlertDialog {...(args as any)}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A destructive alert dialog with a destructive action button variant.",
      },
    },
  },
}

export const LongContent: Story = {
  render: (args) => (
    <AlertDialog {...(args as any)}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Long Content</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription>
            Please read the following terms and conditions carefully before
            proceeding. This is a longer description that demonstrates how the
            alert dialog handles extended content. The dialog will scroll if
            the content exceeds the available space. This ensures that all
            important information is accessible to the user, regardless of the
            amount of content.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An alert dialog with longer content to demonstrate scrolling behavior.",
      },
    },
  },
}
