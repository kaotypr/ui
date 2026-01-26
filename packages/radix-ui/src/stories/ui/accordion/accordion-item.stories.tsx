import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Represents a single item within the accordion. Must be used within an Accordion component.\n\nThis component is built on top of [Radix UI Accordion Item](https://www.radix-ui.com/primitives/docs/components/accordion#item).",
      },
    },
  },
  argTypes: {
    value: {
      description:
        "A string value for the accordion item. All items within an accordion should use a unique value.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description:
        "Whether or not an accordion item is disabled from user interaction.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
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
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accessibility",
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof AccordionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem {...args}>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    value: "item-1",
  },
  parameters: {
    docs: {
      description: {
        story: "A basic accordion item with trigger and content.",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem {...args}>
        <AccordionTrigger>Is it accessible? (Disabled)</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    value: "item-1",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "An accordion item that is disabled and cannot be interacted with.",
      },
    },
  },
}

export const MultipleItems: Story = {
  render: () => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>
          This is the content of the first accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>
          This is the content of the second accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>
          This is the content of the third accordion item.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    value: "item-1",
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple accordion items displayed together.",
      },
    },
  },
}
