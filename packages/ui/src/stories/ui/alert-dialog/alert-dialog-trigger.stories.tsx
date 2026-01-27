import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
} from "~/components/ui/alert-dialog"
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/AlertDialog/AlertDialogTrigger",
  component: AlertDialogTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The trigger element that opens the alert dialog. Must be used within an AlertDialog root.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Content of the trigger, typically a button label or custom trigger element.",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
      control: { type: "text" },
    },
    id: {
      description:
        "ID of the trigger. Used with the AlertDialog Root triggerId prop in controlled mode.",
      table: {
        type: { summary: "string" },
        category: "Base UI Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof AlertDialogTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger {...args}>
        <Button variant="default">Open alert dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic trigger that opens an alert dialog when clicked.",
      },
    },
  },
}

