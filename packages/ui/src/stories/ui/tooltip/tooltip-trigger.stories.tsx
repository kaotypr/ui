import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"
import { InfoIcon, GearIcon, UserIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Tooltip/TooltipTrigger",
	component: TooltipTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An element to attach the tooltip to. Renders a \`button\` element.

Must be used within a Tooltip component.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		handle: {
			description:
				"A handle to associate the trigger with a tooltip.",
			table: {
				type: { summary: "Tooltip.Handle<Payload>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		payload: {
			description:
				"A payload to pass to the tooltip when it is opened.",
			table: {
				type: { summary: "Payload" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		delay: {
			description:
				"How long to wait before opening the tooltip. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "600" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description:
				"How long to wait before closing the tooltip. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply.",
			table: {
				type: { summary: "string | ((state: Tooltip.Trigger.State) => string | undefined)" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description: "Inline styles to apply.",
			table: {
				type: {
					summary:
						"CSSProperties | ((state: Tooltip.Trigger.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
		},
	},
} satisfies Meta<typeof TooltipTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger {...args}>
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
					"Default tooltip trigger using a Button component with the ` prop.",
			},
		},
	},
}

export const WithCustomDelay: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger {...args} delay={1000}>
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
					"Tooltip trigger with a custom delay of 1000ms before the tooltip appears.",
			},
		},
	},
}

export const WithCloseDelay: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger {...args} closeDelay={300}>
				<Button variant="outline">
					<InfoIcon />
					Hover me (300ms close delay)
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This tooltip waits 300ms before closing</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tooltip trigger with a custom close delay of 300ms. The tooltip will wait before closing when the mouse leaves.",
			},
		},
	},
}

export const MultipleTriggers: Story = {
	render: (args) => (
		<Tooltip>
			<div className="flex gap-4">
				<TooltipTrigger {...args}>
					<Button variant="outline">
						<InfoIcon />
						Trigger 1
					</Button>
				</TooltipTrigger>
				<TooltipTrigger {...args}>
					<Button variant="outline">
						<GearIcon />
						Trigger 2
					</Button>
				</TooltipTrigger>
				<TooltipTrigger {...args}>
					<Button variant="outline">
						<UserIcon />
						Trigger 3
					</Button>
				</TooltipTrigger>
			</div>
			<TooltipContent>
				<p>This tooltip can be opened by multiple triggers</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Multiple TooltipTrigger components within a single Tooltip. Hover over any trigger to see the same tooltip.",
			},
		},
	},
}

export const AsNativeButton: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger {...args}>
				<InfoIcon />
				Native button trigger
			</TooltipTrigger>
			<TooltipContent>
				<p>Tooltip trigger without prop</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"TooltipTrigger used as a native button element without the ` prop.",
			},
		},
	},
}
