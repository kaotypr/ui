import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "~/components/ui/separator"

const meta = {
	title: "UI/Separator",
	component: Separator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A separator element accessible to screen readers.

This component is built on top of [Base UI Separator](https://base-ui.com/react/components/separator).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		orientation: {
			description: "The orientation of the separator.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary: "string | ((state: Separator.State) => string | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"CSS properties applied to the element, or a function that returns styles based on the component's state.",
			table: {
				type: {
					summary: "CSSProperties | ((state: Separator.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a ReactElement or a function that returns the element to render.",
			table: {
				type: {
					summary: "ReactElement | ((props: HTMLProps, state: Separator.State) => ReactElement)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<div className="w-64 space-y-4">
			<div>
				<h4 className="text-sm font-medium leading-none">Content Above</h4>
			</div>
			<Separator {...args} />
			<div>
				<h4 className="text-sm font-medium leading-none">Content Below</h4>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default horizontal separator separating content sections.",
			},
		},
	},
}

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<div className="flex h-20 items-center gap-4">
			<span className="text-sm">Left</span>
			<Separator {...args} />
			<span className="text-sm">Right</span>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Vertical separator for separating horizontal content.",
			},
		},
	},
}

export const InNavigation: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<a href="#" className="text-sm hover:underline">
				Home
			</a>
			<Separator orientation="vertical" />
			<a href="#" className="text-sm hover:underline">
				Pricing
			</a>
			<Separator orientation="vertical" />
			<a href="#" className="text-sm hover:underline">
				Blog
			</a>
			<Separator orientation="vertical" />
			<a href="#" className="text-sm hover:underline">
				Support
			</a>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Vertical separators used in navigation menus to separate links.",
			},
		},
	},
}

export const InForm: Story = {
	render: () => (
		<div className="w-64 space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="text-sm font-medium">
					Email
				</label>
				<input
					id="email"
					type="email"
					placeholder="Enter your email"
					className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
				/>
			</div>
			<Separator />
			<div className="space-y-2">
				<label htmlFor="password" className="text-sm font-medium">
					Password
				</label>
				<input
					id="password"
					type="password"
					placeholder="Enter your password"
					className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Horizontal separator used to visually separate form sections.",
			},
		},
	},
}

export const CustomStyling: Story = {
	args: {
		orientation: "horizontal",
		className: "h-0.5 bg-blue-500",
	},
	render: (args) => (
		<div className="w-64 space-y-4">
			<div>
				<h4 className="text-sm font-medium leading-none">Content Above</h4>
			</div>
			<Separator {...args} />
			<div>
				<h4 className="text-sm font-medium leading-none">Content Below</h4>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Separator with custom styling applied via className.",
			},
		},
	},
}

export const MultipleSeparators: Story = {
	render: () => (
		<div className="w-64 space-y-4">
			<div>
				<h4 className="text-sm font-medium leading-none">Section 1</h4>
			</div>
			<Separator />
			<div>
				<h4 className="text-sm font-medium leading-none">Section 2</h4>
			</div>
			<Separator />
			<div>
				<h4 className="text-sm font-medium leading-none">Section 3</h4>
			</div>
			<Separator />
			<div>
				<h4 className="text-sm font-medium leading-none">Section 4</h4>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple separators used to create distinct sections.",
			},
		},
	},
}
