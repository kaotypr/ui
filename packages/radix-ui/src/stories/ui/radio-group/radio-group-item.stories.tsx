import type { Meta, StoryObj } from "@storybook/react-vite"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

const meta = {
  title: "UI/RadioGroup/RadioGroupItem",
  component: RadioGroupItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Represents a single selectable option within the radio group. Must be used within a RadioGroup component.\n\nThis component is built on top of [Radix UI RadioGroup Item](https://www.radix-ui.com/primitives/docs/components/radio-group#item).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The unique value for this item. This value is used to determine which item is selected.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with this specific item.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description:
        "When true, indicates that this item must be selected before the owning form can be submitted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
} satisfies Meta<typeof RadioGroupItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem {...args} value="option-one" id="item-option-one" />
        <Label htmlFor="item-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="item-option-two" />
        <Label htmlFor="item-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="item-option-three" />
        <Label htmlFor="item-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A radio group item within a radio group. The first item is selected by default.",
      },
    },
  },
}

export const DisabledItem: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-item-option-one" />
        <Label htmlFor="disabled-item-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option-two"
          id="disabled-item-option-two"
          disabled
        />
        <Label
          htmlFor="disabled-item-option-two"
          className="cursor-not-allowed opacity-50"
        >
          Option Two (Disabled)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="disabled-item-option-three" />
        <Label htmlFor="disabled-item-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A radio group with one disabled item. The disabled item cannot be selected.",
      },
    },
  },
}

export const WithLabels: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="label-default" />
        <Label htmlFor="label-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="label-comfortable" />
        <Label htmlFor="label-comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="label-compact" />
        <Label htmlFor="label-compact">Compact</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radio group items with associated labels. Clicking the label will select the radio option.",
      },
    },
  },
}

export const MultipleGroups: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Notification Preference</Label>
        <RadioGroup defaultValue="email">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="group1-email" />
            <Label htmlFor="group1-email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sms" id="group1-sms" />
            <Label htmlFor="group1-sms">SMS</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="push" id="group1-push" />
            <Label htmlFor="group1-push">Push</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Theme</Label>
        <RadioGroup defaultValue="light">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="group2-light" />
            <Label htmlFor="group2-light">Light</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="group2-dark" />
            <Label htmlFor="group2-dark">Dark</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="group2-system" />
            <Label htmlFor="group2-system">System</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple radio groups demonstrating independent selection within each group.",
      },
    },
  },
}
