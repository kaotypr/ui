import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
} from "~/components/ui/input-group"
import { DollarSign, AtSign } from "lucide-react"

const meta = {
  title: "UI/InputGroup/InputGroupText",
  component: InputGroupText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A text element for displaying labels, prefixes, suffixes, or helper text within input groups. Supports icons and other inline elements. Must be used within an InputGroupAddon component.",
      },
    },
  },
  argTypes: {
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
} satisfies Meta<typeof InputGroupText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup className="w-80">
      <InputGroupAddon align="inline-start">
        <InputGroupText {...args}>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput type="text" placeholder="example.com" />
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A text addon used as a prefix for an input.",
      },
    },
  },
}

export const AsPrefix: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="username" />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text addons used as prefixes for various input types.",
      },
    },
  },
}

export const AsSuffix: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="number" placeholder="Amount" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.00</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text addons used as suffixes for various input types.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <DollarSign className="size-4" />
            USD
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <AtSign className="size-4" />
            example.com
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>
            <DollarSign className="size-4" />
            Price
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="Enter price..." />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text addons with icons for enhanced visual context.",
      },
    },
  },
}

export const AsLabel: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Full Name</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="John Doe" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Email Address</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="john@example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Enter description..." />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text addons used as labels positioned at the block-start (top).",
      },
    },
  },
}

export const AsHelperText: Story = {
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
          <InputGroupText>Optional field</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="Password" />
        <InputGroupAddon align="block-end">
          <InputGroupText>Must be at least 8 characters</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text addons used as helper text positioned at the block-end (bottom).",
      },
    },
  },
}

export const MultipleTextElements: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Price</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="block-end">
          <InputGroupText>Enter amount in USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input groups with multiple text addons at different positions.",
      },
    },
  },
}
