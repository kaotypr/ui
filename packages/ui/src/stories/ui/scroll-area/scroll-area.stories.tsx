import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea } from "~/components/ui/scroll-area"

const meta = {
	title: "UI/ScrollArea",
	component: ScrollArea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A native scroll container with custom scrollbars.

This component is built on top of [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area).

### Component Parts
- [ScrollBar](?path=/story/ui-scrollarea-scrollbar--default): A vertical or horizontal scrollbar for the scroll area.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		overflowEdgeThreshold: {
			description:
				"The threshold in pixels that must be passed before the overflow edge attributes are applied. Accepts a single number for all edges or an object to configure them individually.",
			table: {
				type: {
					summary:
						"number | Partial<{ xStart: number, xEnd: number, yStart: number, yEnd: number }>",
				},
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		className: {
			description:
				"CSS class applied to the element, or a function that returns a class based on the component's state.",
			table: {
				type: {
					summary:
						"string | ((state: ScrollArea.Root.State) => string | undefined)",
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
						"CSSProperties | ((state: ScrollArea.Root.State) => CSSProperties | undefined)",
				},
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ScrollArea>

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
		<ScrollArea {...args} className="h-[300px] w-[350px] rounded-md border p-4">
			{longContent}
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default scroll area with vertical scrolling. The scrollbar appears when content overflows.",
			},
		},
	},
}

export const Horizontal: Story = {
	render: () => (
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
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Scroll area with horizontal scrolling. Content flows horizontally and can be scrolled.",
			},
		},
	},
}

export const BothDirections: Story = {
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
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Scroll area with both vertical and horizontal scrolling. The corner element appears at the intersection of scrollbars.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => (
		<ScrollArea className="h-[300px] w-[350px] rounded-md border-2 border-primary p-4 bg-muted/50">
			{longContent}
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Scroll area with custom styling applied via className prop.",
			},
		},
	},
}

export const WithOverflowThreshold: Story = {
	render: () => (
		<ScrollArea
			overflowEdgeThreshold={20}
			className="h-[300px] w-[350px] rounded-md border p-4"
		>
			{longContent}
		</ScrollArea>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Scroll area with custom overflow edge threshold. The threshold determines when overflow edge attributes are applied.",
			},
		},
	},
}
