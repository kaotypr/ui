import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion/AccordionTrigger",
  component: AccordionTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The button that toggles the visibility of the item's content. Must be used within an AccordionItem component.\n\nThis component is built on top of [Radix UI Accordion Trigger](https://www.radix-ui.com/primitives/docs/components/accordion#trigger).",
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
} satisfies Meta<typeof AccordionTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger {...args}>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic accordion trigger that toggles the content visibility.",
      },
    },
  },
}

export const LongText: Story = {
  render: () => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          This is a longer trigger text that demonstrates how the accordion
          trigger handles multiple lines of content
        </AccordionTrigger>
        <AccordionContent>
          The trigger text wraps to multiple lines when needed, and the chevron
          icon remains aligned properly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An accordion trigger with longer text that wraps to multiple lines.",
      },
    },
  },
}

export const MultipleTriggers: Story = {
  render: () => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Question</AccordionTrigger>
        <AccordionContent>
          This is the answer to the first question.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Question</AccordionTrigger>
        <AccordionContent>
          This is the answer to the second question.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Question</AccordionTrigger>
        <AccordionContent>
          This is the answer to the third question.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple accordion triggers in a single accordion.",
      },
    },
  },
}
