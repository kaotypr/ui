"use client"

import { Button } from "@kaotypr/ui/button"

export default function ButtonRender() {
  return (
    <Button nativeButton={false} render={<a href="#" />}>
      Login
    </Button>
  )
}
