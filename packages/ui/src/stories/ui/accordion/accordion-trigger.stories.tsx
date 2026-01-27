import type { Meta, StoryObj } from "@storybook/react-vite"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion/AccordionTrigger",
  component: AccordionTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `The button that toggles the visibility of the item's content.
        
This component is built on top of [Base UI Accordion](https://base-ui.com/react/components/accordion).
        
Must be used within an \`AccordionItem\` component.`,
      },
    },
  },
  argTypes: {
    // Base UI Props
    nativeButton: {
      description:
        "Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `false` if the rendered element is not a button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
} satisfies Meta<typeof AccordionTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Accordion className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger {...args}>Click to toggle</AccordionTrigger>
        <AccordionContent>Content revealed!</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
