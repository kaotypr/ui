"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "~/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Spinner } from "~/components/ui/spinner"
import { useIsMobile } from "~/hooks/use-mobile"

export interface MultiComboboxOption {
  label: string
  value: string
  disabled?: boolean
  group?: string
}

export interface MultiComboboxProps {
  // Data
  data: MultiComboboxOption[]

  // Value control
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void

  // Search
  searchValue?: string
  onSearch?: (search: string) => void
  debounceTime?: number
  placeholder?: string
  searchPlaceholder?: string

  // Display features
  maxDisplayedItems?: number
  defaultExpanded?: boolean
  
  // Features
  clearable?: boolean
  disabled?: boolean
  loading?: boolean
  enableResponsive?: boolean

  // Infinite scroll
  onLoadMore?: () => void
  hasMore?: boolean

  // Custom rendering
  renderItem?: (option: MultiComboboxOption, isSelected: boolean) => React.ReactNode
  emptyMessage?: React.ReactNode
  loadingContent?: React.ReactNode

  // Styling
  className?: string
  contentClassName?: string
}

export function MultiCombobox({
  data,
  value: controlledValue,
  defaultValue,
  onValueChange,
  searchValue,
  onSearch,
  debounceTime = 0,
  placeholder = "Select options...",
  searchPlaceholder = "Search...",
  maxDisplayedItems = 3,
  defaultExpanded = false,
  clearable = false,
  disabled = false,
  loading = false,
  enableResponsive = false,
  onLoadMore,
  hasMore = false,
  renderItem,
  emptyMessage = "No results found.",
  loadingContent,
  className,
  contentClassName,
}: MultiComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(defaultValue || [])
  const [inputValue, setInputValue] = React.useState(searchValue || "")
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  
  const isMobile = useIsMobile()
  const isDesktop = !isMobile

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

  // Update input value if searchValue prop changes
  React.useEffect(() => {
    if (searchValue !== undefined) {
      setInputValue(searchValue)
    }
  }, [searchValue])

  const handleValueChange = (newValue: string[]) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue)
    }
    onValueChange?.(newValue)
  }

  const handleSelect = (itemValue: string) => {
    const newValue = value.includes(itemValue)
      ? value.filter((v) => v !== itemValue)
      : [...value, itemValue]
    
    handleValueChange(newValue)
    // Keep open for multi-select
  }

  const handleRemove = (e: React.MouseEvent, itemValue: string) => {
    e.stopPropagation()
    const newValue = value.filter((v) => v !== itemValue)
    handleValueChange(newValue)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleValueChange([])
  }

  const handleExpandToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setExpanded(!expanded)
  }

  // Debounce search
  React.useEffect(() => {
    const timer = setTimeout(() => {
        if (inputValue !== (searchValue || "")) {
             onSearch?.(inputValue)
        }
    }, debounceTime)

    return () => clearTimeout(timer)
  }, [inputValue, debounceTime, onSearch, searchValue])

  // Group data
  const groupedData = React.useMemo(() => {
    const groups: Record<string, MultiComboboxOption[]> = {}
    const ungrouped: MultiComboboxOption[] = []

    data.forEach((item) => {
        if (item.group) {
        if (!groups[item.group]) {
          groups[item.group] = []
        }
        groups[item.group]!.push(item)
      } else {
        ungrouped.push(item)
      }
    })

    return { groups, ungrouped }
  }, [data])

  // Infinite scroll observer
  const observer = React.useRef<IntersectionObserver | null>(null)
  
  const lastElementRef = React.useCallback((node: HTMLDivElement | null) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting && hasMore) {
        onLoadMore?.()
      }
    }, { threshold: 0, rootMargin: '10px' })
    
    if (node) observer.current.observe(node)
  }, [loading, hasMore, onLoadMore])


  const renderOptions = () => {
      // Helper to render a single item
      const renderSingleItem = (item: MultiComboboxOption) => {
        const isSelected = value.includes(item.value)
        return (
          <CommandItem
              key={item.value}
              value={item.value}
              keywords={[item.label]}
              disabled={item.disabled}
              onSelect={() => handleSelect(item.value)}
          >
              {renderItem ? (
                  renderItem(item, isSelected)
              ) : (
                  <>
                      <div className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                      )}>
                        <Check className={cn("h-4 w-4")} />
                      </div>
                      {item.label}
                  </>
              )}
          </CommandItem>
        )
      }

      return (
          <>
            {groupedData.ungrouped.map(renderSingleItem)}
            {Object.entries(groupedData.groups).map(([group, items]) => (
                <CommandGroup key={group} heading={group}>
                    {items.map(renderSingleItem)}
                </CommandGroup>
            ))}
          </>
      )
  }

  const ComboboxContent = (
      <Command shouldFilter={!onSearch}>
          <CommandInput 
            placeholder={searchPlaceholder} 
            value={inputValue}
            onValueChange={setInputValue}
          />
          <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              {loading && !data.length && (
                  <div className="py-6 text-center text-sm">
                      {loadingContent || <Spinner className="mx-auto" />}
                  </div>
              )}
              
              {renderOptions()}

              {hasMore && (
                  <div ref={lastElementRef} className="py-2 text-center text-sm text-muted-foreground">
                      {loading ? (loadingContent || <Spinner className="mx-auto size-4" />) : "Load more"}
                  </div>
              )}
          </CommandList>
      </Command>
  )

  const selectedItems = value.map(v => data.find(item => item.value === v)).filter(Boolean) as MultiComboboxOption[]
  
  // Handle case where some selected values might not be in data (e.g. async loading)
  // For now we only show badges for items present in data, or maybe we should keep them if we have label?
  // Usually uncontrolled component with value expects value to be present in data or data to be comprehensive.
  // If value is present but not in data, we can't show label. 
  // Assuming data contains all necessary options or at least selected ones.
  // Ideally for async, we might need a way to look up labels for values not currently in 'data' window.
  // But strictly following spec: "The MultiCombobox component SHALL accept a data prop... for rendering selectable items".
  // Display selected values as badges... showing the item's label.
  
  const renderTriggerContent = () => {
    if (selectedItems.length === 0) {
      return <span className="text-muted-foreground">{placeholder}</span>
    }

    const visibleItems = expanded ? selectedItems : selectedItems.slice(0, maxDisplayedItems)
    const hiddenCount = selectedItems.length - maxDisplayedItems
    const showMoreBadge = !expanded && hiddenCount > 0

    return (
      <div className="flex flex-wrap gap-1">
        {visibleItems.map((item) => (
          <Badge key={item.value} variant="secondary" className="mr-1 mb-1">
            {item.label}
            {/** biome-ignore lint/a11y/useSemanticElements: false positive */}
            <div
              role="button"
              tabIndex={0}
              className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRemove(e as unknown as React.MouseEvent, item.value)
                }
              }}
              onClick={(e) => handleRemove(e, item.value)}
            >
              <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
            </div>
          </Badge>
        ))}
        {showMoreBadge && (
          <Badge 
            variant="outline" 
            className="mb-1 cursor-pointer hover:bg-accent"
            onClick={handleExpandToggle}
          >
            +{hiddenCount} more
          </Badge>
        )}
        {expanded && selectedItems.length > maxDisplayedItems && (
           <Badge 
            variant="outline" 
            className="mb-1 cursor-pointer hover:bg-accent"
            onClick={handleExpandToggle}
          >
            Show less
          </Badge>
        )}
      </div>
    )
  }

  const triggerContent = (
     <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className={cn("w-full justify-between h-auto min-h-10 py-2", className)}
        disabled={disabled}
      >
        <div className="flex flex-wrap items-center gap-1 w-full">
            {renderTriggerContent()}
        </div>
        <div className="flex items-center ml-2 shrink-0 opacity-50">
             {clearable && value.length > 0 && (
                <div
                    role="button"
                    tabIndex={0}
                    onClick={handleClear}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleClear(e as unknown as React.MouseEvent);
                        }
                    }}
                    className="mr-2 hover:opacity-100 cursor-pointer p-0.5 rounded-sm hover:bg-accent"
                >
                    <X className="h-4 w-4" />
                </div>
            )}
            <ChevronsUpDown className="h-4 w-4" />
        </div>
      </Button>
  )

  if (enableResponsive && !isDesktop) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
            {triggerContent}
        </DrawerTrigger>
        <DrawerContent>
          <div className="mt-4 border-t">
            {ComboboxContent}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {triggerContent}
      </PopoverTrigger>
      <PopoverContent className={cn("w-full p-0", contentClassName)} align="start">
        {ComboboxContent}
      </PopoverContent>
    </Popover>
  )
}
