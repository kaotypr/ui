import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A vertically stacked set of interactive headings that each reveal an associated section of content.\n\nThis component is built on top of [Radix UI Accordion](https://www.radix-ui.com/primitives/docs/components/accordion).\n\n### Component Parts\n- [AccordionItem](?path=/story/ui-accordion-accordionitem--default): Represents a single item within the accordion.\n- [AccordionTrigger](?path=/story/ui-accordion-accordiontrigger--default): The button that toggles the visibility of the item's content.\n- [AccordionContent](?path=/story/ui-accordion-accordioncontent--default): The content area that is shown or hidden when the item is toggled.",
      },
    },
  },
  argTypes: {
    type: {
      description:
        "Determines whether one or multiple items can be opened at the same time.",
      table: {
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
    value: {
      description:
        "The controlled value of the item(s) to expand. Use with onValueChange.",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    defaultValue: {
      description:
        "The value of the item(s) to expand by default (uncontrolled).",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "text" },
    },
    collapsible: {
      description:
        'When type is "single", allows closing content when clicking the trigger of an open item.',
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the accordion and all its items.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Radix UI Props",
      },
      control: { type: "boolean" },
    },
    dir: {
      description:
        "The reading direction. If omitted, inherits globally from DirectionProvider or assumes LTR.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "undefined" },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
    orientation: {
      description: "The orientation of the accordion.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"vertical"' },
        category: "Radix UI Props",
      },
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    onValueChange: {
      description:
        "Event handler called when the expanded state of an item changes.",
      table: {
        type: { summary: "(value: string | string[]) => void" },
        defaultValue: { summary: "undefined" },
        category: "Event Handlers",
      },
      action: "onValueChange",
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
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Accordion
      {...(args as any)}
      type="single"
      collapsible={args.type === "single" ? args.collapsible : undefined}
      className="w-[400px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
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
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: "single",
    collapsible: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A basic accordion with three items. Only one item can be open at a time.",
      },
    },
  },
}

export const Multiple: Story = {
  render: (args) => (
    <Accordion
      {...(args as any)}
      type="multiple"
      className="w-[400px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
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
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: "multiple",
  },
  parameters: {
    docs: {
      description: {
        story: "An accordion that allows multiple items to be open simultaneously.",
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("item-1")
    return (
      <Accordion
        {...(args as any)}
        type="single"
        value={value}
        onValueChange={(v) => {
          setValue(v as string)
          args.onValueChange?.(v as any)
        }}
        collapsible={args.type === "single" ? args.collapsible : undefined}
        className="w-[400px]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and uses semantic
            HTML.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  args: {
    type: "single",
    collapsible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled accordion where the open state is managed by React state.",
      },
    },
  },
}

export const Uncollapsible: Story = {
  render: (args) => (
    <Accordion
      {...(args as any)}
      type="single"
      collapsible={args.type === "single" ? args.collapsible : undefined}
      className="w-[400px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic
          HTML.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components'
          aesthetic.
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
  args: {
    type: "single",
    collapsible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "An accordion where items cannot be collapsed once opened (collapsible is false).",
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Accordion
      {...(args as any)}
      type="single"
      collapsible={args.type === "single" ? args.collapsible : undefined}
      className="w-[400px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Is it styled? (Disabled)</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components'
          aesthetic.
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
  args: {
    type: "single",
    collapsible: true,
  },
  parameters: {
    docs: {
      description: {
        story: "An accordion with one disabled item that cannot be interacted with.",
      },
    },
  },
}
