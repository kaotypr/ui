import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuPositioner,
} from "~/components/ui/navigation-menu"

const meta = {
	title: "UI/NavigationMenu/NavigationMenuPositioner",
	component: NavigationMenuPositioner,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Positions the navigation menu against the currently active trigger.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

Note: This component is automatically included in \`NavigationMenu\` with default positioning props. It is exported for advanced use cases where you might want to create a custom NavigationMenu implementation.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		side: {
			description:
				"Which side of the anchor element to align the popup against. May automatically change to avoid collisions.",
			table: {
				type: {
					summary: '"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"',
				},
				defaultValue: { summary: '"bottom"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["top", "bottom", "left", "right", "inline-start", "inline-end"],
		},
		sideOffset: {
			description:
				"Distance between the anchor and the popup in pixels. Also accepts a function that returns the distance.",
			table: {
				type: { summary: "number | OffsetFunction" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		align: {
			description: "How to align the popup relative to the specified side.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"start"' },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: ["start", "center", "end"],
		},
		alignOffset: {
			description:
				"Additional offset along the alignment axis in pixels. Also accepts a function that returns the offset.",
			table: {
				type: { summary: "number | OffsetFunction" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
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
			description: "Determines which CSS `position` property to use.",
			table: {
				type: { summary: '"fixed" | "absolute"' },
				defaultValue: { summary: '"absolute"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["fixed", "absolute"],
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
		},
		// Styling
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: { summary: "string | (state) => string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"CSS properties applied to the element, or a function that returns styles based on the component's state.",
			table: {
				type: { summary: "CSSProperties | (state) => CSSProperties" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof NavigationMenuPositioner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story:
					"NavigationMenuPositioner is automatically included in NavigationMenu with default positioning (side: 'bottom', sideOffset: 8, align: 'start'). This example shows the default behavior.",
			},
		},
	},
}

export const CustomSide: Story = {
	args: {
		side: "right",
		sideOffset: 12,
	},
	render: () => {
		// Note: This is a demonstration of how NavigationMenuPositioner props work.
		// In practice, you would need to modify NavigationMenu component to customize these props.
		return (
			<div className="text-sm text-muted-foreground p-4 border rounded-lg">
				<p className="mb-2">
					<strong>Note:</strong> NavigationMenuPositioner props (side, sideOffset, align, etc.) are
					set in the NavigationMenu component definition.
				</p>
				<p>
					To customize positioning, you would need to modify the NavigationMenu component or create
					a custom implementation. The default values are: side="bottom", sideOffset=8,
					align="start", alignOffset=0.
				</p>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Documentation showing available NavigationMenuPositioner props. To customize, modify the NavigationMenu component.",
			},
		},
	},
}

export const CustomAlign: Story = {
	args: {
		align: "end",
		alignOffset: 10,
	},
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Example showing NavigationMenu with default positioning. To customize alignment, modify the NavigationMenu component.",
			},
		},
	},
}
