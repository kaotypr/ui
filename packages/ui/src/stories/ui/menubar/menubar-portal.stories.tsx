import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarPortal,
} from "~/components/ui/menubar"

const meta = {
	title: "UI/Menubar/MenubarPortal",
	component: MenubarPortal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A portal element that moves the popup to a different part of the DOM. By default, the portal element is appended to document.body.

This component is built on top of [Base UI Menu](https://base-ui.com/react/components/menu).`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		container: {
			description: "A parent element to render the portal element into.",
			table: {
				type: { summary: "HTMLElement | ShadowRoot | RefObject | null" },
				defaultValue: { summary: "document.body" },
				category: "Base UI Props",
			},
			control: false,
		},
		keepMounted: {
			description: "Whether to keep the portal mounted in the DOM while the popup is hidden.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Base UI Props",
			},
			control: { type: "boolean" },
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
} satisfies Meta<typeof MenubarPortal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Menubar>
				<MenubarMenu open={open} onOpenChange={setOpen}>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarPortal {...args}>
						<MenubarContent>
							<MenubarItem>Copy</MenubarItem>
							<MenubarItem>Cut</MenubarItem>
							<MenubarItem>Paste</MenubarItem>
						</MenubarContent>
					</MenubarPortal>
				</MenubarMenu>
			</Menubar>
		)
	},
	parameters: {
		docs: {
			description: {
				story: "Default portal that renders the menu content in a different part of the DOM.",
			},
		},
	},
}

export const WithCustomContainer: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)
		const containerRef = React.useRef<HTMLDivElement>(null)

		return (
			<div className="space-y-4">
				<div ref={containerRef} className="h-32 w-full rounded-md border border-dashed p-4">
					Custom portal container
				</div>
				<Menubar>
					<MenubarMenu open={open} onOpenChange={setOpen}>
						<MenubarTrigger>File</MenubarTrigger>
						<MenubarPortal container={containerRef.current}>
							<MenubarContent>
								<MenubarItem>Copy</MenubarItem>
								<MenubarItem>Cut</MenubarItem>
								<MenubarItem>Paste</MenubarItem>
							</MenubarContent>
						</MenubarPortal>
					</MenubarMenu>
				</Menubar>
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Portal with a custom container element. The menu content will be rendered inside the specified container.",
			},
		},
	},
}
