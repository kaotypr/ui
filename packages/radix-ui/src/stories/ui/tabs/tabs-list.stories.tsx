import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"

const meta = {
  title: "UI/Tabs/TabsList",
  component: TabsList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Container for the tab triggers. Must be used within a Tabs component.\n\nThis component is built on top of [Radix UI Tabs List](https://www.radix-ui.com/primitives/docs/components/tabs).",
      },
    },
  },
  argTypes: {
    loop: {
      description:
        "When true, keyboard navigation will loop from the last tab to the first and vice versa.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
} satisfies Meta<typeof TabsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList {...args}>
        <TabsTrigger value="account">Account</TabsTrigger>
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
  parameters: {
    docs: {
      description: {
        story: "A basic TabsList containing three tab triggers.",
      },
    },
  },
}

export const WithoutLoop: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList {...args} loop={false}>
        <TabsTrigger value="account">Account</TabsTrigger>
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
  parameters: {
    docs: {
      description: {
        story:
          "A TabsList with loop disabled. Keyboard navigation will stop at the first and last tabs instead of wrapping.",
      },
    },
  },
}

export const GridLayout: Story = {
  render: (args) => (
    <Tabs defaultValue="general" className="w-[500px]">
      <TabsList {...args} className="grid w-full grid-cols-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div className="p-4 border rounded-md">General content</div>
      </TabsContent>
      <TabsContent value="security">
        <div className="p-4 border rounded-md">Security content</div>
      </TabsContent>
      <TabsContent value="integrations">
        <div className="p-4 border rounded-md">Integrations content</div>
      </TabsContent>
      <TabsContent value="support">
        <div className="p-4 border rounded-md">Support content</div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A TabsList using a grid layout to evenly distribute tabs across the available width.",
      },
    },
  },
}

export const VerticalLayout: Story = {
  render: (args) => (
    <Tabs defaultValue="account" orientation="vertical" className="w-[500px]">
      <div className="flex gap-4">
        <TabsList {...args} className="flex-col h-fit">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="account">
            <div className="p-4 border rounded-md">Account content</div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4 border rounded-md">Password content</div>
          </TabsContent>
          <TabsContent value="team">
            <div className="p-4 border rounded-md">Team content</div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A vertical TabsList with triggers stacked vertically. Used with vertical tabs orientation.",
      },
    },
  },
}
