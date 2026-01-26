import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible field component for building form fields with labels, descriptions, and error messages. Supports vertical, horizontal, and responsive orientations.\n\n### Component Parts\n- [FieldSet](?path=/story/ui-field-fieldset--default): A fieldset element for grouping related fields.\n- [FieldLegend](?path=/story/ui-field-fieldlegend--default): A legend element for fieldset groups.\n- [FieldGroup](?path=/story/ui-field-fieldgroup--default): A container for grouping multiple fields.\n- [FieldLabel](?path=/story/ui-field-fieldlabel--default): A label component for form fields.\n- [FieldTitle](?path=/story/ui-field-fieldtitle--default): A title component for fields that don't use labels.\n- [FieldDescription](?path=/story/ui-field-fielddescription--default): A description component for providing additional context.\n- [FieldError](?path=/story/ui-field-fielderror--default): An error message component for displaying validation errors.\n- [FieldSeparator](?path=/story/ui-field-fieldseparator--default): A separator component for visually dividing fields.\n- [FieldContent](?path=/story/ui-field-fieldcontent--default): A content wrapper component for field inputs.",
      },
    },
  },
  argTypes: {
    orientation: {
      description:
        "The orientation of the field layout. 'vertical' stacks label and content, 'horizontal' places them side by side, 'responsive' adapts based on container size.",
      table: {
        type: { summary: '"vertical" | "horizontal" | "responsive"' },
        defaultValue: { summary: '"vertical"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["vertical", "horizontal", "responsive"],
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
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" type="email" placeholder="Enter your email" />
        <FieldDescription>
          We'll never share your email with anyone else.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic field with label, input, and description in vertical orientation.",
      },
    },
  },
}

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="name-horizontal">Name</FieldLabel>
      <FieldContent>
        <Input id="name-horizontal" type="text" placeholder="Enter your name" />
        <FieldDescription>Your full name as it appears on ID.</FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field with horizontal orientation, placing label and content side by side.",
      },
    },
  },
}

export const WithError: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="email-error">Email</FieldLabel>
      <FieldContent>
        <Input
          id="email-error"
          type="email"
          placeholder="Enter your email"
          aria-invalid="true"
        />
        <FieldError>Please enter a valid email address.</FieldError>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field with an error message displayed below the input.",
      },
    },
  },
}

export const MultipleErrors: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="password-errors">Password</FieldLabel>
      <FieldContent>
        <Input
          id="password-errors"
          type="password"
          placeholder="Enter password"
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
        story: "A field displaying multiple error messages as a list.",
      },
    },
  },
}

export const Responsive: Story = {
  render: () => (
    <Field orientation="responsive">
      <FieldLabel htmlFor="phone-responsive">Phone</FieldLabel>
      <FieldContent>
        <Input id="phone-responsive" type="tel" placeholder="Enter phone number" />
        <FieldDescription>
          Include country code (e.g., +1 for US).
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A field with responsive orientation that adapts from vertical on mobile to horizontal on larger screens.",
      },
    },
  },
}
