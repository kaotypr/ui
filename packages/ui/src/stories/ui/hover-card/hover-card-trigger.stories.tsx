import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "~/components/ui/button"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "~/components/ui/hover-card"

const meta = {
  title: "UI/HoverCard/HoverCardTrigger",
  component: HoverCardTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The element that triggers the hover card when hovered. Must be used within a HoverCard component.\n\nThis component is built on top of [Radix UI Hover Card Trigger](https://www.radix-ui.com/primitives/docs/components/hover-card#trigger).",
      },
    },
  },
  argTypes: {
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
} satisfies Meta<typeof HoverCardTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger {...args} asChild>
        <Button variant="link">@username</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@username</h4>
          <p className="text-sm">User profile information appears here.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card trigger using asChild with a Button component.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="text-blue-600 hover:underline cursor-pointer">
          Hover over this text
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Additional Information</h4>
          <p className="text-sm">
            This hover card is triggered by a text element.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card trigger using a text element with custom styling.",
      },
    },
  },
}

export const WithButtonVariant: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for Details</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Button Trigger</h4>
          <p className="text-sm">
            This hover card is triggered by a button with outline variant.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card trigger using a button with outline variant.",
      },
    },
  },
}

export const WithoutAsChild: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>
        <span>Click to see hover card</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Direct Trigger</h4>
          <p className="text-sm">
            This trigger renders directly without using asChild.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A hover card trigger without asChild, which renders directly.",
      },
    },
  },
}
