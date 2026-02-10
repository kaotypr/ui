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
	title: "UI/AlertDialog/AlertDialogDescription",
	component: AlertDialogDescription,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Provides additional descriptive text for the alert dialog. Must be used inside AlertDialogHeader.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Descriptive text explaining the consequences of the action.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Props",
			},
			control: { type: "text" },
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a `ReactElement` or a function that returns the element to render.",
			table: {
				type: { summary: "ReactElement | (props, state) => ReactElement" },
				category: "Base UI Props",
			},
			control: false,
		},
		className: {
			description: "Additional class names to apply to the description element.",
			table: {
				type: { summary: "string" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof AlertDialogDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children:
			"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
	},
	render: (args) => (
		<AlertDialog defaultOpen>
			<AlertDialogTrigger>
				<Button>Open dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete account</AlertDialogTitle>
					<AlertDialogDescription {...args} />
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction variant="destructive">Delete</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
	parameters: {
		docs: {
			description: {
				story: "Description text providing more detail about the alert.",
			},
		},
	},
}
