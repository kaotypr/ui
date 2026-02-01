import type { Meta, StoryObj } from "@storybook/react-vite"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "~/components/ui/resizable"

const meta = {
	title: "UI/Resizable/ResizableHandle",
	component: ResizableHandle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A separator between panels that enables resizing. Recommended for improved keyboard accessibility.

This component is built on top of [react-resizable-panels Separator](https://github.com/bvaughn/react-resizable-panels).

Must be used within a ResizablePanelGroup component. Separator elements must be direct DOM children of their parent Group elements.`,
			},
		},
	},
	argTypes: {
		// Custom Props
		withHandle: {
			description: "Whether to show a visible handle indicator on the separator.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		// react-resizable-panels Props
		id: {
			description:
				"Uniquely identifies the separator within the parent group. Falls back to useId when not provided.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "react-resizable-panels Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof ResizableHandle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-[600px] h-[300px] border rounded-lg p-4">
			<ResizablePanelGroup>
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 1</p>
							<p className="text-xs text-muted-foreground">Drag the handle to resize</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle {...args} />
				<ResizablePanel defaultSize={50}>
					<div className="flex h-full items-center justify-center rounded-lg border bg-muted p-6">
						<div className="text-center">
							<p className="text-sm font-medium">Panel 2</p>
							<p className="text-xs text-muted-foreground">Drag the handle to resize</p>
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
					"Default ResizableHandle between two panels. The separator is draggable to resize adjacent panels.",
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
	args: {
		withHandle: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"ResizableHandle with a visible handle indicator. The handle provides a visual cue for the resizable area.",
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
					"ResizableHandle in a vertically oriented panel group. The handle adapts to the vertical layout.",
			},
		},
	},
}
