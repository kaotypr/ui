import type { Meta, StoryObj } from "@storybook/react-vite"
import { User, Mail } from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarSub",
  component: MenubarSub,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A submenu container for nested menus. Must be used with MenubarSubTrigger and MenubarSubContent.\n\nThis component is built on top of [Radix UI Menubar Sub](https://www.radix-ui.com/primitives/docs/components/menubar#sub).",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the submenu. Use with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The open state of the submenu when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the submenu changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
  },
} satisfies Meta<typeof MenubarSub>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>New</span>
          </MenubarItem>
          <MenubarSub {...(args as any)}>
            <MenubarSubTrigger>
              <User className="mr-2 h-4 w-4" />
              <span>Share</span>
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </MenubarItem>
              <MenubarItem>
                <span>Copy Link</span>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic submenu with trigger and content.",
      },
    },
  },
}

export const NestedSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>New</span>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>
              <span>Share</span>
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  <span>More Options</span>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Copy Link</MenubarItem>
                  <MenubarItem>Export</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <span>Export</span>
            <MenubarSub>
              <MenubarSubTrigger>
                <span>Export As</span>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PDF</MenubarItem>
                <MenubarItem>Word</MenubarItem>
                <MenubarItem>Markdown</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Nested submenus creating multi-level menu hierarchies.",
      },
    },
  },
}

export const MultipleSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>New</span>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>
              <User className="mr-2 h-4 w-4" />
              <span>Share</span>
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </MenubarItem>
              <MenubarItem>Copy Link</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <span>Export</span>
            <MenubarSub>
              <MenubarSubTrigger>
                <span>Export As</span>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PDF</MenubarItem>
                <MenubarItem>Word</MenubarItem>
                <MenubarItem>Markdown</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple submenus in a single menu.",
      },
    },
  },
}
