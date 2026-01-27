import type { Meta, StoryObj } from "@storybook/react-vite"

import { Kbd, KbdGroup } from "~/components/ui/kbd"

const meta = {
	title: "UI/Kbd/KbdGroup",
	component: KbdGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A container component for grouping multiple keyboard keys together to display keyboard shortcuts and key combinations.`,
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
			description: "The keyboard keys and separators to display.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof KbdGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<KbdGroup {...args}>
			<Kbd>Ctrl</Kbd>
			<span>+</span>
			<Kbd>C</Kbd>
		</KbdGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "A simple keyboard shortcut with two keys.",
			},
		},
	},
}

export const ThreeKeys: Story = {
	render: (args) => (
		<KbdGroup {...args}>
			<Kbd>Ctrl</Kbd>
			<span>+</span>
			<Kbd>Shift</Kbd>
			<span>+</span>
			<Kbd>P</Kbd>
		</KbdGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "A keyboard shortcut with three keys including two modifiers.",
			},
		},
	},
}

export const MultipleShortcuts: Story = {
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
				<Kbd>V</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span>+</span>
				<Kbd>X</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span>+</span>
				<Kbd>Z</Kbd>
			</KbdGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple keyboard shortcuts displayed together.",
			},
		},
	},
}

export const WithCmdKey: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<KbdGroup>
				<Kbd>Cmd</Kbd>
				<span>+</span>
				<Kbd>K</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Cmd</Kbd>
				<span>+</span>
				<Kbd>Shift</Kbd>
				<span>+</span>
				<Kbd>N</Kbd>
			</KbdGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Keyboard shortcuts using the Command key (macOS style).",
			},
		},
	},
}

export const ComplexShortcut: Story = {
	render: () => (
		<KbdGroup>
			<Kbd>Alt</Kbd>
			<span>+</span>
			<Kbd>Shift</Kbd>
			<span>+</span>
			<Kbd>Ctrl</Kbd>
			<span>+</span>
			<Kbd>T</Kbd>
		</KbdGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "A complex keyboard shortcut with multiple modifier keys.",
			},
		},
	},
}

export const WithFunctionKeys: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span>+</span>
				<Kbd>F1</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Shift</Kbd>
				<span>+</span>
				<Kbd>F12</Kbd>
			</KbdGroup>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Keyboard shortcuts using function keys.",
			},
		},
	},
}
