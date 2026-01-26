import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu"

const meta = {
  title: "UI/DropdownMenu/DropdownMenuPortal",
  component: DropdownMenuPortal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Controls where the dropdown menu content is mounted in the DOM. By default, DropdownMenuContent already uses a Portal internally, but this component can be used for more control.\n\nThis component is built on top of [Radix UI Dropdown Menu Portal](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#portal).",
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
    container: {
      description:
        "The HTML element into which the portal content is rendered. By default, it renders to document.body.",
      table: {
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "document.body" },
        category: "Radix UI Props",
      },
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof DropdownMenuPortal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal {...args}>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dropdown menu using DropdownMenuPortal to control where the content is mounted. Note that DropdownMenuContent already uses a portal internally by default.",
      },
    },
  },
}

export const WithForceMount: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal forceMount>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dropdown menu portal with forceMount to control mounting behavior for animations.",
      },
    },
  },
}
