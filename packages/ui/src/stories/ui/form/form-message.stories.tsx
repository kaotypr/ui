import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Form/FormMessage",
  component: FormMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Error message component that displays validation errors for form fields. Automatically shows error messages from React Hook Form validation. Must be used within a FormField and FormItem context. Returns null if there is no error.",
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
    children: {
      description: "Custom error message to display. If provided, this overrides the error message from React Hook Form.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof FormMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
        story: "A form message displaying a validation error from React Hook Form.",
      },
    },
  },
}

export const WithValidationRules: Story = {
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
            rules={{
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            }}
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
        story: "A form message that displays validation errors based on form rules. Try submitting with an empty or short username.",
      },
    },
  },
}

export const CustomMessage: Story = {
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
                <FormMessage>
                  Please provide a valid email address
                </FormMessage>
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
        story: "A form message with a custom error message using the children prop.",
      },
    },
  },
}

export const NoError: Story = {
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
        story: "A form message that returns null when there is no validation error.",
      },
    },
  },
}

export const CustomStyling: Story = {
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
                <FormMessage className="text-xs font-semibold" />
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
        story: "A form message with custom styling using the className prop.",
      },
    },
  },
}
