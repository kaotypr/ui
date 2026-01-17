import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "~/components/ui/input-group"
import { Search, Eye, EyeOff, X, Check } from "lucide-react"

const meta = {
  title: "UI/InputGroup/InputGroupButton",
  component: InputGroupButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A button component specifically designed for use within input groups. Supports multiple size variants optimized for input group layouts. Must be used within an InputGroupAddon component.",
      },
    },
  },
  argTypes: {
    size: {
      description: "The size variant of the button.",
      table: {
        type: { summary: '"xs" | "sm" | "icon-xs" | "icon-sm"' },
        defaultValue: { summary: '"xs"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["xs", "sm", "icon-xs", "icon-sm"],
    },
    variant: {
      description: "The visual variant of the button.",
      table: {
        type: {
          summary:
            '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"ghost"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    type: {
      description: "The button type attribute.",
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["button", "submit", "reset"],
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
    disabled: {
      description: "Whether the button is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof InputGroupButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup className="w-80">
      <InputGroupInput type="text" placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton {...args}>
          <Search className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A button with an icon in an input group.",
      },
    },
  },
}

export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Extra small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">XS</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">SM</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Icon extra small" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Icon small" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group buttons with different size variants.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="password" placeholder="Password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Show</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Clear</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Enter URL" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group buttons with text labels.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupButton>
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Search..." />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="Password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Eye className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Enter value..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <X className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Verify..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Check className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group buttons with various icon types.",
      },
    },
  },
}

export const WithIconAndText: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search className="size-4" />
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="Password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <EyeOff className="size-4" />
            Hide
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group buttons with both icons and text.",
      },
    },
  },
}

export const VariantStyles: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Ghost variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost">Ghost</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Outline variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="outline">Outline</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Secondary variant" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Secondary</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group buttons with different visual variants.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Disabled button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton disabled>Action</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Disabled icon button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton disabled>
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group buttons in disabled state.",
      },
    },
  },
}
