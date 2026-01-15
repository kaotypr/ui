import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"

const meta = {
  title: "UI/Avatar/AvatarImage",
  component: AvatarImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays the avatar image when it loads successfully. Must be used within an Avatar component.",
      },
    },
  },
  argTypes: {
    src: {
      description: "The source URL of the image to display.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    alt: {
      description: "Alternative text for the image.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
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
    onLoadingStatusChange: {
      description:
        "Callback fired when the image's loading status changes. Useful for custom behavior while the image loads or fails.",
      table: {
        type: {
          summary: "(status: 'idle' | 'loading' | 'loaded' | 'error') => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      action: "onLoadingStatusChange",
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
} satisfies Meta<typeof AvatarImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar>
      <AvatarImage {...args} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic avatar image with default styling.",
      },
    },
  },
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "An avatar image with a fallback that displays if the image fails to load.",
      },
    },
  },
}

export const LoadingStatus: Story = {
  render: (args) => (
    <Avatar>
      <AvatarImage {...args} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
    onLoadingStatusChange: (status) => {
      console.log("Image loading status:", status)
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "An avatar image with a loading status change handler. Check the console to see status updates.",
      },
    },
  },
}

export const ImageError: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://invalid-url-that-will-fail.png"
        alt="User"
        onLoadingStatusChange={(status) => {
          console.log("Image loading status:", status)
        }}
      />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An avatar image that fails to load, demonstrating the fallback behavior. Check the console for error status.",
      },
    },
  },
}

export const CustomSize: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar images in different sizes using custom className on the parent Avatar.",
      },
    },
  },
}
