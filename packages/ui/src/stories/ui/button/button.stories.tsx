import type { Meta, StoryObj } from "@storybook/react-vite"
import { DownloadIcon, HeartIcon, PlusIcon } from "@phosphor-icons/react"
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants and sizes for different use cases.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style variant of the button.",
      table: {
        type: { summary: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"' },
        defaultValue: { summary: '"default"' },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
      description: "The size of the button.",
      table: {
        type: { summary: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents user interaction with the button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "The type of the button.",
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the button.",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "onClick",
      description: "Event handler called when the button is clicked.",
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLButtonElement>) => void" },
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button variants displayed together.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different button sizes: small, default, and large.",
      },
    },
  },
}

export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="icon-sm" variant="outline">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="outline">
        <PlusIcon />
      </Button>
      <Button size="icon-lg" variant="outline">
        <PlusIcon />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons in different sizes.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <DownloadIcon />
        Download
      </Button>
      <Button variant="outline">
        <HeartIcon />
        Favorite
      </Button>
      <Button variant="secondary" size="sm">
        <PlusIcon />
        Add Item
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons and text. Icons are automatically sized and positioned.",
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button states: enabled and disabled.",
      },
    },
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
  parameters: {
    docs: {
      description: {
        story: "Destructive variant for dangerous actions like delete or remove.",
      },
    },
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Outline variant with border and transparent background.",
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant with muted styling.",
      },
    },
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
  parameters: {
    docs: {
      description: {
        story: "Ghost variant with no background, only visible on hover.",
      },
    },
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Link variant styled as a text link with underline on hover.",
      },
    },
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Small size button variant.",
      },
    },
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Large size button variant.",
      },
    },
  },
}

