import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog"
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A modal dialog that interrupts the user with important information and expects a confirmation.",
          "",
          "This component is built on top of ",
          "[Base UI Alert Dialog](https://base-ui.com/react/components/alert-dialog).",
          "",
          "### Component Parts",
          "- [AlertDialogTrigger](?path=/story/ui-alertdialog-alertdialogtrigger--default): Button that opens the alert dialog.",
          "- [AlertDialogContent](?path=/story/ui-alertdialog-alertdialogcontent--default): Container for the alert dialog content.",
          "- [AlertDialogHeader](?path=/story/ui-alertdialog-alertdialogheader--default): Header section of the alert dialog.",
          "- [AlertDialogTitle](?path=/story/ui-alertdialog-alertdialogtitle--default): Title text of the alert dialog.",
          "- [AlertDialogDescription](?path=/story/ui-alertdialog-alertdialogdescription--default): Description text providing additional details.",
          "- [AlertDialogFooter](?path=/story/ui-alertdialog-alertdialogfooter--default): Footer that typically contains actions.",
          "- [AlertDialogAction](?path=/story/ui-alertdialog-alertdialogaction--default): Primary action button.",
          "- [AlertDialogCancel](?path=/story/ui-alertdialog-alertdialogcancel--default): Secondary cancel button.",
          "- [AlertDialogMedia](?path=/story/ui-alertdialog-alertdialogmedia--default): Optional media/icon area in the header.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    // Base UI Root props
    defaultOpen: {
      description:
        "Whether the dialog is initially open. Use for uncontrolled alert dialogs.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    open: {
      description:
        "Whether the dialog is currently open. Use together with onOpenChange for controlled alert dialogs.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the dialog is opened or closed. Receives the next open state and event details.",
      table: {
        type: {
          summary:
            "(open: boolean, eventDetails: AlertDialog.Root.ChangeEventDetails) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    actionsRef: {
      description:
        "Ref to imperative actions for the dialog (close, unmount). Useful when coordinating with external animation libraries.",
      table: {
        type: { summary: "React.RefObject<AlertDialog.Root.Actions>" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: false,
    },
    defaultTriggerId: {
      description:
        "ID of the trigger associated with the dialog when it is initially open.",
      table: {
        type: { summary: "string | null" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: { type: "text" },
    },
    handle: {
      description:
        "Handle to associate the alert dialog with detached triggers created via AlertDialog.createHandle().",
      table: {
        type: { summary: "AlertDialog.Handle<any> | undefined" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: false,
    },
    onOpenChangeComplete: {
      description:
        "Event handler called after any opening or closing animations complete.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChangeComplete",
    },
    triggerId: {
      description:
        "ID of the trigger currently associated with the dialog in controlled mode.",
      table: {
        type: { summary: "string | null" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: { type: "text" },
    },
    children: {
      description:
        "The contents of the alert dialog. Can be a React node or a function that receives the active trigger payload.",
      table: {
        type: {
          summary: "React.ReactNode | ((context: { payload?: unknown }) => React.ReactNode)",
        },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof AlertDialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger>
        <Button variant="default">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete account</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove
            your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic alert dialog pattern with a trigger button, title, description, and primary / secondary actions.",
      },
    },
  },
}

export const WithMedia: Story = {
  args: {
    defaultOpen: false,
  },
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger>
        <Button variant="outline">Discard draft</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <span className="text-lg font-semibold">!</span>
          </AlertDialogMedia>
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            You can’t undo this action. Any unsaved changes will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Discard</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Alert dialog using the media slot and the small size variant to emphasize a destructive confirmation.",
      },
    },
  },
}

