import type { Meta, StoryObj } from "@storybook/react-vite"

import { Kbd, KbdGroup } from "~/components/ui/kbd"

const meta = {
	title: "UI/Kbd",
	component: Kbd,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A keyboard key indicator component used to display keyboard shortcuts and key combinations.

### Component Parts
- [KbdGroup](?path=/story/ui-kbd-kbdgroup--default): A container component for grouping multiple keyboard keys together.`,
			},
		},
	},
	argTypes: {
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
		children: {
			description: "The content to display inside the keyboard key indicator.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Kbd>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Ctrl",
	},
	parameters: {
		docs: {
			description: {
				story: "A single keyboard key indicator.",
			},
		},
	},
}

export const SingleKey: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Kbd>Enter</Kbd>
			<Kbd>Esc</Kbd>
			<Kbd>Tab</Kbd>
			<Kbd>Space</Kbd>
			<Kbd>Shift</Kbd>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Various single keyboard keys displayed together.",
			},
		},
	},
}

export const ModifierKeys: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Kbd>Ctrl</Kbd>
			<Kbd>Alt</Kbd>
			<Kbd>Cmd</Kbd>
			<Kbd>Shift</Kbd>
			<Kbd>Meta</Kbd>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Common modifier keys used in keyboard shortcuts.",
			},
		},
	},
}

export const WithKbdGroup: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span>+</span>
				<Kbd>C</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span>+</span>
				<Kbd>Shift</Kbd>
				<span>+</span>
				<Kbd>P</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Cmd</Kbd>
				<span>+</span>
				<Kbd>K</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Alt</Kbd>
				<span>+</span>
				<Kbd>F4</Kbd>
			</KbdGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Keyboard shortcuts displayed using KbdGroup to combine multiple keys.",
			},
		},
	},
}

export const InText: Story = {
	render: () => (
		<div className="space-y-2 text-sm">
			<p>
				Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
			</p>
			<p>
				Use <Kbd>Esc</Kbd> to close the dialog.
			</p>
			<p>
				Press <Kbd>Enter</Kbd> to submit the form.
			</p>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Keyboard keys used inline within text content.",
			},
		},
	},
}

export const ComplexShortcut: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<div className="text-sm text-muted-foreground">
				Toggle command palette:
			</div>
			<KbdGroup>
				<Kbd>Cmd</Kbd>
				<span>+</span>
				<Kbd>Shift</Kbd>
				<span>+</span>
				<Kbd>P</Kbd>
			</KbdGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A complex keyboard shortcut with multiple modifier keys.",
			},
		},
	},
}
