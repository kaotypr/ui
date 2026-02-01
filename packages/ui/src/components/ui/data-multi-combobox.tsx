"use client"

import * as React from "react"
import { CheckIcon, CaretUpDownIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer"
import { Spinner } from "~/components/ui/spinner"
import { useIsMobile } from "~/hooks/use-mobile"
import { Separator } from "~/components/ui/separator"

export interface DataMultiComboboxOption {
	label: string
	value: string
	disabled?: boolean
	group?: string
}

export interface DataMultiComboboxProps {
	// Data
	data: DataMultiComboboxOption[]

	// Value control
	value?: string[]
	defaultValue?: string[]
	defaultValueOptions?: DataMultiComboboxOption[]
	onValueChange?: (value: string[], options: DataMultiComboboxOption[]) => void

	// Search
	searchValue?: string
	onSearch?: (search: string) => void
	debounceTime?: number
	placeholder?: string
	searchPlaceholder?: string

	// Badge display
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
	renderItem?: (option: DataMultiComboboxOption, isSelected: boolean) => React.ReactNode
	emptyMessage?: React.ReactNode
	loadingContent?: React.ReactNode

	// Positioning
	side?: "top" | "bottom"
	align?: "start" | "center" | "end"

	// Styling
	className?: string
	contentClassName?: string

	// Accessibility
	name?: string
	id?: string
}

// Memoized item component to prevent unnecessary re-renders
interface ComboboxItemProps {
	item: DataMultiComboboxOption
	isSelected: boolean
	onToggle: (value: string) => void
	renderItem?: (option: DataMultiComboboxOption, isSelected: boolean) => React.ReactNode
}

const ComboboxItem = React.memo(function ComboboxItem({
	item,
	isSelected,
	onToggle,
	renderItem,
}: ComboboxItemProps) {
	const handleClick = React.useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault()
			if (!item.disabled) {
				onToggle(item.value)
			}
		},
		[item.disabled, item.value, onToggle],
	)

	return (
		<ComboboxPrimitive.Item
			value={item.value}
			disabled={item.disabled}
			onClick={handleClick}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground gap-2 rounded-md py-1 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				renderItem ? "px-2" : "pr-8 pl-1.5",
			)}
		>
			{renderItem ? (
				renderItem(item, isSelected)
			) : (
				<>
					<div
						className={cn(
							"flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
							isSelected ? "bg-primary text-primary-foreground" : "opacity-50",
						)}
					>
						{isSelected && <CheckIcon className="h-3 w-3" />}
					</div>
					{item.label}
				</>
			)}
		</ComboboxPrimitive.Item>
	)
})

// Memoized badge component to prevent unnecessary re-renders
interface SelectionBadgeProps {
	option: DataMultiComboboxOption
	disabled: boolean
	onRemove: (value: string) => void
}

const SelectionBadge = React.memo(function SelectionBadge({
	option,
	disabled,
	onRemove,
}: SelectionBadgeProps) {
	const handleClick = React.useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			e.preventDefault()
			onRemove(option.value)
		},
		[option.value, onRemove],
	)

	const handlePointerDown = React.useCallback((e: React.PointerEvent) => {
		e.stopPropagation()
		e.preventDefault()
	}, [])

	const handleKeyDown = React.useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "Enter" || e.key === " ") {
				e.stopPropagation()
				e.preventDefault()
				onRemove(option.value)
			}
		},
		[option.value, onRemove],
	)

	return (
		<Badge variant="secondary" className="shrink-0 gap-1 pr-1">
			<span className="truncate max-w-[100px]">{option.label}</span>
			{!disabled && (
				<div
					role="button"
					tabIndex={0}
					onClick={handleClick}
					onPointerDown={handlePointerDown}
					onKeyDown={handleKeyDown}
					className="hover:bg-muted-foreground/20 rounded-sm cursor-pointer"
				>
					<XIcon className="h-3 w-3" />
				</div>
			)}
		</Badge>
	)
})

export function DataMultiCombobox({
	data,
	value: controlledValue,
	defaultValue,
	defaultValueOptions,
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
	side = "bottom",
	align = "start",
	className,
	contentClassName,
	name,
	id,
}: DataMultiComboboxProps) {
	const triggerRef = React.useRef<HTMLButtonElement>(null)

	// Open state management
	const [open, setOpen] = React.useState(false)

	// Handle open/close with reason filtering for multi-select behavior
	const handleOpenChange = React.useCallback((nextOpen: boolean, details: { reason: string }) => {
		// Always allow opening
		if (nextOpen) {
			setOpen(true)
			return
		}

		// Only close on explicit dismiss actions (escape, outside click, trigger click)
		// Don't close on item selection to keep popover open for multi-select
		if (
			details.reason === "escape-key" ||
			details.reason === "outside-press" ||
			details.reason === "trigger-press"
		) {
			setOpen(false)
		}
	}, [])

	// Value state management (array for multi-select)
	const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(
		defaultValue || defaultValueOptions?.map((o) => o.value) || [],
	)
	const [cachedOptions, setCachedOptions] = React.useState<Map<string, DataMultiComboboxOption>>(
		() => {
			const map = new Map<string, DataMultiComboboxOption>()
			defaultValueOptions?.forEach((opt) => {
				map.set(opt.value, opt)
			})
			return map
		},
	)
	const isControlledValue = controlledValue !== undefined
	const selectedValues = isControlledValue ? controlledValue : uncontrolledValue

	// Store selectedValues in a ref for stable access in callbacks
	const selectedValuesRef = React.useRef(selectedValues)
	selectedValuesRef.current = selectedValues

	// Store data in a ref for stable access in callbacks
	const dataRef = React.useRef(data)
	dataRef.current = data

	// Store cachedOptions in a ref for stable access in callbacks
	const cachedOptionsRef = React.useRef(cachedOptions)
	cachedOptionsRef.current = cachedOptions

	// Create a Set for O(1) selection lookups
	const selectedValuesSet = React.useMemo(() => new Set(selectedValues), [selectedValues])

	// Search state management
	const [inputValue, setInputValue] = React.useState(searchValue || "")

	// Badge expansion state
	const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

	// Mobile detection
	const isMobile = useIsMobile()
	const useDrawer = enableResponsive && isMobile

	// Sync inputValue with controlled searchValue prop
	React.useEffect(() => {
		if (searchValue !== undefined) {
			setInputValue(searchValue)
		}
	}, [searchValue])

	// Update cached options when values are found in data
	// Using functional update to avoid cachedOptions in dependencies
	React.useEffect(() => {
		if (selectedValues.length > 0) {
			setCachedOptions((prevCache) => {
				const newCache = new Map(prevCache)
				let hasUpdates = false
				for (const val of selectedValues) {
					const foundOption = data.find((item) => item.value === val)
					if (foundOption && !newCache.has(val)) {
						newCache.set(val, foundOption)
						hasUpdates = true
					}
				}
				return hasUpdates ? newCache : prevCache
			})
		}
	}, [selectedValues, data])

	// Debounced search - calls onSearch after debounceTime
	React.useEffect(() => {
		const timer = setTimeout(() => {
			if (inputValue !== (searchValue || "")) {
				onSearch?.(inputValue)
			}
		}, debounceTime)

		return () => clearTimeout(timer)
	}, [inputValue, debounceTime, onSearch, searchValue])

	// Filter data internally when onSearch is not provided
	const filteredData = React.useMemo(() => {
		if (onSearch) {
			// External search handling, return data as-is
			return data
		}

		if (!inputValue) {
			return data
		}

		const lowerSearch = inputValue.toLowerCase()
		return data.filter((item) => item.label.toLowerCase().includes(lowerSearch))
	}, [data, inputValue, onSearch])

	// Group data
	const groupedData = React.useMemo(() => {
		const groups: Record<string, DataMultiComboboxOption[]> = {}
		const ungrouped: DataMultiComboboxOption[] = []

		filteredData.forEach((item) => {
			if (item.group) {
				if (!groups[item.group]) {
					groups[item.group] = []
				}
				groups[item.group]?.push(item)
			} else {
				ungrouped.push(item)
			}
		})

		return { groups, ungrouped }
	}, [filteredData])

	// Selected options for display
	const selectedOptions = React.useMemo(() => {
		return selectedValues.map((val) => {
			const found = data.find((item) => item.value === val)
			return found || cachedOptions.get(val) || { label: val, value: val }
		})
	}, [data, selectedValues, cachedOptions])

	// Stable toggle handler using refs to avoid recreation on data/value changes
	const handleToggle = React.useCallback(
		(toggleValue: string) => {
			const currentData = dataRef.current
			const currentSelectedValues = selectedValuesRef.current
			const currentCachedOptions = cachedOptionsRef.current

			const option = currentData.find((item) => item.value === toggleValue)
			const isSelected = currentSelectedValues.includes(toggleValue)

			let newValues: string[]
			if (isSelected) {
				// Remove from selection
				newValues = currentSelectedValues.filter((v) => v !== toggleValue)
			} else {
				// Add to selection
				newValues = [...currentSelectedValues, toggleValue]
			}

			if (!isControlledValue) {
				setUncontrolledValue(newValues)
			}

			// Update cache using functional update
			if (option) {
				setCachedOptions((prev) => {
					if (prev.has(toggleValue)) return prev
					return new Map(prev).set(toggleValue, option)
				})
			}

			// Get all selected options for callback
			const newOptions = newValues.map((val) => {
				const found = currentData.find((item) => item.value === val)
				return found || currentCachedOptions.get(val) || { label: val, value: val }
			})

			onValueChange?.(newValues, newOptions)

			// Keep dropdown open for multi-select (don't close)
		},
		[isControlledValue, onValueChange],
	)

	// Stable remove handler using refs
	const handleRemoveItem = React.useCallback(
		(removeValue: string) => {
			const currentData = dataRef.current
			const currentSelectedValues = selectedValuesRef.current
			const currentCachedOptions = cachedOptionsRef.current

			const newValues = currentSelectedValues.filter((v) => v !== removeValue)

			if (!isControlledValue) {
				setUncontrolledValue(newValues)
			}

			const newOptions = newValues.map((val) => {
				const found = currentData.find((item) => item.value === val)
				return found || currentCachedOptions.get(val) || { label: val, value: val }
			})

			onValueChange?.(newValues, newOptions)
		},
		[isControlledValue, onValueChange],
	)

	// Handle clear all
	const handleClearAll = React.useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			e.preventDefault()

			if (!isControlledValue) {
				setUncontrolledValue([])
			}
			onValueChange?.([], [])
		},
		[isControlledValue, onValueChange],
	)

	// Toggle expansion of badges
	const handleToggleExpand = React.useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
		e.stopPropagation()
		e.preventDefault()
		setIsExpanded((prev) => !prev)
	}, [])

	// Infinite scroll observer
	const observer = React.useRef<IntersectionObserver | null>(null)

	const lastElementRef = React.useCallback(
		(node: HTMLDivElement | null) => {
			if (loading) return
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver(
				(entries) => {
					if (entries[0]?.isIntersecting && hasMore) {
						onLoadMore?.()
					}
				},
				{ threshold: 0, rootMargin: "10px" },
			)

			if (node) observer.current.observe(node)
		},
		[loading, hasMore, onLoadMore],
	)

	// Memoized options list rendering
	const optionsList = React.useMemo(
		() => (
			<>
				{groupedData.ungrouped.map((item) => (
					<ComboboxItem
						key={item.value}
						item={item}
						isSelected={selectedValuesSet.has(item.value)}
						onToggle={handleToggle}
						renderItem={renderItem}
					/>
				))}
				{Object.entries(groupedData.groups).map(([group, items]) => (
					<ComboboxPrimitive.Group key={group}>
						<ComboboxPrimitive.GroupLabel className="text-muted-foreground px-2 py-1.5 text-xs">
							{group}
						</ComboboxPrimitive.GroupLabel>
						{items.map((item) => (
							<ComboboxItem
								key={item.value}
								item={item}
								isSelected={selectedValuesSet.has(item.value)}
								onToggle={handleToggle}
								renderItem={renderItem}
							/>
						))}
					</ComboboxPrimitive.Group>
				))}
			</>
		),
		[groupedData, selectedValuesSet, handleToggle, renderItem],
	)

	// Memoized list content (shared between Popover and Drawer)
	const listContent = React.useMemo(
		() => (
			<>
				{filteredData.length === 0 && !loading && (
					<div className="text-muted-foreground w-full justify-center py-2 text-center text-sm flex">
						{emptyMessage}
					</div>
				)}

				{loading && filteredData.length === 0 && (
					<div className="py-6 text-center text-sm">
						{loadingContent || <Spinner className="mx-auto" />}
					</div>
				)}

				{optionsList}

				{hasMore && (
					<div ref={lastElementRef} className="py-2 text-center text-sm text-muted-foreground">
						{loading ? loadingContent || <Spinner className="mx-auto size-4" /> : null}
					</div>
				)}

				{loading && filteredData.length > 0 && !hasMore && (
					<div className="py-2 text-center text-sm text-muted-foreground">
						{loadingContent || <Spinner className="mx-auto size-4" />}
					</div>
				)}
			</>
		),
		[
			filteredData.length,
			loading,
			emptyMessage,
			loadingContent,
			optionsList,
			hasMore,
			lastElementRef,
		],
	)

	// Memoized badges rendering
	const badgesContent = React.useMemo(() => {
		if (selectedOptions.length === 0) {
			return <span className="text-muted-foreground truncate">{placeholder}</span>
		}

		const displayedItems = isExpanded
			? selectedOptions
			: selectedOptions.slice(0, maxDisplayedItems)
		const remainingCount = selectedOptions.length - maxDisplayedItems
		const showExpandBadge = selectedOptions.length > maxDisplayedItems

		return (
			<div className="flex flex-wrap gap-1 items-center min-w-0 flex-1">
				{displayedItems.map((option) => (
					<SelectionBadge
						key={option.value}
						option={option}
						disabled={disabled}
						onRemove={handleRemoveItem}
					/>
				))}
				{showExpandBadge && (
					<Badge
						variant="outline"
						className="shrink-0 cursor-pointer hover:bg-accent"
						onClick={handleToggleExpand}
						onPointerDown={(e) => {
							e.stopPropagation()
							e.preventDefault()
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								handleToggleExpand(e)
							}
						}}
						tabIndex={0}
						role="button"
					>
						{isExpanded ? "Show less" : `+${remainingCount} more`}
					</Badge>
				)}
			</div>
		)
	}, [
		selectedOptions,
		placeholder,
		isExpanded,
		maxDisplayedItems,
		disabled,
		handleRemoveItem,
		handleToggleExpand,
	])

	// Memoized trigger button content
	const triggerButton = React.useMemo(
		() => (
			<Button
				ref={triggerRef}
				variant="outline"
				role="combobox"
				aria-expanded={open}
				className={cn(
					"w-full justify-between min-h-8 h-auto",
					isExpanded ? "py-1.5" : "py-0",
					className,
				)}
				disabled={disabled}
				name={name}
				id={id}
				render={<div />}
				nativeButton={false}
			>
				{badgesContent}
				<div className="flex items-center ml-2 shrink-0 opacity-50">
					{clearable && selectedValues.length > 0 && (
						<div
							role="button"
							tabIndex={0}
							onClick={handleClearAll}
							onPointerDown={(e) => {
								e.stopPropagation()
								e.preventDefault()
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleClearAll(e as unknown as React.MouseEvent)
								}
							}}
							className="mr-1 hover:opacity-100 cursor-pointer"
						>
							<XIcon className="h-4 w-4" />
						</div>
					)}
					<CaretUpDownIcon className="h-4 w-4" />
				</div>
			</Button>
		),
		[
			open,
			className,
			disabled,
			name,
			id,
			badgesContent,
			clearable,
			selectedValues.length,
			handleClearAll,
			isExpanded,
		],
	)

	// Memoized search input change handler
	const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}, [])

	// Stable noop handlers for ComboboxPrimitive.Root
	const noopOpenChange = React.useCallback(() => {}, [])
	const noopValueChange = React.useCallback(() => {}, [])

	// Render with Drawer on mobile when enableResponsive is true
	if (useDrawer) {
		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
				<DrawerContent>
					<div className="mt-4 border-t p-4">
						<ComboboxPrimitive.Root
							open
							onOpenChange={noopOpenChange}
							value={null}
							onValueChange={noopValueChange}
						>
							<div className="flex items-center gap-2 px-3 py-2">
								<MagnifyingGlassIcon className="size-4 shrink-0 opacity-50" />
								<input
									type="text"
									placeholder={searchPlaceholder}
									value={inputValue}
									onChange={handleInputChange}
									className="flex h-6 w-full bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								/>
							</div>
							<Separator className="bg-border/50" />
							<ComboboxPrimitive.List className="no-scrollbar max-h-72 scroll-py-1 overflow-y-auto p-1 overscroll-contain outline-none focus:outline-none">
								{listContent}
							</ComboboxPrimitive.List>
						</ComboboxPrimitive.Root>
					</div>
				</DrawerContent>
			</Drawer>
		)
	}

	// Render with Combobox Popup on desktop
	return (
		<ComboboxPrimitive.Root
			open={open}
			onOpenChange={handleOpenChange}
			value={null}
			onValueChange={noopValueChange}
		>
			<ComboboxPrimitive.Trigger render={triggerButton} disabled={disabled} />
			<ComboboxPrimitive.Portal>
				<ComboboxPrimitive.Positioner
					side={side}
					sideOffset={6}
					align={align}
					className="isolate z-50 outline-none"
				>
					<ComboboxPrimitive.Popup
						className={cn(
							"bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border border-border max-h-72 min-w-36 overflow-hidden rounded-lg shadow-md duration-100 group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) outline-none",
							contentClassName,
						)}
					>
						<div className="flex items-center gap-2 px-3 py-2">
							<MagnifyingGlassIcon className="size-4 shrink-0 opacity-50" />
							<input
								type="text"
								placeholder={searchPlaceholder}
								value={inputValue}
								onChange={handleInputChange}
								className="flex h-6 w-full bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
							/>
						</div>
						<Separator className="bg-border/50" />
						<ComboboxPrimitive.List className="no-scrollbar max-h-[min(calc(--spacing(72)---spacing(12)),calc(var(--available-height)---spacing(12)))] scroll-py-1 overflow-y-auto p-1 overscroll-contain outline-none focus:outline-none">
							{listContent}
						</ComboboxPrimitive.List>
					</ComboboxPrimitive.Popup>
				</ComboboxPrimitive.Positioner>
			</ComboboxPrimitive.Portal>
		</ComboboxPrimitive.Root>
	)
}
