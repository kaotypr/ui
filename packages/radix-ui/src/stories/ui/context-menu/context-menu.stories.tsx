import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "~/components/ui/context-menu"
import {
  Copy,
  Scissors,
  ClipboardPaste,
  FileText,
  Folder,
  Trash2,
  Edit,
  Share,
  Download,
  Settings,
  User,
  LogOut,
  Palette,
  Moon,
  Sun,
  Monitor,
} from "lucide-react"

const meta = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a menu to the user — such as a set of actions or functions — triggered by a right-click or long-press.\n\nThis component is built on top of [Radix UI Context Menu](https://www.radix-ui.com/primitives/docs/components/context-menu).\n\n### Component Parts\n- [ContextMenuTrigger](?path=/story/ui-contextmenu-contextmenutrigger--default): The element that triggers the context menu. Must be used within a ContextMenu component.\n- [ContextMenuContent](?path=/story/ui-contextmenu-contextmenucontent--default): The container for the context menu content. Must be used within a ContextMenu component.\n- [ContextMenuItem](?path=/story/ui-contextmenu-contextmenuitem--default): An individual menu item. Must be used within a ContextMenuContent.\n- [ContextMenuCheckboxItem](?path=/story/ui-contextmenu-contextmenucheckboxitem--default): A menu item with a checkbox. Must be used within a ContextMenuContent.\n- [ContextMenuRadioItem](?path=/story/ui-contextmenu-contextmenuitem--default): A menu item with a radio button. Must be used within a ContextMenuRadioGroup.\n- [ContextMenuLabel](?path=/story/ui-contextmenu-contextmenulabel--default): A label for grouping menu items. Must be used within a ContextMenuContent.\n- [ContextMenuSeparator](?path=/story/ui-contextmenu-contextmenuseparator--default): A visual separator between menu items. Must be used within a ContextMenuContent.\n- [ContextMenuShortcut](?path=/story/ui-contextmenu-contextmenushortcut--default): A keyboard shortcut indicator for menu items.\n- [ContextMenuGroup](?path=/story/ui-contextmenu-contextmenugroup--default): A group of related menu items. Must be used within a ContextMenuContent.\n- [ContextMenuSub](?path=/story/ui-contextmenu-contextmenusub--default): A submenu container. Must be used within a ContextMenuContent.\n- [ContextMenuSubTrigger](?path=/story/ui-contextmenu-contextmenusubtrigger--default): The trigger for a submenu. Must be used within a ContextMenuSub.\n- [ContextMenuSubContent](?path=/story/ui-contextmenu-contextmenusubcontent--default): The content of a submenu. Must be used within a ContextMenuSub.\n- [ContextMenuRadioGroup](?path=/story/ui-contextmenu-contextmenuradiogroup--default): A group of radio menu items. Must be used within a ContextMenuContent.",
      },
    },
  },
  argTypes: {
    modal: {
      description:
        "When true, interaction with outside elements is disabled and only menu content will be visible to screen readers.",
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
    onOpenChange: {
      description:
        "Event handler called when the open state of the context menu changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenChange",
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
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...(args as any)}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy</span>
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="mr-2 h-4 w-4" />
          <span>Cut</span>
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardPaste className="mr-2 h-4 w-4" />
          <span>Paste</span>
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>New File</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Folder className="mr-2 h-4 w-4" />
          <span>New Folder</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic context menu with common actions, shortcuts, and separators.",
      },
    },
  },
}

export const WithGroups: Story = {
  render: (args) => (
    <ContextMenu {...(args as any)}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Share className="mr-2 h-4 w-4" />
            <span>Share</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Download</span>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A context menu with grouped items and a destructive action variant.",
      },
    },
  },
}

export const WithSubmenu: Story = {
  render: (args) => (
    <ContextMenu {...(args as any)}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Theme</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Monitor className="mr-2 h-4 w-4" />
              <span>System</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A context menu with a submenu demonstrating nested navigation.",
      },
    },
  },
}

export const WithCheckboxes: Story = {
  render: (args) => {
    const [showGrid, setShowGrid] = useState(false)
    const [showRulers, setShowRulers] = useState(true)
    const [snapToGrid, setSnapToGrid] = useState(false)

    return (
      <ContextMenu {...(args as any)}>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showGrid}
            onCheckedChange={(checked) => {
              setShowGrid(checked)
              args.onOpenChange?.(true)
            }}
          >
            Show Grid
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showRulers}
            onCheckedChange={(checked) => {
              setShowRulers(checked)
              args.onOpenChange?.(true)
            }}
          >
            Show Rulers
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={snapToGrid}
            onCheckedChange={(checked) => {
              setSnapToGrid(checked)
              args.onOpenChange?.(true)
            }}
          >
            Snap to Grid
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A context menu with checkbox items for toggling view options.",
      },
    },
  },
}

export const WithRadioGroup: Story = {
  render: (args) => {
    const [theme, setTheme] = useState("light")

    return (
      <ContextMenu {...(args as any)}>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup
            value={theme}
            onValueChange={(value) => {
              setTheme(value)
              args.onOpenChange?.(true)
            }}
          >
            <ContextMenuRadioItem value="light">
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">
              <Monitor className="mr-2 h-4 w-4" />
              <span>System</span>
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A context menu with radio group items for selecting a single option from multiple choices.",
      },
    },
  },
}

export const WithInset: Story = {
  render: (args) => (
    <ContextMenu {...(args as any)}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel inset>My Account</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </ContextMenuItem>
        <ContextMenuItem inset>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset variant="destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A context menu with inset items and label, demonstrating indented content alignment.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className="mb-4 text-sm text-muted-foreground">
          Open state: {open ? "Open" : "Closed"}
        </div>
        <ContextMenu
          {...(args as any)}
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen)
            args.onOpenChange?.(isOpen)
          }}
        >
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copy</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <ClipboardPaste className="mr-2 h-4 w-4" />
              <span>Paste</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>New File</span>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled context menu where the open state is managed by React state.",
      },
    },
  },
}

export const WithDisabledItems: Story = {
  render: (args) => (
    <ContextMenu {...(args as any)}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy</span>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <Scissors className="mr-2 h-4 w-4" />
          <span>Cut</span>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <ClipboardPaste className="mr-2 h-4 w-4" />
          <span>Paste</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>New File</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A context menu with disabled items demonstrating the disabled state styling.",
      },
    },
  },
}
