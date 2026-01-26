import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileText, Download, Settings, Trash2, User } from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
  MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarItem",
  component: MenubarItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A single item in the menu.\n\nThis component is built on top of [Radix UI Menubar Item](https://www.radix-ui.com/primitives/docs/components/menubar#item).",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the item.",
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "destructive"],
    },
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
    disabled: {
      description: "When true, prevents the user from interacting with the item.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onSelect: {
      description:
        "Event handler called when the item is selected (via click or keyboard).",
      table: {
        type: { summary: "(event: Event) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onSelect",
    },
    textValue: {
      description:
        "Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the item. Use this when the content is complex, or you have non-textual content inside.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
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
} satisfies Meta<typeof MenubarItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem {...args}>New File</MenubarItem>
          <MenubarItem {...args}>Open</MenubarItem>
          <MenubarItem {...args}>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic menu items with default styling.",
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
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New File</span>
          </MenubarItem>
          <MenubarItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Open</span>
          </MenubarItem>
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu items with icons.",
      },
    },
  },
}

export const WithShortcuts: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
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
          <MenubarItem>
            <span>Save</span>
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu items with keyboard shortcuts displayed on the right.",
      },
    },
  },
}

export const Destructive: Story = {
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
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A menu item with destructive variant styling for dangerous actions.",
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
          <MenubarItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </MenubarItem>
          <MenubarItem inset>Settings</MenubarItem>
          <MenubarItem inset>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Menu items with inset prop to align text-only items with icon items.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem disabled>Open (Disabled)</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled menu item that cannot be selected.",
      },
    },
  },
}
