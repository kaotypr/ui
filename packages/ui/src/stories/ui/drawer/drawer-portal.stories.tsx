import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import {
	Drawer,
	DrawerTrigger,
	DrawerPortal,
	DrawerContent,
	DrawerOverlay,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
} from "~/components/ui/drawer"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Drawer/DrawerPortal",
	component: DrawerPortal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `When used, portals your overlay and content parts into the body. Typically used automatically by DrawerContent, but can be used manually if needed.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {},
} satisfies Meta<typeof DrawerPortal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		const [open, setOpen] = React.useState<boolean>(false)

		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button>Open Drawer</Button>
				</DrawerTrigger>
				<DrawerPortal>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Manual Portal Usage</DrawerTitle>
							<DrawerDescription>
								The portal is typically included automatically by DrawerContent.
								This example shows manual portal usage.
							</DrawerDescription>
						</DrawerHeader>
						<div className="p-4">
							<p className="text-sm text-muted-foreground">
								Drawer content goes here.
							</p>
						</div>
						<div className="p-4">
							<DrawerClose asChild>
								<Button variant="outline">Close</Button>
							</DrawerClose>
						</div>
					</DrawerContent>
				</DrawerPortal>
			</Drawer>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Manual portal usage. Note: DrawerContent automatically includes a portal, so manual portal usage is rarely needed.",
			},
		},
	},
}
