import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  FieldSet,
  FieldLegend,
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Checkbox } from "~/components/ui/checkbox"

const meta = {
  title: "UI/Field/FieldSet",
  component: FieldSet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A fieldset element for grouping related form fields together. Automatically adjusts spacing for checkbox and radio groups.",
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
} satisfies Meta<typeof FieldSet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FieldSet {...args}>
      <FieldLegend>Personal Information</FieldLegend>
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <FieldContent>
          <Input id="first-name" type="text" placeholder="John" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <FieldContent>
          <Input id="last-name" type="text" placeholder="Doe" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="email-set">Email</FieldLabel>
        <FieldContent>
          <Input id="email-set" type="email" placeholder="john@example.com" />
          <FieldDescription>
            We'll use this to send you important updates.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldSet>
  ),
  parameters: {
    docs: {
      description: {
        story: "A fieldset grouping multiple related form fields with a legend.",
      },
    },
  },
}

export const WithCheckboxes: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Notification Preferences</FieldLegend>
      <div data-slot="checkbox-group" className="flex flex-col gap-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="email-notifications" />
          <label
            htmlFor="email-notifications"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email notifications
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sms-notifications" />
          <label
            htmlFor="sms-notifications"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            SMS notifications
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="push-notifications" />
          <label
            htmlFor="push-notifications"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Push notifications
          </label>
        </div>
      </div>
    </FieldSet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A fieldset with checkbox group, demonstrating automatic spacing adjustment.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <FieldSet disabled>
      <FieldLegend>Billing Address</FieldLegend>
      <Field>
        <FieldLabel htmlFor="street">Street Address</FieldLabel>
        <FieldContent>
          <Input id="street" type="text" disabled />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <FieldContent>
          <Input id="city" type="text" disabled />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
  parameters: {
    docs: {
      description: {
        story: "A disabled fieldset with all fields disabled.",
      },
    },
  },
}
