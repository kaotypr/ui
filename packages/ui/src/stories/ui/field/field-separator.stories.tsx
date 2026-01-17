import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldSeparator,
  FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field/FieldSeparator",
  component: FieldSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A separator component for visually dividing fields within a field group. Can display with or without text content.",
      },
    },
  },
  argTypes: {
    children: {
      description:
        "Optional text content to display in the center of the separator line.",
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
} satisfies Meta<typeof FieldSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email-sep">Email</FieldLabel>
        <FieldContent>
          <Input id="email-sep" type="email" placeholder="john@example.com" />
        </FieldContent>
      </Field>
      <FieldSeparator {...args} />
      <Field>
        <FieldLabel htmlFor="password-sep">Password</FieldLabel>
        <FieldContent>
          <Input id="password-sep" type="password" placeholder="••••••••" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field separator without text content.",
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="username-sep">Username</FieldLabel>
        <FieldContent>
          <Input id="username-sep" type="text" placeholder="johndoe" />
        </FieldContent>
      </Field>
      <FieldSeparator>OR</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="email-sep-text">Email</FieldLabel>
        <FieldContent>
          <Input id="email-sep-text" type="email" placeholder="john@example.com" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field separator with text content displayed in the center.",
      },
    },
  },
}

export const MultipleSeparators: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="field1">Field 1</FieldLabel>
        <FieldContent>
          <Input id="field1" type="text" />
        </FieldContent>
      </Field>
      <FieldSeparator />
      <Field>
        <FieldLabel htmlFor="field2">Field 2</FieldLabel>
        <FieldContent>
          <Input id="field2" type="text" />
        </FieldContent>
      </Field>
      <FieldSeparator>Section Break</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field3">Field 3</FieldLabel>
        <FieldContent>
          <Input id="field3" type="text" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple field separators within a field group.",
      },
    },
  },
}
