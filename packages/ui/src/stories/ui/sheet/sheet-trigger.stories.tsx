import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sheet/SheetTrigger",
	component: SheetTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A button that opens the sheet. Must be used within a Sheet component.

This component is built on top of [Base UI Dialog](https://base-ui.com/react/components/dialog).`,
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
		handle: {
			description:
				"A handle to associate the trigger with a sheet. Can be created with the Dialog.createHandle() method.",
			table: {
				type: { summary: "Dialog.Handle<Payload>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop. Set to false if the rendered element is not a button (e.g. div).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		payload: {
			description: "A payload to pass to the sheet when it is opened.",
			table: {
				type: { summary: "Payload" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		id: {
			description:
				"ID of the trigger. In addition to being forwarded to the rendered element, it is also used to specify the active trigger for the sheets in controlled mode.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "text" },
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
} satisfies Meta<typeof SheetTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger {...args}>
					<Button>Open Sheet</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Default sheet trigger that opens the sheet when clicked.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default sheet trigger with a button element.",
			},
		},
	},
}

export const WithAsChild: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Button variant="outline">Open with asChild</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Sheet trigger using asChild prop to compose with a Button component.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet trigger using the asChild prop to compose with a custom button element.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
					Custom Styled Trigger
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							Sheet trigger with custom styling applied via className.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Sheet trigger with custom styling applied via className.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger
					render={<div className="cursor-pointer" />}
					nativeButton={false}
					className="rounded-md border border-dashed p-4 hover:bg-accent"
				>
					Click this div to open sheet
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							The trigger is rendered as a div element instead of a button.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
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
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger
					render={(props, state) => (
						<Button
							{...props}
							variant={state.popupOpen ? "default" : "outline"}
						>
							{state.popupOpen ? "Sheet is open" : "Open Sheet"}
						</Button>
					)}
				/>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>
							The trigger uses a render function to access the popup state.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `popupOpen` (boolean).",
			},
		},
	},
}
