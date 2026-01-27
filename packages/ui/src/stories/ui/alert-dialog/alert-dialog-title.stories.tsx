import type { Meta, StoryObj } from "@storybook/react-vite"

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
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/AlertDialog/AlertDialogTitle",
  component: AlertDialogTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The heading element that labels the alert dialog. Must be used inside AlertDialogHeader.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Text content of the dialog title.",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
      control: { type: "text" },
    },
    className: {
      description: "Additional class names to apply to the title element.",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof AlertDialogTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Delete account",
  },
  render: (args) => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger>
        <Button>Open dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle {...args} />
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
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
        story: "Title used to clearly label the purpose of the alert dialog.",
      },
    },
  },
}

