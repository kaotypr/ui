import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "~/components/ui/input"
import { useState } from "react"

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled input component for text, email, password, and other input types. Provides consistent styling with focus states, error states, and disabled states.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/input).",
      },
    },
  },
  argTypes: {
    type: {
      description:
        "The type of input. Controls the input behavior and validation.",
      table: {
        type: {
          summary:
            '"text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "range" | "hidden"',
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
        "file",
        "color",
        "range",
        "hidden",
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
      description:
        "The controlled value of the input. Use with onChange handler.",
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
      description: "When true, prevents user interaction with the input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "When true, prevents the user from modifying the value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description: "When true, indicates that the user must fill in a value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    autoFocus: {
      description: "When true, the input will be focused when the page loads.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    autoComplete: {
      description:
        "Indicates whether the value can be automatically completed by the browser.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    name: {
      description: "The name of the input, used when submitting a form.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    id: {
      description: "The unique identifier for the input element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    min: {
      description:
        "The minimum value allowed (for number, date, time inputs).",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    max: {
      description:
        "The maximum value allowed (for number, date, time inputs).",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    minLength: {
      description: "The minimum number of characters required.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    maxLength: {
      description: "The maximum number of characters allowed.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    pattern: {
      description:
        "A regular expression that the input's value must match to be valid.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    step: {
      description:
        "The stepping interval for number, date, and time inputs.",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    accept: {
      description:
        "Comma-separated list of file types accepted (for file inputs).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    multiple: {
      description:
        "When true, allows multiple values to be selected (for file inputs).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
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
    "aria-invalid": {
      description:
        "Indicates that the input value is invalid. When set to 'true', the input will display error styling.",
      table: {
        type: { summary: '"true" | "false" | boolean' },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
    "aria-label": {
      description:
        "Defines a string value that labels the current element for assistive technologies.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "text" },
    },
    "aria-describedby": {
      description:
        "Identifies the element (or elements) that describes the object.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "text" },
    },
    onChange: {
      description: "Event handler called when the input value changes.",
      table: {
        type: { summary: "(event: React.ChangeEvent<HTMLInputElement>) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onChange",
    },
    onFocus: {
      description: "Event handler called when the input receives focus.",
      table: {
        type: { summary: "(event: React.FocusEvent<HTMLInputElement>) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onFocus",
    },
    onBlur: {
      description: "Event handler called when the input loses focus.",
      table: {
        type: { summary: "(event: React.FocusEvent<HTMLInputElement>) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onBlur",
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic text input with placeholder.",
      },
    },
  },
}

export const WithValue: Story = {
  args: {
    type: "text",
    value: "Hello, World!",
    placeholder: "Enter text...",
  },
  parameters: {
    docs: {
      description: {
        story: "An input with a pre-filled value.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
        placeholder="Type something..."
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled input using React state. The value is managed by the component.",
      },
    },
  },
}

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Text</label>
        <Input type="text" placeholder="Enter text..." />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <Input type="email" placeholder="name@example.com" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Password</label>
        <Input type="password" placeholder="Enter password..." />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Number</label>
        <Input type="number" placeholder="Enter number..." />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Tel</label>
        <Input type="tel" placeholder="+1 (555) 000-0000" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">URL</label>
        <Input type="url" placeholder="https://example.com" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Search</label>
        <Input type="search" placeholder="Search..." />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Date</label>
        <Input type="date" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Time</label>
        <Input type="time" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various input types demonstrating different input behaviors.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
    value: "Cannot edit this",
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled input that cannot be interacted with.",
      },
    },
  },
}

export const ReadOnly: Story = {
  args: {
    type: "text",
    value: "Read-only value",
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A read-only input that displays a value but cannot be modified.",
      },
    },
  },
}

export const Required: Story = {
  args: {
    type: "text",
    placeholder: "Required field",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A required input field that must be filled in.",
      },
    },
  },
}

export const ErrorState: Story = {
  args: {
    type: "email",
    placeholder: "Enter email",
    "aria-invalid": true,
    value: "invalid-email",
  },
  parameters: {
    docs: {
      description: {
        story:
          "An input in error state, showing destructive styling when aria-invalid is set to true.",
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">
          Email (with pattern)
        </label>
        <Input
          type="email"
          placeholder="name@example.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">
          Number (min: 0, max: 100)
        </label>
        <Input
          type="number"
          placeholder="0-100"
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">
          Text (minLength: 3, maxLength: 20)
        </label>
        <Input
          type="text"
          placeholder="3-20 characters"
          minLength={3}
          maxLength={20}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Inputs with validation attributes like pattern, min, max, minLength, and maxLength.",
      },
    },
  },
}

export const FileInput: Story = {
  args: {
    type: "file",
    accept: "image/*",
  },
  parameters: {
    docs: {
      description: {
        story: "A file input for selecting files (accepts images only).",
      },
    },
  },
}

export const WithAutoComplete: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Name</label>
        <Input
          type="text"
          placeholder="Enter your name"
          autoComplete="name"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <Input
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Password</label>
        <Input
          type="password"
          placeholder="Enter password"
          autoComplete="current-password"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Inputs with autocomplete attributes for better browser autofill support.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Default</label>
        <Input type="text" placeholder="Default size" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Custom Width</label>
        <Input
          type="text"
          placeholder="Full width"
          className="w-full"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Narrow</label>
        <Input
          type="text"
          placeholder="Narrow input"
          className="w-48"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with different width sizes using className.",
      },
    },
  },
}
