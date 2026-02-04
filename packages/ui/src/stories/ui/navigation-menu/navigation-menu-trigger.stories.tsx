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
	title: "UI/NavigationMenu/NavigationMenuTrigger",
	component: NavigationMenuTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Opens the navigation menu popup when hovered or clicked, revealing the associated content.

This component is built on top of [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu).

Must be used within a \`NavigationMenuItem\` component.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		nativeButton: {
			description:
				"Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `false` if the rendered element is not a button (e.g. `<a>`).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
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
} satisfies Meta<typeof NavigationMenuTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger {...args}>Overview</NavigationMenuTrigger>
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
				story: "Default navigation menu trigger that opens a dropdown menu on hover or click.",
			},
		},
	},
}

export const MultipleTriggers: Story = {
	render: (args) => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger {...args}>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
							<NavigationMenuLink href="/docs/quick-start">Quick Start</NavigationMenuLink>
							<NavigationMenuLink href="/docs/accessibility">Accessibility</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger {...args}>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 w-[400px]">
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
				story: "Multiple navigation menu triggers in a single menu.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						render={<div className="cursor-pointer" />}
						nativeButton={false}
					>
						Click this div
					</NavigationMenuTrigger>
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
					"Use the `render` prop with a ReactElement to replace the default button element. Set `nativeButton={false}` when the rendered element is not a button.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						render={(props, state) => (
							<button
								{...props}
								className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
									state.open
										? "bg-accent text-accent-foreground"
										: "hover:bg-accent/50 hover:text-accent-foreground"
								}`}
							>
								{state.open ? "Menu Open" : "Overview"}
							</button>
						)}
					/>
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
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean).",
			},
		},
	},
}
