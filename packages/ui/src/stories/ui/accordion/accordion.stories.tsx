import type { Meta, StoryObj } from "@storybook/react-vite"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A vertically stacked set of interactive headings that each reveal an associated section of content.

This component is built on top of [Base UI Accordion](https://base-ui.com/react/components/accordion).

### Component Parts
- [AccordionItem](?path=/story/ui-accordion-accordionitem--default): Groups an accordion header with the corresponding panel.
- [AccordionTrigger](?path=/story/ui-accordion-accordiontrigger--default): Toggles the visibility of the item's content.
- [AccordionContent](?path=/story/ui-accordion-accordioncontent--default): The content area that is shown or hidden.`,
      },
    },
  },
  argTypes: {
    // Base UI Props
    value: {
      description: "The controlled value of the item(s) that should be expanded.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: { type: "object" },
    },
    defaultValue: {
      description: "The uncontrolled value of the item(s) that should be initially expanded.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: { type: "object" },
    },
    disabled: {
      description: "Whether the component should ignore user interaction.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    hiddenUntilFound: {
      description: "Allows the browser's built-in page search to find and expand the panel contents.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    keepMounted: {
      description: "Whether to keep the element in the DOM while the panel is closed.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    loopFocus: {
      description: "Whether to loop keyboard focus back to the first item when the end of the list is reached.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    multiple: {
      description: "Whether multiple items can be open at the same time.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Base UI Props",
      },
      control: { type: "boolean" },
    },
    orientation: {
      description: "The visual orientation of the accordion.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "vertical" },
        category: "Base UI Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    dir: {
      description: "The reading direction.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "Base UI Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
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
    onValueChange: {
      description: "Event handler called when an accordion item is expanded or collapsed.",
      table: {
        type: { summary: "(value: string[]) => void" },
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
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Accordion {...args} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>This is the first item's content.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>This is the second item's content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
