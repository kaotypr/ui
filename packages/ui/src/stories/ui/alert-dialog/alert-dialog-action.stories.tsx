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
	title: "UI/AlertDialog/AlertDialogAction",
	component: AlertDialogAction,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Primary action button for the alert dialog, built on top of the Button component.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Label for the primary action button.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Props",
			},
			control: { type: "text" },
		},
		variant: {
			description: "Visual style variant of the button.",
			table: {
				type: { summary: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
		},
		size: {
			description: "Size of the button.",
			table: {
				type: { summary: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
		},
	},
} satisfies Meta<typeof AlertDialogAction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Continue",
		variant: "default",
	},
	render: (args) => (
		<AlertDialog defaultOpen>
			<AlertDialogTrigger>
				<Button>Open dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Confirm action</AlertDialogTitle>
					<AlertDialogDescription>
						Please confirm that you want to proceed with this action.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction {...args} />
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
	parameters: {
		docs: {
			description: {
				story: "Primary action button used to confirm the alert dialog action.",
			},
		},
	},
}
