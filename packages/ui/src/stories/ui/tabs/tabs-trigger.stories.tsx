import type { Meta, StoryObj } from "@storybook/react-vite"
import { LockIcon, UserIcon, UsersIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"

const meta = {
  title: "UI/Tabs/TabsTrigger",
  component: TabsTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The button that activates its associated content panel when selected. Must be used within a Tabs component.\n\nThis component is built on top of [Radix UI Tabs Trigger](https://www.radix-ui.com/primitives/docs/components/tabs).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The unique identifier that links this trigger to its corresponding content panel. This prop is required.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "When true, prevents the user from interacting with the trigger.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
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
} satisfies Meta<typeof TabsTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger {...args} value="account">
          Account
        </TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">Account content</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md">Password content</div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4 border rounded-md">Team content</div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "account",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic TabsTrigger that activates the account tab.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger {...args} value="password">
          Password (Disabled)
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">Account content</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md">Password content</div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4 border rounded-md">Team content</div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "password",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled TabsTrigger that cannot be activated by the user.",
      },
    },
  },
}

export const WithIcon: Story = {
  render: (args) => {
    return (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger {...args} value="account">
            <UserIcon />
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            <LockIcon />
            Password
          </TabsTrigger>
          <TabsTrigger value="team">
            <UsersIcon />
            Team
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4 border rounded-md">Account content</div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 border rounded-md">Password content</div>
        </TabsContent>
        <TabsContent value="team">
          <div className="p-4 border rounded-md">Team content</div>
        </TabsContent>
      </Tabs>
    )
  },
  args: {
    value: "account",
  },
  parameters: {
    docs: {
      description: {
        story: "A TabsTrigger with an icon for better visual identification.",
      },
    },
  },
}

export const LongText: Story = {
  render: (args) => (
    <Tabs defaultValue="notifications" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger {...args} value="notifications">
          Notifications & Alerts
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">Account content</div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="p-4 border rounded-md">Notifications content</div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4 border rounded-md">Team content</div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "notifications",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A TabsTrigger with longer text content. The trigger will handle text wrapping appropriately.",
      },
    },
  },
}

export const ActiveState: Story = {
  render: (args) => (
    <Tabs defaultValue="password" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger {...args} value="password">
          Password
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">Account content</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md">Password content</div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4 border rounded-md">Team content</div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "password",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A TabsTrigger in its active state. The active trigger is visually distinguished from inactive triggers.",
      },
    },
  },
}
