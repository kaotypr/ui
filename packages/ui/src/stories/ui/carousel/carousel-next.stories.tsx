import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel"

const meta = {
	title: "UI/Carousel/CarouselNext",
	component: CarouselNext,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Button to navigate to the next slide. Must be used within a Carousel component. Automatically disables when at the end of the carousel.",
			},
		},
	},
	argTypes: {
		variant: {
			description: "The visual variant of the button.",
			table: {
				type: {
					summary:
						'"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
				},
				defaultValue: { summary: "outline" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
		},
		size: {
			description: "The size of the button.",
			table: {
				type: {
					summary:
						'"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
				},
				defaultValue: { summary: "icon-sm" },
				category: "Props",
			},
			control: { type: "select" },
			options: [
				"default",
				"xs",
				"sm",
				"lg",
				"icon",
				"icon-xs",
				"icon-sm",
				"icon-lg",
			],
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
	},
} satisfies Meta<typeof CarouselNext>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
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
				<CarouselNext {...args} />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default next button positioned on the right side of a horizontal carousel.",
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
						<CarouselItem key={index} className="pt-1">
							<div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext {...args} />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Next button in a vertical carousel, positioned at the bottom with rotated icon.",
			},
		},
	},
}

export const WithCustomVariant: Story = {
	args: {
		variant: "default",
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious variant="default" />
				<CarouselNext {...args} />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Next button with default variant instead of outline.",
			},
		},
	},
}

export const WithCustomSize: Story = {
	args: {
		size: "icon-lg",
	},
	render: (args) => (
		<div className="w-full max-w-xs">
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious size="icon-lg" />
				<CarouselNext {...args} />
			</Carousel>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Next button with larger icon size.",
			},
		},
	},
}
