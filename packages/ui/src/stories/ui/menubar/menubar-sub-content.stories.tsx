import type { Meta, StoryObj } from "@storybook/react-vite"
import { Mail, User } from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarItem,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarSubContent",
  component: MenubarSubContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The content container for a submenu. Must be used within a MenubarSub component.\n\nThis component is built on top of [Radix UI Menubar SubContent](https://www.radix-ui.com/primitives/docs/components/menubar#subcontent).",
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
} satisfies Meta<typeof MenubarSubContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>
              <User className="mr-2 h-4 w-4" />
              <span>Share</span>
            </MenubarSubTrigger>
            <MenubarSubContent {...args}>
              <MenubarItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </MenubarItem>
              <MenubarItem>Copy Link</MenubarItem>
              <MenubarItem>Export</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic submenu content container with items.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>
              <span>Share</span>
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </MenubarItem>
              <MenubarItem>
                <User className="mr-2 h-4 w-4" />
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
        story: "Submenu content with items containing icons.",
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
                <MenubarSubTrigger>More Options</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Copy Link</MenubarItem>
                  <MenubarItem>Export</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Nested submenu content creating multi-level menu hierarchies.",
      },
    },
  },
}
