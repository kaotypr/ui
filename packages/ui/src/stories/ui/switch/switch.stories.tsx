import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Switch } from "~/components/ui/switch"
import { Label } from "~/components/ui/label"

const meta = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toggle switch component for enabling or disabling a single option.\n\nThis component is built on top of [Radix UI Switch](https://www.radix-ui.com/primitives/docs/components/switch).",
      },
    },
  },
  argTypes: {
    checked: {
      description:
        "The controlled checked state of the switch. When provided, the component becomes controlled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    defaultChecked: {
      description:
        "The default checked state when uncontrolled. Sets the initial state of the switch.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    onCheckedChange: {
      description:
        "Event handler called when the checked state changes. Receives the new checked state (boolean).",
      table: {
        type: { summary: "(checked: boolean) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onCheckedChange",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the switch.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    required: {
      description:
        "When true, indicates that the user must toggle the switch before the owning form can be submitted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    name: {
      description:
        "The name of the switch. Submitted with its owning form as part of a name/value pair.",
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
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="switch-default" />
      <Label htmlFor="switch-default">Enable notifications</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic switch with a label.",
      },
    },
  },
}

export const Checked: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="switch-checked" defaultChecked />
      <Label htmlFor="switch-checked">Notifications enabled</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A switch that is checked by default (uncontrolled).",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-center space-x-2">
        <Switch
          {...args}
          id="switch-controlled"
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(value)
            args.onCheckedChange?.(value)
          }}
        />
        <Label htmlFor="switch-controlled">
          {checked ? "Enabled" : "Disabled"}
        </Label>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled switch using React state. The checked state is managed externally.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Switch {...args} id="switch-disabled" disabled />
        <Label htmlFor="switch-disabled" className="text-muted-foreground">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          {...args}
          id="switch-disabled-checked"
          disabled
          defaultChecked
        />
        <Label
          htmlFor="switch-disabled-checked"
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
        story: "Disabled switches in both unchecked and checked states.",
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
        <Switch {...args} id="notifications" name="notifications" />
        <Label htmlFor="notifications">Enable email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch {...args} id="marketing" name="marketing" />
        <Label htmlFor="marketing">Receive marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch {...args} id="updates" name="updates" required />
        <Label htmlFor="updates">System updates (required)</Label>
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
          "Switches used within a form with name attributes for form submission.",
      },
    },
  },
}

export const MultipleSwitches: Story = {
  render: (args) => {
    const [settings, setSettings] = useState({
      notifications: false,
      darkMode: true,
      autoSave: false,
    })

    const handleChange = (key: keyof typeof settings, checked: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: checked }))
      args.onCheckedChange?.(checked)
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="notifications-settings">Push Notifications</Label>
          <Switch
            {...args}
            id="notifications-settings"
            checked={settings.notifications}
            onCheckedChange={(checked) => handleChange("notifications", checked)}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="dark-mode-settings">Dark Mode</Label>
          <Switch
            {...args}
            id="dark-mode-settings"
            checked={settings.darkMode}
            onCheckedChange={(checked) => handleChange("darkMode", checked)}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="auto-save-settings">Auto Save</Label>
          <Switch
            {...args}
            id="auto-save-settings"
            checked={settings.autoSave}
            onCheckedChange={(checked) => handleChange("autoSave", checked)}
          />
        </div>
        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-sm font-medium mb-2">Current Settings:</p>
          <pre className="text-xs text-muted-foreground">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple switches used together to manage different settings, with state displayed below.",
      },
    },
  },
}

export const SettingsPanel: Story = {
  render: (args) => {
    const [settings, setSettings] = useState({
      wifi: true,
      bluetooth: false,
      location: true,
      airplane: false,
    })

    const handleChange = (key: keyof typeof settings, checked: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: checked }))
      args.onCheckedChange?.(checked)
    }

    return (
      <div className="w-80 space-y-3 p-4 border rounded-lg">
        <h3 className="text-sm font-semibold mb-4">Device Settings</h3>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="wifi">Wi-Fi</Label>
            <p className="text-xs text-muted-foreground">
              Connect to wireless networks
            </p>
          </div>
          <Switch
            {...args}
            id="wifi"
            checked={settings.wifi}
            onCheckedChange={(checked) => handleChange("wifi", checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="bluetooth">Bluetooth</Label>
            <p className="text-xs text-muted-foreground">
              Connect to Bluetooth devices
            </p>
          </div>
          <Switch
            {...args}
            id="bluetooth"
            checked={settings.bluetooth}
            onCheckedChange={(checked) => handleChange("bluetooth", checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="location">Location Services</Label>
            <p className="text-xs text-muted-foreground">
              Allow apps to use your location
            </p>
          </div>
          <Switch
            {...args}
            id="location"
            checked={settings.location}
            onCheckedChange={(checked) => handleChange("location", checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="airplane">Airplane Mode</Label>
            <p className="text-xs text-muted-foreground">
              Disable all wireless connections
            </p>
          </div>
          <Switch
            {...args}
            id="airplane"
            checked={settings.airplane}
            onCheckedChange={(checked) => handleChange("airplane", checked)}
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A settings panel example showing switches with labels and descriptions, similar to mobile device settings.",
      },
    },
  },
}

export const WithCustomValue: Story = {
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
        <Switch {...args} id="switch-custom" name="feature" value="enabled" />
        <Label htmlFor="switch-custom">Enable feature (value: "enabled")</Label>
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
          "A switch with a custom value attribute. When checked and submitted, it will send the custom value instead of the default 'on'.",
      },
    },
  },
}
