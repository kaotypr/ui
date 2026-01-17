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
  title: "UI/Carousel/CarouselPrevious",
  component: CarouselPrevious,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button to navigate to the previous slide. Must be used within a Carousel component. Automatically disables when at the first slide.",
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
        defaultValue: { summary: '"outline"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      description: "The size of the button.",
      table: {
        type: { summary: '"default" | "sm" | "lg" | "icon"' },
        defaultValue: { summary: '"icon"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
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
} satisfies Meta<typeof CarouselPrevious>

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
        <CarouselContent>
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
        <CarouselPrevious {...args} />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A carousel with the default previous button. The button is disabled when at the first slide.",
      },
    },
  },
}

export const WithCustomVariant: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel className="w-full">
        <CarouselContent>
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
        <CarouselPrevious variant="default" />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Previous button with a custom variant (default instead of outline).",
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
        story:
          "Previous button in a vertical carousel. The button is positioned at the top and rotated.",
      },
    },
  },
}
