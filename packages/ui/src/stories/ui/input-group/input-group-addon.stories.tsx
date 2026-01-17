import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
} from "~/components/ui/input-group"
import { Search, Mail, User, AtSign, DollarSign } from "lucide-react"

const meta = {
  title: "UI/InputGroup/InputGroupAddon",
  component: InputGroupAddon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for addon elements (icons, text, buttons) within an input group. Supports different alignment options to position addons at various sides of the input. Must be used within an InputGroup component.",
      },
    },
  },
  argTypes: {
    align: {
      description:
        "The alignment position of the addon relative to the input control.",
      table: {
        type: {
          summary: '"inline-start" | "inline-end" | "block-start" | "block-end"',
        },
        defaultValue: { summary: '"inline-start"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["inline-start", "inline-end", "block-start", "block-end"],
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
} satisfies Meta<typeof InputGroupAddon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup className="w-80">
      <InputGroupAddon {...args}>
        <Search className="size-4" />
      </InputGroupAddon>
      <InputGroupInput type="text" placeholder="Search..." />
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "An addon with an icon positioned at the inline-start (left side).",
      },
    },
  },
}

export const InlineStart: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Email address" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupButton>
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Search..." />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Addons aligned to the inline-start (left side) with icons, text, and buttons.",
      },
    },
  },
}

export const InlineEnd: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Username" />
        <InputGroupAddon align="inline-end">
          <AtSign className="size-4" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="Amount" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="Password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Show</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Addons aligned to the inline-end (right side) with icons, text, and buttons.",
      },
    },
  },
}

export const BlockStart: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Enter description..." />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <User className="size-4" />
          <InputGroupText>User Information</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Enter user details..." />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Addons aligned to the block-start (top) of the input group, useful for labels or headers.",
      },
    },
  },
}

export const BlockEnd: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Enter notes..." />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/500 characters</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Enter value..." />
        <InputGroupAddon align="block-end">
          <DollarSign className="size-4" />
          <InputGroupText>Optional helper text</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Addons aligned to the block-end (bottom) of the input group, useful for helper text or character counts.",
      },
    },
  },
}

export const MultipleAddons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <DollarSign className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Full Name</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="John Doe" />
        <InputGroupAddon align="block-end">
          <InputGroupText>Required field</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Input groups with multiple addons positioned at different sides.",
      },
    },
  },
}
