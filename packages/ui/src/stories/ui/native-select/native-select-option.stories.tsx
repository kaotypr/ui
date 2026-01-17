import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  NativeSelect,
  NativeSelectOption,
} from "~/components/ui/native-select"

const meta = {
  title: "UI/NativeSelect/NativeSelectOption",
  component: NativeSelectOption,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Represents a single option within a native select element. Must be used within a NativeSelect component.",
      },
    },
  },
  argTypes: {
    value: {
      description: "The value of the option. This is the value that will be submitted with the form.",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "When true, this option cannot be selected.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    selected: {
      description: "When true, this option is pre-selected (uncontrolled).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    label: {
      description: "Alternative text for the option. If not provided, the option's children will be used.",
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
  },
} satisfies Meta<typeof NativeSelectOption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption {...args}>Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  args: {
    value: "option1",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic option within a select.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2" disabled>
        Option 2 (Disabled)
      </NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
      <NativeSelectOption value="option4">Option 4</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "An option that is disabled and cannot be selected.",
      },
    },
  },
}

export const Selected: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2" selected>
        Option 2 (Pre-selected)
      </NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
      <NativeSelectOption value="option4">Option 4</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "An option that is pre-selected by default (uncontrolled).",
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1" label="First Option">
        Option 1
      </NativeSelectOption>
      <NativeSelectOption value="option2" label="Second Option">
        Option 2
      </NativeSelectOption>
      <NativeSelectOption value="option3" label="Third Option">
        Option 3
      </NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Options with explicit label attributes. The label provides alternative text for the option.",
      },
    },
  },
}

export const WithValues: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select a number...</NativeSelectOption>
      <NativeSelectOption value="1">One</NativeSelectOption>
      <NativeSelectOption value="2">Two</NativeSelectOption>
      <NativeSelectOption value="3">Three</NativeSelectOption>
      <NativeSelectOption value="4">Four</NativeSelectOption>
      <NativeSelectOption value="5">Five</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "Options with numeric values.",
      },
    },
  },
}
