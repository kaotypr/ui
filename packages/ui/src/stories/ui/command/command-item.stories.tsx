import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "~/components/ui/command"
import { Calendar, Smile, Calculator, Settings, User } from "lucide-react"

const meta = {
  title: "UI/Command/CommandItem",
  component: CommandItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Individual selectable command item. Must be used within a CommandGroup.\n\nThis component represents a single selectable item in the command menu. It accepts a `value` prop for filtering and an `onSelect` handler for when the item is selected.",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "Value for filtering and selecting. If omitted, inferred from text content.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "cmdk Props",
      },
      control: { type: "text" },
    },
    onSelect: {
      description:
        "Called when the item is selected (via Enter, click, etc.). Receives the item value.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onSelect",
    },
    disabled: {
      description:
        "When true, disables the item and prevents selection.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "cmdk Props",
      },
      control: { type: "boolean" },
    },
    keywords: {
      description:
        "Additional keywords to use in filtering. Helps with search matching.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "undefined" },
        category: "cmdk Props",
      },
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
} satisfies Meta<typeof CommandItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem {...(args as any)}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic command item with an icon and label.",
      },
    },
  },
}

export const WithShortcut: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Settings">
          <CommandItem {...(args as any)}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Command items with keyboard shortcuts displayed on the right side.",
      },
    },
  },
}

export const WithOnSelect: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem
            {...(args as any)}
            value="calendar"
            onSelect={(value) => {
              console.log("Selected:", value)
              args.onSelect?.(value)
            }}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Open Calendar</span>
          </CommandItem>
          <CommandItem
            value="calculator"
            onSelect={(value) => {
              console.log("Selected:", value)
              args.onSelect?.(value)
            }}
          >
            <Calculator className="mr-2 h-4 w-4" />
            <span>Open Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Command items with onSelect handlers that are called when the item is selected. Check the console for selection events.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem {...(args as any)}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Available Action</span>
          </CommandItem>
          <CommandItem disabled>
            <Smile className="mr-2 h-4 w-4" />
            <span>Disabled Action</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A command item that is disabled and cannot be selected.",
      },
    },
  },
}

export const WithKeywords: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type 'event' or 'date' to find calendar..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem
            {...(args as any)}
            value="calendar"
            keywords={["event", "date", "schedule", "appointment"]}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem value="calculator" keywords={["math", "compute", "calculate"]}>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Command items with additional keywords for better search matching. Try searching for 'event' or 'date' to find the calendar item.",
      },
    },
  },
}
