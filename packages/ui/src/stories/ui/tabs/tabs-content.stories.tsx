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
				component: `A panel displayed when the corresponding tab is active. Must be used within a Tabs component.

This component is built on top of [Base UI Tabs Panel](https://base-ui.com/react/components/tabs).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		value: {
			description:
				"The value of the TabPanel. It will be shown when the Tab with the corresponding value is active.",
			table: {
				type: { summary: "Tabs.Tab.Value" },
				defaultValue: { summary: "-" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		keepMounted: {
			description:
				"Whether to keep the HTML element in the DOM while the panel is hidden.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply.",
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
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent {...args} value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Default tab content panel displayed when the corresponding tab is active.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Default tab content panel displayed when the corresponding tab is active.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Default tab content panel displayed when the corresponding tab is active.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default tab content panel that is displayed when its corresponding tab is active.",
			},
		},
	},
}

export const KeepMounted: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview" keepMounted>
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This panel remains mounted in the DOM even when hidden. Useful for preserving state or animations.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account" keepMounted>
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This panel remains mounted in the DOM even when hidden. Useful for preserving state or animations.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings" keepMounted>
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This panel remains mounted in the DOM even when hidden. Useful for preserving state or animations.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tab content with keepMounted enabled. The panel remains in the DOM even when hidden, which is useful for preserving component state or animations.",
			},
		},
	},
}

export const WithRichContent: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[500px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-2">Overview</h3>
					<p className="text-sm text-muted-foreground mb-4">
						This is a tab content panel with rich content including headings, paragraphs, and lists.
					</p>
					<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
						<li>Feature one</li>
						<li>Feature two</li>
						<li>Feature three</li>
					</ul>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-2">Account</h3>
					<p className="text-sm text-muted-foreground mb-4">
						This is a tab content panel with rich content including headings, paragraphs, and lists.
					</p>
					<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
						<li>Profile settings</li>
						<li>Security options</li>
						<li>Privacy controls</li>
					</ul>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-6">
					<h3 className="text-lg font-semibold mb-2">Settings</h3>
					<p className="text-sm text-muted-foreground mb-4">
						This is a tab content panel with rich content including headings, paragraphs, and lists.
					</p>
					<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
						<li>General preferences</li>
						<li>Notification settings</li>
						<li>Appearance options</li>
					</ul>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tab content panel with rich content including headings, paragraphs, and lists.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview" className="mt-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
				<h3 className="text-sm font-semibold text-blue-900">Overview</h3>
				<p className="mt-2 text-sm text-blue-700">
					Tab content with custom styling applied via className.
				</p>
			</TabsContent>
			<TabsContent value="account" className="mt-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
				<h3 className="text-sm font-semibold text-blue-900">Account</h3>
				<p className="mt-2 text-sm text-blue-700">
					Tab content with custom styling applied via className.
				</p>
			</TabsContent>
			<TabsContent value="settings" className="mt-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
				<h3 className="text-sm font-semibold text-blue-900">Settings</h3>
				<p className="mt-2 text-sm text-blue-700">
					Tab content with custom styling applied via className.
				</p>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story: "Tab content with custom styling applied via className prop.",
			},
		},
	},
}
