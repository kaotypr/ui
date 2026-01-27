import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
} from "~/components/ui/resizable"

const meta = {
	title: "UI/Resizable/ResizablePanel",
	component: ResizablePanel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Wraps resizable content and can be configured with min/max size constraints and collapsible behavior.

This component is built on top of [react-resizable-panels Panel](https://github.com/bvaughn/react-resizable-panels).

Must be used within a ResizablePanelGroup component. Panel elements must be direct DOM children of their parent Group elements.`,
			},
		},
	},
	argTypes: {
		// react-resizable-panels Props
		defaultSize: {
			description:
				"Default size of Panel within its parent group; default is auto-assigned based on the total number of Panels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "react-resizable-panels Props",
			},
			control: { type: "number" },
		},
		minSize: {
			description:
				"Minimum size of Panel within its parent group; defaults to 0%.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "react-resizable-panels Props",
			},
			control: { type: "number" },
		},
		maxSize: {
			description:
				"Maximum size of Panel within its parent group; defaults to 100%.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
				category: "react-resizable-panels Props",
			},
			control: { type: "number" },
		},
		collapsible: {
			description:
				"This panel can be collapsed. A collapsible panel will collapse when its size is less than the specified minSize.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "react-resizable-panels Props",
			},
			control: { type: "boolean" },
		},
		collapsedSize: {
			description: "Panel size when collapsed; defaults to 0%.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "react-resizable-panels Props",
			},
			control: { type: "number" },
		},
		id: {
			description:
				"Uniquely identifies this panel within the parent group. Falls back to useId when not provided.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "react-resizable-panels Props",
			},
			control: { type: "text" },
		},
		onResize: {
			description:
				"Called when panel sizes change. Receives panel size (both as a percentage of the parent Group and in pixels), panel id (if provided), and previous panel size (will be undefined on mount).",
			table: {
				type: {
					summary:
						"(panelSize: { percentage: number; pixels: number }, id: string | undefined, prevPanelSize: { percentage: number; pixels: number } | undefined) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onResize",
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description: "Inline styles to apply",
			table: {
				type: { summary: "React.CSSProperties" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ResizablePanel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup>
				<ResizablePanel {...args}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 1</p>
							<p className="text-xs text-muted-foreground">
								Drag the handle to resize
							</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 2</p>
							<p className="text-xs text-muted-foreground">
								Drag the handle to resize
							</p>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
	args: {
		defaultSize: 50,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Default ResizablePanel with 50% default size within a ResizablePanelGroup.",
			},
		},
	},
}

export const WithMinMaxSize: Story = {
	render: () => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup>
				<ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 1</p>
							<p className="text-xs text-muted-foreground">
								Min: 20%, Max: 80%
							</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 2</p>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"ResizablePanel with minimum and maximum size constraints. The panel cannot be resized below 20% or above 80%.",
			},
		},
	},
}

export const Collapsible: Story = {
	render: () => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup>
				<ResizablePanel
					defaultSize={50}
					collapsible
					minSize={10}
					collapsedSize={5}
				>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Collapsible Panel</p>
							<p className="text-xs text-muted-foreground">
								Drag to collapse (min: 10%)
							</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 2</p>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"ResizablePanel with collapsible behavior. When resized below the minimum size, it will collapse to the collapsedSize.",
			},
		},
	},
}
