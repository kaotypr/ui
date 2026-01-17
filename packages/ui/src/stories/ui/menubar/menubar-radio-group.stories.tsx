import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar/MenubarRadioGroup",
  component: MenubarRadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A group of radio items in the menu. Only one item in the group can be selected at a time.\n\nThis component is built on top of [Radix UI Menubar RadioGroup](https://www.radix-ui.com/primitives/docs/components/menubar#radiogroup).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The controlled value of the radio group. Use with onValueChange.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description:
        "The value of the radio group by default (uncontrolled).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Event handler called when the value changes.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
  },
} satisfies Meta<typeof MenubarRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Layout</MenubarLabel>
          <MenubarRadioGroup {...(args as any)} defaultValue="grid">
            <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
            <MenubarRadioItem value="list">List</MenubarRadioItem>
            <MenubarRadioItem value="table">Table</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A radio group with mutually exclusive options.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [view, setView] = useState("grid")
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Layout</MenubarLabel>
            <MenubarRadioGroup
              value={view}
              onValueChange={(value) => {
                setView(value)
                args.onValueChange?.(value)
              }}
            >
              <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
              <MenubarRadioItem value="list">List</MenubarRadioItem>
              <MenubarRadioItem value="table">Table</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarLabel>Zoom</MenubarLabel>
            <MenubarRadioGroup defaultValue="100%">
              <MenubarRadioItem value="50%">50%</MenubarRadioItem>
              <MenubarRadioItem value="100%">100%</MenubarRadioItem>
              <MenubarRadioItem value="150%">150%</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled radio group where the selected value is managed by React state.",
      },
    },
  },
}

export const MultipleGroups: Story = {
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
          <MenubarSeparator />
          <MenubarLabel>Theme</MenubarLabel>
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
        story: "Multiple radio groups in a single menu, each with independent selection.",
      },
    },
  },
}
