import type { Meta, StoryObj } from "@storybook/react-vite"
import { CaretDownIcon } from "@phosphor-icons/react"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "~/components/ui/collapsible"

const meta = {
	title: "UI/Collapsible/CollapsibleContent",
	component: CollapsibleContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A panel with the collapsible contents that is shown or hidden when the collapsible is toggled. Must be used within a Collapsible component.\n\nThis component is built on top of [Base UI Collapsible Panel](https://base-ui.com/react/components/collapsible).",
			},
		},
	},
	argTypes: {
		hiddenUntilFound: {
			description:
				'Allows the browser\'s built-in page search to find and expand the panel contents. Overrides the `keepMounted` prop and uses `hidden="until-found"` to hide the element without removing it from the DOM.',
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		keepMounted: {
			description:
				"Whether to keep the element in the DOM while the panel is hidden. This prop is ignored when `hiddenUntilFound` is used.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
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
			description: "The collapsible content to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CollapsibleContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible defaultOpen={true}>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
					<span>FAQ Question</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent
					{...args}
					className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
				>
					<div className="px-4 py-2 text-sm text-muted-foreground">
						This is the default collapsible content. It animates smoothly when opening and closing.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default collapsible content with smooth animation when opening and closing.",
			},
		},
	},
}

export const WithRichContent: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible defaultOpen={true}>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
					<span>Detailed Information</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent
					{...args}
					className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
				>
					<div className="space-y-2 px-4 py-3">
						<p className="text-sm text-foreground">
							This content area can contain rich content including:
						</p>
						<ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
							<li>Multiple paragraphs</li>
							<li>Lists and nested items</li>
							<li>Formatted text and links</li>
							<li>Any other React components</li>
						</ul>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Collapsible content with rich formatting including paragraphs and lists.",
			},
		},
	},
}

export const KeepMounted: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
					<span>Keep Mounted Content</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent
					{...args}
					keepMounted={true}
					className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
				>
					<div className="px-4 py-2 text-sm text-muted-foreground">
						This content remains in the DOM even when hidden, which can be useful for preserving
						component state or improving performance.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	args: {
		keepMounted: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Content with `keepMounted` prop set to true, keeping it in the DOM when hidden.",
			},
		},
	},
}

export const WithCustomPadding: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible defaultOpen={true}>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
					<span>Custom Styled Content</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent
					{...args}
					className="overflow-hidden rounded-b-md border-x border-b bg-muted/50 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
				>
					<div className="px-6 py-4 text-sm text-foreground">
						Content with custom padding and background styling for enhanced visual separation.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Content with custom padding, background, and border styling for enhanced visual presentation.",
			},
		},
	},
}
