"use client"

import { Alert, AlertDescription, AlertTitle } from "@kaotypr/ui/alert"
import { CheckCircleIcon } from "@phosphor-icons/react"

export default function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircleIcon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected immediately.
      </AlertDescription>
    </Alert>
  )
}
