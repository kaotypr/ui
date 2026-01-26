import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip"

const meta = {
  title: "UI/Tooltip/TooltipProvider",
  component: TooltipProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Provides context and configuration for tooltip behavior. Wraps multiple Tooltip components to share configuration.\n\nThis component is built on top of [Radix UI Tooltip Provider](https://www.radix-ui.com/primitives/docs/components/tooltip#provider).",
      },
    },
  },
  argTypes: {
    delayDuration: {
      description:
        "The duration from when the pointer enters the trigger until the tooltip gets opened.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    skipDelayDuration: {
      description:
        "How much time a user has to enter another trigger without incurring a delay again.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
        category: "Radix UI Props",
      },
      control: { type: "number" },
    },
    disableHoverableContent: {
      description:
        "When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof TooltipProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <TooltipProvider {...args}>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">First Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip uses the provider's configuration</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Second Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip also uses the provider's configuration</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip provider wrapping multiple tooltips to share configuration.",
      },
    },
  },
}

export const WithCustomDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={100}>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Fast Tooltip 1</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip appears quickly with 100ms delay</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Fast Tooltip 2</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip also appears quickly</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip provider with a custom delay duration applied to all child tooltips.",
      },
    },
  },
}

export const WithSkipDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={500} skipDelayDuration={1000}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Tooltip 1</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hover this, then quickly move to the next tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Tooltip 2</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                If you hover this within 1 second, it appears immediately
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-sm text-muted-foreground">
          The skipDelayDuration allows quick navigation between tooltips without
          waiting for the delay again.
        </p>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip provider with skipDelayDuration configured to allow quick navigation between tooltips.",
      },
    },
  },
}

export const DisableHoverableContent: Story = {
  render: () => (
    <TooltipProvider disableHoverableContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Trying to hover this content will close the tooltip as the pointer
            leaves the trigger.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip provider with disableHoverableContent enabled, preventing users from hovering over the tooltip content.",
      },
    },
  },
}
