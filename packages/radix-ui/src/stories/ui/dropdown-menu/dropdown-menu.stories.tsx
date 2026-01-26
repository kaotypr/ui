import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Download,
  FileText,
  Image,
  MoreVertical,
  Settings,
  Trash2,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu"

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a menu to the user — such as a set of actions or functions — triggered by a button.\n\nThis component is built on top of [Radix UI Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu).\n\n### Component Parts\n- [DropdownMenuTrigger](?path=/story/ui-dropdownmenu-dropdownmenutrigger--default): The button that opens the dropdown menu. Must be used within a DropdownMenu component.\n- [DropdownMenuContent](?path=/story/ui-dropdownmenu-dropdownmenucontent--default): The container for the dropdown menu content. Must be used within a DropdownMenu component.\n- [DropdownMenuItem](?path=/story/ui-dropdownmenu-dropdownmenuitem--default): A single item in the dropdown menu.\n- [DropdownMenuCheckboxItem](?path=/story/ui-dropdownmenu-dropdownmenucheckboxitem--default): A checkable item in the dropdown menu.\n- [DropdownMenuRadioGroup](?path=/story/ui-dropdownmenu-dropdownmenu-radiogroup--default): A group of radio items in the dropdown menu.\n- [DropdownMenuRadioItem](?path=/story/ui-dropdownmenu-dropdownmenu-radiitem--default): A radio button item in the dropdown menu.\n- [DropdownMenuLabel](?path=/story/ui-dropdownmenu-dropdownmenulabel--default): A label for grouping items in the dropdown menu.\n- [DropdownMenuSeparator](?path=/story/ui-dropdownmenu-dropdownmenuseparator--default): A visual separator between items in the dropdown menu.\n- [DropdownMenuShortcut](?path=/story/ui-dropdownmenu-dropdownmenushortcut--default): A keyboard shortcut indicator for menu items.\n- [DropdownMenuGroup](?path=/story/ui-dropdownmenu-dropdownmenugroup--default): A group of related items in the dropdown menu.\n- [DropdownMenuSub](?path=/story/ui-dropdownmenu-dropdownmenusub--default): A submenu container for nested dropdown menus.\n- [DropdownMenuSubTrigger](?path=/story/ui-dropdownmenu-dropdownmenusubtrigger--default): The trigger for a submenu item.\n- [DropdownMenuSubContent](?path=/story/ui-dropdownmenu-dropdownmenusubcontent--default): The content container for a submenu.\n- [DropdownMenuPortal](?path=/story/ui-dropdownmenu-dropdownmenuportal--default): Controls where the dropdown menu content is mounted in the DOM.",
      },
    },
  },
  argTypes: {
    open: {
      description:
        "The controlled open state of the dropdown menu. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description:
        "The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the dropdown menu changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
    },
    modal: {
      description:
        "When true, interaction with outside elements is disabled and only dropdown menu content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    dir: {
      description:
        "The reading direction. If omitted, inherits globally from DirectionProvider or assumes LTR.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...(args as any)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Documentation</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic dropdown menu with a trigger button, label, separator, and menu items with icons and shortcuts.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Menu
        </Button>
        <DropdownMenu
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image className="mr-2 h-4 w-4" />
              <span>Upload</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled dropdown menu where the open state is managed by React state.",
      },
    },
  },
}

export const WithGroups: Story = {
  render: (args) => (
    <DropdownMenu {...(args as any)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>New File</span>
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" />
          <span>Open</span>
          <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Edit</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Cut</span>
          <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Copy</span>
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Paste</span>
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dropdown menu with multiple groups of items separated by labels and separators.",
      },
    },
  },
}

export const NonModal: Story = {
  render: (args) => (
    <DropdownMenu {...(args as any)} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Non-Modal Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Non-Modal Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Item 1</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Item 2</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A non-modal dropdown menu that allows interaction with content outside the menu.",
      },
    },
  },
}
