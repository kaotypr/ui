import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"
import { FileTextIcon, GearIcon, UserIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Tabs/TabsTrigger",
	component: TabsTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual interactive tab button that toggles the corresponding panel. Must be used within a Tabs component.

This component is built on top of [Base UI Tabs Tab](https://base-ui.com/react/components/tabs).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
		},
		value: {
			description: "The value of the Tab.",
			table: {
				type: { summary: "Tabs.Tab.Value" },
				defaultValue: { summary: "-" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		disabled: {
			description:
				"Whether the Tab is disabled. If a first Tab on a TabsList is disabled, it won't initially be selected. Instead, the next enabled Tab will be selected.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop. Set to false if the rendered element is not a button (e.g. div).",
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
} satisfies Meta<typeof TabsTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		value: "overview",
	},
	render: (args) => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger {...args} value="overview">
					Overview
				</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story: "Default tab trigger button that activates its corresponding panel.",
			},
		},
	},
}

export const WithIcon: Story = {
	args: {
		value: "overview",
	},
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
						Tab trigger with icon displayed alongside the text.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger with icon displayed alongside the text.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger with icon displayed alongside the text.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story: "Tab trigger with an icon displayed alongside the text label.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		value: "overview",
	},
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
					<p className="mt-2 text-sm text-muted-foreground">This tab is disabled.</p>
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
				story: "Disabled tab trigger that cannot be selected or activated.",
			},
		},
	},
}

export const WithLineVariant: Story = {
	args: {
		value: "overview",
	},
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
						Tab trigger in line variant with underline indicator.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger in line variant with underline indicator.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger in line variant with underline indicator.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tab trigger used within a line variant tabs list, showing an underline indicator when active.",
			},
		},
	},
}

export const CustomStyling: Story = {
	args: {
		value: "overview",
	},
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview" className="bg-blue-50 text-blue-900 data-active:bg-blue-100">
					Overview
				</TabsTrigger>
				<TabsTrigger value="account" className="bg-blue-50 text-blue-900 data-active:bg-blue-100">
					Account
				</TabsTrigger>
				<TabsTrigger value="settings" className="bg-blue-50 text-blue-900 data-active:bg-blue-100">
					Settings
				</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger with custom styling applied via className.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger with custom styling applied via className.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Tab trigger with custom styling applied via className.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story: "Tab trigger with custom styling applied via className prop.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger
					value="overview"
					render={<div className="cursor-pointer" />}
					nativeButton={false}
				>
					Overview (div)
				</TabsTrigger>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						This tab trigger is rendered as a div element.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a ReactElement to replace the default button element. Set `nativeButton={false}` when the rendered element is not a button.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger
					value="overview"
					render={(props, state) => (
						<button
							{...props}
							className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
								state.selected
									? "bg-primary text-primary-foreground shadow"
									: "bg-background hover:bg-muted"
							}`}
						>
							{state.selected ? "Selected" : "Overview"}
						</button>
					)}
				/>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Overview</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						The first tab uses render function to access selected state.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="account">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Account</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-lg border p-4">
					<h3 className="text-sm font-semibold">Settings</h3>
					<p className="mt-2 text-sm text-muted-foreground">Default tab trigger button.</p>
				</div>
			</TabsContent>
		</Tabs>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `selected` (boolean), `disabled` (boolean).",
			},
		},
	},
}
