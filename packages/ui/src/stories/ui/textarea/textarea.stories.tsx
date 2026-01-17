import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "~/components/ui/textarea"
import { useState } from "react"

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled textarea component for multi-line text input. Provides consistent styling with focus states, error states, and disabled states.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/textarea).",
      },
    },
  },
  argTypes: {
    placeholder: {
      description: "Placeholder text displayed when the textarea is empty.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    value: {
      description:
        "The controlled value of the textarea. Use with onChange handler.",
      table: {
        type: { summary: "string | number | readonly string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "The default value of the textarea (uncontrolled).",
      table: {
        type: { summary: "string | number | readonly string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    rows: {
      description: "The number of visible text lines.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    cols: {
      description:
        "The visible width of the text control, in average character widths.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    disabled: {
      description: "When true, prevents user interaction with the textarea.",
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
      description: "When true, the textarea will be focused when the page loads.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description: "The name of the textarea, used when submitting a form.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    id: {
      description: "The unique identifier for the textarea element.",
      table: {
        type: { summary: "string" },
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
    wrap: {
      description:
        "Indicates how the text should be wrapped. 'soft' wraps the text in the textarea, 'hard' wraps the text and inserts line breaks, 'off' prevents wrapping.",
      table: {
        type: { summary: '"soft" | "hard" | "off"' },
        defaultValue: { summary: '"soft"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["soft", "hard", "off"],
    },
    spellCheck: {
      description:
        "Indicates whether spell checking is enabled for the textarea.",
      table: {
        type: { summary: "boolean | undefined" },
        defaultValue: { summary: "undefined" },
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
    dirName: {
      description:
        "The name of the form field that contains the textarea's directionality.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    form: {
      description:
        "The form element that the textarea is associated with (its form owner).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
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
        "Indicates that the textarea value is invalid. When set to 'true', the textarea will display error styling.",
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
      description: "Event handler called when the textarea value changes.",
      table: {
        type: {
          summary: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onChange",
    },
    onFocus: {
      description: "Event handler called when the textarea receives focus.",
      table: {
        type: {
          summary: "(event: React.FocusEvent<HTMLTextAreaElement>) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onFocus",
    },
    onBlur: {
      description: "Event handler called when the textarea loses focus.",
      table: {
        type: {
          summary: "(event: React.FocusEvent<HTMLTextAreaElement>) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onBlur",
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: "A basic textarea with placeholder and default rows.",
      },
    },
  },
}

export const WithValue: Story = {
  args: {
    value: "This is a pre-filled textarea with some content that demonstrates how the component looks with text.",
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: "A textarea with a pre-filled value.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
        placeholder="Type something..."
        rows={4}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled textarea using React state. The value is managed by the component.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
    value: "This textarea is disabled and cannot be edited.",
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled textarea that cannot be interacted with.",
      },
    },
  },
}

export const ReadOnly: Story = {
  args: {
    value: "This is a read-only textarea. The value cannot be modified by the user.",
    readOnly: true,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A read-only textarea that displays a value but cannot be modified.",
      },
    },
  },
}

export const Required: Story = {
  args: {
    placeholder: "Required field",
    required: true,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: "A required textarea field that must be filled in.",
      },
    },
  },
}

export const ErrorState: Story = {
  args: {
    placeholder: "Enter your message",
    "aria-invalid": true,
    value: "This textarea has an error",
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A textarea in error state, showing destructive styling when aria-invalid is set to true.",
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">
          Message (minLength: 10, maxLength: 200)
        </label>
        <Textarea
          placeholder="Enter a message between 10 and 200 characters"
          minLength={10}
          maxLength={200}
          rows={4}
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">
          Required Message
        </label>
        <Textarea
          placeholder="This field is required"
          required
          rows={4}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Textareas with validation attributes like minLength and maxLength.",
      },
    },
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Small (2 rows)</label>
        <Textarea placeholder="Small textarea" rows={2} />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">
          Medium (4 rows)
        </label>
        <Textarea placeholder="Medium textarea" rows={4} />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Large (8 rows)</label>
        <Textarea placeholder="Large textarea" rows={8} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textareas with different row sizes.",
      },
    },
  },
}

export const WithAutoComplete: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Address</label>
        <Textarea
          placeholder="Enter your address"
          autoComplete="street-address"
          rows={3}
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Additional Notes</label>
        <Textarea
          placeholder="Any additional information"
          autoComplete="off"
          rows={4}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Textareas with autocomplete attributes for better browser autofill support.",
      },
    },
  },
}

export const WithSpellCheck: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">
          With Spell Check
        </label>
        <Textarea
          placeholder="Type something with spelling errors..."
          spellCheck={true}
          rows={4}
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">
          Without Spell Check
        </label>
        <Textarea
          placeholder="Type something without spell checking..."
          spellCheck={false}
          rows={4}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textareas with spell check enabled and disabled.",
      },
    },
  },
}

export const LongContent: Story = {
  args: {
    value: `This is a textarea with a lot of content to demonstrate how it handles longer text. The textarea will automatically show a scrollbar when the content exceeds the visible area.

You can type multiple paragraphs here, and the textarea will grow or scroll as needed. This is useful for forms that require longer text input like comments, descriptions, or messages.

The component supports all standard HTML textarea attributes and behaviors, making it easy to integrate into any form.`,
    rows: 6,
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A textarea with longer content demonstrating scrolling behavior.",
      },
    },
  },
}
