"use client"

import * as React from "react"
import { CheckIcon, CaretUpDownIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer"
import { Spinner } from "~/components/ui/spinner"
import { useIsMobile } from "~/hooks/use-mobile"
import { Separator } from "~/components/ui/separator"

export interface DataComboboxOption {
	label: string
	value: string
	disabled?: boolean
	group?: string
}

export interface DataComboboxProps {
	// Data
	data: DataComboboxOption[]

	// Value control
	value?: string
	defaultValue?: string
	defaultValueOption?: DataComboboxOption
	onValueChange?: (value: string, option: DataComboboxOption | null) => void

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
	renderItem?: (option: DataComboboxOption, isSelected: boolean) => React.ReactNode
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

export function DataCombobox({
	data,
	value: controlledValue,
	defaultValue,
	defaultValueOption,
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
	side = "bottom",
	align = "start",
	className,
	contentClassName,
	name,
	id,
}: DataComboboxProps) {
	const triggerRef = React.useRef<HTMLButtonElement>(null)

	// Open state management
	const [open, setOpen] = React.useState(false)

	// Value state management
	const [uncontrolledValue, setUncontrolledValue] = React.useState(
		defaultValue || defaultValueOption?.value || "",
	)
	const [cachedOption, setCachedOption] = React.useState<DataComboboxOption | null>(
		defaultValueOption || null,
	)
	const isControlledValue = controlledValue !== undefined
	const value = isControlledValue ? controlledValue : uncontrolledValue

	// Search state management
	const [inputValue, setInputValue] = React.useState(searchValue || "")

	// Mobile detection
	const isMobile = useIsMobile()
	const useDrawer = enableResponsive && isMobile

	// Sync inputValue with controlled searchValue prop
	React.useEffect(() => {
		if (searchValue !== undefined) {
			setInputValue(searchValue)
		}
	}, [searchValue])

	// Update cached option if value is provided and found in data
	React.useEffect(() => {
		if (value) {
			const foundOption = data.find((item) => item.value === value)
			if (foundOption) {
				setCachedOption(foundOption)
			}
		}
	}, [value, data])

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
		const groups: Record<string, DataComboboxOption[]> = {}
		const ungrouped: DataComboboxOption[] = []

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

	// Selected option for display
	const selectedOption = React.useMemo(() => {
		const found = data.find((item) => item.value === value)
		return found || (value && cachedOption?.value === value ? cachedOption : null)
	}, [data, value, cachedOption])

	// Handle value selection
	const handleSelect = React.useCallback(
		(newValue: string) => {
			const option = data.find((item) => item.value === newValue) || null

			if (!isControlledValue) {
				setUncontrolledValue(newValue)
			}
			if (option) {
				setCachedOption(option)
			}
			onValueChange?.(newValue, option)

			// Clear search on selection (only if uncontrolled)
			if (searchValue === undefined) {
				setInputValue("")
			}
			onSearch?.("")

			// Close dropdown on selection
			setOpen(false)
		},
		[data, isControlledValue, searchValue, onValueChange, onSearch],
	)

	// Handle clear
	const handleClear = React.useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation()
			e.preventDefault()

			if (!isControlledValue) {
				setUncontrolledValue("")
			}
			setCachedOption(null)
			onValueChange?.("", null)
		},
		[isControlledValue, onValueChange],
	)

	// Infinite scroll observer
	const observer = React.useRef<IntersectionObserver | null>(null)

	const lastElementRef = React.useCallback(
		(node: HTMLDivElement | null) => {
			if (loading) return
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver(
				(entries) => {
					if (entries?.length && entries[0]?.isIntersecting && hasMore) {
						onLoadMore?.()
					}
				},
				{ threshold: 0, rootMargin: "10px" },
			)

			if (node) observer.current.observe(node)
		},
		[loading, hasMore, onLoadMore],
	)

	// Render a single item
	const renderSingleItem = (item: DataComboboxOption) => (
		<ComboboxPrimitive.Item
			key={item.value}
			value={item.value}
			disabled={item.disabled}
			className={cn(
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground gap-2 rounded-md py-1 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				renderItem ? "px-2" : "pr-8 pl-1.5",
			)}
		>
			{renderItem ? (
				renderItem(item, value === item.value)
			) : (
				<>
					<CheckIcon className={cn("size-4", value === item.value ? "opacity-100" : "opacity-0")} />
					{item.label}
				</>
			)}
		</ComboboxPrimitive.Item>
	)

	// Render options list
	const renderOptions = () => (
		<>
			{groupedData.ungrouped.map(renderSingleItem)}
			{Object.entries(groupedData.groups).map(([group, items]) => (
				<ComboboxPrimitive.Group key={group}>
					<ComboboxPrimitive.GroupLabel className="text-muted-foreground px-2 py-1.5 text-xs">
						{group}
					</ComboboxPrimitive.GroupLabel>
					{items.map(renderSingleItem)}
				</ComboboxPrimitive.Group>
			))}
		</>
	)

	// Combobox list content (shared between Popover and Drawer)
	const listContent = (
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

			{renderOptions()}

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
	)

	// Trigger button content
	const triggerButton = (
		<Button
			ref={triggerRef}
			variant="outline"
			role="combobox"
			aria-expanded={open}
			className={cn("w-full justify-between", className)}
			disabled={disabled}
			name={name}
			id={id}
			type="button"
		>
			<span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
			<div className="flex items-center ml-2 shrink-0 opacity-50">
				{clearable && value && (
					// biome-ignore lint/a11y/useSemanticElements: we need to use a div here because the combobox is a native element
				    <div
						role="button"
						tabIndex={0}
						onClick={handleClear}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								handleClear(e as unknown as React.MouseEvent)
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
	)

	// Render with Drawer on mobile when enableResponsive is true
	if (useDrawer) {
		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
				<DrawerContent>
					<div className="mt-4 border-t p-4">
						<ComboboxPrimitive.Root
							open
							onOpenChange={() => {}}
							value={value || null}
							onValueChange={(newValue) => {
								handleSelect(newValue || "")
							}}
						>
							<div className="flex items-center gap-2 px-3 py-2">
								<MagnifyingGlassIcon className="size-4 shrink-0 opacity-50" />
								<input
									type="text"
									placeholder={searchPlaceholder}
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
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
			onOpenChange={setOpen}
			value={value || null}
			onValueChange={(newValue) => {
				handleSelect(newValue || "")
			}}
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
								onChange={(e) => setInputValue(e.target.value)}
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
