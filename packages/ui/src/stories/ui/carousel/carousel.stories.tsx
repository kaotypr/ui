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
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A carousel component for displaying a collection of items in a scrollable container with navigation controls.\n\nThis component is built on top of [Embla Carousel](https://www.embla-carousel.com/).\n\n### Component Parts\n- [CarouselContent](?path=/story/ui-carousel-carouselcontent--default): The container for carousel items. Must be used within a Carousel component.\n- [CarouselItem](?path=/story/ui-carousel-carouselitem--default): An individual item within the carousel. Must be used within CarouselContent.\n- [CarouselPrevious](?path=/story/ui-carousel-carouselprevious--default): Button to navigate to the previous slide.\n- [CarouselNext](?path=/story/ui-carousel-carouselnext--default): Button to navigate to the next slide.",
      },
    },
  },
  argTypes: {
    orientation: {
      description: "The orientation of the carousel.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    opts: {
      description:
        "Options object passed to Embla Carousel. See [Embla Carousel Options](https://www.embla-carousel.com/api/options/) for complete documentation.",
      table: {
        type: { summary: "EmblaOptionsType" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
    plugins: {
      description:
        "Plugins array passed to Embla Carousel. See [Embla Carousel Plugins](https://www.embla-carousel.com/plugins/) for available plugins.",
      table: {
        type: { summary: "EmblaPluginType[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
    setApi: {
      description:
        "Callback function that receives the Embla Carousel API instance when it's ready.",
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
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const carouselItems = [
  {
    title: "Slide 1",
    description: "This is the first slide of the carousel.",
    color: "bg-blue-500",
  },
  {
    title: "Slide 2",
    description: "This is the second slide of the carousel.",
    color: "bg-green-500",
  },
  {
    title: "Slide 3",
    description: "This is the third slide of the carousel.",
    color: "bg-purple-500",
  },
  {
    title: "Slide 4",
    description: "This is the fourth slide of the carousel.",
    color: "bg-orange-500",
  },
  {
    title: "Slide 5",
    description: "This is the fifth slide of the carousel.",
    color: "bg-pink-500",
  },
]

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-xs">
      <Carousel {...args} className="w-full">
        <CarouselContent>
          {carouselItems.map((_item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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
        story: "A basic horizontal carousel with navigation buttons and numbered slides.",
      },
    },
  },
}

export const WithCards: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`h-16 w-16 rounded-full ${item.color}`} />
                      <span className="text-lg font-semibold">{item.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
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
        story: "A carousel displaying cards with colored indicators and descriptions.",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel orientation="vertical" className="w-full max-w-xs">
        <CarouselContent className="-mt-1 h-[200px]">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
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
        story: "A vertical carousel with navigation buttons positioned at the top and bottom.",
      },
    },
  },
}

export const MultipleSlides: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselItems.map((_item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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
          "A carousel configured to show multiple slides at once using responsive basis classes.",
      },
    },
  },
}

export const WithoutNavigation: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel className="w-full">
        <CarouselContent>
          {carouselItems.map((_item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
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
          "A carousel without navigation buttons. Users can still navigate using keyboard arrows or by dragging/swiping.",
      },
    },
  },
}
