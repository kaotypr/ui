import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
} from "~/components/ui/hover-card"

const meta = {
	title: "UI/HoverCard",
	component: HoverCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A popup that appears when a link is hovered, showing a preview for sighted users.

This component is built on top of [Base UI Preview Card](https://base-ui.com/react/components/preview-card).

### Component Parts
- [HoverCardTrigger](?path=/story/ui-hovercard-hovercardtrigger--default): A link that opens the hover card on hover.
- [HoverCardContent](?path=/story/ui-hovercard-hovercardcontent--default): A container for the hover card contents.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultOpen: {
			description:
				"Whether the preview card is initially open. To render a controlled preview card, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the preview card is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description:
				"Event handler called when the preview card is opened or closed.",
			table: {
				type: {
					summary:
						"(open: boolean, eventDetails: PreviewCard.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the preview card is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
		},
		defaultTriggerId: {
			description:
				"ID of the trigger that the preview card is associated with. This is useful in conjunction with the defaultOpen prop to create an initially open preview card.",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		triggerId: {
			description:
				"ID of the trigger that the preview card is associated with. This is useful in conjunction with the open prop to create a controlled preview card.",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof HoverCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen, {} as any)
				}}
			>
				<HoverCardTrigger>
					<a href="#" className="text-blue-600 underline">
						Hover over this link
					</a>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Preview Card</h4>
						<p className="text-sm text-muted-foreground">
							A popup that appears when a link is hovered, showing a preview
							for sighted users.
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
					"Default hover card that appears when hovering over a link.",
			},
		},
	},
}

export const WithRichContent: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<HoverCard open={open} onOpenChange={setOpen}>
				<HoverCardTrigger>
					<a href="#" className="text-blue-600 underline">
						Typography
					</a>
				</HoverCardTrigger>
				<HoverCardContent className="w-80">
					<div className="space-y-3">
						<h4 className="text-sm font-semibold">Typography</h4>
						<p className="text-sm text-muted-foreground">
							Typography is the art and science of arranging type to make
							written language clear, visually appealing, and effective in
							communication.
						</p>
						<div className="text-xs text-muted-foreground">
							Learn more about typography principles and best practices.
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Hover card with rich content including title, description, and additional information.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<button
					type="button"
					onClick={() => setOpen(!open)}
					className="rounded-md border px-4 py-2 text-sm"
				>
					{open ? "Close Hover Card" : "Open Hover Card"}
				</button>
				<HoverCard
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, {} as any)
					}}
				>
					<HoverCardTrigger>
						<a href="#" className="text-blue-600 underline">
							Controlled hover card
						</a>
					</HoverCardTrigger>
					<HoverCardContent>
						<div className="space-y-2">
							<h4 className="text-sm font-semibold">Controlled Mode</h4>
							<p className="text-sm text-muted-foreground">
								This hover card's open state is managed externally.
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>
		)
	},
	args: {
		open: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Controlled hover card where the open state is managed externally.",
			},
		},
	},
}
