import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field/FieldDescription",
  component: FieldDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A description component for providing additional context or instructions for form fields. Supports links and other inline elements.",
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
} satisfies Meta<typeof FieldDescription>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="email-desc">Email Address</FieldLabel>
      <FieldContent>
        <Input id="email-desc" type="email" placeholder="john@example.com" />
        <FieldDescription {...args}>
          We'll never share your email with anyone else.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field description providing additional context below the input.",
      },
    },
  },
}

export const WithLink: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="password-desc">Password</FieldLabel>
      <FieldContent>
        <Input id="password-desc" type="password" placeholder="••••••••" />
        <FieldDescription>
          Must be at least 8 characters.{" "}
          {/** biome-ignore lint/a11y/useValidAnchor: "This is a storybook story" */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="underline underline-offset-4 hover:text-primary"
          >
            Learn more about password requirements
          </a>
          .
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field description containing a link for additional information.",
      },
    },
  },
}

export const LongDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="bio-desc">Biography</FieldLabel>
      <FieldContent>
        <Input id="bio-desc" type="text" placeholder="Tell us about yourself" />
        <FieldDescription>
          Provide a brief description of yourself, your background, and your
          interests. This information will be visible on your public profile and
          can help others learn more about you. You can update this at any time
          from your settings page.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field description with longer text that wraps to multiple lines.",
      },
    },
  },
}

export const HorizontalLayout: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="name-horizontal-desc">Full Name</FieldLabel>
      <FieldContent>
        <Input id="name-horizontal-desc" type="text" placeholder="John Doe" />
        <FieldDescription>
          Enter your full legal name as it appears on official documents.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field description in horizontal orientation layout.",
      },
    },
  },
}
