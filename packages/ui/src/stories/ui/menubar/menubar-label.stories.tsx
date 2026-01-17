import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarLabel,
  MenubarItem,
  MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarLabel",
  component: MenubarLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A label for grouping items in the menu.\n\nThis component is built on top of [Radix UI Menubar Label](https://www.radix-ui.com/primitives/docs/components/menubar#label).",
      },
    },
  },
  argTypes: {
    inset: {
      description:
        "When true, adds left padding to align with items that have icons.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
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
} satisfies Meta<typeof MenubarLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel {...args}>New</MenubarLabel>
          <MenubarItem>File</MenubarItem>
          <MenubarItem>Folder</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel {...args}>Open</MenubarLabel>
          <MenubarItem>Recent Files</MenubarItem>
          <MenubarItem>Open Folder</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu labels used to group related items.",
      },
    },
  },
}

export const WithInset: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>New</MenubarLabel>
          <MenubarItem>File</MenubarItem>
          <MenubarItem>Folder</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel inset>Open</MenubarLabel>
          <MenubarItem>Recent Files</MenubarItem>
          <MenubarItem>Open Folder</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu labels with inset prop to align with items that have icons.",
      },
    },
  },
}

export const MultipleLabels: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Layout</MenubarLabel>
          <MenubarItem>Grid</MenubarItem>
          <MenubarItem>List</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel>Display</MenubarLabel>
          <MenubarItem>Show Sidebar</MenubarItem>
          <MenubarItem>Show Status Bar</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel>Zoom</MenubarLabel>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple labels organizing different sections of menu items.",
      },
    },
  },
}
