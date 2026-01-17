import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.\n\nThis component is built on top of [Radix UI RadioGroup](https://www.radix-ui.com/primitives/docs/components/radio-group).\n\n### Component Parts\n- [RadioGroupItem](?path=/story/ui-radiogroup-radiogroupitem--default): Represents a single selectable option within the radio group.",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The controlled value of the radio group. Must be used in conjunction with onValueChange.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description:
        "The value of the radio group when it is initially rendered. Use when you do not need to control its value.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description:
        "Event handler called when the value of the radio group changes.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the radio group and all its items.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description:
        "The name of the group. Submitted with its owning form as part of a name/value pair.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    required: {
      description:
        "When true, indicates that the user must select a value before the owning form can be submitted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    orientation: {
      description: "The orientation of the radio group.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    dir: {
      description:
        "The reading direction. If omitted, inherits globally from DirectionProvider or assumes LTR.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
    loop: {
      description:
        "When true, keyboard navigation will loop from last item to first, and vice versa.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic radio group with three options. The first option is selected by default.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("option-two")

    return (
      <RadioGroup
        {...args}
        value={value}
        onValueChange={(v) => {
          setValue(v)
          args.onValueChange?.(v)
        }}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="controlled-option-one" />
          <Label htmlFor="controlled-option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="controlled-option-two" />
          <Label htmlFor="controlled-option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="controlled-option-three" />
          <Label htmlFor="controlled-option-three">Option Three</Label>
        </div>
      </RadioGroup>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled radio group where the selected value is managed by React state.",
      },
    },
  },
}

export const Uncontrolled: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-two">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="uncontrolled-option-one" />
        <Label htmlFor="uncontrolled-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="uncontrolled-option-two" />
        <Label htmlFor="uncontrolled-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="uncontrolled-option-three" />
        <Label htmlFor="uncontrolled-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An uncontrolled radio group using defaultValue for initial selection.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-two" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-option-one" />
        <Label htmlFor="disabled-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-option-two" />
        <Label htmlFor="disabled-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="disabled-option-three" />
        <Label htmlFor="disabled-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A disabled radio group that cannot be interacted with. All items are disabled.",
      },
    },
  },
}

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one" orientation="horizontal">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="horizontal-option-one" />
        <Label htmlFor="horizontal-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="horizontal-option-two" />
        <Label htmlFor="horizontal-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="horizontal-option-three" />
        <Label htmlFor="horizontal-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A radio group with horizontal orientation.",
      },
    },
  },
}

export const WithForm: Story = {
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        // eslint-disable-next-line no-console
        console.log("Form submitted:", formData.get("preference"))
      }}
      className="space-y-4"
    >
      <RadioGroup {...args} name="preference" defaultValue="email" required>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="email" id="form-email" />
          <Label htmlFor="form-email">Email</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sms" id="form-sms" />
          <Label htmlFor="form-sms">SMS</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="phone" id="form-phone" />
          <Label htmlFor="form-phone">Phone</Label>
        </div>
      </RadioGroup>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Submit
      </button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A radio group integrated with a form, using the name and required props for form submission.",
      },
    },
  },
}
