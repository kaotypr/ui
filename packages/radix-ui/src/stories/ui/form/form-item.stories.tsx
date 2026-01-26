import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Form/FormItem",
  component: FormItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Container component for a single form field. Provides spacing and layout for form field elements. Must be used within a FormField component to provide context to child components like FormLabel, FormControl, FormDescription, and FormMessage.",
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
} satisfies Meta<typeof FormItem>

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
              <FormItem {...args}>
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
        story: "A form item containing label, input, description, and error message components.",
      },
    },
  },
}

export const CustomSpacing: Story = {
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
              <FormItem className="gap-4">
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
        story: "A form item with custom spacing using the className prop.",
      },
    },
  },
}

export const MultipleFields: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: "",
        email: "",
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
        story: "Multiple form items demonstrating the spacing between fields.",
      },
    },
  },
}
