import './App.css'
import DemoContainerCard from './components/DemoContainerCard'
import { AccordionDemo } from './demos/AccordionDemo'
import { AlertDialogDemo } from './demos/AlertDialogDemo'

function App() {
  return (
    <main className="p-4 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Vite + Kaotypr UI</h1>
      <DemoContainerCard
        title="Accordion"
        description="An accordion is a vertically stacked set of panels, only one of which can be expanded at a time."
        content={<AccordionDemo />}
      />
      <DemoContainerCard
        title="Alert Dialog"
        description="A dialog is a modal that appears in front of other content to focus the user's attention on important information."
        content={<AlertDialogDemo />}
      />
    </main>
  )
}

export default App
