import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu"

const meta = {
  title: "UI/DropdownMenu/DropdownMenuSubContent",
  component: DropdownMenuSubContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The content container for a submenu. Must be used within a DropdownMenuSub component.\n\nThis component is built on top of [Radix UI Dropdown Menu SubContent](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent).",
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
        defaultValue: { summary: '"right"' },
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
      description: "The distance in pixels from the trigger.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
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
} satisfies Meta<typeof DropdownMenuSubContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Settings</DropdownMenuSubTrigger>
          <DropdownMenuSubContent {...args}>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Privacy</DropdownMenuItem>
            <DropdownMenuItem>Security</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic submenu content with default positioning.",
      },
    },
  },
}

export const LeftSide: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
          <DropdownMenuSubContent side="left">
            <DropdownMenuItem>Export as PDF</DropdownMenuItem>
            <DropdownMenuItem>Export as DOCX</DropdownMenuItem>
            <DropdownMenuItem>Export as HTML</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Submenu content positioned to the left of the trigger.",
      },
    },
  },
}

export const WithOffset: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Settings</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={10} alignOffset={5}>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Privacy</DropdownMenuItem>
            <DropdownMenuItem>Security</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Submenu content with custom side and align offsets for positioning.",
      },
    },
  },
}
