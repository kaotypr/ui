import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "~/components/ui/spinner"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A loading spinner component that displays an animated spinning icon to indicate a loading state.

This component uses [SpinnerGapIcon](https://phosphoricons.com/) from @phosphor-icons/react.`,
			},
		},
	},
	argTypes: {
		// Styling
		className: {
			description: "Additional CSS class names to apply to the spinner.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		// SVG Props
		width: {
			description: "Width of the SVG element.",
			table: {
				type: { summary: "number | string" },
				defaultValue: { summary: "undefined" },
				category: "SVG Props",
			},
			control: { type: "text" },
		},
		height: {
			description: "Height of the SVG element.",
			table: {
				type: { summary: "number | string" },
				defaultValue: { summary: "undefined" },
				category: "SVG Props",
			},
			control: { type: "text" },
		},
		color: {
			description: "Color of the spinner (uses currentColor by default).",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "currentColor" },
				category: "SVG Props",
			},
			control: { type: "color" },
		},
		// Accessibility
		role: {
			description: "ARIA role attribute.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"status"' },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
		"aria-label": {
			description: "Accessible label for the spinner.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Loading"' },
				category: "Accessibility",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => <Spinner {...args} />,
	parameters: {
		docs: {
			description: {
				story: "Default spinner with standard size and animation.",
			},
		},
	},
}

export const DifferentSizes: Story = {
	render: () => (
		<div className="flex items-center gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner className="size-3" />
				<span className="text-xs text-muted-foreground">Small</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="size-4" />
				<span className="text-xs text-muted-foreground">Default</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="size-6" />
				<span className="text-xs text-muted-foreground">Medium</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="size-8" />
				<span className="text-xs text-muted-foreground">Large</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="size-12" />
				<span className="text-xs text-muted-foreground">Extra Large</span>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Spinner in different sizes using Tailwind size utilities.",
			},
		},
	},
}

export const CustomColors: Story = {
	render: () => (
		<div className="flex items-center gap-8">
			<div className="flex flex-col items-center gap-2">
				<Spinner className="text-primary" />
				<span className="text-xs text-muted-foreground">Primary</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="text-destructive" />
				<span className="text-xs text-muted-foreground">Destructive</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="text-muted-foreground" />
				<span className="text-xs text-muted-foreground">Muted</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="text-blue-500" />
				<span className="text-xs text-muted-foreground">Custom Blue</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Spinner className="text-green-500" />
				<span className="text-xs text-muted-foreground">Custom Green</span>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Spinner with different color variants using Tailwind color utilities.",
			},
		},
	},
}

export const InButton: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Button disabled>
				<Spinner className="mr-2 size-4" />
				Loading...
			</Button>
			<Button variant="outline" disabled>
				<Spinner className="mr-2 size-4" />
				Processing
			</Button>
			<Button variant="destructive" disabled>
				<Spinner className="mr-2 size-4" />
				Deleting...
			</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Spinner used inside buttons to indicate loading state.",
			},
		},
	},
}

export const WithText: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<div className="flex items-center gap-2">
				<Spinner />
				<span>Loading content...</span>
			</div>
			<div className="flex items-center gap-2">
				<Spinner className="size-6" />
				<span className="text-lg">Please wait</span>
			</div>
			<div className="flex items-center gap-2">
				<Spinner className="text-muted-foreground" />
				<span className="text-sm text-muted-foreground">Processing request</span>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Spinner used alongside text to provide context for the loading state.",
			},
		},
	},
}

export const Centered: Story = {
	render: () => (
		<div className="flex h-32 w-64 items-center justify-center rounded-lg border border-border bg-muted/50">
			<Spinner className="size-8" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Spinner centered in a container, useful for loading overlays or empty states.",
			},
		},
	},
}
