"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
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

export interface ComboboxOption {
  label: string
  value: string
  disabled?: boolean
  group?: string
}

export interface ComboboxProps {
  // Data
  data: ComboboxOption[]

  // Value control
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void

  // Search
  searchValue?: string
  onSearch?: (search: string) => void
  debounceTime?: number
  placeholder?: string
  searchPlaceholder?: string

  // Features
  clearable?: boolean
  disabled?: boolean
  loading?: boolean
  enableResponsive?: boolean

  // Infinite scroll
  onLoadMore?: () => void
  hasMore?: boolean

  // Custom rendering
  renderItem?: (option: ComboboxOption, isSelected: boolean) => React.ReactNode
  emptyMessage?: React.ReactNode
  loadingContent?: React.ReactNode

  // Styling
  className?: string
  contentClassName?: string
}

export function Combobox({
  data,
  value: controlledValue,
  defaultValue,
  onValueChange,
  searchValue,
  onSearch,
  debounceTime = 0,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
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
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue || "")
  const [inputValue, setInputValue] = React.useState(searchValue || "")
  const isMobile = useIsMobile()
  const isDesktop = !isMobile

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

  // Update input value if searchValue prop changes
  React.useEffect(() => {
    if (searchValue !== undefined) {
      setInputValue(searchValue)
    }
  }, [searchValue])

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue)
    }
    onValueChange?.(newValue)
  }

  const handleSelect = (currentValue: string) => {
    // If selecting the same value, do nothing or deselect?
    // Standard combobox behavior usually allows re-selection or just closes.
    // If clearable and clicking same value, maybe clear?
    // For now, let's just set the value.
    const newValue = currentValue === value && clearable ? "" : currentValue
    handleValueChange(newValue)
    setOpen(false)
    if (searchValue === undefined) {
        setInputValue("")
    }
    onSearch?.("")
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleValueChange("")
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

  const selectedOption = data.find((item) => item.value === value)

  // Group data
  const groupedData = React.useMemo(() => {
    const groups: Record<string, ComboboxOption[]> = {}
    const ungrouped: ComboboxOption[] = []

    data.forEach((item) => {
      if (item.group) {
        if (!groups[item.group]) {
          groups[item.group] = []
        }
        groups[item.group].push(item)
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
      if (entries[0].isIntersecting && hasMore) {
        onLoadMore?.()
      }
    }, { threshold: 0, rootMargin: '10px' })
    
    if (node) observer.current.observe(node)
  }, [loading, hasMore, onLoadMore])


  const renderOptions = () => {
      // Helper to render a single item
      const renderSingleItem = (item: ComboboxOption) => (
          <CommandItem
              key={item.value}
              value={item.value} // Use value for cmdk to track selection
              keywords={[item.label]} // Search by label
              disabled={item.disabled}
              onSelect={() => handleSelect(item.value)}
          >
              {renderItem ? (
                  renderItem(item, value === item.value)
              ) : (
                  <>
                      <Check
                          className={cn(
                              "mr-2 h-4 w-4",
                              value === item.value ? "opacity-100" : "opacity-0"
                          )}
                      />
                      {item.label}
                  </>
              )}
          </CommandItem>
      )

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

  const triggerContent = (
     <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className={cn("w-full justify-between", className)}
        disabled={disabled}
      >
        <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center ml-2 shrink-0 opacity-50">
             {clearable && value && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
// biome-ignore lint/a11y/useSemanticElements: <explanation>
<div
                    role="button"
                    tabIndex={0}
                    onClick={handleClear}
                    className="mr-1 hover:opacity-100 cursor-pointer"
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
