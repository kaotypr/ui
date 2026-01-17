import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component for displaying user avatars with image and fallback support.\n\nThis component is built on top of [Radix UI Avatar](https://www.radix-ui.com/primitives/docs/components/avatar).\n\n### Component Parts\n- [AvatarImage](?path=/story/ui-avatar-avatarimage--default): Displays the avatar image when it loads successfully.\n- [AvatarFallback](?path=/story/ui-avatar-avatarfallback--default): Rendered when the image hasn't loaded, is loading, or has failed.",
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
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic avatar with an image and fallback initials.",
      },
    },
  },
}

export const WithImage: Story = {
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
        story: "An avatar displaying a user profile image.",
      },
    },
  },
}

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "An avatar showing only the fallback when no image is provided.",
      },
    },
  },
}

export const SingleInitial: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>J</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "An avatar with a single initial fallback.",
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
      <Avatar className="size-24">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatars in different sizes using custom className.",
      },
    },
  },
}

export const ImageError: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url-that-will-fail.png" alt="User" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: "An avatar that falls back to initials when the image fails to load.",
      },
    },
  },
}

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
          alt="User 2"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A group of avatars displayed together, commonly used for showing multiple users.",
      },
    },
  },
}
