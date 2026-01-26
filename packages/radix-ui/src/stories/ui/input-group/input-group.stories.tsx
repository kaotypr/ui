import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "~/components/ui/input-group"
import { Search, Mail, Lock, User, AtSign } from "lucide-react"

const meta = {
  title: "UI/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for grouping input controls with addons, buttons, and text. Provides consistent styling and layout for form inputs with prefixes, suffixes, and action buttons.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/input-group).\n\n### Component Parts\n- [InputGroupAddon](?path=/story/ui-inputgroup-inputgroupaddon--default): Container for addon elements (icons, text, buttons) that can be positioned at different sides.\n- [InputGroupButton](?path=/story/ui-inputgroup-inputgroupbutton--default): Button component designed for use within input groups with specific size variants.\n- [InputGroupText](?path=/story/ui-inputgroup-inputgrouptext--default): Text element for displaying labels or helper text within input groups.\n- [InputGroupInput](?path=/story/ui-inputgroup-inputgroupinput--default): Input field component styled for use within input groups.\n- [InputGroupTextarea](?path=/story/ui-inputgroup-inputgrouptextarea--default): Textarea component styled for use within input groups.",
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
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup {...args} className="w-80">
      <InputGroupAddon align="inline-start">
        <Search className="size-4" />
      </InputGroupAddon>
      <InputGroupInput type="text" placeholder="Search..." />
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic input group with an icon prefix.",
      },
    },
  },
}

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Email address" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Username" />
        <InputGroupAddon align="inline-end">
          <AtSign className="size-4" />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <User className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Full name" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Verify</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Input groups with prefixes, suffixes, and both prefix and suffix elements.",
      },
    },
  },
}

export const WithTextAddons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Amount" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.00</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input groups with text-based addons for prefixes and suffixes.",
      },
    },
  },
}

export const WithButtons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="password" placeholder="Enter password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Show</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupButton>
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Clear</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input groups with action buttons as addons.",
      },
    },
  },
}

export const WithTextarea: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter description..." rows={4} />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Enter notes..." rows={3} />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/500 characters</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input groups with textarea and block-aligned addons.",
      },
    },
  },
}

export const ErrorState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="size-4" />
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          placeholder="Email address"
          aria-invalid="true"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupInput
          type="text"
          placeholder="Username"
          aria-invalid="true"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Check</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Input groups in error state, showing destructive styling when aria-invalid is set.",
      },
    },
  },
}

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup data-disabled="true">
        <InputGroupAddon align="inline-start">
          <Lock className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="password" placeholder="Password" disabled />
      </InputGroup>

      <InputGroup data-disabled="true">
        <InputGroupInput type="text" placeholder="Disabled input" disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupButton disabled>Action</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input groups in disabled state.",
      },
    },
  },
}
