import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"
import { FileTextIcon, GearIcon, UserIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A component for toggling between related panels on the same page.

This component is built on top of [Base UI Tabs](https://base-ui.com/react/components/tabs).

### Component Parts
- [TabsList](?path=/story/ui-tabs-tabslist--default): Groups the individual tab buttons.
- [TabsTrigger](?path=/story/ui-tabs-tabstrigger--default): An individual interactive tab button that toggles the corresponding panel.
- [TabsContent](?path=/story/ui-tabs-tabscontent--default): A panel displayed when the corresponding tab is active.`,
			},
		},
	},
	argTypes: {
		// Props
		orientation: {
			description:
				"The component orientation (layout flow direction).",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		// Base UI Props
		defaultValue: {
			description:
				"The default value. Use when the component is not controlled. When the value is null, no Tab will be active.",
			table: {
				type: { summary: "Tabs.Tab.Value" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description:
				"The value of the currently active Tab. Use when the component is controlled. When the value is null, no Tab will be active.",
			table: {
				type: { summary: "Tabs.Tab.Value" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		onValueChange: {
			description:
				"Callback invoked when new value is being set.",
			table: {
				type: {
					summary:
						"(value: Tabs.Tab.Value, eventDetails: Tabs.Root.ChangeEventDetails<'none', { activationDirection: Tabs.Tab.ActivationDirection }>) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
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
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Tabs {...args} className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This is the overview tab content.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This is the account tab content.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This is the settings tab content.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default tabs component with three tabs: Overview, Account, and Settings.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState<string>("overview")
		return (
			<Tabs
				{...args}
				value={value}
				onValueChange={(v) => {
					setValue(v as string)
					args.onValueChange?.(v, {} as any)
				}}
				className="w-[400px]"
			>
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="settings">Settings</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					<div className="mt-4 rounded-lg border p-4">
						<h3 className="text-sm font-semibold">Overview</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Controlled tab: Current value is "{value}".
						</p>
					</div>
				</TabsContent>
				<TabsContent value="account">
					<div className="mt-4 rounded-lg border p-4">
						<h3 className="text-sm font-semibold">Account</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Controlled tab: Current value is "{value}".
						</p>
					</div>
				</TabsContent>
				<TabsContent value="settings">
					<div className="mt-4 rounded-lg border p-4">
						<h3 className="text-sm font-semibold">Settings</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Controlled tab: Current value is "{value}".
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
					"Controlled tabs using React state. The value is managed by the component state.",
			},
		},
	},
}

export const WithIcons: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">
					<FileTextIcon />
					Overview
				</TabsTrigger>
				<TabsTrigger value="account">
					<UserIcon />
					Account
				</TabsTrigger>
				<TabsTrigger value="settings">
					<GearIcon />
					Settings
				</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab with icon and text.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab with icon and text.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab with icon and text.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story: "Tabs with icons displayed alongside the text labels.",
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
						Line variant tabs with underline indicator.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Line variant tabs with underline indicator.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Line variant tabs with underline indicator.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Line variant tabs with a transparent background and underline indicator.",
			},
		},
	},
}

export const Vertical: Story = {
	render: () => (
		<Tabs defaultValue="overview" orientation="vertical" className="flex w-[500px] gap-4">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<div className="flex-1">
				<TabsContent value="overview">
					<div className="rounded-lg border p-4">
						<h3 className="text-sm font-semibold">Overview</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Vertical tabs layout with tabs on the left side.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="account">
					<div className="rounded-lg border p-4">
						<h3 className="text-sm font-semibold">Account</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Vertical tabs layout with tabs on the left side.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="settings">
					<div className="rounded-lg border p-4">
						<h3 className="text-sm font-semibold">Settings</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Vertical tabs layout with tabs on the left side.
						</p>
					</div>
				</TabsContent>
			</div>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Vertical orientation tabs with tabs displayed on the left side.",
			},
		},
	},
}

export const DisabledTab: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="account" disabled>
					Account
				</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						The Account tab is disabled and cannot be selected.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This tab is disabled.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						The Account tab is disabled and cannot be selected.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tabs with one disabled tab that cannot be selected or activated.",
			},
		},
	},
}
