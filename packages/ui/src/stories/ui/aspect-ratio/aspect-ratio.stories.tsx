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
          "A component that maintains a consistent width-to-height ratio for its content, useful for images, videos, or any media requiring consistent proportions.\n\nThis component is built on top of [Radix UI Aspect Ratio](https://www.radix-ui.com/primitives/docs/components/aspect-ratio).",
      },
    },
  },
  argTypes: {
    ratio: {
      description:
        "The width / height ratio. For example, 16 / 9 produces a widescreen aspect ratio. If omitted, defaults to 1 (square).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Radix UI Props",
      },
      control: { type: "number", min: 0.1, max: 10, step: 0.1 },
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
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args} className="w-[400px]">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 16 / 9,
  },
  parameters: {
    docs: {
      description: {
        story: "A basic aspect ratio container with a 16:9 ratio, commonly used for videos and widescreen images.",
      },
    },
  },
}

export const Square: Story = {
  render: () => (
    <AspectRatio ratio={1} className="w-[300px]">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
  parameters: {
    docs: {
      description: {
        story: "A square aspect ratio (1:1), commonly used for profile pictures and social media posts.",
      },
    },
  },
}

export const Portrait: Story = {
  render: () => (
    <AspectRatio ratio={3 / 4} className="w-[300px]">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
  parameters: {
    docs: {
      description: {
        story: "A portrait aspect ratio (3:4), commonly used for mobile photos and portrait-oriented content.",
      },
    },
  },
}

export const Wide: Story = {
  render: () => (
    <AspectRatio ratio={21 / 9} className="w-[500px]">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
  parameters: {
    docs: {
      description: {
        story: "An ultrawide aspect ratio (21:9), commonly used for cinematic content and ultrawide displays.",
      },
    },
  },
}

export const Video: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-[500px]">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full rounded-md"
      />
    </AspectRatio>
  ),
  parameters: {
    docs: {
      description: {
        story: "An aspect ratio container with embedded video content, maintaining the 16:9 ratio.",
      },
    },
  },
}

export const CustomRatio: Story = {
  render: (args) => (
    <AspectRatio {...args} className="w-[400px]">
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <span className="text-2xl font-bold">Custom Ratio</span>
      </div>
    </AspectRatio>
  ),
  args: {
    ratio: 2.5,
  },
  parameters: {
    docs: {
      description: {
        story: "An aspect ratio container with a custom ratio, demonstrating flexibility for any content proportions.",
      },
    },
  },
}

export const WithContent: Story = {
  render: () => (
    <AspectRatio ratio={4 / 3} className="w-[400px]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 bg-gray-50 p-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Card Content</h3>
          <p className="text-sm text-gray-600">
            This demonstrates how aspect ratio works with custom content.
          </p>
        </div>
      </div>
    </AspectRatio>
  ),
  parameters: {
    docs: {
      description: {
        story: "An aspect ratio container with custom content, showing how the component maintains proportions for any child content.",
      },
    },
  },
}
