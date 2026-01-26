import type { Meta, StoryObj } from "@storybook/react-vite"
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Checkbox } from "~/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Textarea } from "~/components/ui/textarea"

const meta = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A form label component that provides accessible labeling for form controls. Automatically associates with form controls via the htmlFor attribute and prevents text selection on double-click.\n\nThis component is built on top of [Radix UI Label](https://www.radix-ui.com/primitives/docs/components/label).",
      },
    },
  },
  argTypes: {
    htmlFor: {
      description:
        "The id of the control this label is associated with. Equivalent to native for attribute on <label>. When provided, clicking the label will focus the associated control.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
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
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="space-y-2 w-80">
      <Label htmlFor="email" {...args}>
        Email
      </Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic label associated with an input field using the htmlFor attribute.",
      },
    },
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" placeholder="Enter username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" placeholder="Tell us about yourself" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Labels associated with different types of form controls.",
      },
    },
  },
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Receive marketing emails</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Labels associated with checkboxes. Clicking the label will toggle the checkbox.",
      },
    },
  },
}

export const WithRadioGroup: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <RadioGroup defaultValue="option-one">
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Labels associated with radio buttons. Clicking the label will select the radio option.",
      },
    },
  },
}

export const NestedControl: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Label>
        <span className="block mb-2">Full Name</span>
        <Input type="text" placeholder="Enter your full name" />
      </Label>
      <Label>
        <span className="block mb-2">Message</span>
        <Textarea placeholder="Enter your message" />
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Labels wrapping form controls directly. When the control is nested within the label, htmlFor is optional.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="custom-1" className="text-lg font-bold text-primary">
          Large Bold Label
        </Label>
        <Input id="custom-1" type="text" placeholder="Custom styled label" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="custom-2" className="text-sm text-muted-foreground">
          Small Muted Label
        </Label>
        <Input id="custom-2" type="text" placeholder="Custom styled label" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="custom-3" className="text-base font-semibold text-destructive">
          Destructive Label
        </Label>
        <Input id="custom-3" type="text" placeholder="Custom styled label" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Labels with custom styling using the className prop.",
      },
    },
  },
}

export const DisabledState: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="disabled-input" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
          Disabled Input
        </Label>
        <Input id="disabled-input" type="text" placeholder="This input is disabled" disabled />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
          Disabled Checkbox
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Labels with disabled form controls. The label automatically applies disabled styling when the associated control is disabled.",
      },
    },
  },
}

export const WithAsChild: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Label asChild htmlFor="aschild-input">
        <span className="text-lg font-semibold cursor-pointer">
          Custom Element Label
        </span>
      </Label>
      <Input id="aschild-input" type="text" placeholder="Label uses asChild prop" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Using the asChild prop to render a custom element instead of the default <label> element, while maintaining label behavior.",
      },
    },
  },
}
