import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel"

const meta = {
	title: "UI/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"A carousel component for displaying a collection of items in a scrollable container with navigation controls.",
					"",
					"This component is built on top of [Embla Carousel React](https://www.embla-carousel.com/get-started/react/).",
					"",
					"### Component Parts",
					"- [CarouselContent](?path=/story/ui-carousel-carouselcontent--default): The scrollable container that holds carousel items.",
					"- [CarouselItem](?path=/story/ui-carousel-carouselitem--default): Represents a single slide within the carousel.",
					"- [CarouselPrevious](?path=/story/ui-carousel-carouselprevious--default): Button to navigate to the previous slide.",
					"- [CarouselNext](?path=/story/ui-carousel-carouselnext--default): Button to navigate to the next slide.",
				].join("\n"),
			},
		},
	},
	argTypes: {
		orientation: {
			description: "The orientation of the carousel.",
			table: {
				type: { summary: '"horizontal" | "vertical"' },
				defaultValue: { summary: "horizontal" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["horizontal", "vertical"],
		},
		opts: {
			description:
				"Configuration options for Embla Carousel. See [Embla Carousel Options](https://www.embla-carousel.com/api/options/) for complete documentation.",
			table: {
				type: { summary: "EmblaOptionsType" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		plugins: {
			description:
				"Embla Carousel plugins array. See [Embla Carousel Plugins](https://www.embla-carousel.com/plugins/) for available plugins.",
			table: {
				type: { summary: "EmblaPluginType[]" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		setApi: {
			description:
				"Callback function that receives the carousel API instance when it's ready. Useful for programmatic control.",
			table: {
				type: { summary: "(api: CarouselApi) => void" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
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
			description: "The carousel content and controls.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel {...args}>
				<CarouselContent>
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
				story: "Default horizontal carousel with navigation buttons and 5 slides.",
			},
		},
	},
}

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel {...args} className="w-full max-w-xs">
				<CarouselContent className="-mt-1 h-[250px]">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="pt-1 md:basis-1/2">
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
				story: "Vertical carousel with navigation buttons positioned at top and bottom.",
			},
		},
	},
}

export const WithLoop: Story = {
	args: {
		orientation: "horizontal",
		opts: {
			loop: true,
		},
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel {...args}>
				<CarouselContent>
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
				story: "Carousel with loop enabled, allowing infinite scrolling in both directions.",
			},
		},
	},
}

export const MultipleSlides: Story = {
	args: {
		orientation: "horizontal",
		opts: {
			align: "start",
		},
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel {...args}>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
				story: "Carousel showing multiple slides at once with responsive breakpoints.",
			},
		},
	},
}

export const WithoutControls: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel {...args}>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Carousel without navigation buttons. Users can still navigate using keyboard arrows or by dragging.",
			},
		},
	},
}

export const WithImages: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel {...args}>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="flex aspect-video items-center justify-center rounded-md border bg-muted">
								<div className="flex flex-col items-center gap-2">
									<span className="text-2xl font-semibold">Slide {index + 1}</span>
									<span className="text-sm text-muted-foreground">Image placeholder</span>
								</div>
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
				story: "Carousel with image-like content using aspect-video ratio.",
			},
		},
	},
}
