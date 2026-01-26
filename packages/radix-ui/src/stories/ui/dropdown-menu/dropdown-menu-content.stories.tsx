import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu"

const meta = {
  title: "UI/DropdownMenu/DropdownMenuContent",
  component: DropdownMenuContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The container for the dropdown menu content. Must be used within a DropdownMenu component.\n\nThis component is built on top of [Radix UI Dropdown Menu Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content).",
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
    side: {
      description:
        "The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      description:
        "The preferred alignment against the trigger. May change when collisions occur.",
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"start"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
    sideOffset: {
      description:
        "The distance in pixels from the trigger. Defaults to 4 in this component.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    alignOffset: {
      description: "An offset in pixels from the 'start' or 'end' alignment options.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    avoidCollisions: {
      description:
        "When true, overrides the side and align preferences to prevent collisions with boundary edges.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    collisionPadding: {
      description:
        "The padding between the collision boundary edges and the content. This accepts a number (same padding on all sides) or a partial padding object.",
      table: {
        type: { summary: "number | Partial<{ top: number; right: number; bottom: number; left: number }>" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    loop: {
      description:
        "When true, keyboard navigation will loop from the last item to the first, and vice versa.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onCloseAutoFocus: {
      description:
        "Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCloseAutoFocus",
    },
    onEscapeKeyDown: {
      description:
        "Event handler called when the escape key is pressed. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: KeyboardEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onEscapeKeyDown",
    },
    onPointerDownOutside: {
      description:
        "Event handler called when a pointer event occurs outside the content. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: PointerEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onPointerDownOutside",
    },
    onInteractOutside: {
      description:
        "Event handler called when an interaction (pointer or focus event) occurs outside the content. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: FocusEvent | PointerEvent) => void" },
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
} satisfies Meta<typeof DropdownMenuContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic dropdown menu content with default positioning.",
      },
    },
  },
}

export const TopPosition: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu (Top)</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu content positioned above the trigger.",
      },
    },
  },
}

export const RightPosition: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu (Right)</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu content positioned to the right of the trigger.",
      },
    },
  },
}

export const CenterAlign: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu (Center)</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu content aligned to the center of the trigger.",
      },
    },
  },
}

export const WithOffset: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu (Offset)</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} alignOffset={10}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu content with custom side and align offsets for positioning.",
      },
    },
  },
}
