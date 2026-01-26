import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { ThemeProvider } from "next-themes"
import { toast } from "sonner"
import { Button } from "~/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Toaster } from "~/components/ui/sonner"

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toast notification component for displaying temporary messages to users. Supports success, error, info, warning, and loading states with customizable positioning and styling.\n\nThis component is built on top of [Sonner](https://sonner.emilkowal.ski/).\n\n### Usage\n\nTo use the Toaster, add it to your app root and trigger toasts using the `toast` function from `sonner`:\n\n```tsx\nimport { Toaster } from '~/components/ui/sonner'\nimport { toast } from 'sonner'\n\n// In your component\n<Toaster />\n\n// Trigger a toast\ntoast('Hello World')\ntoast.success('Success!')\ntoast.error('Error!')\n```",
      },
    },
  },
  argTypes: {
    position: {
      description:
        "Where to display toasts on screen. Controls the position of the toast container.",
      table: {
        type: {
          summary:
            '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        },
        defaultValue: { summary: '"bottom-right"' },
        category: "Sonner Props",
      },
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
    expand: {
      description:
        "If true, toasts stay expanded (show full content) by default.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Sonner Props",
      },
      control: { type: "boolean" },
    },
    visibleToasts: {
      description:
        "Maximum number of toasts visible at once before older ones are removed.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
        category: "Sonner Props",
      },
      control: { type: "number" },
    },
    duration: {
      description:
        "Default time to auto-dismiss a toast (in milliseconds). Use Infinity for persistent toasts.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4000" },
        category: "Sonner Props",
      },
      control: { type: "number" },
    },
    closeButton: {
      description: "If true, shows a close button on each toast.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Sonner Props",
      },
      control: { type: "boolean" },
    },
    richColors: {
      description:
        "Whether to use richer color styles for status variants like success, error, warning, etc.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Sonner Props",
      },
      control: { type: "boolean" },
    },
    offset: {
      description:
        "Sets how far from the screen's edge the toasts should appear. Can be a string, number, or object with top/right/bottom/left properties.",
      table: {
        type: {
          summary: 'string | number | { top?: number, right?: number, bottom?: number, left?: number }',
        },
        defaultValue: { summary: "default spacing" },
        category: "Sonner Props",
      },
      control: false,
    },
    mobileOffset: {
      description: "Overrides offset on mobile devices.",
      table: {
        type: {
          summary: 'string | number | { top?: number, right?: number, bottom?: number, left?: number }',
        },
        defaultValue: { summary: "undefined" },
        category: "Sonner Props",
      },
      control: false,
    },
    gap: {
      description: "Vertical gap between stacked toasts.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "library default" },
        category: "Sonner Props",
      },
      control: { type: "number" },
    },
    hotkey: {
      description:
        "Keyboard shortcut to focus / expand the toast container. Array of keyboard keys.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: '["altKey","KeyT"]' },
        category: "Sonner Props",
      },
      control: false,
    },
    invert: {
      description:
        "Inverts color usage; useful when the background is already dark or light.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Sonner Props",
      },
      control: { type: "boolean" },
    },
    dir: {
      description:
        "Text direction / layout direction, for right-to-left language support.",
      table: {
        type: { summary: '"rtl" | "ltr" | "auto"' },
        defaultValue: { summary: '"auto"' },
        category: "Sonner Props",
      },
      control: { type: "select" },
      options: ["rtl", "ltr", "auto"],
    },
    icons: {
      description:
        "Custom set of icons for different toast types (success, error, loading, close, etc.).",
      table: {
        type: { summary: "ToastIcons" },
        defaultValue: { summary: "default internal icon set" },
        category: "Sonner Props",
      },
      control: false,
    },
    containerAriaLabel: {
      description:
        "ARIA label for the toast container, for accessibility.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Notifications"' },
        category: "Sonner Props",
      },
      control: { type: "text" },
    },
    className: {
      description: "Additional CSS class names to apply to the toast container.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    style: {
      description: "Custom inline style for the container.",
      table: {
        type: { summary: "React.CSSProperties" },
        defaultValue: { summary: "undefined" },
        category: "Styling",
      },
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => toast("Hello World", { description: "This is a default toast" })}
        >
          Show Default Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Success!", {
              description: "Your changes have been saved.",
            })
          }
        >
          Show Success Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error("Error!", {
              description: "Something went wrong. Please try again.",
            })
          }
        >
          Show Error Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Info", {
              description: "Here's some information you might find useful.",
            })
          }
        >
          Show Info Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Warning", {
              description: "This action cannot be undone.",
            })
          }
        >
          Show Warning Toast
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.loading("Loading...", { description: "Please wait" })}
        >
          Show Loading Toast
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic toaster setup with buttons to trigger different toast types. Click the buttons to see various toast notifications.",
      },
    },
  },
}

export const Positions: Story = {
  render: (args) => {
    const [position, setPosition] = useState<
      "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
    >("bottom-right")

    return (
      <div className="space-y-4">
        <Toaster {...args} position={position} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Toast Position</label>
            <Select
              value={position}
              onValueChange={(value) =>
                setPosition(
                  value as
                    | "top-left"
                    | "top-center"
                    | "top-right"
                    | "bottom-left"
                    | "bottom-center"
                    | "bottom-right"
                )
              }
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top-left">Top Left</SelectItem>
                <SelectItem value="top-center">Top Center</SelectItem>
                <SelectItem value="top-right">Top Right</SelectItem>
                <SelectItem value="bottom-left">Bottom Left</SelectItem>
                <SelectItem value="bottom-center">Bottom Center</SelectItem>
                <SelectItem value="bottom-right">Bottom Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Select a position above, then click the button to see a toast appear at that position.
            </p>
            <Button
              onClick={() =>
                toast(`Toast at ${position.replace("-", " ")}`, {
                  description: `This toast appears at the ${position.replace("-", " ")} position.`,
                })
              }
            >
              Show Toast
            </Button>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates different toast positions. Use the dropdown to change the Toaster position, then click the button to see a toast appear at the selected position.",
      },
    },
  },
}

export const WithCloseButton: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} closeButton />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() =>
            toast("Toast with Close Button", {
              description: "This toast has a close button",
            })
          }
        >
          Show Toast with Close Button
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toaster with closeButton enabled. Each toast will display a close button.",
      },
    },
  },
}

export const RichColors: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} richColors />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() =>
            toast.success("Success with Rich Colors", {
              description: "This success toast uses rich colors",
            })
          }
        >
          Success (Rich Colors)
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.error("Error with Rich Colors", {
              description: "This error toast uses rich colors",
            })
          }
        >
          Error (Rich Colors)
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Warning with Rich Colors", {
              description: "This warning toast uses rich colors",
            })
          }
        >
          Warning (Rich Colors)
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Info with Rich Colors", {
              description: "This info toast uses rich colors",
            })
          }
        >
          Info (Rich Colors)
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toaster with richColors enabled. Toasts will use more vibrant colors for status variants.",
      },
    },
  },
}

export const CustomDuration: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} duration={10000} />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() =>
            toast("Long Duration Toast", {
              description: "This toast will stay for 10 seconds",
            })
          }
        >
          Show 10s Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Persistent Toast", {
              description: "This toast will stay until manually dismissed",
              duration: Infinity,
            })
          }
        >
          Show Persistent Toast
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toaster with custom duration. The default duration is set to 10 seconds. Individual toasts can override this with their own duration, including Infinity for persistent toasts.",
      },
    },
  },
}

export const MultipleToasts: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} visibleToasts={5} />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast("Toast 1")
            toast("Toast 2")
            toast("Toast 3")
            toast("Toast 4")
            toast("Toast 5")
          }}
        >
          Show 5 Toasts
        </Button>
        <p className="text-sm text-muted-foreground">
          Up to 5 toasts will be visible at once (visibleToasts=5)
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toaster configured to show up to 5 toasts simultaneously. Older toasts are automatically removed when the limit is reached.",
      },
    },
  },
}

export const WithActions: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() =>
            toast("Event Created", {
              description: "Friday, January 3, 2024 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => toast("Undo clicked"),
              },
            })
          }
        >
          Toast with Action
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("File Deleted", {
              description: "The file has been permanently deleted.",
              action: {
                label: "Restore",
                onClick: () => toast.success("File restored"),
              },
              cancel: {
                label: "Dismiss",
                onClick: () => {},
              },
            })
          }
        >
          Toast with Action and Cancel
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toasts with action buttons. Actions allow users to perform quick actions directly from the toast notification.",
      },
    },
  },
}

export const PromiseToast: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            const promise = new Promise((resolve) => {
              setTimeout(() => resolve({ name: "Sonner" }), 2000)
            })

            toast.promise(promise, {
              loading: "Loading...",
              success: (data: any) => {
                return `${data.name} toast has been added`
              },
              error: "Error",
            })
          }}
        >
          Show Promise Toast (Success)
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            const promise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error("Something went wrong")), 2000)
            })

            toast.promise(promise, {
              loading: "Loading...",
              success: "Success",
              error: (err) => `Error: ${err.message}`,
            })
          }}
        >
          Show Promise Toast (Error)
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Promise-based toasts that automatically update based on promise state (loading → success/error).",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster {...args} className="custom-toaster" />
      <div className="flex flex-col gap-2">
        <Button
          onClick={() =>
            toast("Custom Styled Toast", {
              description: "This toast uses custom styling",
              className: "custom-toast",
            })
          }
        >
          Show Custom Styled Toast
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toaster and individual toasts can be customized with custom CSS classes.",
      },
    },
  },
}
