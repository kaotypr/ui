import { Alert, AlertDescription, AlertTitle } from "@kaotypr/ui/alert"
import { WarningCircleIcon } from "@phosphor-icons/react"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <WarningCircleIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </AlertDescription>
    </Alert>
  )
}
