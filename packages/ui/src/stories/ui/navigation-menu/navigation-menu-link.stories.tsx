import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from "~/components/ui/navigation-menu"

const meta = {
	title: "UI/NavigationMenu/NavigationMenuLink",
	component: NavigationMenuLink,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A link in the navigation menu that can be used to navigate to a different page or section.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

Must be used within a \`NavigationMenuItem\` component.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		closeOnClick: {
			description: "Whether to close the navigation menu when the link is clicked.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		active: {
			description: "Whether the link is the currently active page.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
} satisfies Meta<typeof NavigationMenuLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink {...args} href="/docs">
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Default navigation menu link.",
			},
		},
	},
}

export const Active: Story = {
	args: {
		active: true,
	},
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink {...args} href="/docs">
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Navigation menu link marked as active.",
			},
		},
	},
}

export const MultipleLinks: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink {...args} href="/docs">
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink {...args} href="/components">
						Components
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink {...args} href="/examples">
						Examples
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple navigation menu links in a single menu.",
			},
		},
	},
}

export const WithCloseOnClick: Story = {
	args: {
		closeOnClick: true,
	},
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink {...args} href="/docs">
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Navigation menu link that closes the menu when clicked. Useful for mobile navigation.",
			},
		},
	},
}
