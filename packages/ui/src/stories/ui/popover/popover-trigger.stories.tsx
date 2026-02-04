import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverTitle,
	PopoverDescription,
} from "~/components/ui/popover"
import { Button } from "~/components/ui/button"
import { InfoIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Popover/PopoverTrigger",
	component: PopoverTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that opens the popover. Must be used within a Popover component.

This component is built on top of [Base UI Popover](https://base-ui.com/react/components/popover).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		handle: {
			description:
				"A handle to associate the trigger with a popover. Can be created with Popover.createHandle().",
			table: {
				type: { summary: "Popover.Handle" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop. Set to false if the rendered element is not a button.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		payload: {
			description: "A payload to pass to the popover when it is opened.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "object" },
		},
		openOnHover: {
			description: "Whether the popover should also open when the trigger is hovered.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		delay: {
			description:
				"How long to wait before the popover may be opened on hover. Specified in milliseconds. Requires the openOnHover prop.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "300" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description:
				"How long to wait before closing the popover that was opened on hover. Specified in milliseconds. Requires the openOnHover prop.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		id: {
			description:
				"ID of the trigger. In addition to being forwarded to the rendered element, it is also used to specify the active trigger for the popover in controlled mode.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
		},
		// Styling
		className: {
			description: "Additional CSS class names to apply.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof PopoverTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger {...args}>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Popover Title</PopoverTitle>
						<PopoverDescription>
							This is the default trigger that opens the popover on click.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default trigger that opens the popover on click.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button variant="outline">
						<InfoIcon className="mr-2 h-4 w-4" />
						More information
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Information</PopoverTitle>
						<PopoverDescription>Trigger with an icon to provide visual context.</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger with an icon for better visual context.",
			},
		},
	},
}

export const OpenOnHover: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger openOnHover delay={300} closeDelay={200}>
					<Button variant="outline">Hover to open</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Hover Trigger</PopoverTitle>
						<PopoverDescription>
							This popover opens when you hover over the trigger button.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger that opens the popover on hover with custom delay settings.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button
						variant="outline"
						className="border-2 border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100"
					>
						Custom styled trigger
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Custom Styled Trigger</PopoverTitle>
						<PopoverDescription>The trigger can be styled with custom classes.</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger with custom styling applied via className.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					render={<span className="cursor-pointer text-blue-600 underline hover:text-blue-800" />}
					nativeButton={false}
				>
					Click for more info
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Custom Element Trigger</PopoverTitle>
						<PopoverDescription>
							The trigger is rendered as a span element instead of a button.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a ReactElement to replace the default button element. Set `nativeButton={false}` when the rendered element is not a button.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					render={(props, state) => (
						<button
							{...props}
							className={`rounded px-4 py-2 font-medium transition-colors ${
								state.open
									? "bg-blue-700 text-white"
									: "bg-blue-600 text-white hover:bg-blue-700"
							}`}
						>
							{state.open ? "Popover Open" : "Click to Open"}
						</button>
					)}
				/>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>State-Aware Trigger</PopoverTitle>
						<PopoverDescription>
							The trigger text and style change based on the popover's open state.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean) indicating if the popover is currently open.",
			},
		},
	},
}
