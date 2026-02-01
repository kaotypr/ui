import type { Meta, StoryObj } from "@storybook/react-vite"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "~/components/ui/alert-dialog"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/AlertDialog/AlertDialogFooter",
	component: AlertDialogFooter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Footer area of the alert dialog, typically containing primary and secondary actions.",
			},
		},
	},
	argTypes: {
		className: {
			description: "Additional class names to apply to the footer container.",
			table: {
				type: { summary: "string" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof AlertDialogFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<AlertDialog defaultOpen>
			<AlertDialogTrigger>
				<Button>Open dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Sign out</AlertDialogTitle>
					<AlertDialogDescription>
						You will need to sign in again to access your account.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter {...args}>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Sign out</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
	parameters: {
		docs: {
			description: {
				story: "Footer with cancel and primary action buttons.",
			},
		},
	},
}
