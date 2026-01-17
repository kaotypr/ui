import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip"

const meta = {
  title: "UI/Tooltip/TooltipContent",
  component: TooltipContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The tooltip panel that appears when triggered. Must be used within a Tooltip component.\n\nThis component is built on top of [Radix UI Tooltip Content](https://www.radix-ui.com/primitives/docs/components/tooltip#content).",
      },
    },
  },
  argTypes: {
    side: {
      description:
        "The side of the trigger to render against. The default value is 'top'.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"top"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    sideOffset: {
      description:
        "The distance in pixels from the trigger. The default value is 0.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Props",
      },
      control: { type: "number" },
    },
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
        type: {
          summary:
            "number | { top?: number; right?: number; bottom?: number; left?: number }",
        },
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
    "aria-label": {
      description:
        "A more descriptive label for accessibility purpose.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
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
  },
} satisfies Meta<typeof TooltipContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic tooltip content with default positioning.",
      },
    },
  },
}

export const DifferentSides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip appears above the trigger.</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip appears to the right of the trigger.</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip appears below the trigger.</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip appears to the left of the trigger.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip content positioned on different sides of the trigger element.",
      },
    },
  },
}

export const DifferentAlignments: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Start</Button>
        </TooltipTrigger>
        <TooltipContent align="start">
          <p>Content aligned to the start.</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Center</Button>
        </TooltipTrigger>
        <TooltipContent align="center">
          <p>Content aligned to the center.</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">End</Button>
        </TooltipTrigger>
        <TooltipContent align="end">
          <p>Content aligned to the end.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip content with different alignment options (start, center, end).",
      },
    },
  },
}

export const WithCustomOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={20}>
        <p>This tooltip has a custom sideOffset of 20 pixels.</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip content with a custom sideOffset to increase the distance from the trigger.",
      },
    },
  },
}

export const WithCustomWidth: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent className="w-64">
        <p>
          This tooltip has a custom width using the className prop. It can
          accommodate longer text content.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "A tooltip content with a custom width using className.",
      },
    },
  },
}

export const WithRichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Tooltip Title</h4>
          <p className="text-sm text-muted-foreground">
            This tooltip contains rich content with a title and description.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip content with rich content including a title and description.",
      },
    },
  },
}
