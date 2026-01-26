import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"

const meta = {
  title: "UI/Tabs/TabsContent",
  component: TabsContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The content panel that is displayed when its associated trigger is active. Must be used within a Tabs component.\n\nThis component is built on top of [Radix UI Tabs Content](https://www.radix-ui.com/primitives/docs/components/tabs).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The unique identifier that links this content panel to its corresponding trigger. This prop is required.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    forceMount: {
      description:
        "When true, the content will be mounted even when inactive. Useful for animations or preserving component state.",
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
} satisfies Meta<typeof TabsContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent {...args} value="account">
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
    </Tabs>
  ),
  args: {
    value: "account",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic TabsContent panel that displays when the account tab is active.",
      },
    },
  },
}

export const WithForm: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent {...args} value="account">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">Account Information</h3>
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
          <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Save Changes
          </button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">Password Settings</h3>
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
    </Tabs>
  ),
  args: {
    value: "account",
  },
  parameters: {
    docs: {
      description: {
        story: "A TabsContent panel containing a form with input fields and a submit button.",
      },
    },
  },
}

export const WithRichContent: Story = {
  render: (args) => (
    <Tabs defaultValue="overview" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
      </TabsList>
      <TabsContent {...args} value="overview">
        <div className="p-6 border rounded-md space-y-4">
          <h3 className="text-lg font-semibold">Project Overview</h3>
          <p className="text-sm text-muted-foreground">
            This is a comprehensive overview of the project with multiple sections
            and rich content.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-medium">Total Users</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-medium">Active Sessions</p>
              <p className="text-2xl font-bold">567</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Feature highlights and key metrics</li>
            <li>Recent activity and updates</li>
            <li>Performance statistics</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="details">
        <div className="p-6 border rounded-md">
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          <p className="text-sm text-muted-foreground">
            Detailed information about the project.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "overview",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A TabsContent panel with rich content including headings, paragraphs, grids, and lists.",
      },
    },
  },
}

export const ForceMount: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">Account content</div>
      </TabsContent>
      <TabsContent {...args} value="password" forceMount>
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            This content is force-mounted and remains in the DOM even when inactive.
            Useful for preserving component state or animations.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "password",
    forceMount: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A TabsContent panel with forceMount enabled. The content remains mounted in the DOM even when the tab is inactive, which is useful for preserving component state or enabling exit animations.",
      },
    },
  },
}

export const ScrollableContent: Story = {
  render: (args) => (
    <Tabs defaultValue="long" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="long">Long Content</TabsTrigger>
        <TabsTrigger value="short">Short Content</TabsTrigger>
      </TabsList>
      <TabsContent {...args} value="long">
        <div className="p-4 border rounded-md max-h-64 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Scrollable Content</h3>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="text-sm text-muted-foreground mb-2">
              This is paragraph {i + 1} of a long content section. The content
              area will scroll when it exceeds the maximum height.
            </p>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="short">
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold mb-2">Short Content</h3>
          <p className="text-sm text-muted-foreground">
            This is a shorter content section.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    value: "long",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A TabsContent panel with scrollable content that exceeds the viewport height.",
      },
    },
  },
}
