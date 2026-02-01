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
	title: "UI/NavigationMenu/NavigationMenuContent",
	component: NavigationMenuContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container for the content of the navigation menu item that is moved into the popup when the item is active.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

Must be used within a \`NavigationMenuItem\` component.`,
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
} satisfies Meta<typeof NavigationMenuContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent {...args}>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
							<NavigationMenuLink href="/docs/releases">Releases</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Default navigation menu content with links.",
			},
		},
	},
}

export const WithRichContent: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent {...args}>
						<div className="grid gap-4 p-6 w-[500px]">
							<div>
								<h3 className="text-lg font-semibold mb-2">UI Components</h3>
								<div className="grid gap-2">
									<NavigationMenuLink href="/components/button">Button</NavigationMenuLink>
									<NavigationMenuLink href="/components/input">Input</NavigationMenuLink>
									<NavigationMenuLink href="/components/dialog">Dialog</NavigationMenuLink>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-2">Form Components</h3>
								<div className="grid gap-2">
									<NavigationMenuLink href="/components/checkbox">Checkbox</NavigationMenuLink>
									<NavigationMenuLink href="/components/select">Select</NavigationMenuLink>
									<NavigationMenuLink href="/components/radio">Radio</NavigationMenuLink>
								</div>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Navigation menu content with rich content including headings and grouped links.",
			},
		},
	},
}
