import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import { Card, CardContent } from "~/components/ui/card"

const meta = {
  title: "UI/Carousel/CarouselContent",
  component: CarouselContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The container for carousel items. Must be used within a Carousel component.",
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
  },
} satisfies Meta<typeof CarouselContent>

export default meta
type Story = StoryObj<typeof meta>

const carouselItems = [
  { title: "Slide 1", number: 1 },
  { title: "Slide 2", number: 2 },
  { title: "Slide 3", number: 3 },
  { title: "Slide 4", number: 4 },
]

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-xs">
      <Carousel className="w-full">
        <CarouselContent {...args}>
          {carouselItems.map((item) => (
            <CarouselItem key={item.number}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{item.number}</span>
                  </CardContent>
                </Card>
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
        story: "A basic carousel content container with multiple items.",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel orientation="vertical" className="w-full max-w-xs">
        <CarouselContent className="-mt-1 h-[200px]">
          {carouselItems.map((item) => (
            <CarouselItem key={item.number} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{item.title}</span>
                  </CardContent>
                </Card>
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
        story: "Carousel content configured for vertical orientation.",
      },
    },
  },
}

export const WithCustomSpacing: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2">
          {carouselItems.map((item) => (
            <CarouselItem key={item.number} className="pl-2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{item.number}</span>
                  </CardContent>
                </Card>
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
        story: "Carousel content with custom spacing using className overrides.",
      },
    },
  },
}
