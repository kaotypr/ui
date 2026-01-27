import type { Meta, StoryObj } from "@storybook/react-vite"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Groups an accordion header with the corresponding panel.
        
This component is built on top of [Base UI Accordion](https://base-ui.com/react/components/accordion).
        
Must be used within an \`Accordion\` component.`,
      },
    },
  },
  argTypes: {
    // Base UI Props
    value: {
      description: "A unique value that identifies this accordion item.",
      table: {
        type: { summary: "any" },
        category: "Base UI Props",
      },
      control: { type: "text" },
    },
    disabled: {
      description: "Whether the item should ignore user interaction.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    render: {
      description:
        "Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
      table: {
        type: { summary: "ReactElement | (props, state) => ReactElement" },
        category: "Base UI Props",
      },
      control: false,
    },
    // Event Handlers
    onOpenChange: {
      description: "Event handler called when the panel is opened or closed.",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Event Handlers",
      },
    },
    // Styling
    className: {
      description: "CSS class applied to the element, or a function that returns a class based on the component’s state.",
      table: {
        type: { summary: "string | (state) => string" },
        category: "Styling",
      },
      control: { type: "text" },
    },
    style: {
      description: "Style applied to the element, or a function that returns a style object based on the component’s state.",
      table: {
        type: { summary: "CSSProperties | (state) => CSSProperties" },
        category: "Styling",
      },
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof AccordionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "item-1",
  },
  render: (args) => (
    <Accordion className="w-[400px]">
      <AccordionItem {...args}>
        <AccordionTrigger>Accordion Item</AccordionTrigger>
        <AccordionContent>This is the content of the accordion item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Disabled: Story = {
  args: {
    value: "item-disabled",
    disabled: true,
  },
  render: (args) => (
    <Accordion className="w-[400px]">
      <AccordionItem {...args}>
        <AccordionTrigger>Disabled Item</AccordionTrigger>
        <AccordionContent>This content cannot be accessed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
