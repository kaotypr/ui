import type { Meta, StoryObj } from "@storybook/react-vite"
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
  title: "UI/Dialog/DialogContent",
  component: DialogContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The container for the dialog content. Must be used within a Dialog component.\n\nThis component is built on top of [Radix UI Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content).",
      },
    },
  },
  argTypes: {
    showCloseButton: {
      description: "Whether to show the close button in the dialog.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Props",
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
    onOpenAutoFocus: {
      description:
        "Event handler called when focus is taken inside automatically on open.",
      table: {
        type: { summary: "(event: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenAutoFocus",
    },
    onCloseAutoFocus: {
      description:
        "Event handler called when focus returns after close.",
      table: {
        type: { summary: "(event: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCloseAutoFocus",
    },
    onEscapeKeyDown: {
      description:
        "Event handler called when the escape key is pressed. Can be prevented.",
      table: {
        type: { summary: "(event: KeyboardEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onEscapeKeyDown",
    },
    onPointerDownOutside: {
      description:
        "Event handler called when pointer down outside content.",
      table: {
        type: { summary: "(event: PointerEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onPointerDownOutside",
    },
    onInteractOutside: {
      description:
        "Event handler called when any interaction happens outside.",
      table: {
        type: { summary: "(event: Event) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onInteractOutside",
    },
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
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
} satisfies Meta<typeof DialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Dialog</DialogTitle>
          <DialogDescription>
            This is the content area of the dialog.
          </DialogDescription>
        </DialogHeader>
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
        story: "A basic dialog content with header and footer.",
      },
    },
  },
}

export const CustomWidth: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Wide Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Wide Dialog</DialogTitle>
          <DialogDescription>
            This dialog has a custom maximum width using the className prop.
          </DialogDescription>
        </DialogHeader>
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
          "A dialog content with a custom maximum width using className.",
      },
    },
  },
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Dialog Without Close Button</DialogTitle>
          <DialogDescription>
            This dialog does not have a close button in the top-right corner.
          </DialogDescription>
        </DialogHeader>
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
          "A dialog content without the default close button, requiring users to use the footer button or click outside.",
      },
    },
  },
}
