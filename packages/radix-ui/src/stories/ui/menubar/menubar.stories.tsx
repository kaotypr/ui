import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  FileText,
  Settings,
  User,
  Download,
  Trash2,
  Mail,
} from "lucide-react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
  MenubarGroup,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "~/components/ui/menubar"

const meta = {
  title: "UI/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A visually persistent menu common in desktop applications.\n\nThis component is built on top of [Radix UI Menubar](https://www.radix-ui.com/primitives/docs/components/menubar).\n\n### Component Parts\n- [MenubarMenu](?path=/story/ui-menubar-menubarmenu--default): A menu container within the menubar. Must be used within a Menubar component.\n- [MenubarTrigger](?path=/story/ui-menubar-menubartrigger--default): The button that opens a menu. Must be used within a MenubarMenu component.\n- [MenubarContent](?path=/story/ui-menubar-menubarcontent--default): The container for the menu content. Must be used within a MenubarMenu component.\n- [MenubarItem](?path=/story/ui-menubar-menubaritem--default): A single item in the menu.\n- [MenubarCheckboxItem](?path=/story/ui-menubar-menubarcheckboxitem--default): A checkable item in the menu.\n- [MenubarRadioGroup](?path=/story/ui-menubar-menubarradiogroup--default): A group of radio items in the menu.\n- [MenubarRadioItem](?path=/story/ui-menubar-menubarradioitem--default): A radio button item in the menu.\n- [MenubarLabel](?path=/story/ui-menubar-menubarlabel--default): A label for grouping items in the menu.\n- [MenubarSeparator](?path=/story/ui-menubar-menubarseparator--default): A visual separator between items in the menu.\n- [MenubarShortcut](?path=/story/ui-menubar-menubarshortcut--default): A keyboard shortcut indicator for menu items.\n- [MenubarGroup](?path=/story/ui-menubar-menubargroup--default): A group of related items in the menu.\n- [MenubarSub](?path=/story/ui-menubar-menubarsub--default): A submenu container for nested menus.\n- [MenubarSubTrigger](?path=/story/ui-menubar-menubarsubtrigger--default): The trigger for a submenu item.\n- [MenubarSubContent](?path=/story/ui-menubar-menubarsubcontent--default): The content container for a submenu.",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The controlled value of the menu that is open. Use with onValueChange.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description:
        "The value of the menu that is open by default (uncontrolled).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Event handler called when the open menu value changes.",
      table: {
        type: { summary: "(value: string | undefined) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    loop: {
      description:
        "When true, keyboard navigation will loop from the last item to the first, and vice versa.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar {...(args as any)}>
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
          <MenubarSeparator />
          <MenubarItem>
            <span>Save</span>
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Cut</span>
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <span>Copy</span>
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <span>Paste</span>
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic menubar with multiple menus, items, shortcuts, and checkboxes.",
      },
    },
  },
}

export const WithGroups: Story = {
  render: (args) => (
    <Menubar {...(args as any)}>
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
            <MenubarItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Recent Files</span>
            </MenubarItem>
            <MenubarItem>
              <span>Open Folder</span>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Undo</span>
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <span>Redo</span>
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A menubar with grouped menu items using MenubarGroup and MenubarLabel.",
      },
    },
  },
}

export const WithSubmenus: Story = {
  render: (args) => (
    <Menubar {...(args as any)}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New</span>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>
              <User className="mr-2 h-4 w-4" />
              <span>Share</span>
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </MenubarItem>
              <MenubarItem>
                <span>Copy Link</span>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <span>Export</span>
            <MenubarSub>
              <MenubarSubTrigger>
                <span>Export As</span>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PDF</MenubarItem>
                <MenubarItem>Word</MenubarItem>
                <MenubarItem>Markdown</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Cut</span>
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <span>Copy</span>
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A menubar with nested submenus using MenubarSub, MenubarSubTrigger, and MenubarSubContent.",
      },
    },
  },
}

export const WithRadioGroups: Story = {
  render: (args) => {
    const [view, setView] = useState("grid")
    return (
      <Menubar {...(args as any)}>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Layout</MenubarLabel>
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
              <MenubarRadioItem value="list">List</MenubarRadioItem>
              <MenubarRadioItem value="table">Table</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Settings</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Preferences</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A menubar with radio groups for mutually exclusive options and checkboxes for independent options.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [openMenu, setOpenMenu] = useState<string | undefined>("file")
    return (
      <Menubar
        {...(args as any)}
        value={openMenu}
        onValueChange={(value) => {
          setOpenMenu(value)
          args.onValueChange?.(value)
        }}
      >
        <MenubarMenu value="file">
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
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu value="edit">
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <span>Cut</span>
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <span>Copy</span>
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled menubar where the open menu state is managed by React state.",
      },
    },
  },
}

export const WithDestructiveItems: Story = {
  render: (args) => (
    <Menubar {...(args as any)}>
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
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span>Cut</span>
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A menubar with destructive menu items for dangerous actions like delete.",
      },
    },
  },
}
