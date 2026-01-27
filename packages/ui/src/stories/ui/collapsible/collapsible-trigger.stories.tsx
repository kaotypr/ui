import type { Meta, StoryObj } from "@storybook/react-vite"
import { CaretDownIcon } from "@phosphor-icons/react"

import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "~/components/ui/collapsible"

const meta = {
	title: "UI/Collapsible/CollapsibleTrigger",
	component: CollapsibleTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A button that opens and closes the collapsible panel. Must be used within a Collapsible component.\n\nThis component is built on top of [Base UI Collapsible Trigger](https://base-ui.com/react/components/collapsible).",
			},
		},
	},
	argTypes: {
		nativeButton: {
			description:
				"Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `false` if the rendered element is not a button (e.g. `<div>`).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
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
		style: {
			description: "Inline styles to apply",
			table: {
				type: { summary: "React.CSSProperties" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
		children: {
			description: "The trigger button content.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CollapsibleTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible>
				<CollapsibleTrigger
					{...args}
					className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent"
				>
					<span>Can I use this in my project?</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
					<div className="px-4 py-2 text-sm text-muted-foreground">
						Yes. Free to use for personal and commercial projects. No
						attribution required.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default trigger button with text and an icon that rotates when the panel is open.",
			},
		},
	},
}

export const WithCustomStyling: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible>
				<CollapsibleTrigger
					{...args}
					className="flex w-full items-center justify-between rounded-lg bg-primary px-4 py-3 text-left font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
				>
					<span>Custom Styled Trigger</span>
					<CaretDownIcon className="h-5 w-5 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
					<div className="px-4 py-2 text-sm text-muted-foreground">
						This trigger has custom styling with primary background color and
						enhanced padding.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Trigger with custom styling including primary background color and enhanced spacing.",
			},
		},
	},
}

export const Minimal: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible>
				<CollapsibleTrigger
					{...args}
					className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<CaretDownIcon className="h-3 w-3 transition-transform duration-200 data-[panel-open]:rotate-180" />
					<span>Minimal trigger</span>
				</CollapsibleTrigger>
				<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
					<div className="px-2 py-1 text-sm text-muted-foreground">
						A minimal trigger with reduced padding and subtle styling.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Minimal trigger with reduced padding and subtle styling for compact layouts.",
			},
		},
	},
}
