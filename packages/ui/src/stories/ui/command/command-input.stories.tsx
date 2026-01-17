import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
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
  title: "UI/Command/CommandInput",
  component: CommandInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Search input field for filtering commands. Must be used within a Command component.\n\nThis component wraps the cmdk Input primitive and provides a search icon. It accepts all standard input props.",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The controlled value of the input. When provided, the input becomes controlled.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "cmdk Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Event handler called when the input value changes. Receives the new value (string).",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    placeholder: {
      description: "Placeholder text displayed when the input is empty.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Input Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "When true, prevents the user from interacting with the input.",
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
} satisfies Meta<typeof CommandInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput {...(args as any)} />
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
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic command input with placeholder text. Typing will filter the command items.",
      },
    },
  },
}

export const WithPlaceholder: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput
        {...(args as any)}
        placeholder="Search commands, files, or actions..."
      />
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
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A command input with a custom placeholder message.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <Command className="rounded-lg border shadow-md w-[450px]">
        <CommandInput
          {...(args as any)}
          value={value}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
          placeholder="Type to search..."
        />
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
          </CommandGroup>
        </CommandList>
      </Command>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled command input where the value is managed by React state.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput {...(args as any)} disabled placeholder="Input disabled" />
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
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A disabled command input that cannot be interacted with.",
      },
    },
  },
}
