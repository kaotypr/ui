import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "~/components/ui/hover-card"

const meta = {
	title: "UI/HoverCard/HoverCardTrigger",
	component: HoverCardTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A link that opens the hover card on hover. Must be used within a HoverCard component.

This component is built on top of [Base UI Preview Card](https://base-ui.com/react/components/preview-card).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
		},
		delay: {
			description: "How long to wait before the preview card opens. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "600" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description: "How long to wait before closing the preview card. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "300" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		payload: {
			description: "A payload to pass to the preview card when it is opened.",
			table: {
				type: { summary: "any" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "object" },
		},
		handle: {
			description:
				"A handle to associate the trigger with a preview card. Can be created with PreviewCard.createHandle().",
			table: {
				type: { summary: "PreviewCard.Handle" },
				defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof HoverCardTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger {...args}>
					<a href="#" className="text-blue-600 underline">
						Hover over this link
					</a>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Preview Card</h4>
						<p className="text-sm text-muted-foreground">
							A popup that appears when a link is hovered.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default trigger that opens the hover card on hover.",
			},
		},
	},
}

export const CustomDelay: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger delay={1000} closeDelay={500}>
					<a href="#" className="text-blue-600 underline">
						Hover with custom delay (1s open, 0.5s close)
					</a>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Custom Delay</h4>
						<p className="text-sm text-muted-foreground">
							This hover card has a longer delay before opening and closing.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Trigger with custom delay settings for opening and closing the hover card.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger>
					<a
						href="#"
						className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
					>
						Styled trigger button
					</a>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Custom Styled Trigger</h4>
						<p className="text-sm text-muted-foreground">
							The trigger can be styled as a button or any other element.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
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
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger render={<span />}>
					<span className="text-blue-600 underline cursor-pointer">Hover over this span</span>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Custom Element</h4>
						<p className="text-sm text-muted-foreground">
							The trigger is rendered as a span element instead of an anchor.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a ReactElement to replace the default anchor element with a different HTML tag.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger
					render={(props, state) => (
						<a
							{...props}
							href="#"
							className={`inline-block transition-colors ${
								state.open ? "text-primary font-semibold" : "text-blue-600 underline"
							}`}
						>
							{state.open ? "Card is showing" : "Hover to preview"}
						</a>
					)}
				/>
				<HoverCardContent>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">State Access</h4>
						<p className="text-sm text-muted-foreground">
							The trigger changes text and style based on the open state.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean).",
			},
		},
	},
}
