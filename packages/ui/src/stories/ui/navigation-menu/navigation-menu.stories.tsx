import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from "~/components/ui/navigation-menu"

const meta = {
	title: "UI/NavigationMenu",
	component: NavigationMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A collection of links and menus for website navigation.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

### Component Parts
- [NavigationMenuList](?path=/story/ui-navigationmenu-navigationmenulist--default): Contains a list of navigation menu items.
- [NavigationMenuItem](?path=/story/ui-navigationmenu-navigationmenuitem--default): An individual navigation menu item.
- [NavigationMenuTrigger](?path=/story/ui-navigationmenu-navigationmenutrigger--default): Opens the navigation menu popup when hovered or clicked.
- [NavigationMenuContent](?path=/story/ui-navigationmenu-navigationmenucontent--default): A container for the content of the navigation menu item.
- [NavigationMenuLink](?path=/story/ui-navigationmenu-navigationmenulink--default): A link in the navigation menu for navigation.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultValue: {
			description:
				"The uncontrolled value of the item that should be initially selected. To render a controlled navigation menu, use the `value` prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "null" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		value: {
			description:
				"The controlled value of the navigation menu item that should be currently open. When non-nullish, the menu will be open. When nullish, the menu will be closed. To render an uncontrolled navigation menu, use the `defaultValue` prop instead.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "null" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		delay: {
			description:
				"How long to wait before opening the navigation menu. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "50" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description:
				"How long to wait before closing the navigation menu. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "50" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		orientation: {
			description: "The orientation of the navigation menu.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		dir: {
			description:
				"The reading direction. If omitted, inherits globally from DirectionProvider or assumes LTR.",
			table: {
				type: { summary: '"ltr" | "rtl"' },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["ltr", "rtl"],
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
		// Event Handlers
		onValueChange: {
			description: "Callback fired when the value changes.",
			table: {
				type: {
					summary: "(value: any, eventDetails: NavigationMenu.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the navigation menu is closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
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
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu {...args}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
							<NavigationMenuLink href="/docs/releases">Releases</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
							<NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
							<NavigationMenuLink href="/components/dialog">Dialog</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Default navigation menu with multiple items and dropdown menus.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState<string | null>(null)
		return (
			<NavigationMenu
				{...args}
				value={value}
				onValueChange={(v) => {
					setValue(v)
					args.onValueChange?.(v, {} as any)
				}}
			>
				<NavigationMenuList>
					<NavigationMenuItem value="overview">
						<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="grid gap-3 p-4 w-[400px]">
								<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
								<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem value="components">
						<NavigationMenuTrigger>Components</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="grid gap-3 p-4 w-[400px]">
								<NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
								<NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled navigation menu using React state. The value is managed by the component state.",
			},
		},
	},
}

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<NavigationMenu {...args}>
			<NavigationMenuList className="flex-col">
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[300px]">
							<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[300px]">
							<NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
							<NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Navigation menu with vertical orientation.",
			},
		},
	},
}

export const WithCustomDelay: Story = {
	args: {
		delay: 200,
		closeDelay: 300,
	},
	render: (args) => (
		<NavigationMenu {...args}>
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
				story: "Navigation menu with custom delay values for opening and closing animations.",
			},
		},
	},
}
