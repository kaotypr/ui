"use client"

import {
	type ColumnDef,
	type ColumnPinningState,
	type ColumnResizeMode,
	type PaginationState,
	type Row,
	type RowSelectionState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { EmptyIcon, SpinnerGapIcon } from "@phosphor-icons/react"
import * as React from "react"
import { cn } from "~/components/../lib/utils"
import { Checkbox } from "~/components/ui/checkbox"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "~/components/ui/pagination"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/components/ui/table"

export interface DataTablePaginationState extends PaginationState {
	pageSize: number
	pageIndex: number
}

export interface DataTableClassNames {
	/** Class name for the root container div */
	root?: string
	/** Class name for the table wrapper div */
	tableWrapper?: string
	/** Class name for the table element */
	table?: string
	/** Class name for the table header */
	header?: string
	/** Class name for the table header row */
	headerRow?: string
	/** Class name for the table header cell */
	headerCell?: string
	/** Class name for the table body */
	body?: string
	/** Class name for the table row */
	row?: string
	/** Class name for the table cell */
	cell?: string
	/** Class name for the pagination wrapper */
	pagination?: string
	/** Class name for the pagination buttons */
	paginationButton?: string
	/** Class name for the rows per page select */
	rowsPerPageSelect?: string
	/** Class name for the page info text */
	pageInfo?: string
	/** Class name for the no results message */
	noResults?: string
}

export interface DataTableProps<TData> {
	columns: ColumnDef<TData, unknown>[]
	data: TData[]
	enablePagination?: boolean
	pagination?: DataTablePaginationState
	onPaginationChange?: (pagination: DataTablePaginationState) => void
	enableRowSelection?: boolean
	onRowSelectionChange?: (selectedRows: TData[]) => void
	enableColumnResizing?: boolean
	columnResizeMode?: ColumnResizeMode
	columnPinning?: ColumnPinningState
	onRowClick?: (row: Row<TData>) => void
	onRowDoubleClick?: (row: Row<TData>) => void
	bordered?: boolean
	/** Class names for different parts of the table */
	classNames?: DataTableClassNames
	/** Custom text for page size label (default: "Rows per page") */
	pageSizeLabel?: string
	/** Show loading overlay on top of the table */
	loading?: boolean
	/** Show current page number (default: true) */
	showPage?: boolean
	/** Show header as sticky on top of the table */
	stickyHeader?: boolean
	/** Custom message or component to show when data is empty (default: "No results.") */
	emptyMessage?: React.ReactNode
}

export function DataTable<TData>({
	columns: userColumns,
	data,
	enablePagination = false,
	pagination = {
		pageSize: 10,
		pageIndex: 0,
	},
	onPaginationChange,
	enableRowSelection = false,
	onRowSelectionChange,
	enableColumnResizing = false,
	columnResizeMode = "onChange",
	columnPinning,
	onRowClick,
	onRowDoubleClick,
	bordered = false,
	classNames,
	pageSizeLabel = "Rows per page",
	loading = false,
	showPage = true,
	stickyHeader = true,
	emptyMessage,
}: DataTableProps<TData>) {
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

	// Notify parent component when row selection changes
	React.useEffect(() => {
		if (onRowSelectionChange && enableRowSelection) {
			const selectedRows = Object.keys(rowSelection).map((index) => data[Number(index)])
			onRowSelectionChange(selectedRows as TData[])
		}
	}, [rowSelection, data, onRowSelectionChange, enableRowSelection])

	// Add selection column if enableRowSelection is true
	const columns = React.useMemo(() => {
		if (!enableRowSelection) return userColumns

		return [
			{
				id: "select",
				size: 40, // Fixed width for checkbox column
				enablePinning: true, // Disable pinning for selection column
				header: ({ table }) => (
					<Checkbox
						checked={table.getIsAllPageRowsSelected()}
						onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
						aria-label="Select all"
					/>
				),
				cell: ({ row }) => (
					<Checkbox
						checked={row.getIsSelected()}
						onCheckedChange={(value) => row.toggleSelected(!!value)}
						aria-label="Select row"
					/>
				),
				enableSorting: false,
				enableHiding: false,
				enableResizing: false,
			},
			...userColumns,
		]
	}, [userColumns, enableRowSelection])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		manualPagination: true,
		pageCount: -1, // This indicates to the table that we're doing manual pagination
		state: {
			pagination: {
				pageIndex: pagination.pageIndex,
				pageSize: pagination.pageSize,
			},
			rowSelection,
			columnPinning: columnPinning ?? {
				left: [],
				right: [],
			},
		},
		onPaginationChange: (updater) => {
			if (typeof updater === "function" && onPaginationChange) {
				const newState = updater({
					pageIndex: pagination.pageIndex,
					pageSize: pagination.pageSize,
				})
				onPaginationChange({
					pageIndex: newState.pageIndex,
					pageSize: newState.pageSize,
				})
			}
		},
		enableRowSelection,
		onRowSelectionChange: setRowSelection,
		columnResizeMode,
		enableColumnResizing,
	})

	const leftPinnedColumns = table
		.getVisibleLeafColumns()
		.filter((col) => col.getIsPinned() === "left")
	const lastLeftPinnedColumnId = leftPinnedColumns.at(-1)?.id

	return (
		<div className={cn("space-y-4", classNames?.root)}>
			<div
				className={cn(
					"rounded-md border overflow-x-auto relative",
					stickyHeader && ['[&>[data-slot="table-container"]]:h-full overflow-auto relative'],
					classNames?.tableWrapper,
				)}
			>
				{loading && (
					<div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] z-50 flex items-center justify-center">
						<div className="flex flex-col items-center gap-2">
							<SpinnerGapIcon className="animate-spin text-primary" size={32} />
							<span className="text-sm font-medium">Loading...</span>
						</div>
					</div>
				)}
				<Table
					className={cn("table-fixed w-full border-spacing-0 border-separate", classNames?.table)}
				>
					<TableHeader className={cn(stickyHeader && "sticky top-0 z-21", classNames?.header)}>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className={cn("relative", classNames?.headerRow)}>
								{headerGroup.headers.map((header, index) => {
									const isPinned = header.column.getIsPinned()
									return (
										<TableHead
											key={header.id}
											style={{
												width: header.getSize(),
												position: isPinned ? "sticky" : "relative",
												...(isPinned && {
													position: "sticky",
													...(isPinned === "left"
														? { left: header.column.getStart() }
														: { right: header.column.getAfter() }),
													zIndex: 20,
												}),
											}}
											className={cn(
												"bg-secondary text-xs font-semibold text-secondary-foreground border-b",
												isPinned && [
													"z-20",
													"bg-secondary text-xs font-semibold text-secondary-foreground",
													isPinned === "left" && header.column.id === lastLeftPinnedColumnId
														? "border-r"
														: isPinned === "right" && header.column.getPinnedIndex() === 0
															? "border-l"
															: undefined,
												],
												bordered && index !== 0 && "border-l",
												classNames?.headerCell,
											)}
										>
											<div className="flex items-center gap-2">
												{header.isPlaceholder
													? null
													: flexRender(header.column.columnDef.header, header.getContext())}
											</div>
											{enableColumnResizing && header.column.getCanResize() && (
												// biome-ignore lint/a11y/noStaticElementInteractions: this is a resize handler
												<div
													onMouseDown={header.getResizeHandler()}
													onTouchStart={header.getResizeHandler()}
													className={cn(
														"absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none bg-primary-foreground/20",
													)}
												/>
											)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody className={classNames?.body}>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className={cn(
										"relative",
										(onRowClick || onRowDoubleClick) && "cursor-pointer hover:bg-muted/50",
										classNames?.row,
									)}
									onClick={() => onRowClick?.(row)}
									onDoubleClick={() => onRowDoubleClick?.(row)}
								>
									{row.getVisibleCells().map((cell, index) => {
										const isPinned = cell.column.getIsPinned()
										return (
											<TableCell
												key={cell.id}
												style={{
													width: cell.column.getSize(),
													position: isPinned ? "sticky" : "relative",
													...(isPinned && {
														position: "sticky",
														...(isPinned === "left"
															? { left: cell.column.getStart() }
															: { right: cell.column.getAfter() }),
														zIndex: 20,
													}),
												}}
												className={cn(
													isPinned && [
														"z-20",
														"bg-background/95 group-hover:bg-muted",
														isPinned === "left" && cell.column.id === lastLeftPinnedColumnId
															? "border-r"
															: cell.column.getPinnedIndex() === 0
																? "border-l"
																: undefined,
													],
													bordered && index !== 0 && "border-l",
													classNames?.cell,
												)}
											>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</TableCell>
										)
									})}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className={cn("h-24 text-center", classNames?.noResults)}
								>
									{emptyMessage ? (
										emptyMessage
									) : loading ? (
										<div className="flex flex-col items-center gap-2 py-4 min-h-[124px]"></div>
									) : (
										<div className="flex flex-col items-center gap-2 py-4">
											<EmptyIcon className="h-6 w-6 text-muted-foreground" />
											<p className="text-sm text-muted-foreground">No data available</p>
											<p className="text-xs text-muted-foreground/80">
												Once data is available, it will appear here.
											</p>
										</div>
									)}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{enablePagination && (
				<div className={cn("flex items-center justify-between px-2", classNames?.pagination)}>
					{/* Left side - Rows per page */}
					<div className={cn("flex items-center gap-2", classNames?.rowsPerPageSelect)}>
						<p className="text-sm font-medium">{pageSizeLabel}</p>
						<Select
							value={`${pagination.pageSize}`}
							onValueChange={(value) => {
								onPaginationChange?.({
									pageIndex: 0,
									pageSize: Number(value),
								})
							}}
						>
							<SelectTrigger className="h-8 w-[70px]">
								<SelectValue placeholder={pagination.pageSize} />
							</SelectTrigger>
							<SelectContent side="top">
								{[10, 20, 30, 40, 50].map((size) => (
									<SelectItem key={size} value={`${size}`}>
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Right side - Page number and navigation */}
					<div className="flex items-center gap-4">
						{showPage && (
							<span className={cn("text-sm whitespace-nowrap", classNames?.pageInfo)}>
								Page {pagination.pageIndex + 1}
							</span>
						)}
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious
										onClick={() =>
											onPaginationChange?.({
												...pagination,
												pageIndex: pagination.pageIndex - 1,
											})
										}
										aria-disabled={pagination.pageIndex === 0}
										className={cn(
											pagination.pageIndex === 0 && "pointer-events-none opacity-50",
											classNames?.paginationButton,
										)}
									/>
								</PaginationItem>
								<PaginationItem>
									<PaginationNext
										onClick={() =>
											onPaginationChange?.({
												...pagination,
												pageIndex: pagination.pageIndex + 1,
											})
										}
										aria-disabled={!table.getCanNextPage()}
										className={cn(
											!table.getCanNextPage() && "pointer-events-none opacity-50",
											classNames?.paginationButton,
										)}
									/>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</div>
			)}
		</div>
	)
}
