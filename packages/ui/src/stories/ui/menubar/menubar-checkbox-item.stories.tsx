import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarCheckboxItem,
  MenubarLabel,
  MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarCheckboxItem",
  component: MenubarCheckboxItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkable item in the menu.\n\nThis component is built on top of [Radix UI Menubar CheckboxItem](https://www.radix-ui.com/primitives/docs/components/menubar#checkboxitem).",
      },
    },
  },
  argTypes: {
    checked: {
      description:
        "The controlled checked state of the checkbox. Use with onCheckedChange.",
      table: {
        type: { summary: "boolean | 'indeterminate'" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onCheckedChange: {
      description:
        "Event handler called when the checked state changes.",
      table: {
        type: { summary: "(checked: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCheckedChange",
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
} satisfies Meta<typeof MenubarCheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem {...args} checked>
            Show Sidebar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem {...args}>Show Status Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem {...args}>Show Toolbar</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic checkbox items in a menu.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [sidebar, setSidebar] = useState(true)
    const [statusBar, setStatusBar] = useState(false)
    const [toolbar, setToolbar] = useState(true)
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Display</MenubarLabel>
            <MenubarCheckboxItem
              checked={sidebar}
              onCheckedChange={(checked) => {
                setSidebar(checked)
                args.onCheckedChange?.(checked)
              }}
            >
              Show Sidebar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={statusBar}
              onCheckedChange={(checked) => {
                setStatusBar(checked)
                args.onCheckedChange?.(checked)
              }}
            >
              Show Status Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={toolbar}
              onCheckedChange={(checked) => {
                setToolbar(checked)
                args.onCheckedChange?.(checked)
              }}
            >
              Show Toolbar
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled checkbox items where the checked state is managed by React state.",
      },
    },
  },
}

export const WithGroups: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Display</MenubarLabel>
          <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>Editor</MenubarLabel>
          <MenubarCheckboxItem checked>Show Line Numbers</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Minimap</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox items organized in groups with labels and separators.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
          <MenubarCheckboxItem disabled>Show Status Bar (Disabled)</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Toolbar</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled checkbox item that cannot be toggled.",
      },
    },
  },
}
