import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel"

const meta = {
	title: "UI/Carousel/CarouselContent",
	component: CarouselContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"The scrollable container that holds carousel items. Must be used within a Carousel component.",
			},
		},
	},
	argTypes: {
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		children: {
			description: "The carousel items to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CarouselContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent {...args}>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default carousel content container with horizontal scrolling.",
			},
		},
	},
}

export const Vertical: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel orientation="vertical">
				<CarouselContent {...args} className="-mt-1 h-[250px]">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="pt-1">
							<div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Carousel content with vertical orientation. Note the height constraint and vertical margin adjustments.",
			},
		},
	},
}

export const WithCustomHeight: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent {...args} className="h-[300px]">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="flex h-full items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Carousel content with a custom height constraint applied via className.",
			},
		},
	},
}
