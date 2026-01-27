import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "~/components/ui/aspect-ratio"

const meta = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that maintains a specified aspect ratio for its content, useful for responsive images and video embeds.",
      },
    },
  },
  argTypes: {
    ratio: {
      description:
        "The aspect ratio to maintain, expressed as width/height (e.g., 16/9, 4/3, 1).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
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
    children: {
      description: "The content to render within the aspect ratio container.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Gray abstract background"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default 16:9 aspect ratio, commonly used for video content.",
      },
    },
  },
}

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Gray abstract background"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "1:1 square aspect ratio, ideal for profile pictures or thumbnails.",
      },
    },
  },
}

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Gray abstract background"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "3:4 portrait aspect ratio, suitable for portrait photos.",
      },
    },
  },
}

export const Widescreen: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <div className="w-[500px]">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Gray abstract background"
          className="size-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "21:9 ultra-widescreen aspect ratio for cinematic displays.",
      },
    },
  },
}

export const WithPlaceholder: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args} className="bg-muted rounded-md">
        <div className="flex size-full items-center justify-center text-muted-foreground">
          16:9 Placeholder
        </div>
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "AspectRatio can be used as a placeholder with background color and centered content.",
      },
    },
  },
}

export const VideoEmbed: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[500px]">
      <AspectRatio {...args} className="bg-black rounded-md">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video embed example"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "AspectRatio is perfect for maintaining video embed dimensions responsively.",
      },
    },
  },
}
