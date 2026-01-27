import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"

const meta = {
	title: "UI/ScrollArea/ScrollBar",
	component: ScrollBar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A vertical or horizontal scrollbar for the scroll area. Must be used within a ScrollArea component.

This component is built on top of [Base UI Scrollbar](https://base-ui.com/react/components/scroll-area).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		orientation: {
			description:
				"Whether the scrollbar controls vertical or horizontal scroll.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"vertical"' },
				category: "Base UI Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		keepMounted: {
			description:
				"Whether to keep the HTML element in the DOM when the viewport isn't scrollable.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary:
						"string | ((state: ScrollArea.Scrollbar.State) => string | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"CSS properties applied to the element, or a function that returns styles based on the component's state.",
			table: {
				type: {
					summary:
						"CSSProperties | ((state: ScrollArea.Scrollbar.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ScrollBar>

export default meta

type Story = StoryObj<typeof meta>

const longContent = Array.from({ length: 50 }, (_, i) => (
	<div key={i} className="p-4 border-b">
		<p className="text-sm">
			Item {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>
	</div>
))

export const Default: Story = {
	render: (args) => (
		<ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
			{longContent}
			<ScrollBar {...args} />
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default vertical scrollbar. The scrollbar appears automatically when content overflows.",
			},
		},
	},
}

export const Horizontal: Story = {
	render: (args) => (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
			<div className="flex gap-4">
				{Array.from({ length: 20 }, (_, i) => (
					<div
						key={i}
						className="flex-shrink-0 w-[200px] h-[150px] rounded-md border bg-muted flex items-center justify-center"
					>
						<p className="text-sm font-medium">Item {i + 1}</p>
					</div>
				))}
			</div>
			<ScrollBar {...args} orientation="horizontal" />
		</ScrollArea>
	),
	args: {
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Horizontal scrollbar for scrolling content left and right.",
			},
		},
	},
}

export const BothScrollbars: Story = {
	render: () => (
		<ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
			<div className="grid grid-cols-10 gap-4">
				{Array.from({ length: 100 }, (_, i) => (
					<div
						key={i}
						className="w-20 h-20 rounded-md border bg-muted flex items-center justify-center text-xs"
					>
						{i + 1}
					</div>
				))}
			</div>
			<ScrollBar orientation="vertical" />
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Both vertical and horizontal scrollbars used together. The corner element appears at their intersection.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: (args) => (
		<ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
			{longContent}
			<ScrollBar {...args} className="w-4" />
		</ScrollArea>
	),
	args: {
		className: "w-4",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Scrollbar with custom styling. The width is increased for better visibility.",
			},
		},
	},
}

export const KeepMounted: Story = {
	render: (args) => (
		<ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
			<div className="p-4">
				<p className="text-sm">
					This content is short and doesn't require scrolling, but the
					scrollbar is kept mounted in the DOM.
				</p>
			</div>
			<ScrollBar {...args} keepMounted />
		</ScrollArea>
	),
	args: {
		keepMounted: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Scrollbar with keepMounted prop set to true. The scrollbar remains in the DOM even when scrolling isn't needed.",
			},
		},
	},
}
