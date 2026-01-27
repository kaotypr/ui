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
	title: "UI/NavigationMenu/NavigationMenuList",
	component: NavigationMenuList,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Contains a list of navigation menu items.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

Must be used within a \`NavigationMenu\` component.`,
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
} satisfies Meta<typeof NavigationMenuList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList {...args}>
				<NavigationMenuItem>
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
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/components/button">
								Button
							</NavigationMenuLink>
							<NavigationMenuLink href="/components/input">
								Input
							</NavigationMenuLink>
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
				story: "Default navigation menu list containing multiple menu items.",
			},
		},
	},
}

export const Vertical: Story = {
	render: (args) => (
		<NavigationMenu orientation="vertical">
			<NavigationMenuList {...args} className="flex-col">
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[300px]">
							<NavigationMenuLink href="/docs/quick-start">
								Quick Start
							</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">
								Accessibility
							</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[300px]">
							<NavigationMenuLink href="/components/button">
								Button
							</NavigationMenuLink>
							<NavigationMenuLink href="/components/input">
								Input
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
				story: "Navigation menu list with vertical layout.",
			},
		},
	},
}
