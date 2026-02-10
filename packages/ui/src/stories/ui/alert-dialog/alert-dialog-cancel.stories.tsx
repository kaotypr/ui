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
	title: "UI/AlertDialog/AlertDialogCancel",
	component: AlertDialogCancel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Secondary action that closes the alert dialog without performing the destructive action. Wraps the Base UI Close part with the Button component.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Label for the cancel button.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Props",
			},
			control: { type: "text" },
		},
		variant: {
			description: "Visual style variant of the underlying button.",
			table: {
				type: { summary: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
		},
		size: {
			description: "Size of the underlying button.",
			table: {
				type: { summary: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
		},
	},
} satisfies Meta<typeof AlertDialogCancel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Cancel",
		variant: "outline",
	},
	render: (args) => (
		<AlertDialog defaultOpen>
			<AlertDialogTrigger>
				<Button>Open dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete project</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete the project and all related
						resources.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel {...args} />
					<AlertDialogAction variant="destructive">Delete</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Cancel action used to safely close the dialog without applying the destructive change.",
			},
		},
	},
}
