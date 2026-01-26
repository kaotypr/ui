import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupText,
} from "~/components/ui/input-group"

const meta = {
  title: "UI/InputGroup/InputGroupTextarea",
  component: InputGroupTextarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A textarea component styled specifically for use within input groups. Removes default borders and shadows to integrate seamlessly with the input group container. Must be used within an InputGroup component.",
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
      description: "The controlled value of the textarea.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "The default value of the textarea (uncontrolled).",
      table: {
        type: { summary: "string" },
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
      description: "The visible width of the text control, in average character widths.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "number" },
    },
    disabled: {
      description: "Whether the textarea is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "Whether the textarea is read-only.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description: "Whether the textarea is required.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    "aria-invalid": {
      description: "Indicates that the textarea value is invalid.",
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
} satisfies Meta<typeof InputGroupTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup className="w-80">
      <InputGroupTextarea {...args} placeholder="Enter text..." rows={4} />
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic textarea within an input group.",
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter description..." rows={4} />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Notes</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter notes..." rows={3} />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Comments</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter comments..." rows={5} />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textareas with labels positioned at the block-start (top).",
      },
    },
  },
}

export const WithHelperText: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupTextarea placeholder="Enter text..." rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/500 characters</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Enter description..." rows={3} />
        <InputGroupAddon align="block-end">
          <InputGroupText>Optional field</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Enter notes..." rows={5} />
        <InputGroupAddon align="block-end">
          <InputGroupText>Markdown supported</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textareas with helper text positioned at the block-end (bottom).",
      },
    },
  },
}

export const WithLabelAndHelperText: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter description..." rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/500 characters</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Comments</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter comments..." rows={5} />
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
          "Textareas with both labels and helper text at different positions.",
      },
    },
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupTextarea placeholder="Small textarea" rows={2} />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Medium textarea" rows={4} />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Large textarea" rows={6} />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Extra large textarea" rows={8} />
      </InputGroup>
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

export const ErrorState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          placeholder="Enter description..."
          rows={4}
          aria-invalid="true"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea
          placeholder="Required field"
          rows={3}
          aria-invalid="true"
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>This field is required</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Textareas in error state, showing destructive styling when aria-invalid is set.",
      },
    },
  },
}

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          placeholder="Enter description..."
          rows={4}
          disabled
        />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="Disabled textarea" rows={3} disabled />
        <InputGroupAddon align="block-end">
          <InputGroupText>Disabled</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textareas in disabled state.",
      },
    },
  },
}

export const ReadOnlyState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          value="This is a read-only textarea with some content that cannot be edited."
          rows={4}
          readOnly
        />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea
          value="Read-only value that cannot be modified."
          rows={3}
          readOnly
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>Read-only</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textareas in read-only state.",
      },
    },
  },
}
