import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "~/components/ui/hover-card"

const meta = {
  title: "UI/HoverCard/HoverCardContent",
  component: HoverCardContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The container for the hover card content. Must be used within a HoverCard component.\n\nThis component is built on top of [Radix UI Hover Card Content](https://www.radix-ui.com/primitives/docs/components/hover-card#content).",
      },
    },
  },
  argTypes: {
    align: {
      description:
        "The preferred alignment against the trigger. May change when collisions occur.",
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"center"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
    sideOffset: {
      description: "The distance in pixels from the trigger.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4" },
        category: "Props",
      },
      control: { type: "number" },
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
    side: {
      description:
        "The preferred side of the trigger to render against. May change when collisions occur.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    alignOffset: {
      description: "An offset in pixels from the 'start' or 'end' alignment option.",
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
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional elements to be included in this check.",
      table: {
        type: { summary: "Element | Element[] | null" },
        defaultValue: { summary: "[]" },
        category: "Radix UI Props",
      },
      control: false,
    },
    collisionPadding: {
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: {
        type: { summary: "number | { top?: number; right?: number; bottom?: number; left?: number }" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    arrowPadding: {
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    sticky: {
      description:
        "The sticky behavior on the align axis. 'partial' keeps the content stuck while it remains in the boundary, 'always' keeps the content stuck to the trigger.",
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
        "Whether the content should be hidden when the trigger becomes disconnected from the DOM or boundary.",
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
        "Event handler called when pointer down outside content.",
      table: {
        type: { summary: "(event: PointerEvent) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onPointerDownOutside",
    },
    onInteractOutside: {
      description:
        "Event handler called when any interaction happens outside.",
      table: {
        type: { summary: "(event: Event) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onInteractOutside",
    },
  },
} satisfies Meta<typeof HoverCardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent {...args}>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic hover card content with user profile information.",
      },
    },
  },
}

export const CustomWidth: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Wide Content</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Wide Hover Card</h4>
          <p className="text-sm">
            This hover card has a custom width using the className prop.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card content with a custom width using className.",
      },
    },
  },
}

export const DifferentAlignments: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Start Aligned</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Start Alignment</h4>
            <p className="text-sm">Content aligned to the start.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Center Aligned</Button>
        </HoverCardTrigger>
        <HoverCardContent align="center">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Center Alignment</h4>
            <p className="text-sm">Content aligned to the center.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">End Aligned</Button>
        </HoverCardTrigger>
        <HoverCardContent align="end">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">End Alignment</h4>
            <p className="text-sm">Content aligned to the end.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Hover card content with different alignment options (start, center, end).",
      },
    },
  },
}

export const DifferentSides: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Top Side</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Top Position</h4>
            <p className="text-sm">Content appears above the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Right Side</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Right Position</h4>
            <p className="text-sm">Content appears to the right of the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Bottom Side</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Bottom Position</h4>
            <p className="text-sm">Content appears below the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Left Side</Button>
        </HoverCardTrigger>
        <HoverCardContent side="left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Left Position</h4>
            <p className="text-sm">Content appears to the left of the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Hover card content positioned on different sides of the trigger (top, right, bottom, left).",
      },
    },
  },
}

export const CustomSideOffset: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Large Offset</Button>
      </HoverCardTrigger>
      <HoverCardContent sideOffset={20}>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Custom Offset</h4>
          <p className="text-sm">
            This hover card has a larger side offset of 20 pixels.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card content with a custom side offset for more spacing from the trigger.",
      },
    },
  },
}
