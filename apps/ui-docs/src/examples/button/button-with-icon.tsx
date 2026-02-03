"use client"

import { Button } from "@kaotypr/ui/button"
import { GitBranchIcon, GitForkIcon } from "@phosphor-icons/react"

export default function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <GitBranchIcon data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitForkIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
