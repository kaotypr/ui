import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "~/components/ui/resizable"

const meta = {
  title: "UI/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A resizable panel group component that allows users to resize panels horizontally or vertically. Panels can be resized by dragging handles between them.\n\nThis component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels).\n\n### Component Parts\n- [ResizablePanel](?path=/story/ui-resizable-resizablepanel--default): Represents an individual panel within the group that can be resized.\n- [ResizableHandle](?path=/story/ui-resizable-resizablehandle--default): The draggable divider between panels that allows resizing.",
      },
    },
  },
  argTypes: {
    direction: {
      description:
        "The direction of the panel group. Determines whether panels are arranged horizontally or vertically.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "horizontal" },
        category: "react-resizable-panels Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    autoSaveId: {
      description:
        "Unique key to use in localStorage to save panel layout. If provided, the panel sizes will be persisted and restored on page reload.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "react-resizable-panels Props",
      },
      control: { type: "text" },
    },
    id: {
      description:
        "Identifier for the group. Used especially with persistence or for complex layouts. If omitted, a unique ID will be generated.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "react-resizable-panels Props",
      },
      control: { type: "text" },
    },
    onLayout: {
      description:
        "Called whenever the layout changes. Receives an array of sizes (percentages) representing each panel's size.",
      table: {
        type: { summary: "(sizes: number[]) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onLayout",
    },
    disablePointerEventsDuringResize: {
      description:
        "Disables pointer events inside panels while dragging the handle. Useful for containing iframes or preventing interactions during resize.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "react-resizable-panels Props",
      },
      control: { type: "boolean" },
    },
    storage: {
      description:
        "Custom storage mechanism (must support sync getItem / setItem). Defaults to localStorage.",
      table: {
        type: { summary: "PanelGroupStorage" },
        defaultValue: { summary: "localStorage" },
        category: "react-resizable-panels Props",
      },
      control: false,
    },
    tagName: {
      description: "HTML tag to render the group container.",
      table: {
        type: { summary: "string | ElementType" },
        defaultValue: { summary: '"div"' },
        category: "react-resizable-panels Props",
      },
      control: { type: "text" },
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
    style: {
      description: "Inline styles for the root element",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Panel 1</div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Panel 2</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic resizable panel group with two panels arranged horizontally. Drag the handle between panels to resize them.",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="h-[400px] w-[500px] rounded-lg border">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Top Panel</div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Bottom Panel</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A resizable panel group arranged vertically. Panels are stacked on top of each other.",
      },
    },
  },
}

export const ThreePanels: Story = {
  render: () => (
    <div className="h-[300px] w-[700px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={33}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Left Panel</div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={34}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Middle Panel</div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={33}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Right Panel</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A resizable panel group with three panels. Multiple handles allow resizing between adjacent panels.",
      },
    },
  },
}

export const WithContent: Story = {
  render: () => (
    <div className="h-[400px] w-[700px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full flex-col border-r">
            <div className="border-b p-4 font-semibold">Sidebar</div>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-2">
                <div className="rounded-md bg-muted p-2">Item 1</div>
                <div className="rounded-md bg-muted p-2">Item 2</div>
                <div className="rounded-md bg-muted p-2">Item 3</div>
                <div className="rounded-md bg-muted p-2">Item 4</div>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full flex-col">
            <div className="border-b p-4 font-semibold">Main Content</div>
            <div className="flex-1 overflow-auto p-4">
              <p className="text-muted-foreground">
                This is the main content area. You can resize the sidebar by dragging the handle.
              </p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A realistic example showing a sidebar and main content area. Demonstrates how resizable panels can be used in a layout.",
      },
    },
  },
}

export const WithPersistence: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup autoSaveId="example-panels">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <div className="font-medium">Panel 1</div>
              <div className="text-sm text-muted-foreground mt-2">
                Resize and reload to see persistence
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <div className="font-medium">Panel 2</div>
              <div className="text-sm text-muted-foreground mt-2">
                Layout saved to localStorage
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A resizable panel group with auto-save enabled. The panel sizes are saved to localStorage and restored when the page reloads.",
      },
    },
  },
}
