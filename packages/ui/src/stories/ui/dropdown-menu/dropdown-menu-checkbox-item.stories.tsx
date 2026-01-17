import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu"

const meta = {
  title: "UI/DropdownMenu/DropdownMenuCheckboxItem",
  component: DropdownMenuCheckboxItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkable item in the dropdown menu.\n\nThis component is built on top of [Radix UI Dropdown Menu CheckboxItem](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#checkboxitem).",
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
    checked: {
      description:
        "The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultChecked: {
      description:
        "The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onCheckedChange: {
      description:
        "Event handler called when the checked state of the checkbox changes.",
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
  },
} satisfies Meta<typeof DropdownMenuCheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>View Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem {...args}>
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem {...args}>
          Show Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem {...args}>
          Show Minimap
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic dropdown menu checkbox items with default checked state.",
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)
    const [showMinimap, setShowMinimap] = useState(true)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>View Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Show Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Show Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            Show Minimap
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
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

export const Uncontrolled: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>View Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem defaultChecked>
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem defaultChecked={false}>
          Show Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem defaultChecked>
          Show Minimap
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Uncontrolled checkbox items using defaultChecked for initial state.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>View Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem defaultChecked>
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem disabled>
          Show Activity Bar (Disabled)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem defaultChecked>
          Show Minimap
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled checkbox item that cannot be toggled.",
      },
    },
  },
}
