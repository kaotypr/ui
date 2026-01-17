import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "~/components/ui/command"
import { Calendar, Smile, Calculator } from "lucide-react"

const meta = {
  title: "UI/Command/CommandList",
  component: CommandList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Scrollable container for command items. Must be used within a Command component.\n\nThis component provides a scrollable area that displays command items. It automatically handles overflow and scrolling when there are many items.",
      },
    },
  },
  argTypes: {
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
} satisfies Meta<typeof CommandList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList {...(args as any)}>
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
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic command list containing grouped command items.",
      },
    },
  },
}

export const WithManyItems: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList {...(args as any)}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Items">
          {Array.from({ length: 30 }, (_, i) => (
            <CommandItem key={i} value={`item-${i}`}>
              <span>Item {i + 1}</span>
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
          "A command list with many items, demonstrating scrolling behavior when the content exceeds the maximum height.",
      },
    },
  },
}

export const WithMultipleGroups: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList {...(args as any)}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Group 1">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Group 2">
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Another Calendar</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Group 3">
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Another Emoji</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A command list with multiple groups, demonstrating how groups are organized within the list.",
      },
    },
  },
}
