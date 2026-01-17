import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
} from "~/components/ui/command"

const meta = {
  title: "UI/Command/CommandEmpty",
  component: CommandEmpty,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Message displayed when no results are found after filtering. Must be used within a CommandList component.\n\nThis component is shown when the search query doesn't match any command items.",
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
} satisfies Meta<typeof CommandEmpty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty {...(args as any)} />
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic empty state message. Type something that doesn't match any items to see it.",
      },
    },
  },
}

export const CustomMessage: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty {...(args as any)}>
          No commands found. Try a different search term.
        </CommandEmpty>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An empty state with a custom message. Type something that doesn't match any items to see it.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty {...(args as any)} className="flex flex-col items-center gap-2 py-6">
          <span className="text-4xl">🔍</span>
          <span>No results found</span>
          <span className="text-sm text-muted-foreground">
            Try searching for something else
          </span>
        </CommandEmpty>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An empty state with an icon and additional information. Type something that doesn't match any items to see it.",
      },
    },
  },
}
