import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkbox input component for selecting one or more options from a list.\n\nThis component is built on top of [Radix UI Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox).",
      },
    },
  },
  argTypes: {
    checked: {
      description:
        "The controlled checked state of the checkbox. Can be true, false, or 'indeterminate'. When provided, the component becomes controlled.",
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: [true, false, "indeterminate"],
    },
    defaultChecked: {
      description:
        "The default checked state when uncontrolled. Can be true, false, or 'indeterminate'.",
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "select" },
      options: [true, false, "indeterminate"],
    },
    onCheckedChange: {
      description:
        "Event handler called when the checked state changes. Receives the new checked state (boolean or 'indeterminate').",
      table: {
        type: {
          summary: "(checked: boolean | 'indeterminate') => void",
        },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCheckedChange",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the checkbox.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description:
        "When true, indicates that the user must check the checkbox before the owning form can be submitted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description:
        "The name of the checkbox. Submitted with its owning form as part of a name/value pair.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    value: {
      description:
        "The value given as the data when submitted with a name. Defaults to 'on' if not provided.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"on"' },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
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
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="checkbox-default" />
      <Label htmlFor="checkbox-default">Accept terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic checkbox with a label.",
      },
    },
  },
}

export const Checked: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="checkbox-checked" defaultChecked />
      <Label htmlFor="checkbox-checked">I agree to the terms</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A checkbox that is checked by default (uncontrolled).",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          {...args}
          id="checkbox-controlled"
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(value === true)
            args.onCheckedChange?.(value)
          }}
        />
        <Label htmlFor="checkbox-controlled">
          {checked ? "Checked" : "Unchecked"}
        </Label>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled checkbox using React state. The checked state is managed externally.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="checkbox-disabled" disabled />
        <Label htmlFor="checkbox-disabled" className="text-muted-foreground">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          {...args}
          id="checkbox-disabled-checked"
          disabled
          defaultChecked
        />
        <Label
          htmlFor="checkbox-disabled-checked"
          className="text-muted-foreground"
        >
          Disabled checked
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled checkboxes in both unchecked and checked states.",
      },
    },
  },
}

export const Indeterminate: Story = {
  render: (args) => {
    const [checked, setChecked] = useState<boolean | "indeterminate">(
      "indeterminate"
    )
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          {...args}
          id="checkbox-indeterminate"
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(value === true ? true : value === false ? false : "indeterminate")
            args.onCheckedChange?.(value)
          }}
        />
        <Label htmlFor="checkbox-indeterminate">
          {checked === "indeterminate"
            ? "Indeterminate"
            : checked
              ? "Checked"
              : "Unchecked"}
        </Label>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A checkbox in the indeterminate state, typically used to represent a partial selection in a group of checkboxes.",
      },
    },
  },
}

export const WithForm: Story = {
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data: Record<string, string> = {}
        formData.forEach((value, key) => {
          data[key] = value.toString()
        })
        console.log("Form data:", data)
      }}
      className="space-y-4"
    >
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="terms" name="terms" required />
        <Label htmlFor="terms">I accept the terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="newsletter" name="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <button type="submit" className="text-sm text-muted-foreground">
        Submit (check console)
      </button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes used within a form with name attributes for form submission.",
      },
    },
  },
}

export const MultipleOptions: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>([])
    const options = [
      { id: "option1", label: "Option 1" },
      { id: "option2", label: "Option 2" },
      { id: "option3", label: "Option 3" },
    ]

    const handleChange = (id: string, checked: boolean | "indeterminate") => {
      if (checked === true) {
        setSelected([...selected, id])
      } else {
        setSelected(selected.filter((item) => item !== id))
      }
      args.onCheckedChange?.(checked)
    }

    return (
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              {...args}
              id={option.id}
              checked={selected.includes(option.id)}
              onCheckedChange={(checked) => handleChange(option.id, checked)}
            />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
        <p className="text-sm text-muted-foreground mt-2">
          Selected: {selected.length > 0 ? selected.join(", ") : "None"}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple checkboxes used together to allow selecting multiple options.",
      },
    },
  },
}
