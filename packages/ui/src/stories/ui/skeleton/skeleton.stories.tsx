import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "~/components/ui/skeleton"

const meta = {
	title: "UI/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A loading placeholder component that displays a pulsing animation to indicate content is being loaded.

The skeleton component provides a visual placeholder that matches the shape and size of the content that will be loaded, improving perceived performance and user experience.`,
			},
		},
	},
	argTypes: {
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
			description: "Inline CSS styles to apply",
			table: {
				type: { summary: "React.CSSProperties" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: false,
		},
		// Standard HTML div props
		children: {
			description: "Content to render inside the skeleton (typically not used)",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => <Skeleton {...args} className="h-4 w-[250px]" />,
	parameters: {
		docs: {
			description: {
				story: "Default skeleton with standard size and animation.",
			},
		},
	},
}

export const DifferentSizes: Story = {
	render: () => (
		<div className="space-y-4">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
			<Skeleton className="h-4 w-[150px]" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Skeletons of different widths to match various content sizes.",
			},
		},
	},
}

export const CardSkeleton: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Example skeleton layout mimicking a card with avatar and text content.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: (args) => <Skeleton {...args} className="h-8 w-[300px] rounded-lg" />,
	parameters: {
		docs: {
			description: {
				story: "Skeleton with custom styling including height and border radius.",
			},
		},
	},
}

export const Circular: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<Skeleton className="h-16 w-16 rounded-full" />
			<Skeleton className="h-20 w-20 rounded-full" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Circular skeletons useful for avatar placeholders.",
			},
		},
	},
}

export const TextBlock: Story = {
	render: () => (
		<div className="space-y-2">
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-3/4" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple skeleton lines forming a text block placeholder.",
			},
		},
	},
}
