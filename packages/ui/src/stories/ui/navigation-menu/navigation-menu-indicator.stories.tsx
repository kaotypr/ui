import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuLink,
} from "~/components/ui/navigation-menu"

const meta = {
	title: "UI/NavigationMenu/NavigationMenuIndicator",
	component: NavigationMenuIndicator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An icon that indicates that the trigger button opens a menu.

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
} satisfies Meta<typeof NavigationMenuIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
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
			</NavigationMenuList>
			<NavigationMenuIndicator {...args} />
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default navigation menu indicator that appears below the active trigger.",
			},
		},
	},
}

export const WithMultipleItems: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
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
			</NavigationMenuList>
			<NavigationMenuIndicator {...args} />
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Navigation menu indicator with multiple menu items. The indicator moves to show which menu is active.",
			},
		},
	},
}
