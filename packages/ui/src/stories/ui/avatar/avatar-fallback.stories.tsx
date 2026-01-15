import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"

const meta = {
  title: "UI/Avatar/AvatarFallback",
  component: AvatarFallback,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Rendered when the image either hasn't started loading, is still loading, or has failed. Must be used within an Avatar component.",
      },
    },
  },
  argTypes: {
    delayMs: {
      description:
        "Specifies a delay (in milliseconds) before rendering the fallback content. Helps avoid showing fallback content briefly before the image appears (flashing) especially on fast connections.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "number", min: 0, max: 1000, step: 100 },
    },
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
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
} satisfies Meta<typeof AvatarFallback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback {...args}>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic avatar fallback with default styling.",
      },
    },
  },
}

export const Initials: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar fallbacks with different user initials.",
      },
    },
  },
}

export const SingleInitial: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>J</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar fallbacks with single initials.",
      },
    },
  },
}

export const WithDelay: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar"
      />
      <AvatarFallback delayMs={300}>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An avatar fallback with a 300ms delay to avoid flashing on fast connections.",
      },
    },
  },
}

export const ImageErrorFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url-that-will-fail.png" alt="User" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An avatar fallback that displays when the image fails to load.",
      },
    },
  },
}

export const NoImage: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar fallbacks when no image is provided.",
      },
    },
  },
}

export const CustomContent: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <span className="text-sm font-bold">JD</span>
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <span className="text-sm font-bold">AB</span>
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-500 text-white">
          <span className="text-sm font-bold">CN</span>
        </AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar fallbacks with custom styling and gradient backgrounds.",
      },
    },
  },
}

export const LongDelay: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar"
      />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An avatar fallback with a longer delay (600ms) to demonstrate the delay behavior.",
      },
    },
  },
}
