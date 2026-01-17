import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "~/components/ui/input-group"
import { Search, Mail, Lock } from "lucide-react"

const meta = {
  title: "UI/InputGroup/InputGroupInput",
  component: InputGroupInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An input field component styled specifically for use within input groups. Removes default borders and shadows to integrate seamlessly with the input group container. Must be used within an InputGroup component.",
      },
    },
  },
  argTypes: {
    type: {
      description: "The input type attribute.",
      table: {
        type: {
          summary:
            '"text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "file" | "range" | "checkbox" | "radio"',
        },
        defaultValue: { summary: '"text"' },
        category: "Props",
      },
      control: { type: "select" },
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
      ],
    },
    placeholder: {
      description: "Placeholder text displayed when the input is empty.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    value: {
      description: "The controlled value of the input.",
      table: {
        type: { summary: "string | number | readonly string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "The default value of the input (uncontrolled).",
      table: {
        type: { summary: "string | number | readonly string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "Whether the input is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "Whether the input is read-only.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description: "Whether the input is required.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    "aria-invalid": {
      description: "Indicates that the input value is invalid.",
      table: {
        type: { summary: '"true" | "false" | boolean' },
        defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof InputGroupInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup className="w-80">
      <InputGroupInput {...args} placeholder="Enter text..." />
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic input within an input group.",
      },
    },
  },
}

export const WithPrefix: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Search className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Search..." />
      </InputGroup>

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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with prefix addons (icons and text).",
      },
    },
  },
}

export const WithSuffix: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@example.com</InputGroupText>
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
          <Lock className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with suffix addons (text and icons).",
      },
    },
  },
}

export const WithPrefixAndSuffix: Story = {
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
        <InputGroupAddon align="inline-start">
          <Search className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="text" placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Go</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with both prefix and suffix addons.",
      },
    },
  },
}

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Text input" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="email" placeholder="Email input" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="Password input" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="Number input" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="tel" placeholder="Phone input" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="url" placeholder="URL input" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="search" placeholder="Search input" />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input group inputs with different input types.",
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
          placeholder="Required field"
          aria-invalid="true"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Required</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Inputs in error state, showing destructive styling when aria-invalid is set.",
      },
    },
  },
}

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Email address" disabled />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="text" placeholder="Disabled input" disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Disabled</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs in disabled state.",
      },
    },
  },
}

export const ReadOnlyState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          type="text"
          value="example.com"
          readOnly
        />
      </InputGroup>

      <InputGroup>
        <InputGroupInput
          type="text"
          value="Read-only value"
          readOnly
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Read-only</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs in read-only state.",
      },
    },
  },
}
