import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  FieldSet,
  FieldLegend,
  Field,
  FieldLabel,
  FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field/FieldLegend",
  component: FieldLegend,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A legend element for fieldset groups. Must be used within a FieldSet component. Supports 'legend' and 'label' variants for different text sizes.",
      },
    },
  },
  argTypes: {
    variant: {
      description:
        "The visual variant of the legend. 'legend' uses base text size, 'label' uses smaller text size.",
      table: {
        type: { summary: '"legend" | "label"' },
        defaultValue: { summary: '"legend"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["legend", "label"],
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
} satisfies Meta<typeof FieldLegend>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FieldSet>
      <FieldLegend {...args}>Account Settings</FieldLegend>
      <Field>
        <FieldLabel htmlFor="username-legend">Username</FieldLabel>
        <FieldContent>
          <Input id="username-legend" type="text" placeholder="johndoe" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="password-legend">Password</FieldLabel>
        <FieldContent>
          <Input id="password-legend" type="password" placeholder="••••••••" />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
  parameters: {
    docs: {
      description: {
        story: "A fieldset legend with default 'legend' variant styling.",
      },
    },
  },
}

export const LabelVariant: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend variant="label">Contact Information</FieldLegend>
      <Field>
        <FieldLabel htmlFor="phone-legend">Phone</FieldLabel>
        <FieldContent>
          <Input id="phone-legend" type="tel" placeholder="+1 (555) 000-0000" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="email-legend">Email</FieldLabel>
        <FieldContent>
          <Input id="email-legend" type="email" placeholder="john@example.com" />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
  parameters: {
    docs: {
      description: {
        story: "A fieldset legend with 'label' variant for smaller text size.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend className="text-lg font-semibold text-primary">
        Premium Features
      </FieldLegend>
      <Field>
        <FieldLabel htmlFor="feature-1">Feature 1</FieldLabel>
        <FieldContent>
          <Input id="feature-1" type="text" placeholder="Configure feature" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="feature-2">Feature 2</FieldLabel>
        <FieldContent>
          <Input id="feature-2" type="text" placeholder="Configure feature" />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
  parameters: {
    docs: {
      description: {
        story: "A fieldset legend with custom styling applied via className.",
      },
    },
  },
}
