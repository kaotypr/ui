import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"
import { InfoIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Tooltip/TooltipContent",
	component: TooltipContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the tooltip contents. Renders a \`div\` element.

Must be used within a Tooltip component.`,
			},
		},
	},
	argTypes: {
		// Props
		side: {
			description:
				"Which side of the anchor element to align the popup against. May automatically change to avoid collisions.",
			table: {
				type: { summary: '"top" | "bottom" | "left" | "right"' },
				defaultValue: { summary: '"top"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["top", "bottom", "left", "right"],
		},
		sideOffset: {
			description:
				"Distance between the anchor and the popup in pixels. Also accepts a function that returns the distance.",
			table: {
				type: { summary: "number | OffsetFunction" },
				defaultValue: { summary: "4" },
				category: "Props",
			},
			control: { type: "number" },
		},
		align: {
			description:
				"How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"center"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description:
				"Additional offset along the alignment axis in pixels. Also accepts a function that returns the offset.",
			table: {
				type: { summary: "number | OffsetFunction" },
				defaultValue: { summary: "0" },
				category: "Props",
			},
			control: { type: "number" },
		},
		// Base UI Props (Positioner)
		disableAnchorTracking: {
			description:
				"Whether to disable the popup from tracking any layout shift of its positioning anchor.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		arrowPadding: {
			description:
				"Minimum distance to maintain between the arrow and the edges of the popup. Use it to prevent the arrow element from hanging out of the rounded corners of a popup.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "5" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		anchor: {
			description:
				"An element to position the popup against. By default, the popup will be positioned against the trigger.",
			table: {
				type: {
					summary:
						"Element | RefObject<Element> | VirtualElement | (() => Element | VirtualElement | null) | null",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		collisionAvoidance: {
			description:
				"Determines how to handle collisions when positioning the popup.",
			table: {
				type: { summary: "CollisionAvoidance" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
		},
		collisionBoundary: {
			description:
				"An element or a rectangle that delimits the area that the popup is confined to.",
			table: {
				type: { summary: "Boundary" },
				defaultValue: { summary: "'clipping-ancestors'" },
				category: "Base UI Props",
			},
		},
		collisionPadding: {
			description:
				"Additional space to maintain from the edge of the collision boundary.",
			table: {
				type: { summary: "Padding" },
				defaultValue: { summary: "5" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		sticky: {
			description:
				"Whether to maintain the popup in the viewport after the anchor element was scrolled out of view.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		positionMethod: {
			description:
				"Determines which CSS `position` property to use.",
			table: {
				type: { summary: '"fixed" | "absolute"' },
				defaultValue: { summary: "'absolute'" },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["fixed", "absolute"],
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply.",
			table: {
				type: {
					summary:
						"string | ((state: Tooltip.Popup.State) => string | undefined)",
				},
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
						"CSSProperties | ((state: Tooltip.Popup.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
		},
	},
} satisfies Meta<typeof TooltipContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args}>
				<p>This is a tooltip</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default tooltip content positioned at the top center of the trigger.",
			},
		},
	},
}

export const Top: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args} side="top">
				<p>Tooltip on top</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip content positioned on top of the trigger.",
			},
		},
	},
}

export const Bottom: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args} side="bottom">
				<p>Tooltip on bottom</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip content positioned below the trigger.",
			},
		},
	},
}

export const Left: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args} side="left">
				<p>Tooltip on left</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip content positioned to the left of the trigger.",
			},
		},
	},
}

export const Right: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args} side="right">
				<p>Tooltip on right</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip content positioned to the right of the trigger.",
			},
		},
	},
}

export const WithCustomOffset: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args} sideOffset={12} alignOffset={8}>
				<p>Tooltip with custom offsets</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tooltip content with custom sideOffset (12px) and alignOffset (8px).",
			},
		},
	},
}

export const WithAlignment: Story = {
	render: (args) => (
		<div className="flex flex-col gap-8">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">
						<InfoIcon />
						Start aligned
					</Button>
				</TooltipTrigger>
				<TooltipContent {...args} align="start">
					<p>Aligned to start</p>
				</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">
						<InfoIcon />
						Center aligned
					</Button>
				</TooltipTrigger>
				<TooltipContent {...args} align="center">
					<p>Aligned to center</p>
				</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">
						<InfoIcon />
						End aligned
					</Button>
				</TooltipTrigger>
				<TooltipContent {...args} align="end">
					<p>Aligned to end</p>
				</TooltipContent>
			</Tooltip>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tooltip content with different alignment options: start, center, and end.",
			},
		},
	},
}

export const LongContent: Story = {
	render: (args) => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">
					<InfoIcon />
					Hover me
				</Button>
			</TooltipTrigger>
			<TooltipContent {...args} className="max-w-xs">
				<p>
					This is a longer tooltip message that demonstrates how the
					tooltip handles content that spans multiple lines. The
					tooltip will automatically wrap the text and adjust its size
					accordingly.
				</p>
			</TooltipContent>
		</Tooltip>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Tooltip content with longer text that wraps to multiple lines. The max-width is constrained to demonstrate text wrapping.",
			},
		},
	},
}
