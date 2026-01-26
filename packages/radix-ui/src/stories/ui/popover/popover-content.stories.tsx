import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"

const meta = {
  title: "UI/Popover/PopoverContent",
  component: PopoverContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The popover panel that appears when opened. Must be used within a Popover component.\n\nThis component is built on top of [Radix UI Popover Content](https://www.radix-ui.com/primitives/docs/components/popover#content).",
      },
    },
  },
  argTypes: {
    align: {
      description:
        "The alignment of the content relative to the trigger. The default value is 'center'.",
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"center"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
    side: {
      description:
        "The side of the trigger to render against. The default value is 'bottom'.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    sideOffset: {
      description:
        "The distance in pixels from the trigger. The default value is 4.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4" },
        category: "Props",
      },
      control: { type: "number" },
    },
    alignOffset: {
      description:
        "An offset in pixels from the 'start' or 'end' alignment choice.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    avoidCollisions: {
      description:
        "When true, overrides the side and align preferences to prevent collisions with boundary edges.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    collisionBoundary: {
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional elements.",
      table: {
        type: { summary: "Element | Element[] | null" },
        defaultValue: { summary: "[]" },
        category: "Radix UI Props",
      },
    },
    collisionPadding: {
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: {
        type: { summary: "number | { top?: number; right?: number; bottom?: number; left?: number }" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
    },
    arrowPadding: {
      description:
        "The padding between the arrow and the edges of the content. If an arrow is provided, the padding will be applied to the opposite side.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    sticky: {
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content aligned to the trigger as long as it remains partially visible. 'always' will keep the content aligned to the trigger regardless.",
      table: {
        type: { summary: '"partial" | "always"' },
        defaultValue: { summary: '"partial"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["partial", "always"],
    },
    hideWhenDetached: {
      description:
        "Whether the content should be hidden when the trigger becomes fully occluded.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onOpenAutoFocus: {
      description:
        "Event handler called when focus moves into the component after opening. Can be prevented.",
      table: {
        type: { summary: "(event: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onOpenAutoFocus",
    },
    onCloseAutoFocus: {
      description:
        "Event handler called when focus moves to the trigger after closing. Can be prevented.",
      table: {
        type: { summary: "(event: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCloseAutoFocus",
    },
    onEscapeKeyDown: {
      description:
        "Event handler called when the escape key is pressed. Can be prevented.",
      table: {
        type: { summary: "(event: KeyboardEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onEscapeKeyDown",
    },
    onPointerDownOutside: {
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. Can be prevented.",
      table: {
        type: { summary: "(event: PointerEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onPointerDownOutside",
    },
    onFocusOutside: {
      description:
        "Event handler called when focus moves outside the bounds of the component. Can be prevented.",
      table: {
        type: { summary: "(event: FocusEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onFocusOutside",
    },
    onInteractOutside: {
      description:
        "Event handler called when an interaction (pointer or focus) occurs outside the bounds of the component. Can be prevented.",
      table: {
        type: { summary: "(event: Event) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onInteractOutside",
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
} satisfies Meta<typeof PopoverContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic popover content with default positioning.",
      },
    },
  },
}

export const WithCustomWidth: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Wide Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Wide Popover</h4>
          <p className="text-sm text-muted-foreground">
            This popover has a custom width using the className prop.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A popover content with a custom width using className.",
      },
    },
  },
}

export const DifferentSides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Top Side</h4>
            <p className="text-sm text-muted-foreground">
              Popover appears above the trigger.
            </p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Right Side</h4>
            <p className="text-sm text-muted-foreground">
              Popover appears to the right of the trigger.
            </p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Bottom Side</h4>
            <p className="text-sm text-muted-foreground">
              Popover appears below the trigger.
            </p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Left Side</h4>
            <p className="text-sm text-muted-foreground">
              Popover appears to the left of the trigger.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Popover content positioned on different sides of the trigger element.",
      },
    },
  },
}

export const DifferentAlignments: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Start Aligned</h4>
            <p className="text-sm text-muted-foreground">
              Content aligned to the start.
            </p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Center Aligned</h4>
            <p className="text-sm text-muted-foreground">
              Content aligned to the center.
            </p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">End Aligned</h4>
            <p className="text-sm text-muted-foreground">
              Content aligned to the end.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Popover content with different alignment options (start, center, end).",
      },
    },
  },
}

export const WithCustomOffset: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={20}>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Custom Offset</h4>
          <p className="text-sm text-muted-foreground">
            This popover has a custom sideOffset of 20 pixels.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover content with a custom sideOffset to increase the distance from the trigger.",
      },
    },
  },
}
