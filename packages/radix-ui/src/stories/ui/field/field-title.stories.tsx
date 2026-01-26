import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Field,
  FieldTitle,
  FieldContent,
  FieldDescription,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Field/FieldTitle",
  component: FieldTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A title component for fields that don't use labels. Provides a styled title text for form fields, typically used when the input itself serves as the label or when additional context is needed.",
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
} satisfies Meta<typeof FieldTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldTitle {...args}>Search</FieldTitle>
      <FieldContent>
        <Input type="search" placeholder="Search for anything..." />
        <FieldDescription>
          Enter keywords to search across all content.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field with a title instead of a label.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <Field>
      <FieldTitle className="flex items-center gap-2">
        <span>🔍</span>
        <span>Advanced Search</span>
      </FieldTitle>
      <FieldContent>
        <Input type="search" placeholder="Enter search terms..." />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field title with an icon or emoji.",
      },
    },
  },
}

export const HorizontalLayout: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldTitle>Filter</FieldTitle>
      <FieldContent>
        <Input type="text" placeholder="Filter results..." />
      </FieldContent>
    </Field>
  ),
  parameters: {
    docs: {
      description: {
        story: "A field title in horizontal orientation layout.",
      },
    },
  },
}
