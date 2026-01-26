import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarSeparator",
  component: MenubarSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A visual separator between items in the menu.\n\nThis component is built on top of [Radix UI Menubar Separator](https://www.radix-ui.com/primitives/docs/components/menubar#separator).",
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
} satisfies Meta<typeof MenubarSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator {...args} />
          <MenubarItem>Save</MenubarItem>
          <MenubarItem>Save As</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A separator dividing menu items into groups.",
      },
    },
  },
}

export const MultipleSeparators: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>New</MenubarLabel>
          <MenubarItem>File</MenubarItem>
          <MenubarItem>Folder</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel>Open</MenubarLabel>
          <MenubarItem>Recent Files</MenubarItem>
          <MenubarItem>Open Folder</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Save</MenubarItem>
          <MenubarItem>Save As</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple separators organizing menu items into distinct sections.",
      },
    },
  },
}
