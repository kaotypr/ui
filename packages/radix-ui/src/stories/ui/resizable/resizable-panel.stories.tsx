import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "~/components/ui/resizable"

const meta = {
  title: "UI/Resizable/ResizablePanel",
  component: ResizablePanel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Represents an individual panel within a ResizablePanelGroup that can be resized. Must be used within a ResizablePanelGroup component.\n\nThis component is built on top of [react-resizable-panels Panel](https://github.com/bvaughn/react-resizable-panels).",
      },
    },
  },
  argTypes: {
    defaultSize: {
      description:
        "Initial size of the panel as a percentage. If not specified, panels will divide space equally.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "react-resizable-panels Props",
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    minSize: {
      description:
        "Lower limit for panel size as a percentage. The panel cannot be resized below this value.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
        category: "react-resizable-panels Props",
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    maxSize: {
      description:
        "Upper limit for panel size as a percentage. The panel cannot be resized above this value.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "react-resizable-panels Props",
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    collapsible: {
      description:
        "Whether the panel can collapse when resizing past minSize. When true, the panel can be collapsed to collapsedSize.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "react-resizable-panels Props",
      },
      control: { type: "boolean" },
    },
    collapsedSize: {
      description:
        "Size (as a percentage) to collapse to if the panel is collapsible. Only used when collapsible is true.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "react-resizable-panels Props",
      },
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    onResize: {
      description:
        "Called whenever the panel size changes. Receives the new size as a percentage.",
      table: {
        type: { summary: "(size: number) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onResize",
    },
    onCollapse: {
      description:
        "Callback when the panel collapses or expands. Receives a boolean indicating if the panel is collapsed.",
      table: {
        type: { summary: "(collapsed: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCollapse",
    },
    id: {
      description:
        "Identifier for this panel within its group. Useful when panels are conditionally rendered or to track state. If omitted, a unique ID will be generated.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "react-resizable-panels Props",
      },
      control: { type: "text" },
    },
    order: {
      description:
        "Position order in the group. Needed when panels are dynamic or conditionally rendered to maintain consistent ordering.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "react-resizable-panels Props",
      },
      control: { type: "number" },
    },
    tagName: {
      description: "Element type to use for rendering the panel.",
      table: {
        type: { summary: "string" },
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
      description: "Inline styles for the panel",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
  },
} satisfies Meta<typeof ResizablePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel {...args}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Resizable Panel</div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Other Panel</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic resizable panel. Drag the handle to resize this panel.",
      },
    },
  },
}

export const WithMinMaxSize: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <div className="font-medium">Constrained Panel</div>
              <div className="text-sm text-muted-foreground mt-2">
                Min: 20%, Max: 80%
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Other Panel</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A panel with minimum and maximum size constraints. The panel cannot be resized below 20% or above 80% of the group width.",
      },
    },
  },
}

export const Collapsible: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel
          defaultSize={50}
          collapsible
          collapsedSize={5}
          minSize={5}
        >
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <div className="font-medium">Collapsible Panel</div>
              <div className="text-sm text-muted-foreground mt-2">
                Drag to collapse
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Main Panel</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A collapsible panel that can be collapsed to 5% of the group width. Drag the handle past the minimum size to collapse the panel.",
      },
    },
  },
}

export const WithCustomSize: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6 bg-muted">
            <div className="font-medium">25% Width</div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">75% Width</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Panels with custom initial sizes. The left panel starts at 25% width and the right panel at 75% width.",
      },
    },
  },
}

export const WithContent: Story = {
  render: () => (
    <div className="h-[400px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full flex-col border-r">
            <div className="border-b p-4 font-semibold">Navigation</div>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-2">
                <div className="rounded-md bg-muted p-3">Home</div>
                <div className="rounded-md bg-muted p-3">About</div>
                <div className="rounded-md bg-muted p-3">Services</div>
                <div className="rounded-md bg-muted p-3">Contact</div>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full flex-col">
            <div className="border-b p-4 font-semibold">Content</div>
            <div className="flex-1 overflow-auto p-4">
              <p className="text-muted-foreground">
                This panel contains scrollable content. Resize the panel to see how the content adapts.
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
          "A panel with scrollable content. Demonstrates how panels work with overflow content.",
      },
    },
  },
}
