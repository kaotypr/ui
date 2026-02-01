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
				component: `Groups the individual tab buttons. Must be used within a Tabs component.

This component is built on top of [Base UI Tabs List](https://base-ui.com/react/components/tabs).`,
			},
		},
	},
	argTypes: {
		// Props
		variant: {
			description: "The visual variant of the tabs list.",
			table: {
				type: { summary: '"default" | "line"' },
				defaultValue: { summary: '"default"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "line"],
		},
		// Base UI Props
		activateOnFocus: {
			description:
				"Whether to automatically change the active tab on arrow key focus. Otherwise, tabs will be activated using Enter or Space key press.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		loopFocus: {
			description:
				"Whether to loop keyboard focus back to the first item when the end of the list is reached while using the arrow keys.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
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
} satisfies Meta<typeof TabsList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList {...args}>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Default variant tabs list with rounded background.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Default variant tabs list with rounded background.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Default variant tabs list with rounded background.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story: "Default variant tabs list with rounded background and padding.",
			},
		},
	},
}

export const LineVariant: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList variant="line">
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Line variant tabs list with transparent background and underline indicator.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Line variant tabs list with transparent background and underline indicator.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Line variant tabs list with transparent background and underline indicator.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Line variant tabs list with transparent background and underline indicator for active tab.",
			},
		},
	},
}

export const ActivateOnFocus: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList activateOnFocus>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tabs activate automatically when focused with arrow keys.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tabs activate automatically when focused with arrow keys.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tabs activate automatically when focused with arrow keys.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tabs list with activateOnFocus enabled. Tabs will activate automatically when focused with arrow keys, rather than requiring Enter or Space.",
			},
		},
	},
}

export const NoLoopFocus: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList loopFocus={false}>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Focus does not loop back to the first tab when reaching the end.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Focus does not loop back to the first tab when reaching the end.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Focus does not loop back to the first tab when reaching the end.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tabs list with loopFocus disabled. Keyboard focus will stop at the last tab instead of looping back to the first.",
			},
		},
	},
}
