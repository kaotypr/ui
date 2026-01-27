import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
} from "~/components/ui/resizable"

const meta = {
	title: "UI/Resizable",
	component: ResizablePanelGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A set of components for creating resizable panel layouts that can be adjusted by dragging.

This component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels).

### Component Parts
- [ResizablePanelGroup](?path=/story/ui-resizable-resizablepanelgroup--default): Wraps a set of resizable Panel components. Group content can be resized horizontally or vertically.
- [ResizablePanel](?path=/story/ui-resizable-resizablepanel--default): Wraps resizable content and can be configured with min/max size constraints and collapsible behavior.
- [ResizableHandle](?path=/story/ui-resizable-resizablehandle--default): A separator between panels that enables resizing. Recommended for improved keyboard accessibility.`,
			},
		},
	},
	argTypes: {
		// react-resizable-panels Props
		orientation: {
			description:
				"Specifies the resizable orientation ('horizontal' or 'vertical'); defaults to 'horizontal'",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: '"horizontal"' },
				category: "react-resizable-panels Props",
			},
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
		},
		defaultLayout: {
			description:
				"Default layout for the Group. This value allows layouts to be remembered between page reloads.",
			table: {
				type: { summary: "number[]" },
				defaultValue: { summary: "undefined" },
				category: "react-resizable-panels Props",
			},
			control: { type: "object" },
		},
		disabled: {
			description: "Disable resize functionality.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "react-resizable-panels Props",
			},
			control: { type: "boolean" },
		},
		disableCursor: {
			description:
				"This library sets custom mouse cursor styles to indicate drag state. Use this prop to disable that behavior for Panels and Separators in this group.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "react-resizable-panels Props",
			},
			control: { type: "boolean" },
		},
		id: {
			description:
				"Uniquely identifies this group within an application. Falls back to useId when not provided.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "react-resizable-panels Props",
			},
			control: { type: "text" },
		},
		onLayoutChange: {
			description:
				"Called when the Group's layout is changing. For layout changes caused by pointer events, this method is called each time the pointer is moved.",
			table: {
				type: { summary: "(layout: number[]) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onLayoutChange",
		},
		onLayoutChanged: {
			description:
				"Called after the Group's layout has been changed. For layout changes caused by pointer events, this method is not called until the pointer has been released.",
			table: {
				type: { summary: "(layout: number[]) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onLayoutChanged",
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
} satisfies Meta<typeof ResizablePanelGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup {...args}>
				<ResizablePanel defaultSize={50}>
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
	parameters: {
		docs: {
			description: {
				story:
					"Default resizable panel group with two panels that can be resized horizontally.",
			},
		},
	},
}

export const Vertical: Story = {
	render: () => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup orientation="vertical">
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Top Panel</p>
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
							<p className="text-sm font-medium">Bottom Panel</p>
							<p className="text-xs text-muted-foreground">
								Drag the handle to resize
							</p>
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
					"Resizable panel group with vertical orientation, stacking panels vertically.",
			},
		},
	},
}

export const ThreePanels: Story = {
	render: () => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup>
				<ResizablePanel defaultSize={33}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 1</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={33}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 2</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={34}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 3</p>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Resizable panel group with three panels.",
			},
		},
	},
}

export const WithHandle: Story = {
	render: () => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup>
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 1</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
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
					"Resizable panel group with a visible handle indicator on the separator.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup disabled>
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 1</p>
							<p className="text-xs text-muted-foreground">Resizing disabled</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 2</p>
							<p className="text-xs text-muted-foreground">Resizing disabled</p>
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
	args: {
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Resizable panel group with resize functionality disabled. Panels cannot be resized.",
			},
		},
	},
}
