import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileText, Mail } from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarGroup",
  component: MenubarGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A group of related items in the menu.\n\nThis component is built on top of [Radix UI Menubar Group](https://www.radix-ui.com/primitives/docs/components/menubar#group).",
      },
    },
  },
  argTypes: {
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
} satisfies Meta<typeof MenubarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup {...args}>
            <MenubarLabel>New</MenubarLabel>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>File</span>
            </MenubarItem>
            <MenubarItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup {...args}>
            <MenubarLabel>Open</MenubarLabel>
            <MenubarItem>Recent Files</MenubarItem>
            <MenubarItem>Open Folder</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu groups organizing related items with labels.",
      },
    },
  },
}

export const MultipleGroups: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>New</MenubarLabel>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>File</span>
            </MenubarItem>
            <MenubarItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Open</MenubarLabel>
            <MenubarItem>Recent Files</MenubarItem>
            <MenubarItem>Open Folder</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>Save</MenubarLabel>
            <MenubarItem>Save</MenubarItem>
            <MenubarItem>Save As</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple groups in a single menu, each with its own label and items.",
      },
    },
  },
}
