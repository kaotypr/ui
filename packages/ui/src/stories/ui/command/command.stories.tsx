import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "~/components/ui/command"
import {
  Calendar,
  Smile,
  Calculator,
  CreditCard,
  Settings,
  User,
  Search,
} from "lucide-react"

const meta = {
  title: "UI/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Fast, composable command menu component for building command palettes and searchable menus.\n\nThis component is built on top of [cmdk](https://cmdk.paco.me).\n\n### Component Parts\n- [CommandDialog](?path=/story/ui-command-commanddialog--default): Command palette wrapped in a dialog.\n- [CommandInput](?path=/story/ui-command-commandinput--default): Search input field for filtering commands.\n- [CommandList](?path=/story/ui-command-commandlist--default): Scrollable container for command items.\n- [CommandEmpty](?path=/story/ui-command-commandempty--default): Message displayed when no results are found.\n- [CommandGroup](?path=/story/ui-command-commandgroup--default): Group of related command items with an optional heading.\n- [CommandItem](?path=/story/ui-command-commanditem--default): Individual selectable command item.\n- [CommandShortcut](?path=/story/ui-command-commandshortcut--default): Keyboard shortcut indicator for command items.\n- [CommandSeparator](?path=/story/ui-command-commandseparator--default): Visual separator between command groups.",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The controlled value of the input search state. When provided, the component becomes controlled.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "cmdk Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Event handler called when the search value changes. Receives the new search value (string).",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    filter: {
      description:
        "Custom filter function to rank matches. Takes lowercased, trimmed values. Return a number to rank matches (higher = better match).",
      table: {
        type: {
          summary: "(itemValue: string, search: string) => number",
        },
        defaultValue: { summary: "undefined" },
        category: "cmdk Props",
      },
    },
    shouldFilter: {
      description:
        "When false, disables filtering and sorting automatically. Useful for performance or custom UX.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "cmdk Props",
      },
      control: { type: "boolean" },
    },
    loop: {
      description:
        "When true, allows arrow key navigation to wrap around from last to first item and vice versa.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "cmdk Props",
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
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Command
      {...(args as any)}
      className="rounded-lg border shadow-md w-[450px]"
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
        <CommandSeparator />
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
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic command menu with grouped items, shortcuts, and search functionality.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [search, setSearch] = useState("")
    return (
      <Command
        {...(args as any)}
        value={search}
        onValueChange={(value) => {
          setSearch(value)
          args.onValueChange?.(value)
        }}
        className="rounded-lg border shadow-md w-[450px]"
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
        </CommandList>
      </Command>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled command menu where the search value is managed by React state.",
      },
    },
  },
}

export const WithLoop: Story = {
  render: (args) => (
    <Command
      {...(args as any)}
      loop
      className="rounded-lg border shadow-md w-[450px]"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <span>First Item</span>
          </CommandItem>
          <CommandItem>
            <span>Second Item</span>
          </CommandItem>
          <CommandItem>
            <span>Third Item</span>
          </CommandItem>
          <CommandItem>
            <span>Last Item</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A command menu with loop enabled, allowing arrow key navigation to wrap around from last to first item.",
      },
    },
  },
}

export const WithoutFiltering: Story = {
  render: (args) => {
    const [search, setSearch] = useState("")
    const items = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ]

    const filteredItems = search
      ? items.filter((item) =>
          item.label.toLowerCase().includes(search.toLowerCase())
        )
      : items

    return (
      <Command
        {...(args as any)}
        value={search}
        onValueChange={(value) => {
          setSearch(value)
          args.onValueChange?.(value)
        }}
        shouldFilter={false}
        className="rounded-lg border shadow-md w-[450px]"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Fruits">
            {filteredItems.map((item) => (
              <CommandItem key={item.value} value={item.value}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A command menu with custom filtering disabled, allowing manual control over which items are displayed.",
      },
    },
  },
}

export const WithManyItems: Story = {
  render: (args) => (
    <Command
      {...(args as any)}
      className="rounded-lg border shadow-md w-[450px]"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Applications">
          {Array.from({ length: 20 }, (_, i) => (
            <CommandItem key={i} value={`app-${i}`}>
              <Search className="mr-2 h-4 w-4" />
              <span>Application {i + 1}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A command menu with many items, demonstrating scrolling behavior and performance.",
      },
    },
  },
}
