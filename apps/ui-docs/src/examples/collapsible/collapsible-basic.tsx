import { Button } from "@kaotypr/ui/button"
import { Card, CardContent } from "@kaotypr/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kaotypr/ui/collapsible"

import { CaretDownIcon } from "@phosphor-icons/react"

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="data-open:bg-muted rounded-md">
          <CollapsibleTrigger render={<Button variant="ghost" className="w-full" />}>
            Product details
            <CaretDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>This panel can be expanded or collapsed to reveal additional content.</div>
            <Button size="xs">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
