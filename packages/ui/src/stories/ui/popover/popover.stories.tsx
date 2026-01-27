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
	title: "UI/Popover",
	component: Popover,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An accessible popup anchored to a button.

This component is built on top of [Base UI Popover](https://base-ui.com/react/components/popover).

### Component Parts
- [PopoverTrigger](?path=/story/ui-popover-popovertrigger--default): A button that opens the popover.
- [PopoverContent](?path=/story/ui-popover-popovercontent--default): A container for the popover contents.
- [PopoverHeader](?path=/story/ui-popover-popoverheader--default): A container for the popover header content.
- [PopoverTitle](?path=/story/ui-popover-popovertitle--default): A heading that labels the popover.
- [PopoverDescription](?path=/story/ui-popover-popoverdescription--default): A paragraph with additional information about the popover.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		defaultOpen: {
			description:
				"Whether the popover is initially open. To render a controlled popover, use the open prop instead.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		open: {
			description: "Whether the popover is currently open.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		onOpenChange: {
			description:
				"Event handler called when the popover is opened or closed.",
			table: {
				type: {
					summary:
						"(open: boolean, eventDetails: Popover.Root.ChangeEventDetails) => void",
				},
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChange",
		},
		onOpenChangeComplete: {
			description:
				"Event handler called after any animations complete when the popover is opened or closed.",
			table: {
				type: { summary: "(open: boolean) => void" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onOpenChangeComplete",
		},
		defaultTriggerId: {
			description:
				"ID of the trigger that the popover is associated with. This is useful in conjunction with the defaultOpen prop to create an initially open popover.",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		triggerId: {
			description:
				"ID of the trigger that the popover is associated with. This is useful in conjunction with the open prop to create a controlled popover.",
			table: {
				type: { summary: "string | null" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
		},
		modal: {
			description:
				"Determines if the popover enters a modal state when open. When true, user interaction is limited to the popover: document page scroll is locked, and pointer interactions on outside elements are disabled.",
			table: {
				type: { summary: 'boolean | "trap-focus"' },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "select" },
			options: [false, true, "trap-focus"],
		},
	},
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover
				{...args}
				open={open}
				onOpenChange={(newOpen) => {
					setOpen(newOpen)
					args.onOpenChange?.(newOpen, {} as any)
				}}
			>
				<PopoverTrigger>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Are you absolutely sure?</PopoverTitle>
						<PopoverDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
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
					"Default popover with trigger button and content containing title and description.",
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
						<PopoverDescription>
							This popover provides additional context and information about the
							feature or action.
						</PopoverDescription>
					</PopoverHeader>
				</PopoverContent>
			</Popover>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Popover with an icon in the trigger button.",
			},
		},
	},
}

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<div className="space-y-4">
				<Button
					type="button"
					onClick={() => setOpen(!open)}
					variant="outline"
				>
					{open ? "Close Popover" : "Open Popover"}
				</Button>
				<Popover
					{...args}
					open={open}
					onOpenChange={(newOpen) => {
						setOpen(newOpen)
						args.onOpenChange?.(newOpen, {} as any)
					}}
				>
					<PopoverTrigger>
						<Button variant="outline">Controlled popover</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverHeader>
							<PopoverTitle>Controlled Mode</PopoverTitle>
							<PopoverDescription>
								This popover's open state is managed externally.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>
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
					"Controlled popover where the open state is managed externally.",
			},
		},
	},
}

export const InitiallyOpen: Story = {
	render: () => {
		return (
			<Popover defaultOpen>
				<PopoverTrigger>
					<Button variant="outline">Popover (initially open)</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Initially Open</PopoverTitle>
						<PopoverDescription>
							This popover is open by default using the defaultOpen prop.
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
					"Popover that is initially open using the defaultOpen prop.",
			},
		},
	},
}

export const Modal: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Popover open={open} onOpenChange={setOpen} modal>
				<PopoverTrigger>
					<Button variant="outline">Open modal popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverHeader>
						<PopoverTitle>Modal Popover</PopoverTitle>
						<PopoverDescription>
							This popover is in modal mode. User interaction is limited to
							the popover, and document page scroll is locked.
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
					"Modal popover where user interaction is limited to the popover.",
			},
		},
	},
}
