import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel"

const meta = {
	title: "UI/Carousel/CarouselItem",
	component: CarouselItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Represents a single slide within the carousel. Must be used within a CarouselContent component.",
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
			description: "The content to display in this carousel item.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof CarouselItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index} {...args}>
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
				story: "Default carousel items with full-width slides.",
			},
		},
	},
}

export const MultiplePerView: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 6 }).map((_, index) => (
						<CarouselItem
							key={index}
							{...args}
							className="md:basis-1/2 lg:basis-1/3"
						>
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
					"Carousel items with responsive sizing to show multiple items per view using Tailwind breakpoints.",
			},
		},
	},
}

export const Vertical: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel orientation="vertical">
				<CarouselContent className="-mt-1 h-[250px]">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} {...args} className="pt-1">
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
					"Carousel items in a vertical carousel. Note the padding-top adjustment for proper spacing.",
			},
		},
	},
}

export const WithCustomContent: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index} {...args}>
							<div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-md border bg-gradient-to-br from-primary/20 to-primary/5 p-6">
								<span className="text-2xl font-semibold">Slide {index + 1}</span>
								<span className="text-sm text-muted-foreground">
									Custom styled content
								</span>
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
				story: "Carousel items with custom styled content and aspect ratio.",
			},
		},
	},
}
