import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Checkbox } from "~/components/ui/checkbox"

const meta = {
  title: "UI/Field/FieldLabel",
  component: FieldLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A label component for form fields. Built on top of the Label component and provides additional styling for field contexts. Supports linking to form controls via htmlFor attribute.\n\nThis component is built on top of [Radix UI Label](https://www.radix-ui.com/primitives/docs/components/label).",
      },
    },
  },
  argTypes: {
    htmlFor: {
      description:
        "The id of the form control this label is associated with. When provided, clicking the label will focus the associated control.",
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
  },
} satisfies Meta<typeof FieldLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel {...args} htmlFor="email-label">
        Email Address
      </FieldLabel>
      <FieldContent>
        <Input id="email-label" type="email" placeholder="john@example.com" />
        <FieldDescription>
          We'll never share your email with anyone else.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field label linked to an input via htmlFor attribute.",
      },
    },
  },
}

export const WithCheckbox: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="terms-checkbox" className="cursor-pointer">
        <Checkbox id="terms-checkbox" />
        <span>I agree to the terms and conditions</span>
      </FieldLabel>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A field label wrapping a checkbox, making the entire label clickable.",
      },
    },
  },
}

export const HorizontalLayout: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="name-horizontal">Full Name</FieldLabel>
      <FieldContent>
        <Input id="name-horizontal" type="text" placeholder="John Doe" />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field label in horizontal orientation layout.",
      },
    },
  },
}

export const Required: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="required-field">
        Password <span className="text-destructive">*</span>
      </FieldLabel>
      <FieldContent>
        <Input
          id="required-field"
          type="password"
          placeholder="Enter password"
          required
        />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field label indicating a required field with an asterisk.",
      },
    },
  },
}
