import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"
import { Toaster } from "~/components/ui/sonner"
import { Button } from "~/components/ui/button"

const meta = {
	title: "UI/Sonner",
	component: Toaster,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A toast notification component for displaying temporary messages to users.

This component is built on top of [Sonner](https://sonner.emilkowal.ski/).`,
			},
		},
	},
	argTypes: {
		// Sonner Props
		theme: {
			description:
				"The theme of the toaster. Can be 'light', 'dark', or 'system'.",
			table: {
				type: { summary: '"light" | "dark" | "system"' },
				defaultValue: { summary: '"system"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["light", "dark", "system"],
		},
		richColors: {
			description:
				"When true, toasts will use richer colors for better visual distinction.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		expand: {
			description:
				"When true, toasts will be expanded by default instead of only on hover.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		visibleToasts: {
			description:
				"The maximum number of visible toasts when expand is true.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "3" },
				category: "Props",
			},
			control: { type: "number" },
		},
		id: {
			description:
				"A unique identifier for the toaster. Useful when rendering multiple toasters.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		position: {
			description:
				"The position where toasts will be rendered on the screen.",
			table: {
				type: {
					summary:
						'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
				},
				defaultValue: { summary: '"bottom-right"' },
				category: "Props",
			},
			control: { type: "select" },
			options: [
				"top-left",
				"top-center",
				"top-right",
				"bottom-left",
				"bottom-center",
				"bottom-right",
			],
		},
		closeButton: {
			description:
				"When true, each toast will display a close button.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		offset: {
			description:
				"The offset from the edge of the screen. Can be a number (px), string (e.g., '10vh'), or object with side-specific values.",
			table: {
				type: { summary: "string | number | object" },
				defaultValue: { summary: '"32px"' },
				category: "Props",
			},
			control: { type: "text" },
		},
		mobileOffset: {
			description:
				"The offset for mobile screens (width < 600px). Can be a number (px), string (e.g., '10vh'), or object with side-specific values.",
			table: {
				type: { summary: "string | number | object" },
				defaultValue: { summary: '"16px"' },
				category: "Props",
			},
			control: { type: "text" },
		},
		swipeDirections: {
			description:
				"Array of directions where swiping will dismiss the toast. Defaults based on position.",
			table: {
				type: { summary: "string[]" },
				defaultValue: { summary: "based on position" },
				category: "Props",
			},
			control: false,
		},
		dir: {
			description: "The reading direction. 'ltr' or 'rtl'.",
			table: {
				type: { summary: '"ltr" | "rtl"' },
				defaultValue: { summary: '"ltr"' },
				category: "Props",
			},
			control: { type: "radio" },
			options: ["ltr", "rtl"],
		},
		hotkey: {
			description:
				"The keyboard shortcut to focus the toast area. Default is '⌥/alt + T'.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"⌥/alt + T"' },
				category: "Props",
			},
			control: { type: "text" },
		},
		invert: {
			description:
				"When true, inverts the theme colors for better contrast.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		toastOptions: {
			description:
				"Default options for all toasts. Can include duration, className, etc.",
			table: {
				type: { summary: "object" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		gap: {
			description: "The gap between toasts in pixels.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "14" },
				category: "Props",
			},
			control: { type: "number" },
		},
		icons: {
			description:
				"Custom icons for different toast types (success, error, info, warning, loading).",
			table: {
				type: { summary: "object" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
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
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<div className="flex flex-col items-center gap-4">
			<Toaster {...args} />
			<div className="flex flex-wrap items-center gap-2">
				<Button
					onClick={() => toast("Hello, world!")}
					variant="default"
				>
					Default Toast
				</Button>
				<Button
					onClick={() =>
						toast.success("Operation completed successfully!")
					}
					variant="default"
				>
					Success Toast
				</Button>
				<Button
					onClick={() => toast.error("Something went wrong!")}
					variant="destructive"
				>
					Error Toast
				</Button>
				<Button
					onClick={() => toast.info("Here's some information")}
					variant="outline"
				>
					Info Toast
				</Button>
				<Button
					onClick={() => toast.warning("Please be careful")}
					variant="outline"
				>
					Warning Toast
				</Button>
				<Button
					onClick={() => toast.loading("Processing...")}
					variant="secondary"
				>
					Loading Toast
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default toaster with buttons to trigger different toast types.",
			},
		},
	},
}

export const ToastTypes: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<Toaster />
			<div className="flex flex-col gap-2">
				<Button
					onClick={() =>
						toast("Default toast message", {
							description: "This is a default toast notification.",
						})
					}
					variant="default"
				>
					Default Toast
				</Button>
				<Button
					onClick={() =>
						toast.success("Success!", {
							description:
								"Your action was completed successfully.",
						})
					}
					variant="default"
				>
					Success Toast
				</Button>
				<Button
					onClick={() =>
						toast.error("Error occurred", {
							description: "Something went wrong. Please try again.",
						})
					}
					variant="destructive"
				>
					Error Toast
				</Button>
				<Button
					onClick={() =>
						toast.info("Information", {
							description: "Here's some useful information for you.",
						})
					}
					variant="outline"
				>
					Info Toast
				</Button>
				<Button
					onClick={() =>
						toast.warning("Warning", {
							description: "Please review this before proceeding.",
						})
					}
					variant="outline"
				>
					Warning Toast
				</Button>
				<Button
					onClick={() =>
						toast.loading("Loading", {
							description: "Please wait while we process your request.",
						})
					}
					variant="secondary"
				>
					Loading Toast
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates all available toast types with descriptions.",
			},
		},
	},
}

export const Positions: Story = {
	render: () => {
		const positions = [
			"top-left",
			"top-center",
			"top-right",
			"bottom-left",
			"bottom-center",
			"bottom-right",
		] as const

		return (
			<div className="flex flex-col items-center gap-8">
				{positions.map((position) => (
					<div key={position} className="flex flex-col gap-2">
						<Toaster position={position} id={position} />
						<Button
							onClick={() =>
								toast(`Toast from ${position}`, {
									toasterId: position,
								})
							}
							variant="outline"
						>
							{position}
						</Button>
					</div>
				))}
			</div>
		)
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates toasts positioned at different locations on the screen. Each position has its own toaster instance.",
			},
		},
	},
}

export const WithCloseButton: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<Toaster closeButton />
			<div className="flex flex-wrap items-center gap-2">
				<Button
					onClick={() => toast("Toast with close button")}
					variant="default"
				>
					Show Toast
				</Button>
				<Button
					onClick={() =>
						toast.success("Success with close button", {
							description: "You can close this toast manually.",
						})
					}
					variant="default"
				>
					Success Toast
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Toasts with close buttons enabled for manual dismissal.",
			},
		},
	},
}

export const Expanded: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<Toaster expand visibleToasts={5} />
			<div className="flex flex-col gap-2">
				<Button
					onClick={() => {
						toast("Toast 1")
						toast("Toast 2")
						toast("Toast 3")
						toast("Toast 4")
						toast("Toast 5")
					}}
					variant="default"
				>
					Show 5 Toasts
				</Button>
				<Button
					onClick={() =>
						toast("Expanded toast", {
							description:
								"This toast is expanded by default instead of only on hover.",
						})
					}
					variant="outline"
				>
					Single Expanded Toast
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Toasts that are expanded by default, showing up to 5 visible toasts.",
			},
		},
	},
}

export const CustomDuration: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<Toaster />
			<div className="flex flex-col gap-2">
				<Button
					onClick={() =>
						toast("Short duration toast", { duration: 2000 })
					}
					variant="default"
				>
					2 Seconds
				</Button>
				<Button
					onClick={() =>
						toast("Long duration toast", { duration: 10000 })
					}
					variant="default"
				>
					10 Seconds
				</Button>
				<Button
					onClick={() =>
						toast("Persistent toast", { duration: Infinity })
					}
					variant="outline"
				>
					Persistent (No Auto-dismiss)
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Toasts with custom durations, including persistent toasts that don't auto-dismiss.",
			},
		},
	},
}

export const WithActions: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<Toaster />
			<div className="flex flex-col gap-2">
				<Button
					onClick={() =>
						toast("File uploaded", {
							description: "Your file has been uploaded successfully.",
							action: {
								label: "View",
								onClick: () => toast("Opening file..."),
							},
						})
					}
					variant="default"
				>
					Toast with Action
				</Button>
				<Button
					onClick={() =>
						toast.error("Failed to upload", {
							description: "There was an error uploading your file.",
							action: {
								label: "Retry",
								onClick: () => toast("Retrying upload..."),
							},
							cancel: {
								label: "Cancel",
								onClick: () => toast("Cancelled"),
							},
						})
					}
					variant="destructive"
				>
					Toast with Action & Cancel
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Toasts with action buttons and optional cancel buttons for user interaction.",
			},
		},
	},
}

export const RichColors: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<Toaster richColors />
			<div className="flex flex-wrap items-center gap-2">
				<Button
					onClick={() => toast.success("Success with rich colors")}
					variant="default"
				>
					Success
				</Button>
				<Button
					onClick={() => toast.error("Error with rich colors")}
					variant="destructive"
				>
					Error
				</Button>
				<Button
					onClick={() => toast.info("Info with rich colors")}
					variant="outline"
				>
					Info
				</Button>
				<Button
					onClick={() => toast.warning("Warning with rich colors")}
					variant="outline"
				>
					Warning
				</Button>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Toasts with rich colors enabled for better visual distinction.",
			},
		},
	},
}
