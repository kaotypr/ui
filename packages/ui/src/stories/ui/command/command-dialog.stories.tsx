import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "~/components/ui/command"
import { Button } from "~/components/ui/button"
import {
  Calendar,
  Smile,
  Calculator,
  CreditCard,
  Settings,
  User,
} from "lucide-react"

const meta = {
  title: "UI/Command/CommandDialog",
  component: CommandDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Command palette wrapped in a dialog. Must be used with CommandInput, CommandList, and other command parts.\n\nThis component combines the Command component with a Dialog for modal command palette behavior. It accepts all Dialog props in addition to custom props for title and description.",
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
        category: "Dialog Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The default open state when uncontrolled. The dialog will be open by default if set to true.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Dialog Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state changes. Receives the new open state (boolean).",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    title: {
      description: "The title of the command dialog.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Command Palette"' },
        category: "Props",
      },
      control: { type: "text" },
    },
    description: {
      description: "The description of the command dialog.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Search for a command to run..."' },
        category: "Props",
      },
      control: { type: "text" },
    },
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
  },
} satisfies Meta<typeof CommandDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandDialog
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A command dialog that opens when clicking the button. The dialog contains a searchable command menu.",
      },
    },
  },
}

export const CustomTitle: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Custom Dialog</Button>
        <CommandDialog
          {...(args as any)}
          title="Quick Actions"
          description="Search for actions to perform..."
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>New Event</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A command dialog with custom title and description text.",
      },
    },
  },
}

export const WithoutCloseButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <CommandDialog
          {...(args as any)}
          showCloseButton={false}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A command dialog without a close button. Users can close it by clicking outside or pressing Escape.",
      },
    },
  },
}
