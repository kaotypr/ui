"use client"

import { Button } from "@kaotypr/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@kaotypr/ui/empty"
import { ArrowUpRightIcon, FolderIcon } from "@phosphor-icons/react"

export function EmptyInCard() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button render={<a href="#" />} nativeButton={false}>
            Create project
          </Button>
          <Button variant="outline">Import project</Button>
        </div>
        <Button
          variant="link"
          render={<a href="#" />}
          className="text-muted-foreground"
          nativeButton={false}
        >
          Learn more <ArrowUpRightIcon />
        </Button>
      </EmptyContent>
    </Empty>
  )
}
