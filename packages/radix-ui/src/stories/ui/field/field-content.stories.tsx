import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldError,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

const meta = {
  title: "UI/Field/FieldContent",
  component: FieldContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A content wrapper component for field inputs. Provides consistent spacing and layout for form controls, descriptions, and error messages within a field.",
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
} satisfies Meta<typeof FieldContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="email-content">Email Address</FieldLabel>
      <FieldContent {...args}>
        <Input id="email-content" type="email" placeholder="john@example.com" />
        <FieldDescription>
          We'll never share your email with anyone else.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field content wrapper containing an input and description.",
      },
    },
  },
}

export const WithError: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="password-content">Password</FieldLabel>
      <FieldContent>
        <Input
          id="password-content"
          type="password"
          placeholder="••••••••"
          aria-invalid="true"
        />
        <FieldError>Password must be at least 8 characters long.</FieldError>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field content wrapper containing an input and error message.",
      },
    },
  },
}

export const WithTextarea: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="bio-content">Biography</FieldLabel>
      <FieldContent>
        <Textarea
          id="bio-content"
          placeholder="Tell us about yourself..."
          rows={4}
        />
        <FieldDescription>
          Provide a brief description of yourself and your background.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field content wrapper containing a textarea and description.",
      },
    },
  },
}

export const MultipleElements: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="complex-content">Complex Field</FieldLabel>
      <FieldContent>
        <Input id="complex-content" type="text" placeholder="Enter value" />
        <FieldDescription>
          This field supports multiple content elements.
        </FieldDescription>
        <FieldError>This is an error message (for demonstration).</FieldError>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A field content wrapper containing multiple elements including input, description, and error.",
      },
    },
  },
}
