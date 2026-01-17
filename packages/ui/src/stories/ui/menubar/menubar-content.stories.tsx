import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileText, Download } from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarContent",
  component: MenubarContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The container for the menu content. Must be used within a MenubarMenu component.\n\nThis component is built on top of [Radix UI Menubar Content](https://www.radix-ui.com/primitives/docs/components/menubar#content).",
      },
    },
  },
  argTypes: {
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
    alignOffset: {
      description:
        "An offset in pixels from the 'align' position. Can be a negative number.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "-4" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    side: {
      description:
        "The preferred side of the trigger to render against. May change when collisions occur.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    sideOffset: {
      description:
        "The distance in pixels from the trigger. Can be a negative number.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
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
} satisfies Meta<typeof MenubarContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent {...args}>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New File</span>
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Open</span>
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic menu content container with items and shortcuts.",
      },
    },
  },
}

export const WithAlignment: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Start alignment</p>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent align="start">
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Center alignment</p>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent align="center">
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">End alignment</p>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent align="end">
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Menu content with different alignment options (start, center, end).",
      },
    },
  },
}
