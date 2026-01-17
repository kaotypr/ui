import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "~/components/ui/resizable"

const meta = {
  title: "UI/Resizable/ResizableHandle",
  component: ResizableHandle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The draggable divider between panels that allows resizing. Must be used within a ResizablePanelGroup, placed between ResizablePanel components.\n\nThis component is built on top of [react-resizable-panels PanelResizeHandle](https://github.com/bvaughn/react-resizable-panels).",
      },
    },
  },
  argTypes: {
    withHandle: {
      description:
        "Whether to show a visible grip handle icon. When true, displays a grip icon in the center of the handle for better visual indication.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    disabled: {
      description:
        "Whether resizing via this handle is disabled. When true, the handle cannot be dragged.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "react-resizable-panels Props",
      },
      control: { type: "boolean" },
    },
    onDragging: {
      description:
        "Called when dragging starts or stops. Receives a boolean indicating if dragging is active.",
      table: {
        type: { summary: "(isDragging: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onDragging",
    },
    id: {
      description:
        "Identifier within the group. If omitted, a unique ID will be generated.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "react-resizable-panels Props",
      },
      control: { type: "text" },
    },
    tagName: {
      description: "Element tag to render the handle.",
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
      description: "Inline styles for the handle",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
  },
} satisfies Meta<typeof ResizableHandle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Panel 1</div>
          </div>
        </ResizablePanel>
        <ResizableHandle {...args} />
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
          "A basic resizable handle between two panels. Hover over the handle to see the resize cursor, then drag to resize the panels.",
      },
    },
  },
}

export const WithHandle: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Panel 1</div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
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
          "A resizable handle with a visible grip icon. The handle provides better visual indication that it can be dragged.",
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
        <ResizableHandle withHandle />
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
          "A resizable handle in a vertical panel group. The handle rotates to match the vertical orientation.",
      },
    },
  },
}

export const MultipleHandles: Story = {
  render: () => (
    <div className="h-[300px] w-[700px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={33}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Left</div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={34}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Middle</div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={33}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Right</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple resizable handles between three panels. Each handle can be dragged independently to resize adjacent panels.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <div className="font-medium">Panel 1</div>
              <div className="text-sm text-muted-foreground mt-2">
                Handle is disabled
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle disabled />
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
          "A disabled resizable handle. The handle cannot be dragged, preventing resizing between panels.",
      },
    },
  },
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="h-[300px] w-[600px] rounded-lg border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="font-medium">Panel 1</div>
          </div>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="bg-primary/20 hover:bg-primary/30"
        />
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
          "A resizable handle with custom styling. The handle uses custom background colors to make it more visible.",
      },
    },
  },
}
