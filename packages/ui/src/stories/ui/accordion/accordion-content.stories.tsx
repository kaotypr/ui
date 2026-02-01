import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "~/components/ui/accordion"

const meta = {
	title: "UI/Accordion/AccordionContent",
	component: AccordionContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The content area that is shown or hidden when the item is toggled.
        
This component is built on top of [Base UI Accordion](https://base-ui.com/react/components/accordion).
        
Must be used within an \`AccordionItem\` component.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		hiddenUntilFound: {
			description:
				"Allows the browser's built-in page search to find and expand the panel contents.",
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
			description:
				"CSS class applied to the element, or a function that returns a class based on the component’s state.",
			table: {
				type: { summary: "string | (state) => string" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		style: {
			description:
				"Style applied to the element, or a function that returns a style object based on the component’s state.",
			table: {
				type: { summary: "CSSProperties | (state) => CSSProperties" },
				category: "Styling",
			},
			control: { type: "object" },
		},
	},
} satisfies Meta<typeof AccordionContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Accordion className="w-[400px]" defaultValue={["item-1"]}>
			<AccordionItem value="item-1">
				<AccordionTrigger>Expanded by default</AccordionTrigger>
				<AccordionContent {...args}>
					This content is visible because the item is expanded.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
}
