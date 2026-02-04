import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarTrigger",
	component: MenubarTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The button that opens the menu. Must be used within a MenubarMenu component.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
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
			description: "A handle to associate the trigger with a menu.",
			table: {
				type: { summary: "Menu.Handle<Payload>" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
		nativeButton: {
			description:
				"Whether the component renders a native button element when replacing it via the render prop.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		payload: {
			description: "A payload to pass to the menu when it is opened.",
			table: {
				type: { summary: "Payload" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
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
		openOnHover: {
			description: "Whether the menu should also open when the trigger is hovered.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
		},
		delay: {
			description:
				"How long to wait before the menu may be opened on hover. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description:
				"How long to wait before closing the menu that was opened on hover. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Base UI Props",
			},
			control: { type: "number" },
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
} satisfies Meta<typeof MenubarTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger {...args}>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>New</MenubarItem>
						<MenubarItem>Open</MenubarItem>
						<MenubarItem>Save</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default trigger button that opens the menubar menu.",
			},
		},
	},
}

export const CustomStyling: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger className="rounded-lg border-2 border-blue-500 bg-blue-50 px-6 py-3 text-blue-900 font-semibold">
						Custom styled trigger
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Action 1</MenubarItem>
						<MenubarItem>Action 2</MenubarItem>
						<MenubarItem>Action 3</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
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

export const Disabled: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger disabled>Disabled Trigger</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Disabled trigger that cannot open the menu.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger
						render={<div className="cursor-pointer" />}
						nativeButton={false}
						className="rounded-md border border-dashed px-4 py-2 hover:bg-accent"
					>
						Click this div
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
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
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger
						render={(props, state) => (
							<button
								{...props}
								className={`rounded-sm px-3 py-1.5 text-sm font-medium transition-colors ${
									state.open
										? "bg-accent text-accent-foreground"
										: "hover:bg-accent/50"
								}`}
							>
								{state.open ? "Menu Open" : "File"}
							</button>
						)}
					/>
					<MenubarContent>
						<MenubarItem>New</MenubarItem>
						<MenubarItem>Open</MenubarItem>
						<MenubarItem>Save</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean) and `disabled` (boolean).",
			},
		},
	},
}
