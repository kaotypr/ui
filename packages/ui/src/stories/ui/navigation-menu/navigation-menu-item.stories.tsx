import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from "~/components/ui/navigation-menu"

const meta = {
	title: "UI/NavigationMenu/NavigationMenuItem",
	component: NavigationMenuItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An individual navigation menu item.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

Must be used within a \`NavigationMenuList\` component.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		value: {
			description:
				"A unique value that identifies this navigation menu item. If no value is provided, a unique ID will be generated automatically. Use when controlling the navigation menu programmatically.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof NavigationMenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem {...args}>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">
								Quick Start
							</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">
								Accessibility
							</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Default navigation menu item with trigger and content.",
			},
		},
	},
}

export const WithValue: Story = {
	args: {
		value: "overview",
	},
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem {...args}>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">
								Quick Start
							</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">
								Accessibility
							</NavigationMenuLink>
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
					"Navigation menu item with a custom value identifier for programmatic control.",
			},
		},
	},
}

export const WithLink: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem {...args}>
					<NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Navigation menu item containing a simple link without dropdown.",
			},
		},
	},
}
