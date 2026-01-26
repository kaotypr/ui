import type { Meta, StoryObj } from "@storybook/react-vite"
import { LockIcon, UserIcon, UsersIcon } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.\n\nThis component is built on top of [Radix UI Tabs](https://www.radix-ui.com/primitives/docs/components/tabs).\n\n### Component Parts\n- [TabsList](?path=/story/ui-tabs-tabslist--default): Container for the tab triggers.\n- [TabsTrigger](?path=/story/ui-tabs-tabstrigger--default): The button that activates its associated content panel.\n- [TabsContent](?path=/story/ui-tabs-tabscontent--default): The content panel that is displayed when its associated trigger is active.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      description:
        "The value of the tab that should be active initially (uncontrolled).",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    value: {
      description:
        "The controlled value of the active tab. Use with onValueChange.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    onValueChange: {
      description: "Event handler called when the active tab changes.",
      table: {
        type: { summary: "(value: string) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    orientation: {
      description:
        "The orientation of the tabs. Affects keyboard navigation and layout.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    dir: {
      description:
        "The reading direction. If omitted, inherits globally from DirectionProvider or assumes LTR.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
    activationMode: {
      description:
        "When set to 'automatic', focusing a tab via keyboard automatically activates it. When set to 'manual', activation requires explicit selection via click or Enter/Space.",
      table: {
        type: { summary: '"automatic" | "manual"' },
        defaultValue: { summary: '"automatic"' },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["automatic", "manual"],
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
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Update your password and security settings.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic tabs component with two tabs showing account and password settings.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("account")
    return (
      <Tabs
        {...args}
        value={value}
        onValueChange={(v) => {
          setValue(v)
          args.onValueChange?.(v)
        }}
        className="w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
            <p className="text-sm text-muted-foreground">
              Current tab: {value}
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
            <p className="text-sm text-muted-foreground">
              Current tab: {value}
            </p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
            <p className="text-sm text-muted-foreground">
              Current tab: {value}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled tabs component using React state. The active tab is managed externally.",
      },
    },
  },
}

export const MultipleTabs: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="overview" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">
            Get a high-level view of your data and metrics.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            Detailed analytics and insights about your performance.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and view custom reports.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Manage your notification preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "A tabs component with multiple tabs demonstrating a dashboard interface.",
      },
    },
  },
}

export const Vertical: Story = {
  render: (args) => (
    <Tabs
      {...args}
      defaultValue="account"
      orientation="vertical"
      className="w-[500px]"
    >
      <div className="flex gap-4">
        <TabsList className="flex-col h-fit">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="account">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
              <p className="text-sm text-muted-foreground">
                Update your password and security settings.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="team">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Team Settings</h3>
              <p className="text-sm text-muted-foreground">
                Manage your team members and permissions.
              </p>
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical tabs with triggers on the left and content on the right. Useful for settings panels.",
      },
    },
  },
}

export const ManualActivation: Story = {
  render: (args) => (
    <Tabs
      {...args}
      defaultValue="account"
      activationMode="manual"
      className="w-[400px]"
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            In manual activation mode, focusing a tab via keyboard does not automatically activate it. You must click or press Enter/Space to activate.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Update your password and security settings.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with manual activation mode. In this mode, focusing a tab via keyboard does not automatically activate it—you must explicitly select it.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: (args) => {
    return (
      <Tabs {...args} defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">
            <UserIcon />
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            <LockIcon />
            Password
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <UsersIcon />
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
            <p className="text-sm text-muted-foreground">
              Update your password and security settings.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your notification preferences.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs with icons in the triggers for better visual identification.",
      },
    },
  },
}

export const SettingsPanel: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="general" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">General Settings</h3>
          <div className="space-y-2">
            <label className="text-sm font-medium">Display Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your display name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">Security Settings</h3>
          <div className="space-y-2">
            <label className="text-sm font-medium">Current Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter current password"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter new password"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="integrations">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">Integrations</h3>
          <p className="text-sm text-muted-foreground">
            Connect your account with third-party services.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="support">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="text-sm text-muted-foreground">
            Get help and contact support.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A comprehensive settings panel example using tabs with form inputs and content sections.",
      },
    },
  },
}
