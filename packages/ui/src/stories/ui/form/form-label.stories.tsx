import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Form/FormLabel",
  component: FormLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Label component for form fields. Automatically associates with the form control via the formItemId and displays error state styling when validation fails. Must be used within a FormField and FormItem context.\n\nThis component is built on top of [Radix UI Label](https://www.radix-ui.com/primitives/docs/components/label).",
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
    htmlFor: {
      description: "The id of the form control this label is associated with. Automatically set by FormLabel.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    asChild: {
      description: "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof FormLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const form = useForm({
      defaultValues: {
        username: "",
      },
    })

    return (
      <Form {...form}>
        <form className="space-y-4 w-80">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel {...args}>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "A form label associated with an input field.",
      },
    },
  },
}

export const WithError: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: "",
      },
    })

    // Trigger validation error
    form.setError("email", {
      type: "manual",
      message: "Email is required",
    })

    return (
      <Form {...form}>
        <form className="space-y-4 w-80">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormDescription>
                  We'll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "A form label displaying error state styling when the field has a validation error.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: "",
      },
    })

    return (
      <Form {...form}>
        <form className="space-y-4 w-80">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">
                  Username
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "A form label with custom styling using the className prop.",
      },
    },
  },
}
