import { Button } from "@kaotypr/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@kaotypr/ui/card"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

interface DemoContainerCardProps {
	title: string
	description: string
	content: React.ReactNode
	footer?: React.ReactNode
}

const DemoContainerCard = ({ title, description, content, footer }: DemoContainerCardProps) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	return (
		<Card className={`w-md my-4 block relative${isDarkMode ? " dark" : ""}`}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="p-2">{content}</CardContent>
			{footer && <CardFooter>{footer}</CardFooter>}
			<Button
				size="icon-sm"
				variant="secondary"
				className="absolute top-2 right-2"
				onClick={() => setIsDarkMode(!isDarkMode)}
			>
				{isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
			</Button>
		</Card>
	)
}

export default DemoContainerCard
