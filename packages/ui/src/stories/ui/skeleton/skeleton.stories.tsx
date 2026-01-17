import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "~/components/ui/skeleton"

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A placeholder component used during loading states. It mimics the look of content yet to be displayed, helping prevent layout shifts and improve perceived performance.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/skeleton).",
      },
    },
  },
  argTypes: {
    className: {
      description:
        "Additional CSS class names to apply. Use Tailwind classes to customize size, shape, and styling.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    children: {
      description: "Content to render inside the skeleton. Typically not used as skeleton is a placeholder.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
    style: {
      description: "Inline styles to apply to the skeleton element.",
      table: {
        type: { summary: "React.CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
    "data-slot": {
      description: "Data attribute for styling and identification. Automatically set to 'skeleton'.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"skeleton"' },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "h-4 w-[250px]",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic skeleton with default styling. Use className to set width and height.",
      },
    },
  },
}

export const TextLine: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple skeleton lines simulating text content. The last line is shorter to mimic natural text wrapping.",
      },
    },
  },
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center space-x-4 w-80">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A circular skeleton for avatar placeholders, combined with text lines for a user profile loading state.",
      },
    },
  },
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3 w-80">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A card skeleton with an image placeholder and text lines, commonly used for content cards.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small (h-2)</p>
        <Skeleton className="h-2 w-full" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Default (h-4)</p>
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Large (h-6)</p>
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Extra Large (h-12)</p>
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Skeletons with different heights using Tailwind classes.",
      },
    },
  },
}

export const Shapes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <p className="text-sm font-medium">Rounded (default)</p>
        <Skeleton className="h-12 w-12 rounded-md" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Circular</p>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Square</p>
        <Skeleton className="h-12 w-12 rounded-none" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Extra Rounded</p>
        <Skeleton className="h-12 w-12 rounded-xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Skeletons with different border radius values for various shapes.",
      },
    },
  },
}

export const Article: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An article skeleton with title, paragraphs, and an image placeholder.",
      },
    },
  },
}

export const List: Story = {
  render: () => (
    <div className="space-y-3 w-80">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A list skeleton with multiple items, each containing an avatar and text lines.",
      },
    },
  },
}

export const Table: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-3">
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-8 w-1/4" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A table skeleton with header and multiple rows.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <p className="text-sm font-medium">Custom Width</p>
        <Skeleton className="h-4 w-32" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Full Width</p>
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Percentage Width</p>
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Skeletons with different width configurations using Tailwind classes.",
      },
    },
  },
}

export const WithCustomProps: Story = {
  args: {
    className: "h-4 w-[250px]",
    "data-testid": "skeleton-test",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A skeleton with custom props. The component accepts all standard div props.",
      },
    },
  },
}
