import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
} from "~/components/ui/resizable"

const meta = {
	title: "UI/Resizable/ResizablePanelGroup",
	component: ResizablePanelGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Wraps a set of resizable Panel components. Group content can be resized horizontally or vertically.

This component is built on top of [react-resizable-panels Group](https://github.com/bvaughn/react-resizable-panels).

Must contain ResizablePanel and ResizableHandle components as direct children.`,
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
					"Default ResizablePanelGroup with horizontal orientation containing two panels.",
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
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Bottom Panel</p>
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
					"ResizablePanelGroup with vertical orientation, stacking panels vertically.",
			},
		},
	},
}
