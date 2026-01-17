import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field/FieldGroup",
  component: FieldGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for grouping multiple fields together. Provides consistent spacing and supports container queries for responsive layouts.",
      },
    },
  },
  argTypes: {
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
} satisfies Meta<typeof FieldGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FieldGroup {...args}>
      <Field>
        <FieldLabel htmlFor="name-group">Full Name</FieldLabel>
        <FieldContent>
          <Input id="name-group" type="text" placeholder="John Doe" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="email-group">Email Address</FieldLabel>
        <FieldContent>
          <Input id="email-group" type="email" placeholder="john@example.com" />
          <FieldDescription>
            We'll use this to send you important updates.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="company-group">Company</FieldLabel>
        <FieldContent>
          <Input id="company-group" type="text" placeholder="Acme Inc." />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field group containing multiple form fields with consistent spacing.",
      },
    },
  },
}

export const NestedGroups: Story = {
  render: () => (
    <FieldGroup>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first-nested">First Name</FieldLabel>
          <FieldContent>
            <Input id="first-nested" type="text" placeholder="John" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel htmlFor="last-nested">Last Name</FieldLabel>
          <FieldContent>
            <Input id="last-nested" type="text" placeholder="Doe" />
          </FieldContent>
        </Field>
      </FieldGroup>
      <Field>
        <FieldLabel htmlFor="email-nested">Email</FieldLabel>
        <FieldContent>
          <Input id="email-nested" type="email" placeholder="john@example.com" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Nested field groups demonstrating hierarchical organization.",
      },
    },
  },
}

export const WithCustomSpacing: Story = {
  render: () => (
    <FieldGroup className="gap-8">
      <Field>
        <FieldLabel htmlFor="spacing-1">Field 1</FieldLabel>
        <FieldContent>
          <Input id="spacing-1" type="text" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="spacing-2">Field 2</FieldLabel>
        <FieldContent>
          <Input id="spacing-2" type="text" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field group with custom spacing applied via className.",
      },
    },
  },
}
