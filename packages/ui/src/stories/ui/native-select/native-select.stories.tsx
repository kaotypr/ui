import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "~/components/ui/native-select"
import { useState } from "react"

const meta = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled native HTML select component with consistent styling, focus states, error states, and disabled states. Provides a custom chevron icon and supports different sizes.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/select).\n\n### Component Parts\n- [NativeSelectOption](?path=/story/ui-nativeselect-nativeselectoption--default): Represents a single option within the select.\n- [NativeSelectOptGroup](?path=/story/ui-nativeselect-nativeselectoptgroup--default): Groups related options together.",
      },
    },
  },
  argTypes: {
    size: {
      description: "The size variant of the select.",
      table: {
        type: { summary: '"sm" | "default"' },
        defaultValue: { summary: '"default"' },
        category: "Props",
      },
      control: { type: "radio" },
      options: ["sm", "default"],
    },
    value: {
      description:
        "The controlled value of the select. Use with onChange handler.",
      table: {
        type: { summary: "string | number | readonly string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "The default value of the select (uncontrolled).",
      table: {
        type: { summary: "string | number | readonly string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "When true, prevents user interaction with the select.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description: "When true, indicates that the user must select a value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    multiple: {
      description: "When true, allows multiple options to be selected.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    autoFocus: {
      description: "When true, the select will be focused when the page loads.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description: "The name of the select, used when submitting a form.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    id: {
      description: "The unique identifier for the select element.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    form: {
      description:
        "The id of the form element that the select belongs to.",
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
        "Indicates that the select value is invalid. When set to 'true', the select will display error styling.",
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
    "aria-required": {
      description:
        "Indicates that user input is required on the element before a form may be submitted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
    onChange: {
      description: "Event handler called when the select value changes.",
      table: {
        type: {
          summary: "(event: React.ChangeEvent<HTMLSelectElement>) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onChange",
    },
    onFocus: {
      description: "Event handler called when the select receives focus.",
      table: {
        type: {
          summary: "(event: React.FocusEvent<HTMLSelectElement>) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onFocus",
    },
    onBlur: {
      description: "Event handler called when the select loses focus.",
      table: {
        type: {
          summary: "(event: React.FocusEvent<HTMLSelectElement>) => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onBlur",
    },
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic select with default options.",
      },
    },
  },
}

export const WithDefaultValue: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  args: {
    defaultValue: "option2",
  },
  parameters: {
    docs: {
      description: {
        story: "A select with a pre-selected default value.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("option1")
    return (
      <NativeSelect
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      >
        <NativeSelectOption value="option1">Option 1</NativeSelectOption>
        <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        <NativeSelectOption value="option3">Option 3</NativeSelectOption>
        <NativeSelectOption value="option4">Option 4</NativeSelectOption>
      </NativeSelect>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled select using React state. The value is managed by the component.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Default Size</label>
        <NativeSelect size="default">
          <NativeSelectOption value="">Select...</NativeSelectOption>
          <NativeSelectOption value="small">Small</NativeSelectOption>
          <NativeSelectOption value="medium">Medium</NativeSelectOption>
          <NativeSelectOption value="large">Large</NativeSelectOption>
        </NativeSelect>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Small Size</label>
        <NativeSelect size="sm">
          <NativeSelectOption value="">Select...</NativeSelectOption>
          <NativeSelectOption value="small">Small</NativeSelectOption>
          <NativeSelectOption value="medium">Medium</NativeSelectOption>
          <NativeSelectOption value="large">Large</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Selects with different size variants.",
      },
    },
  },
}

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select a category...</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Grains">
        <NativeSelectOption value="rice">Rice</NativeSelectOption>
        <NativeSelectOption value="wheat">Wheat</NativeSelectOption>
        <NativeSelectOption value="oats">Oats</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A select with option groups to organize related options together.",
      },
    },
  },
}

export const Multiple: Story = {
  render: () => (
    <NativeSelect multiple className="w-80" defaultValue={["option1", "option3"]}>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
      <NativeSelectOption value="option4">Option 4</NativeSelectOption>
      <NativeSelectOption value="option5">Option 5</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A select that allows multiple options to be selected simultaneously.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled defaultValue="option2" className="w-80">
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled select that cannot be interacted with.",
      },
    },
  },
}

export const Required: Story = {
  render: () => (
    <NativeSelect required className="w-80">
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "A required select field that must have a value selected.",
      },
    },
  },
}

export const ErrorState: Story = {
  render: () => (
    <NativeSelect
      aria-invalid={true}
      defaultValue="invalid"
      className="w-80"
    >
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A select in error state, showing destructive styling when aria-invalid is set to true.",
      },
    },
  },
}

export const WithManyOptions: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select a country...</NativeSelectOption>
      <NativeSelectOption value="us">United States</NativeSelectOption>
      <NativeSelectOption value="ca">Canada</NativeSelectOption>
      <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
      <NativeSelectOption value="de">Germany</NativeSelectOption>
      <NativeSelectOption value="fr">France</NativeSelectOption>
      <NativeSelectOption value="it">Italy</NativeSelectOption>
      <NativeSelectOption value="es">Spain</NativeSelectOption>
      <NativeSelectOption value="nl">Netherlands</NativeSelectOption>
      <NativeSelectOption value="be">Belgium</NativeSelectOption>
      <NativeSelectOption value="ch">Switzerland</NativeSelectOption>
      <NativeSelectOption value="at">Austria</NativeSelectOption>
      <NativeSelectOption value="se">Sweden</NativeSelectOption>
      <NativeSelectOption value="no">Norway</NativeSelectOption>
      <NativeSelectOption value="dk">Denmark</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "A select with many options to demonstrate scrolling behavior.",
      },
    },
  },
}
