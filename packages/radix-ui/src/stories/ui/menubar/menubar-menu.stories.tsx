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
  title: "UI/Menubar/MenubarMenu",
  component: MenubarMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A menu container within the menubar. Must be used within a Menubar component.\n\nThis component is built on top of [Radix UI Menubar Menu](https://www.radix-ui.com/primitives/docs/components/menubar#menu).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The controlled value of the menu. Use with onValueChange to control which menu is open.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof MenubarMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu {...args}>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
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
        story: "A basic menu within a menubar with trigger and content.",
      },
    },
  },
}

export const MultipleMenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New File</span>
          </MenubarItem>
          <MenubarItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Open</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Cut</span>
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <span>Copy</span>
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Zoom In</span>
          </MenubarItem>
          <MenubarItem>
            <span>Zoom Out</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple menus within a single menubar.",
      },
    },
  },
}
