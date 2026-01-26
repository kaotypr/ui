import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "~/components/ui/native-select"

const meta = {
  title: "UI/NativeSelect/NativeSelectOptGroup",
  component: NativeSelectOptGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Groups related options together within a native select element. Must be used within a NativeSelect component and contains NativeSelectOption components.",
      },
    },
  },
  argTypes: {
    label: {
      description: "The label text for the option group.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "When true, all options within this group are disabled.",
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
  },
} satisfies Meta<typeof NativeSelectOptGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select a category...</NativeSelectOption>
      <NativeSelectOptGroup {...args}>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
  args: {
    label: "Fruits",
  },
  parameters: {
    docs: {
      description: {
        story: "An option group with a label to organize related options.",
      },
    },
  },
}

export const MultipleGroups: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select a category...</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
        <NativeSelectOption value="grape">Grape</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
        <NativeSelectOption value="lettuce">Lettuce</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Grains">
        <NativeSelectOption value="rice">Rice</NativeSelectOption>
        <NativeSelectOption value="wheat">Wheat</NativeSelectOption>
        <NativeSelectOption value="oats">Oats</NativeSelectOption>
        <NativeSelectOption value="barley">Barley</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple option groups organizing different categories of options.",
      },
    },
  },
}

export const DisabledGroup: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select a category...</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables" disabled>
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
          "An option group that is disabled, making all options within it unselectable.",
      },
    },
  },
}

export const MixedWithUngrouped: Story = {
  render: () => (
    <NativeSelect className="w-80">
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="all">All Categories</NativeSelectOption>
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
      <NativeSelectOption value="other">Other</NativeSelectOption>
    </NativeSelect>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A select with both grouped options and ungrouped options mixed together.",
      },
    },
  },
}
