import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"
import { InfoIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A popup that appears when an element is hovered or focused, showing a hint for sighted users.

This component is built on top of [Base UI Tooltip](https://base-ui.com/react/components/tooltip).

### Component Parts
- [TooltipProvider](?path=/story/ui-tooltip-tooltipprovider--default): Provides a shared delay for multiple tooltips. The grouping logic ensures that once a tooltip becomes visible, the adjacent tooltips will be shown instantly.
- [TooltipTrigger](?path=/story/ui-tooltip-tooltiptrigger--default): An element to attach the tooltip to. Renders a \`button\` element.
- [TooltipContent](?path=/story/ui-tooltip-tooltipcontent--default): A container for the tooltip contents. Renders a \`div\` element.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultOpen: {
			description:
				"Whether the tooltip is initially open. To render a controlled tooltip, use the `open` prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the tooltip is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description: "Event handler called when the tooltip is opened or closed.",
			table: {
				type: {
					summary: "(open: boolean, eventDetails: Tooltip.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		actionsRef: {
			description:
				"A ref to imperative actions. * `unmount`: Unmounts the tooltip popup. * `close`: Closes the tooltip imperatively when called.",
			table: {
				type: { summary: "RefObject<Tooltip.Root.Actions>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		defaultTriggerId: {
			description:
				"ID of the trigger that the tooltip is associated with. This is useful in conjunction with the `defaultOpen` prop to create an initially open tooltip.",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		handle: {
			description:
				"A handle to associate the tooltip with a trigger. If specified, allows external triggers to control the tooltip's open state. Can be created with the Tooltip.createHandle() method.",
			table: {
				type: { summary: "Tooltip.Handle<Payload>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the tooltip is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
		},
		triggerId: {
			description:
				"ID of the trigger that the tooltip is associated with. This is useful in conjunction with the `open` prop to create a controlled tooltip. There's no need to specify this prop when the tooltip is uncontrolled (i.e. when the `open` prop is not set).",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		trackCursorAxis: {
			description: "Determines which axis the tooltip should track the cursor on.",
			table: {
				type: { summary: '"none" | "both" | "x" | "y"' },
				defaultValue: { summary: '"none"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["none", "both", "x", "y"],
		},
		disabled: {
			description: "Whether the tooltip is disabled.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		disableHoverablePopup: {
			description: "Whether the tooltip contents can be hovered without closing the tooltip.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Tooltip {...args}>
			<TooltipTrigger>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This is a tooltip</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default tooltip that appears on hover. The tooltip is triggered by hovering over the button.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState(false)

		return (
			<div className="flex flex-col items-center gap-4">
				<Tooltip
					{...args}
					open={open}
					onOpenChange={(isOpen) => {
						setOpen(isOpen)
						args.onOpenChange?.(isOpen, {} as any)
					}}
				>
					<TooltipTrigger>
						<Button variant="outline">
							<InfoIcon />
							Controlled tooltip
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>This tooltip is controlled by state</p>
					</TooltipContent>
				</Tooltip>
				<Button onClick={() => setOpen(!open)} variant="secondary">
					{open ? "Close" : "Open"} tooltip
				</Button>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled tooltip using the `open` and `onOpenChange` props. The tooltip's visibility can be controlled programmatically.",
			},
		},
	},
}

export const WithDelay: Story = {
	render: (args) => (
		<Tooltip {...args}>
			<TooltipTrigger delay={1000}>
				<Button variant="outline">
					<InfoIcon />
					Hover me (1s delay)
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This tooltip has a 1 second delay</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tooltip with a custom delay before appearing. The delay is set on the trigger component.",
			},
		},
	},
}

export const MultipleTriggers: Story = {
	render: (args) => (
		<div className="flex gap-4">
			<Tooltip {...args}>
				<TooltipTrigger>
					<Button variant="outline">
						<InfoIcon />
						Trigger 1
					</Button>
				</TooltipTrigger>
				<TooltipTrigger>
					<Button variant="outline">
						<InfoIcon />
						Trigger 2
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>This tooltip can be opened by multiple triggers</p>
				</TooltipContent>
			</Tooltip>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"A single tooltip can be opened by multiple trigger elements. Hover over either button to see the same tooltip.",
			},
		},
	},
}

export const Disabled: Story = {
	render: (args) => (
		<Tooltip {...args} disabled>
			<TooltipTrigger>
				<Button variant="outline" disabled>
					<InfoIcon />
					Disabled tooltip
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This tooltip is disabled</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tooltip with the `disabled` prop set to true. The tooltip will not appear when hovering over the trigger.",
			},
		},
	},
}
