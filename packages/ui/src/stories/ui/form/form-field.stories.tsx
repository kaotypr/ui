import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Form/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Wraps a form field with React Hook Form's Controller component. Must be used within a Form component (FormProvider). Provides field context to child components like FormLabel, FormControl, FormDescription, and FormMessage.\n\nThis component is built on top of [React Hook Form Controller](https://www.react-hook-form.com/api/usecontroller/controller/).",
      },
    },
  },
  argTypes: {
    name: {
      description: "The name of the field. Must match a key in the form's field values.",
      table: {
        type: { summary: "FieldPath<TFieldValues>" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    control: {
      description: "Control object from useForm hook. Required for the field to work.",
      table: {
        type: { summary: "Control<TFieldValues, TContext>" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
    },
    render: {
      description: "Render function that receives field props and returns the form control element.",
      table: {
        type: { summary: "({ field, fieldState, formState }) => React.ReactElement" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
    },
    rules: {
      description: "Validation rules for the field. Can include required, minLength, maxLength, pattern, validate, etc.",
      table: {
        type: { summary: "RegisterOptions<TFieldValues, TName>" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
    defaultValue: {
      description: "Default value for the field when uncontrolled.",
      table: {
        type: { summary: "FieldPathValue<TFieldValues, TName>" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
    disabled: {
      description: "When true, the field is disabled and its value is excluded from form submission.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Hook Form Props",
      },
      control: { type: "boolean" },
    },
    shouldUnregister: {
      description: "When true, the field is unregistered when unmounted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "React Hook Form Props",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
                <FormLabel>Username</FormLabel>
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
        story: "A basic form field with label, input, description, and error message support.",
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: "",
      },
    })

    return (
      <Form {...form}>
        <form className="space-y-4 w-80">
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
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
        story: "A form field with validation rules. Try submitting with an invalid email to see the error message.",
      },
    },
  },
}

export const WithDefaultValue: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: "johndoe",
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
                <FormLabel>Username</FormLabel>
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
        story: "A form field with a default value pre-filled.",
      },
    },
  },
}
