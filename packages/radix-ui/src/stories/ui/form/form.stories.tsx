import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import { Form } from "~/components/ui/form"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

const meta = {
  title: "UI/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A form component that provides React Hook Form context to child components. This component wraps React Hook Form's FormProvider and enables form state management throughout the component tree.\n\nThis component is built on top of [React Hook Form FormProvider](https://www.react-hook-form.com/api/formprovider/).\n\n### Component Parts\n- [FormField](?path=/story/ui-form-formfield--default): Wraps a form field with React Hook Form's Controller component.\n- [FormItem](?path=/story/ui-form-formitem--default): Container for a single form field with spacing and layout.\n- [FormLabel](?path=/story/ui-form-formlabel--default): Label component that automatically associates with form fields and shows error states.\n- [FormControl](?path=/story/ui-form-formcontrol--default): Wrapper for form input controls that provides proper ARIA attributes.\n- [FormDescription](?path=/story/ui-form-formdescription--default): Helper text displayed below form fields.\n- [FormMessage](?path=/story/ui-form-formmessage--default): Error message component that displays validation errors.",
      },
    },
  },
  argTypes: {
    // FormProvider accepts all methods from useForm()
    // These are spread props, so we document the common ones
    control: {
      description: "Control object from useForm hook. Used internally by React Hook Form.",
      table: {
        type: { summary: "Control<TFieldValues, TContext>" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
    handleSubmit: {
      description: "Function to handle form submission with validation.",
      table: {
        type: { summary: "(onValid: SubmitHandler, onInvalid?: SubmitErrorHandler) => (e?: BaseSyntheticEvent) => Promise<void>" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
    register: {
      description: "Function to register form inputs with React Hook Form.",
      table: {
        type: { summary: "(name: FieldPath<TFieldValues>, options?: RegisterOptions) => UseFormRegisterReturn" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
    reset: {
      description: "Function to reset form values and state.",
      table: {
        type: { summary: "(values?: DefaultValues<TFieldValues>, options?: ResetOptions) => void" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
    formState: {
      description: "Object containing form state information (errors, isValid, isDirty, etc.).",
      table: {
        type: { summary: "FormState<TFieldValues>" },
        defaultValue: { summary: "undefined" },
        category: "React Hook Form Props",
      },
    },
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

// Example form component for stories
function ExampleForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  })

  const onSubmit = (data: { username: string; email: string }) => {
    console.log("Form submitted:", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-80">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  render: () => <ExampleForm />,
  parameters: {
    docs: {
      description: {
        story: "A basic form with username and email fields using React Hook Form.",
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: "",
        email: "",
      },
    })

    const onSubmit = (data: { username: string; email: string }) => {
      console.log("Form submitted:", data)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-80">
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "A form with validation rules that display error messages when validation fails.",
      },
    },
  },
}
