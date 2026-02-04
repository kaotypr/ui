import type { Meta, StoryObj } from "@storybook/react-vite"

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialogCancel,
	AlertDialogAction,
} from "~/components/ui/alert-dialog"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/AlertDialog/AlertDialogTrigger",
	component: AlertDialogTrigger,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"The trigger element that opens the alert dialog. Must be used within an AlertDialog root.",
			},
		},
	},
	argTypes: {
		children: {
			description: "Content of the trigger, typically a button label or custom trigger element.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Props",
			},
			control: { type: "text" },
		},
		id: {
			description:
				"ID of the trigger. Used with the AlertDialog Root triggerId prop in controlled mode.",
			table: {
				type: { summary: "string" },
				category: "Base UI Props",
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
	},
} satisfies Meta<typeof AlertDialogTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<AlertDialog>
			<AlertDialogTrigger {...args}>
				<Button variant="default">Open alert dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your data.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction variant="destructive">Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
	parameters: {
		docs: {
			description: {
				story: "Basic trigger that opens an alert dialog when clicked.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger
				render={<span className="cursor-pointer text-red-600 underline hover:text-red-800" />}
			>
				Delete this item
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete item?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. Are you sure you want to delete this item?
					</AlertDialogDescription>
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
				story:
					"Use the `render` prop with a ReactElement to replace the default button element. Here the trigger is rendered as a styled span link.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger
				render={(props, state) => (
					<button
						{...props}
						className={`rounded px-4 py-2 font-medium ${
							state.open
								? "bg-red-700 text-white"
								: "bg-red-600 text-white hover:bg-red-700"
						}`}
					>
						{state.open ? "Dialog Open..." : "Delete Account"}
					</button>
				)}
			/>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete account?</AlertDialogTitle>
					<AlertDialogDescription>
						This will permanently delete your account and all associated data.
					</AlertDialogDescription>
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
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `open` (boolean) indicating if the dialog is currently open.",
			},
		},
	},
}
