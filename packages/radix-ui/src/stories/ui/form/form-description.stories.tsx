import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const meta = {
  title: "UI/Form/FormDescription",
  component: FormDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Helper text component displayed below form fields. Provides additional context or instructions for the form field. Must be used within a FormField and FormItem context.",
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
} satisfies Meta<typeof FormDescription>

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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription {...args}>
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
        story: "A form description providing helpful context about the form field.",
      },
    },
  },
}

export const LongDescription: Story = {
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormDescription>
                  We'll never share your email with anyone else. Your email will be used for account verification and important notifications only.
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
        story: "A form description with longer text content.",
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription className="text-xs italic">
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
        story: "A form description with custom styling using the className prop.",
      },
    },
  },
}

export const WithoutDescription: Story = {
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
        story: "A form field without a description, showing that FormDescription is optional.",
      },
    },
  },
}
