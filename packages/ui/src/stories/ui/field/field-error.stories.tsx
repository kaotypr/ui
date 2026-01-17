import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field/FieldError",
  component: FieldError,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An error message component for displaying validation errors. Can display a single error message or multiple errors as a list. Automatically deduplicates errors with the same message.",
      },
    },
  },
  argTypes: {
    errors: {
      description:
        "An array of error objects with optional message properties. When multiple unique errors are provided, they are displayed as a bulleted list.",
      table: {
        type: { summary: "Array<{ message?: string } | undefined>" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "object" },
    },
    children: {
      description:
        "Custom error message content. When provided, takes precedence over the errors prop.",
      table: {
        type: { summary: "React.ReactNode" },
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
} satisfies Meta<typeof FieldError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="email-error">Email Address</FieldLabel>
      <FieldContent>
        <Input
          id="email-error"
          type="email"
          placeholder="john@example.com"
          aria-invalid="true"
        />
        <FieldError {...args}>Please enter a valid email address.</FieldError>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field error displaying a single error message.",
      },
    },
  },
}

export const WithErrorsProp: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="password-errors">Password</FieldLabel>
      <FieldContent>
        <Input
          id="password-errors"
          type="password"
          placeholder="••••••••"
          aria-invalid="true"
        />
        <FieldError
          errors={[
            { message: "Password must be at least 8 characters" },
            { message: "Password must contain at least one number" },
            { message: "Password must contain at least one special character" },
          ]}
        />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field error displaying multiple error messages as a list.",
      },
    },
  },
}

export const DeduplicatedErrors: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="username-dedup">Username</FieldLabel>
      <FieldContent>
        <Input
          id="username-dedup"
          type="text"
          placeholder="johndoe"
          aria-invalid="true"
        />
        <FieldError
          errors={[
            { message: "Username is required" },
            { message: "Username is required" }, // Duplicate
            { message: "Username must be unique" },
          ]}
        />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A field error that automatically deduplicates errors with the same message.",
      },
    },
  },
}

export const SingleErrorFromArray: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="email-single">Email</FieldLabel>
      <FieldContent>
        <Input
          id="email-single"
          type="email"
          placeholder="john@example.com"
          aria-invalid="true"
        />
        <FieldError errors={[{ message: "This email is already registered" }]} />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "When only one unique error is provided, it's displayed as plain text instead of a list.",
      },
    },
  },
}

export const CustomContent: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="custom-error">Custom Field</FieldLabel>
      <FieldContent>
        <Input
          id="custom-error"
          type="text"
          placeholder="Enter value"
          aria-invalid="true"
        />
        <FieldError>
          <strong>Error:</strong> This field contains invalid data. Please check
          your input and try again.
        </FieldError>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field error with custom content using the children prop.",
      },
    },
  },
}
