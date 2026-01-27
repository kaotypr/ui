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
  title: "UI/AlertDialog/AlertDialogContent",
  component: AlertDialogContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The popup surface that contains the alert dialog content. Must be rendered inside an AlertDialog root.",
      },
    },
  },
  argTypes: {
    size: {
      description: "Controls the maximum width of the dialog content.",
      table: {
        type: { summary: '"default" | "sm"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "radio" },
      options: ["default", "sm"],
    },
    className: {
      description: "Additional class names to apply to the content container.",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof AlertDialogContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "default",
  },
  render: (args) => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger>
        <Button>Open dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the project and all related
            resources.
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
        story: "Default dialog content size with header, description, and footer actions.",
      },
    },
  },
}

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger>
        <Button variant="outline">Open small dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogTitle>Discard changes?</AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes. Are you sure you want to discard them?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep editing</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Discard</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact content size using the `sm` variant.",
      },
    },
  },
}

