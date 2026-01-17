import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarRadioItem",
  component: MenubarRadioItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A radio button item in the menu. Must be used within a MenubarRadioGroup component.\n\nThis component is built on top of [Radix UI Menubar RadioItem](https://www.radix-ui.com/primitives/docs/components/menubar#radioitem).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The value of the radio item. Must be unique within the radio group.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
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
} satisfies Meta<typeof MenubarRadioItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Layout</MenubarLabel>
          <MenubarRadioGroup defaultValue="grid">
            <MenubarRadioItem {...args} value="grid">
              Grid
            </MenubarRadioItem>
            <MenubarRadioItem {...args} value="list">
              List
            </MenubarRadioItem>
            <MenubarRadioItem {...args} value="table">
              Table
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic radio items in a radio group.",
      },
    },
  },
}

export const WithMultipleGroups: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Layout</MenubarLabel>
          <MenubarRadioGroup defaultValue="grid">
            <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
            <MenubarRadioItem value="list">List</MenubarRadioItem>
            <MenubarRadioItem value="table">Table</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Appearance</MenubarLabel>
          <MenubarRadioGroup defaultValue="light">
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio items in multiple radio groups across different menus.",
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
          <MenubarLabel>Layout</MenubarLabel>
          <MenubarRadioGroup defaultValue="grid">
            <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
            <MenubarRadioItem value="list" disabled>
              List (Disabled)
            </MenubarRadioItem>
            <MenubarRadioItem value="table">Table</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled radio item that cannot be selected.",
      },
    },
  },
}
