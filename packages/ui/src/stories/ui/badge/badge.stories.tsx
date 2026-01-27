import { BellIcon, CheckIcon, InfoIcon, XIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "~/components/ui/badge"

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small status descriptor for UI elements. Badges are used to highlight an item's status for quick recognition.\n\nThis component uses [Base UI's useRender](https://base-ui.com/react/utils/use-render) for flexible rendering.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "The visual variant of the badge.",
      table: {
        type: {
          summary:
            '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
        },
        defaultValue: { summary: "default" },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    render: {
      description:
        "A function to customize the rendered element. Receives props and returns a React element. Useful for rendering as a different element or component.",
      table: {
        type: { summary: "RenderProp<React.HTMLAttributes<any>>" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: false,
    },
    className: {
      description: "Additional CSS class names to apply.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    children: {
      description: "The content to display inside the badge.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The default badge style with primary background color.",
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "A secondary badge style with muted background.",
      },
    },
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A destructive badge style for error states or dangerous actions.",
      },
    },
  },
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "An outline badge with a border and transparent background.",
      },
    },
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A ghost badge with no background until hovered.",
      },
    },
  },
}

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
  parameters: {
    docs: {
      description: {
        story: "A link-styled badge with underline on hover.",
      },
    },
  },
}

export const WithIconStart: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Badge {...args}>
      <CheckIcon data-icon="inline-start" weight="bold" />
      Success
    </Badge>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badge with an icon at the start. Use `data-icon="inline-start"` on the icon for proper spacing.',
      },
    },
  },
}

export const WithIconEnd: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => (
    <Badge {...args}>
      Error
      <XIcon data-icon="inline-end" weight="bold" />
    </Badge>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badge with an icon at the end. Use `data-icon="inline-end"` on the icon for proper spacing.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available badge variants displayed together for comparison.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        <CheckIcon data-icon="inline-start" weight="bold" />
        Completed
      </Badge>
      <Badge variant="secondary">
        <InfoIcon data-icon="inline-start" weight="bold" />
        InfoIcon
      </Badge>
      <Badge variant="destructive">
        <XIcon data-icon="inline-start" weight="bold" />
        Failed
      </Badge>
      <Badge variant="outline">
        <BellIcon data-icon="inline-start" weight="bold" />
        Notification
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various badges with icons demonstrating common status patterns.",
      },
    },
  },
}

export const AsLink: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Badge
      {...args}
      render={(props) => (
        <a href="#example" {...props}>
          {props.children}
        </a>
      )}
    >
      Clickable Badge
    </Badge>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badge rendered as an anchor element using the `render` prop. Hover styles are applied automatically.",
      },
    },
  },
}

export const AsButton: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => (
    <Badge {...args} render={<button type="button" />}>
      <XIcon data-icon="inline-end" weight="bold" />
      Dismiss
    </Badge>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badge rendered as a button element using the `render` prop for interactive use cases.",
      },
    },
  },
}
