import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "~/components/ui/popover"

const meta = {
  title: "UI/Popover/PopoverAnchor",
  component: PopoverAnchor,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Optional anchor element for aligning PopoverContent. If omitted, content aligns to the trigger. Must be used within a Popover component.\n\nThis component is built on top of [Radix UI Popover Anchor](https://www.radix-ui.com/primitives/docs/components/popover#anchor).",
      },
    },
  },
  argTypes: {
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
} satisfies Meta<typeof PopoverAnchor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverAnchor {...args} asChild>
        <div className="h-20 w-32 rounded-md border-2 border-dashed border-primary bg-primary/5 p-4 text-center text-sm">
          Anchor Element
        </div>
      </PopoverAnchor>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Anchored Popover</h4>
          <p className="text-sm text-muted-foreground">
            This popover is aligned to the anchor element instead of the trigger.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover with an anchor element. The content aligns to the anchor instead of the trigger.",
      },
    },
  },
}

export const WithSeparateAnchor: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Click to Open</Button>
        </PopoverTrigger>
        <div className="flex items-center gap-4">
          <PopoverAnchor asChild>
            <div className="h-16 w-24 rounded-md border-2 border-dashed border-primary bg-primary/10 p-3 text-center text-xs">
              Anchor
            </div>
          </PopoverAnchor>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Separate Anchor</h4>
              <p className="text-sm text-muted-foreground">
                The popover content aligns to the anchor element, which is separate from the trigger.
              </p>
            </div>
          </PopoverContent>
        </div>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover where the anchor element is positioned separately from the trigger button.",
      },
    },
  },
}

export const WithCustomAnchor: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverAnchor asChild>
        <div className="relative">
          <div className="absolute -left-4 top-0 h-8 w-8 rounded-full bg-primary/20" />
          <div className="ml-4 rounded-md border border-input bg-background px-3 py-2 text-sm">
            Custom Anchor
          </div>
        </div>
      </PopoverAnchor>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Custom Anchor Element</h4>
          <p className="text-sm text-muted-foreground">
            The anchor can be any custom element when using asChild.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover with a custom anchor element that has complex styling.",
      },
    },
  },
}
