import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion/AccordionContent",
  component: AccordionContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The content area that is shown or hidden when the item is toggled. Must be used within an AccordionItem component.\n\nThis component is built on top of [Radix UI Accordion Content](https://www.radix-ui.com/primitives/docs/components/accordion#content).",
      },
    },
  },
  argTypes: {
    forceMount: {
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        type: { summary: "true" },
        defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof AccordionContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Accordion type="single" defaultValue="item-1" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent {...args}>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic accordion content area that expands and collapses.",
      },
    },
  },
}

export const LongContent: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Long Content Example</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            This is a longer content example that demonstrates how the accordion
            content handles multiple paragraphs and longer text.
          </p>
          <p className="mb-2">
            The content area can contain any HTML elements, including lists,
            images, and other components.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>First item in a list</li>
            <li>Second item in a list</li>
            <li>Third item in a list</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Accordion content with multiple paragraphs and structured content.",
      },
    },
  },
}

export const MultipleContents: Story = {
  render: () => (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          This is the content of the first accordion section.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          This is the content of the second accordion section.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Section</AccordionTrigger>
        <AccordionContent>
          This is the content of the third accordion section.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple accordion content areas in a single accordion.",
      },
    },
  },
}
