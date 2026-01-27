import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { CaretDownIcon } from "@phosphor-icons/react"

import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "~/components/ui/collapsible"

const meta = {
	title: "UI/Collapsible",
	component: Collapsible,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"A collapsible panel controlled by a button that can expand and collapse to show or hide content.\n\nThis component is built on top of [Base UI Collapsible](https://base-ui.com/react/components/collapsible).\n\n### Component Parts\n- [CollapsibleTrigger](?path=/story/ui-collapsible-collapsibletrigger--default): The button that toggles the visibility of the collapsible content.\n- [CollapsibleContent](?path=/story/ui-collapsible-collapsiblecontent--default): The content area that is shown or hidden when the collapsible is toggled.",
			},
		},
	},
	argTypes: {
		defaultOpen: {
			description:
				"Whether the collapsible panel is initially open. To render a controlled collapsible, use the `open` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description:
				"Whether the collapsible panel is currently open. To render an uncontrolled collapsible, use the `defaultOpen` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description:
				"Event handler called when the panel is opened or closed.",
			table: {
				type: {
					summary:
						"(open: boolean, eventDetails: Collapsible.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		disabled: {
			description:
				"Whether the component should ignore user interaction.",
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
	},
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible {...args}>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
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
					"Default collapsible with a trigger button and collapsible content.",
			},
		},
	},
}

export const Uncontrolled: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible {...args} defaultOpen={true}>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
					<span>What is the license?</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
					<div className="px-4 py-2 text-sm text-muted-foreground">
						This project is licensed under the MIT License. You can use it
						freely in your projects.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	args: {
		defaultOpen: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Uncontrolled collapsible that starts open using the `defaultOpen` prop.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false)
		return (
			<div className="w-[350px]">
				<Collapsible
					{...args}
					open={open}
					onOpenChange={(isOpen) => {
						setOpen(isOpen)
						args.onOpenChange?.(isOpen, {} as any)
					}}
				>
					<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent">
						<span>How do I get started?</span>
						<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
					</CollapsibleTrigger>
					<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
						<div className="px-4 py-2 text-sm text-muted-foreground">
							Install the package and import the components you need. Check
							the documentation for detailed examples.
						</div>
					</CollapsibleContent>
				</Collapsible>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled collapsible using the `open` and `onOpenChange` props with React state.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<div className="w-[350px]">
			<Collapsible {...args} disabled={true}>
				<CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-left font-medium transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed">
					<span>Disabled Collapsible</span>
					<CaretDownIcon className="h-4 w-4 transition-transform duration-200 data-[panel-open]:rotate-180" />
				</CollapsibleTrigger>
				<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
					<div className="px-4 py-2 text-sm text-muted-foreground">
						This content cannot be toggled because the collapsible is disabled.
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
	args: {
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Collapsible with the `disabled` prop set to true, preventing user interaction.",
			},
		},
	},
}
